import React, { useState } from 'react';
import { Clock, ShieldCheck, Scale } from 'lucide-react';
import { UserStatus } from '../types';

export const FristenRechner: React.FC = () => {
  const [status, setStatus] = useState<UserStatus>('ungedient');
  const [bescheidDatum, setBescheidDatum] = useState('');
  const [unterlagenKomplett, setUnterlagenKomplett] = useState(true);

  // Juristisch exakte Fristberechnung nach § 57 VwGO i. V. m. § 222 ZPO & §§ 187, 188 BGB
  const calculateWiderspruchsFrist = () => {
    if (!bescheidDatum) return null;
    const parts = bescheidDatum.split('-').map(Number);
    if (parts.length !== 3) return null;
    const [year, month, day] = parts; // input date YYYY-MM-DD
    
    // Nach § 188 Abs. 2 BGB endet die Monatsfrist mit Ablauf des Tages im Folgemonat,
    // welcher dem Tag des Zugangs entspricht. Fehlt dieser Tag (z. B. 31. Jan -> Feb),
    // endet die Frist mit Ablauf des letzten Tages des Monats (§ 188 Abs. 3 BGB).
    const targetMonth = month === 12 ? 1 : month + 1;
    const targetYear = month === 12 ? year + 1 : year;
    const daysInTargetMonth = new Date(targetYear, targetMonth, 0).getDate();
    const finalDay = Math.min(day, daysInTargetMonth);
    
    const fristende = new Date(targetYear, targetMonth - 1, finalDay, 23, 59, 59);
    const now = new Date();
    const diffDays = Math.ceil((fristende.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));

    return {
      fristDatum: fristende.toLocaleDateString('de-DE'),
      tageVerbleibend: diffDays,
      isExpired: diffDays < 0,
      isToday: diffDays === 0
    };
  };

  const fristInfo = calculateWiderspruchsFrist();

  // Modellrechnung: Schätzung der Bearbeitungszeit
  const getEstimatedDuration = () => {
    let minMonths = 3;
    let maxMonths = 8;

    if (status === 'soldat_aktiv') {
      minMonths += 2; // Dienstweg + Stellungnahme des Vorgesetzten dauert länger
      maxMonths += 3;
    } else if (status === 'reservist') {
      minMonths += 1;
      maxMonths += 2;
    }

    if (!unterlagenKomplett) {
      minMonths += 2;
      maxMonths += 4;
    }

    return { minMonths, maxMonths };
  };

  const { minMonths, maxMonths } = getEstimatedDuration();

  return (
    <section id="fristen-rechner" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-black uppercase tracking-wider mb-3">
            Interaktiver Fristen- &amp; Dauer-Rechner
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Verfahrensdauer &amp; Widerspruchsfristen kalkulieren
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Ermitteln Sie die voraussichtliche Bearbeitungszeit beim Bundesamt (BAPersBw) sowie kritische Fristen nach dem Verwaltungsverfahrensrecht.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-9">
          
          {/* Eingabe-Bereich */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-8 border-b border-slate-200">
            
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                1. Ihr Wehr- &amp; Dienststatus
              </label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value as UserStatus)}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 font-semibold focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
              >
                <option value="ungedient">Ungedienter (Zivilist)</option>
                <option value="soldat_aktiv">Aktiver Soldat (SaZ / FWDL / BS)</option>
                <option value="reservist">Reservist (bereits gedient)</option>
                <option value="musterung">Musterung / Einberufungsbescheid liegt vor</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                2. Vollständigkeit bei Einreichung
              </label>
              <div className="flex items-center gap-3 mt-2">
                <button
                  type="button"
                  onClick={() => setUnterlagenKomplett(true)}
                  className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold border transition-all ${
                    unterlagenKomplett 
                      ? 'bg-amber-100 border-amber-400 text-amber-950 font-black' 
                      : 'bg-slate-50 border-slate-200 text-slate-600'
                  }`}
                >
                  Alle 3 Teile komplett (§ 2 KDVG)
                </button>
                <button
                  type="button"
                  onClick={() => setUnterlagenKomplett(false)}
                  className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold border transition-all ${
                    !unterlagenKomplett 
                      ? 'bg-amber-100 border-amber-400 text-amber-950 font-black' 
                      : 'bg-slate-50 border-slate-200 text-slate-600'
                  }`}
                >
                  Begründung wird nachgereicht
                </button>
              </div>
            </div>

            <div className="md:col-span-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                3. Optional: Datum des Zugangs eines ablehnenden Bescheids oder Einberufungsbescheids
              </label>
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <input
                  type="date"
                  value={bescheidDatum}
                  onChange={(e) => setBescheidDatum(e.target.value)}
                  className="w-full sm:w-auto px-4 py-2 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                <span className="text-xs text-slate-500">
                  (Zur exakten Berechnung der 1-monatigen Rechtsbehelfsfrist nach § 70 VwGO)
                </span>
              </div>
            </div>

          </div>

          {/* Rechenergebnisse */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
            
            {/* Box 1: Bearbeitungsdauer */}
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                  <Clock className="w-4 h-4 text-amber-600" />
                  <span>Geschätzte Bearbeitungszeit *</span>
                </div>
                <div className="text-3xl font-black text-slate-950 my-1">
                  ca. {minMonths} bis {maxMonths} Monate
                </div>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {status === 'soldat_aktiv' 
                    ? 'Inklusive Dienstweg, dienstlicher Stellungnahme des Disziplinarvorgesetzten und Vorlage beim BAPersBw Referat II 2.'
                    : 'Vom Eingang beim Karrierecenter bis zum schriftlichen Bescheid des Bundesamtes in Köln.'}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] text-emerald-800 font-bold flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Freistellung vom Waffendienst gilt ab Tag der Einreichung</span>
              </div>
            </div>

            {/* Box 2: Fristüberwachung */}
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                  <Scale className="w-4 h-4 text-amber-600" />
                  <span>Widerspruchsfrist (§ 70 VwGO)</span>
                </div>
                
                {fristInfo ? (
                  <div>
                    <div className={`text-2xl font-black ${fristInfo.isExpired ? 'text-red-600' : 'text-slate-950'}`}>
                      Fristende: {fristInfo.fristDatum}
                    </div>
                    <div className="mt-2 text-xs font-bold">
                      {fristInfo.isExpired ? (
                        <span className="text-red-700 bg-red-100 px-2 py-1 rounded">
                          ⚠️ Die 1-Monats-Frist ist bereits abgelaufen!
                        </span>
                      ) : fristInfo.isToday ? (
                        <span className="text-amber-950 bg-amber-200 px-2 py-1 rounded font-black">
                          ⚡ Achtung: Die Frist läuft HEUTE um 24:00 Uhr ab!
                        </span>
                      ) : (
                        <span className="text-emerald-800 bg-emerald-100 px-2 py-1 rounded">
                          Noch {fristInfo.tageVerbleibend} Tage verbleibend zur Einlegung
                        </span>
                      )}
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="text-xl font-bold text-slate-800">
                      1 Monat nach Bekanntgabe
                    </div>
                    <p className="text-xs text-slate-600 mt-1">
                      Tragen Sie oben das Zugangsdatum ein, um den exakten Stichtag zu berechnen.
                    </p>
                  </div>
                )}
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] text-slate-500">
                Ausschlussfrist: Verspätete Widersprüche sind unzulässig.
              </div>
            </div>

          </div>

          {/* Gesetzlich erforderlicher Modellrechnung-Hinweis gem. Richtlinien */}
          <div className="mt-8 p-4 rounded-xl bg-amber-50/70 border border-amber-200 text-xs text-slate-700 leading-relaxed">
            <strong className="text-slate-950 font-bold block mb-1">
              * Rechtlicher Hinweis zur Modellrechnung:
            </strong>
            Die tatsächliche Verfahrensdauer hängt von der individuellen Personallage und Auslastung des Bundesamtes für das Personalmanagement der Bundeswehr (BAPersBw) sowie von der Vollständigkeit und Glaubwürdigkeit der eingereichten Unterlagen ab. Diese Berechnung stellt eine unverbindliche Orientierung dar und begründet keine behördliche Terminzusage.
          </div>

        </div>

      </div>
    </section>
  );
};

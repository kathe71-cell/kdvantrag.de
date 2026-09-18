import React, { useState } from 'react';
import { Clock, ShieldCheck, Scale, AlertTriangle, Info, Calendar } from 'lucide-react';

export const FristenRechner: React.FC = () => {
  const [bescheidTyp, setBescheidTyp] = useState<string>('kdv_ablehnung');
  const [zugangsDatumStr, setZugangsDatumStr] = useState<string>('');
  const [hatRechtsbehelfsbelehrung, setHatRechtsbehelfsbelehrung] = useState<boolean>(true);
  const [zustellungsArt, setZustellungsArt] = useState<'postbrief_fiktion' | 'tatsaechlicher_zugang' | 'foermliche_zustellung'>('postbrief_fiktion');

  // Hilfsfunktion: Ist ein Datum ein Samstag, Sonntag oder bundesweiter Feiertag?
  const isWeekendOrHoliday = (date: Date): { isShifted: boolean; reason?: string } => {
    const day = date.getDay(); // 0 = Sonntag, 6 = Samstag
    if (day === 0) return { isShifted: true, reason: 'Sonntag (§ 31 Abs. 3 VwVfG / § 193 BGB)' };
    if (day === 6) return { isShifted: true, reason: 'Samstag (§ 31 Abs. 3 VwVfG / § 193 BGB)' };

    // Feststehende bundesweite Feiertage (Monat 0-indexiert)
    const m = date.getMonth();
    const d = date.getDate();
    
    if (m === 0 && d === 1) return { isShifted: true, reason: 'Neujahr (§ 31 Abs. 3 VwVfG)' };
    if (m === 4 && d === 1) return { isShifted: true, reason: 'Tag der Arbeit (§ 31 Abs. 3 VwVfG)' };
    if (m === 9 && d === 3) return { isShifted: true, reason: 'Tag der Deutschen Einheit (§ 31 Abs. 3 VwVfG)' };
    if (m === 11 && d === 25) return { isShifted: true, reason: '1. Weihnachtsfeiertag (§ 31 Abs. 3 VwVfG)' };
    if (m === 11 && d === 26) return { isShifted: true, reason: '2. Weihnachtsfeiertag (§ 31 Abs. 3 VwVfG)' };

    return { isShifted: false };
  };

  // Nächsten Werktag ermitteln (§ 31 Abs. 3 VwVfG / § 193 BGB)
  const getNextWorkday = (date: Date): { finalDate: Date; shiftedDays: number; reasons: string[] } => {
    const current = new Date(date);
    let shiftedDays = 0;
    const reasons: string[] = [];

    while (true) {
      const check = isWeekendOrHoliday(current);
      if (!check.isShifted) break;
      reasons.push(check.reason || 'Sonn-/Feiertag');
      current.setDate(current.getDate() + 1);
      shiftedDays++;
    }

    return { finalDate: current, shiftedDays, reasons };
  };

  // Exakte Monatsfristberechnung nach § 188 Abs. 2 BGB / § 31 VwVfG / § 41 Abs. 2 VwVfG
  const calculateFrist = () => {
    if (!zugangsDatumStr) return null;

    const parts = zugangsDatumStr.split('-');
    if (parts.length !== 3) return null;

    const year = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1; // 0-indexiert
    const day = parseInt(parts[2], 10);

    const baseDate = new Date(year, month, day);
    if (isNaN(baseDate.getTime())) return null;

    // Bekanntgabefiktion § 41 Abs. 2 VwVfG: 4 Tage ab Aufgabe zur Post bei einfachem Postbrief
    const bekanntgabeDate = new Date(baseDate);
    if (zustellungsArt === 'postbrief_fiktion') {
      bekanntgabeDate.setDate(bekanntgabeDate.getDate() + 4);
    }

    // Wenn keine Rechtsbehelfsbelehrung vorliegt: 1-Jahres-Frist § 58 Abs. 2 VwGO
    if (!hatRechtsbehelfsbelehrung) {
      const fristendeJahres = new Date(bekanntgabeDate);
      fristendeJahres.setFullYear(fristendeJahres.getFullYear() + 1);
      const shiftResult = getNextWorkday(fristendeJahres);

      return {
        bekanntgabeDatumStr: bekanntgabeDate.toLocaleDateString('de-DE'),
        fristTyp: '1-Jahres-Frist (§ 58 Abs. 2 VwGO wegen fehlender/unrichtiger Rechtsbehelfsbelehrung)',
        rawFristendeStr: fristendeJahres.toLocaleDateString('de-DE'),
        finalFristendeStr: shiftResult.finalDate.toLocaleDateString('de-DE'),
        shiftedReasons: shiftResult.reasons,
        isShifted: shiftResult.shiftedDays > 0,
        isMonthEndCapped: false,
        hinweis: 'Fehlt eine Rechtsbehelfsbelehrung oder ist sie fehlerhaft, verlängert sich die Frist zur Einlegung des Rechtsbehelfs auf ein Jahr seit Zustellung.'
      };
    }

    // Monatsfrist (§ 70 VwGO, § 188 Abs. 2 BGB, § 31 VwVfG):
    // Endet im Folgemonat an demselben Kalendertag wie der Tag der Bekanntgabe.
    // Falls der Folgemonat diesen Tag nicht hat (z. B. 31.01. -> Feb), gilt der letzte Tag dieses Monats.
    const startDay = bekanntgabeDate.getDate();
    const startMonth = bekanntgabeDate.getMonth();
    const startYear = bekanntgabeDate.getFullYear();

    const targetMonth = (startMonth + 1) % 12;
    const targetYear = startMonth === 11 ? startYear + 1 : startYear;

    // Ermittle die Anzahl der Tage im Zielmonat (z. B. Feb 28 oder 29 im Schaltjahr)
    const daysInTargetMonth = new Date(targetYear, targetMonth + 1, 0).getDate();

    // Kalendertag bestimmen (z. B. min(31, 28) = 28)
    const targetDay = Math.min(startDay, daysInTargetMonth);

    const rawFristende = new Date(targetYear, targetMonth, targetDay);

    // Werktagskorrektur § 31 Abs. 3 VwVfG / § 193 BGB
    const shiftResult = getNextWorkday(rawFristende);

    return {
      bekanntgabeDatumStr: bekanntgabeDate.toLocaleDateString('de-DE'),
      fristTyp: '1 Monatsfrist (§ 70 VwGO i. V. m. § 31 VwVfG & § 188 Abs. 2 BGB)',
      rawFristendeStr: rawFristende.toLocaleDateString('de-DE'),
      finalFristendeStr: shiftResult.finalDate.toLocaleDateString('de-DE'),
      shiftedReasons: shiftResult.reasons,
      isShifted: shiftResult.shiftedDays > 0,
      isMonthEndCapped: startDay > daysInTargetMonth,
      hinweis: 'Rechtlicher Hinweis: Eine Monatsfrist entspricht nicht pauschal 30 Tagen. Sie berechnet sich nach dem jeweiligen Kalendermonat.'
    };
  };

  const fristResult = calculateFrist();

  return (
    <section id="fristen-rechner" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider mb-3">
            Fristenberechnung nach VwGO &amp; VwVfG
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Rechtsbehelfsfristen kalkulieren
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Berechnen Sie die rechtliche Einlegungsfrist für Bescheide unter Berücksichtigung der 4-Tage-Postfiktion (§ 41 Abs. 2 VwVfG), Kalendermonaten (§ 188 BGB) und Werktagsverschiebungen (§ 193 BGB).
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-9">
          
          {/* Formular-Bereich */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-8 border-b border-slate-200">
            
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                1. Art des Bescheids
              </label>
              <select
                value={bescheidTyp}
                onChange={(e) => setBescheidTyp(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 font-semibold focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
              >
                <option value="kdv_ablehnung">KDV-Ablehnungsbescheid (BAFzA)</option>
                <option value="einberufung">Einberufungs- / Heranziehungsbescheid</option>
                <option value="musterung">Musterungsaufforderung / Vorladung</option>
                <option value="erfassung">Erfassungsbogen / Auskunft</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                2. Übermittlungs- &amp; Zustellungsart
              </label>
              <select
                value={zustellungsArt}
                onChange={(e) => setZustellungsArt(e.target.value as any)}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 font-semibold focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
              >
                <option value="postbrief_fiktion">Einfacher Postbrief (4-Tage-Fiktion § 41 Abs. 2 VwVfG ab Aufgabe)</option>
                <option value="tatsaechlicher_zugang">Tatsächlicher Zugang im Briefkasten (Nachweisbarer Eingang)</option>
                <option value="foermliche_zustellung">Förmliche Zustellung (Zustellungsurkunde / Empfangsbekenntnis)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                3. {zustellungsArt === 'postbrief_fiktion' ? 'Datum der Aufgabe zur Post (Poststempel)' : 'Datum des Zugangs / Zustellung'} *
              </label>
              <input
                type="date"
                value={zugangsDatumStr}
                onChange={(e) => setZugangsDatumStr(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <span className="text-[11px] text-slate-500 mt-1 block">
                {zustellungsArt === 'postbrief_fiktion' 
                  ? 'Gilt am 4. Tag nach der Aufgabe zur Post als bekannt gegeben (§ 41 Abs. 2 VwVfG)'
                  : 'Maßgebliches Datum für den Fristbeginn'}
              </span>
            </div>

            <div className="flex items-end">
              <label className="flex items-center gap-2.5 cursor-pointer p-3 rounded-xl bg-slate-50 border border-slate-200 hover:bg-slate-100 transition-colors w-full">
                <input
                  type="checkbox"
                  checked={hatRechtsbehelfsbelehrung}
                  onChange={(e) => setHatRechtsbehelfsbelehrung(e.target.checked)}
                  className="w-4 h-4 rounded text-amber-600 focus:ring-amber-500"
                />
                <span className="text-xs text-slate-800 font-medium">
                  Rechtsbehelfsbelehrung vorhanden &amp; ordnungsgemäß
                </span>
              </label>
            </div>

          </div>

          {/* Ergebnis-Bereich */}
          <div className="pt-8">
            {fristResult ? (
              <div className="space-y-6">
                
                <div className="p-6 rounded-2xl bg-amber-50/80 border border-amber-300">
                  <div className="flex items-center justify-between gap-2 text-xs font-bold uppercase tracking-wider text-amber-900 mb-2">
                    <span className="flex items-center gap-1.5">
                      <Scale className="w-4 h-4 text-amber-700" />
                      {fristResult.fristTyp}
                    </span>
                    <span className="text-[11px] bg-white px-2 py-0.5 rounded border border-amber-300 text-amber-950 font-bold">
                      Berechnet nach VwGO / BGB / VwVfG
                    </span>
                  </div>

                  <div className="text-3xl sm:text-4xl font-black text-slate-950 my-2">
                    Fristende: {fristResult.finalFristendeStr}
                  </div>

                  <div className="text-xs text-slate-600 mb-2 font-medium">
                    Fiktiver/Tatsächlicher Bekanntgabetag: <strong className="text-slate-900">{fristResult.bekanntgabeDatumStr}</strong>
                  </div>

                  {fristResult.isShifted && (
                    <div className="mt-2 text-xs text-amber-900 font-semibold flex items-start gap-1.5 bg-white/80 p-2.5 rounded-lg border border-amber-200">
                      <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                      <span>
                        Fristverschiebung gem. § 31 Abs. 3 VwVfG / § 193 BGB: Der kalendarische Ablauf ({fristResult.rawFristendeStr}) fiel auf einen {fristResult.shiftedReasons.join(', ')}. Das Fristende verschiebt sich auf den nächsten Werktag.
                      </span>
                    </div>
                  )}

                  {fristResult.isMonthEndCapped && (
                    <div className="mt-2 text-xs text-amber-900 font-semibold flex items-start gap-1.5 bg-white/80 p-2.5 rounded-lg border border-amber-200">
                      <Calendar className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                      <span>
                        Monatsend-Kappung (§ 188 Abs. 3 BGB): Da der Zielmonat den Kalendertag nicht aufweist, endet die Frist mit Ablauf des letzten Tages dieses Monats.
                      </span>
                    </div>
                  )}

                  <p className="text-xs text-slate-700 mt-3 pt-3 border-t border-amber-200/80 leading-relaxed">
                    {fristResult.hinweis}
                  </p>
                </div>

                {zustellungsArt === 'postbrief_fiktion' && (
                  <div className="p-4 rounded-xl bg-amber-50/90 border border-amber-200 text-xs text-slate-800 space-y-1.5">
                    <div className="font-bold text-slate-950 flex items-center gap-2">
                      <Info className="w-4 h-4 text-amber-700 shrink-0" />
                      <span>Beweislast &amp; Nichtzugang (§ 41 Abs. 2 Satz 3 VwVfG):</span>
                    </div>
                    <p className="leading-relaxed text-slate-700">
                      Die 4-Tage-Bekanntgabefiktion gilt <strong>nicht</strong>, wenn der Bescheid nicht oder erst zu einem späteren Zeitpunkt zugegangen ist. Im Zweifel hat die Behörde den Zugang des Bescheids und den genauen Zeitpunkt des Zugangs nachzuweisen.
                    </p>
                  </div>
                )}

                {bescheidTyp === 'einberufung' && (
                  <div className="p-4 rounded-xl bg-slate-100 border border-slate-300 text-xs text-slate-800 space-y-2">
                    <div className="font-bold text-slate-950 flex items-center gap-2 text-sm">
                      <AlertTriangle className="w-4 h-4 text-amber-700" />
                      <span>Besonderheit bei Einberufungsbescheiden:</span>
                    </div>
                    <p className="leading-relaxed">
                      Wichtig: Ein KDV-Antrag, der erst nach Erhalt eines Einberufungsbescheids gestellt wird, bewirkt <strong>keine automatische Aussetzung des Vollzugs</strong> (außer für geschützte Gruppen nach § 13 Abs. 3 i. V. m. Abs. 1 KDVG). Die Dienstantrittspflicht bleibt bestehen, solange nicht das Verwaltungsgericht auf Eilantrag einstweiligen Rechtsschutz (§ 80 Abs. 5 VwGO) gewährt.
                    </p>
                  </div>
                )}

              </div>
            ) : (
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-3">
                <Clock className="w-8 h-8 text-slate-400 mx-auto" />
                <h3 className="font-bold text-slate-900 text-base">
                  Wählen Sie ein Datum zur Fristberechnung aus
                </h3>
                <p className="text-xs text-slate-600 max-w-lg mx-auto leading-relaxed">
                  Tragen Sie oben das Zugangsdatum ein. Die Berechnung berücksichtigt kalendarische Monatslängen, Schalthahre sowie die gesetzliche Verschiebung auf Werktage nach § 31 Abs. 3 VwVfG / § 193 BGB.
                </p>
              </div>
            )}

            {/* Nachvollziehbare Behördenangaben zur Bearbeitungsdauer (BAFzA Quelle) */}
            <div className="mt-8 p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 text-xs text-slate-700">
              <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-600" />
                <span>Amtliche Informationen zur Verfahrensdauer (Quelle: BAFzA)</span>
              </div>
              <p className="leading-relaxed">
                Das Bundesamt für Familie und zivilgesellschaftliche Aufgaben (BAFzA) macht zur Verfahrensdauer pauschal keine Terminversprechen, da jeder KDV-Antrag eine individuelle Prüfung der Gewissensentscheidung erfordert. Die Bearbeitungszeit hängt wesentlich von der Vollständigkeit der eingereichten Unterlagen (Antrag, Lebenslauf, eigenständige Begründung) ab.
              </p>
              <div className="pt-2 border-t border-slate-200 text-[11px] text-slate-500">
                Quelle: Bundesamt für Familie und zivilgesellschaftliche Aufgaben (BAFzA) · Offizieller Abrufstand: 2026
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

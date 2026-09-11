import React, { useState } from 'react';
import { UserStatus } from '../types';
import { Building2, CheckCircle, AlertTriangle, FileCheck, ArrowRight, ShieldCheck } from 'lucide-react';

interface InteractiveFinderProps {
  onSelectMuster: () => void;
}

export const InteractiveFinder: React.FC<InteractiveFinderProps> = ({ onSelectMuster }) => {
  const [selectedStatus, setSelectedStatus] = useState<UserStatus>('ungedient');

  const statusConfigs: Record<UserStatus, {
    title: string;
    description: string;
    authorityName: string;
    authorityAddress: string;
    procedure: string;
    suspensiveEffect: string;
    criticalWarning: string;
    steps: string[];
  }> = {
    ungedient: {
      title: 'Ungediente Bürger & Wehrfähige',
      description: 'Personen, die bisher keinen Wehrdienst geleistet haben und weder aktiver Soldat noch beorderter Reservist sind.',
      authorityName: 'Karrierecenter der Bundeswehr (KarrC Bw)',
      authorityAddress: 'Das für Ihren Hauptwohnsitz örtlich zuständige Karrierecenter der Bundeswehr (Weiterleitung an BAPersBw Köln).',
      procedure: 'Der Antrag wird schriftlich per Post (Einschreiben empfohlen) beim örtlichen Karrierecenter eingereicht. Dieses leitet die Akte zur Entscheidung an das Bundesamt für das Personalmanagement der Bundeswehr weiter.',
      suspensiveEffect: 'Ein rechtzeitig vor einer eventuellen Heranziehung/Einberufung gestellter Antrag hemmt eine Dienstantrittsverpflichtung bis zum Abschluss des Verfahrens.',
      criticalWarning: 'Warten Sie im Ernstfall nicht bis zum Erhalt eines Einberufungsbescheids, sondern stellen Sie den Antrag frühzeitig, sobald Ihre Gewissensentscheidung feststeht.',
      steps: [
        'Formlosen schriftlichen Antrag erstellen',
        'Tabellarischen Lebenslauf mit Schwerpunkt auf ethischen Meilensteinen verfassen',
        'Ausführliche persönliche Gewissensbegründung (3-6 Seiten) ausarbeiten',
        'Alles im Original unterschreiben und per Einschreiben an das zuständige Karrierecenter senden'
      ]
    },
    soldat_aktiv: {
      title: 'Aktive Soldatinnen & Soldaten (SaZ, FWDL, BS)',
      description: 'Aktuell im Dienst stehende Zeitsoldaten, freiwillig Wehrdienstleistende oder Berufssoldaten mit eingetretenem Gewissenskonflikt.',
      authorityName: 'Disziplinarvorgesetzter (Einheitsführer) → BAPersBw Köln',
      authorityAddress: 'Abgabe auf dem Dienstweg über die Kompanieführung / den nächsten Disziplinarvorgesetzten.',
      procedure: 'Der Antrag muss zwingend auf dem Dienstweg schriftlich beim nächsten Disziplinarvorgesetzten eingereicht werden. Dieser verfasst eine Dienstliche Stellungnahme und leitet das Dossier an das BAPersBw Referat II 2 weiter.',
      suspensiveEffect: 'Wichtig: Gemäß § 22 Abs. 4 KDVG darf der Soldat ab Einreichung des Antrags bis zur Entscheidung vorläufig nicht mehr an der Waffe ausgebildet oder zu Einsätzen herangezogen werden!',
      criticalWarning: 'Rückforderung von Ausbildungskosten: Bei Offizieren/Zeitsoldaten mit Bundeswehr-Studium oder Spezialausbildung kann die Entlassung Schadensersatzforderungen nach sich ziehen.',
      steps: [
        'Schriftlichen Antrag beim Disziplinarvorgesetzten mit Empfangsbestätigung einreichen',
        'Sofortige Freistellung vom Waffendienst nach § 22 Abs. 4 KDVG verlangen',
        'Dienstliche Anhörung und Stellungnahme des Vorgesetzten begleiten',
        'Rechtsberatung durch wehrrechtlich spezialisierten Fachanwalt oder Soldatenberatung (EAK) in Erwägung ziehen *'
      ]
    },
    reservist: {
      title: 'Reservistinnen & Reservisten (Ehemalige Soldaten)',
      description: 'Frühere Wehrdienstleistende oder Zeitsoldaten, die der gesetzlichen Wehrüberwachung unterliegen oder Heranziehung befürchten.',
      authorityName: 'Zuständiges Karrierecenter der Bundeswehr (KarrC Bw)',
      authorityAddress: 'Karrierecenter der Bundeswehr Ihres Wohnorts (Abt. Reservistenangelegenheiten).',
      procedure: 'Ehemalige Soldaten richten ihren KDV-Antrag an das Karrierecenter ihres Wohnbezirks. Da Sie früher freiwillig oder pflichtgemäß Dienst an der Waffe getan haben, prüft das Bundesamt die Ursachen des Sinneswandels besonders penibel.',
      suspensiveEffect: 'Bei laufender Einplanung zu Reserveübungen entfaltet der KDV-Antrag Schutzwirkung gegen Dienstverpflichtungen.',
      criticalWarning: 'Der Sinneswandel muss im Detail begründet werden: Welches Ereignis nach dem Dienstende hat dazu geführt, dass Sie den Dienst an der Waffe nunmehr unumkehrbar verwerfen?',
      steps: [
        'Erfassen der militärischen Dienstzeit, Dienstgrad und Personenkennziffer (PK)',
        'Schwerpunkt auf die Wandlung nach der Entlassung legen („Warum damals ja, warum heute nein?“)',
        'Einreichung per Einschreiben mit Rückschein',
        'Überprüfung bestehender Beorderungen oder Mobilmachungsbescheide'
      ]
    },
    musterung: {
      title: 'Akuter Fall: Einberufungsbescheid oder Musterung erhalten',
      description: 'Sie haben bereits Post von der Bundeswehr erhalten (z. B. Erfassungsbogen, Musterungsaufforderung oder Einberufungsbescheid).',
      authorityName: 'Karrierecenter & BAPersBw Köln (Sofort-Eilantrag)',
      authorityAddress: 'Direkte Zustellung an die auf dem Bescheid genannte Stelle + Eilantrag nach § 80 Abs. 5 VwGO falls Frist abläuft.',
      procedure: 'Höchste Dringlichkeitsstufe! Wenn ein Einberufungsbescheid vorliegt, muss parallel zur KDV-Begründung umgehend die Aussetzung der Vollziehung beantragt werden.',
      suspensiveEffect: 'Nur ein fristgerechter Widerspruch bzw. Eilantrag verhindert den zwangsweisen Dienstantritt am Einberufungstag.',
      criticalWarning: 'Frist von 1 Monat ab Bekanntgabe des Bescheids unbedingt wahren. Ignorieren des Bescheids kann strafrechtliche Konsequenzen (Eigenmächtige Abwesenheit) haben.',
      steps: [
        'Fristen prüfen (Zugangsdatum des Bescheids dokumentieren)',
        'Sofortigen KDV-Antrag mit Antrag auf Aussetzung der Vollziehung einreichen',
        'Persönliche Gewissensbegründung parallel schnellstmöglich fertigstellen',
        'Unverzüglich anwaltlichen Rechtsbeistand hinzuziehen *'
      ]
    }
  };

  const active = statusConfigs[selectedStatus];

  return (
    <section id="status-finder" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-black uppercase tracking-wider mb-3">
            Interaktiver Behörden- &amp; Status-Finder
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Welche Behörde ist für Ihren KDV-Antrag zuständig?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Wählen Sie Ihren aktuellen Status aus, um die exakte behördliche Einreichungsstelle, Fristen und spezifische Anforderungen an die Begründung zu ermitteln.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto mb-8">
          {(['ungedient', 'soldat_aktiv', 'reservist', 'musterung'] as UserStatus[]).map((st) => {
            const isSel = selectedStatus === st;
            return (
              <button
                key={st}
                onClick={() => setSelectedStatus(st)}
                className={`p-4 rounded-xl text-left transition-all border-2 flex flex-col justify-between ${
                  isSel
                    ? 'bg-white border-amber-500 shadow-md ring-2 ring-amber-400/20'
                    : 'bg-white/60 border-slate-200 hover:border-slate-300 hover:bg-white text-slate-700'
                }`}
              >
                <div className="font-bold text-sm text-slate-900 leading-snug">
                  {statusConfigs[st].title.split('(')[0].trim()}
                </div>
                <div className="mt-2 text-[11px] text-slate-500 line-clamp-2">
                  {statusConfigs[st].description}
                </div>
                <div className={`mt-3 text-[11px] font-extrabold flex items-center gap-1 ${isSel ? 'text-amber-600' : 'text-slate-400'}`}>
                  <span>{isSel ? 'Ausgewählt' : 'Auswählen'}</span>
                  {isSel && <CheckCircle className="w-3.5 h-3.5" />}
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Result Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-9">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-200 gap-4">
            <div>
              <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
                Ihr Statusprofil
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-950 mt-1.5">
                {active.title}
              </h3>
            </div>
            <button
              onClick={onSelectMuster}
              className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm transition-all shadow-sm flex items-center justify-center gap-2 shrink-0 border border-amber-600/30"
            >
              <span>Passendes Formular generieren *</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
            
            {/* Left Column: Authority & Routing */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                  <Building2 className="w-4 h-4 text-slate-700" />
                  <span>Zuständige Behörde / Einreichung</span>
                </div>
                <p className="text-base font-bold text-slate-900">
                  {active.authorityName}
                </p>
                <p className="text-xs text-slate-600 mt-1 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                  {active.authorityAddress}
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                  <ShieldCheck className="w-4 h-4 text-slate-700" />
                  <span>Schutzwirkung &amp; Aufschub</span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  {active.suspensiveEffect}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-slate-900 text-xs leading-relaxed flex items-start gap-2.5">
                <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="font-bold text-amber-950 block mb-0.5">Wichtiger Nischen-Hinweis:</strong>
                  {active.criticalWarning}
                </div>
              </div>
            </div>

            {/* Right Column: Checkliste */}
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                <FileCheck className="w-4 h-4 text-slate-700" />
                <span>Empfohlene Verfahrensschritte</span>
              </div>
              
              <ul className="space-y-3">
                {active.steps.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800">
                    <span className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="font-medium leading-relaxed">{step}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
            <span>Rechtsgrundlage: § 1 &amp; § 2 Gesetz über die Verweigerung des Kriegsdienstes mit der Waffe (KDVG)</span>
            <span className="text-[11px]">* Partnerlink: Vermittlung wehrrechtlicher Beratungsstellen &amp; Fachanwälte</span>
          </div>

        </div>

      </div>
    </section>
  );
};

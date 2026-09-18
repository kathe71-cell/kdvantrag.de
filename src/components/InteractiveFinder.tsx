import React, { useState } from 'react';
import { UserStatus } from '../types';
import { Building2, CheckCircle, AlertTriangle, FileCheck, ArrowRight, ShieldCheck, Scale, ExternalLink } from 'lucide-react';

interface InteractiveFinderProps {
  onSelectMuster: () => void;
}

export const InteractiveFinder: React.FC<InteractiveFinderProps> = ({ onSelectMuster }) => {
  const [selectedStatus, setSelectedStatus] = useState<UserStatus>('ungedient_vor_einberufung');

  const statusConfigs: Record<UserStatus, {
    title: string;
    description: string;
    submissionAuthority: string;
    submissionAddress: string;
    decidingAuthority: string;
    procedure: string;
    legalEffect: string;
    legalSource: string;
    notice: string;
    steps: string[];
  }> = {
    ungedient_vor_einberufung: {
      title: 'Ungediente / Wehrfähige (vor Einberufung)',
      description: 'Personen, die noch keinen Wehrdienst geleistet haben und keinen Einberufungsbescheid erhalten haben.',
      submissionAuthority: 'Bundesamt für das Personalmanagement der Bundeswehr (BAPersBw) – Wehrersatzbehörde',
      submissionAddress: 'Militärringstraße 1000, 50737 Köln',
      decidingAuthority: 'Bundesamt für Familie und zivilgesellschaftliche Aufgaben (BAFzA)',
      procedure: 'Der Antrag wird schriftlich per Post beim BAPersBw (Wehrersatzbehörde) in Köln eingereicht. Das BAPersBw bestätigt den Eingang und leitet die vollständigen Unterlagen zur inhaltlichen Entscheidung an das BAFzA weiter.',
      legalEffect: 'Gemäß § 3 Abs. 2 Satz 1 KDVG wird der Antragsteller bis zur unanfechtbaren Ablehnung des Antrags auf Anerkennung oder bis zur Rücknahme des Antrags nicht zum Grundwehrdienst einberufen.',
      legalSource: '§ 3 Abs. 2 Satz 1 KDVG',
      notice: 'Reichen Sie den Antrag rechtzeitig ein, sobald Ihre Gewissensentscheidung feststeht.',
      steps: [
        'Formlosen schriftlichen Antrag mit eigenhändiger Unterschrift verfassen',
        'Vollständigen tabellarischen Lebenslauf beifügen',
        'Persönliche Gewissensbegründung eigenständig anhand von Reflexionsfragen ausarbeiten',
        'Im Original per Einschreiben an das BAPersBw in Köln senden'
      ]
    },
    ungedient_nach_einberufung: {
      title: 'Ungediente mit Einberufungsbescheid (nach Einberufung)',
      description: 'Personen, denen bereits ein konkreter Einberufungsbescheid zugestellt wurde.',
      submissionAuthority: 'Bundesamt für das Personalmanagement der Bundeswehr (BAPersBw) – Wehrersatzbehörde',
      submissionAddress: 'Militärringstraße 1000, 50737 Köln',
      decidingAuthority: 'Bundesamt für Familie und zivilgesellschaftliche Aufgaben (BAFzA)',
      procedure: 'Der Antrag muss unverzüglich beim BAPersBw in Köln gestellt werden. Das BAPersBw leitet das Dossier nach formeller Prüfung an das BAFzA weiter.',
      legalEffect: 'Bei Antragstellung erst nach Zustellung eines Einberufungsbescheids greift die Ausnahme des § 3 Abs. 2 Satz 2 KDVG, sodass eine Vollzugshemmung grundsätzlich nicht automatisch eintritt (einstweiliger Rechtsschutz nach § 80 Abs. 5 VwGO erforderlich). Gesetzliche Ausnahme (§ 13 Abs. 3 KDVG): Für Personen im Sinne des § 13 Abs. 1 KDVG (ungediente Wehrpflichtige, die vor dem 1. Januar 2010 geboren sind, in Fällen nach § 13 Abs. 1 KDVG) findet die Ausnahme aus § 3 Abs. 2 Satz 2 KDVG keine Anwendung, sodass die Schutzregel des § 3 Abs. 2 Satz 1 KDVG auch bei Antragstellung nach Zustellung des Einberufungsbescheids maßgeblich bleibt.',
      legalSource: '§ 3 Abs. 2 Satz 1 & 2 KDVG, § 13 Abs. 1 & 3 KDVG, § 80 VwGO',
      notice: 'Aufschiebende Wirkung tritt bei Antragstellung nach Einberufung nicht automatisch ein. Beachten Sie Rechtsbehelfsfristen und lassen Sie sich bei Bedarf rechtlich beraten.',
      steps: [
        'Zugangsdatum des Einberufungsbescheids für Fristberechnungen exakt dokumentieren',
        'Antrag unverzüglich beim BAPersBw in Köln einreichen',
        'Ggf. Antrag auf Aussetzung der Vollziehung bzw. einstweiligen Rechtsschutz prüfen',
        'Lebenslauf und eigenständige Gewissensbegründung zügig vervollständigen'
      ]
    },
    soldat_aktiv: {
      title: 'Aktive Soldatinnen & Soldaten (SaZ, FWDL, BS)',
      description: 'Personen im aktiven Dienstverhältnis der Bundeswehr (Zeitsoldaten, FWDL, Berufssoldaten).',
      submissionAuthority: 'Disziplinarvorgesetzter (auf dem Dienstweg) zur Weiterleitung an BAPersBw & BAFzA',
      submissionAddress: 'Abgabe bei der zuständigen Einheitsführung / Kompanie',
      decidingAuthority: 'Bundesamt für Familie und zivilgesellschaftliche Aufgaben (BAFzA)',
      procedure: 'Der Antrag ist auf dem Dienstweg beim nächsten Disziplinarvorgesetzten einzureichen. Dieser leitet den Antrag mit einer Stellungnahme über das BAPersBw an das BAFzA weiter.',
      legalEffect: 'Die Befreiung von waffentragenden Dienstpflichten im aktiven Dienst richtet sich nach den Vorgaben der Bundeswehr und der Entscheidung der Vorgesetzten im Einzelfall. Eine gesetzliche Regelung analog § 22 Abs. 4 KDVG existiert im KDVG nicht.',
      legalSource: '§ 1 KDVG, Dienstvorschriften der Bundeswehr',
      notice: 'Hinweis zu Ausbildungskosten: Bei vorzeitiger Entlassung von Offizieren/Zeitsoldaten mit Studium/Fachausbildung können Rückforderungstatbestände nach § 56 SG geprüft werden.',
      steps: [
        'Antrag schriftlich im Original beim Disziplinarvorgesetzten einreichen',
        'Eingangsbestätigung mit Datum und Stempel auf einer Durchschrift quittieren lassen',
        'Waffenlosen Dienst im Truppenalltag beantragen',
        'Begründung des Sinneswandels im Dienstverlauf präzise und eigenständig darstellen'
      ]
    },
    reservist: {
      title: 'Reservistinnen & Reservisten (ehem. Soldaten)',
      description: 'Frühere Soldatinnen und Soldaten, die der Wehrüberwachung oder Dienstleistungspflicht unterliegen.',
      submissionAuthority: 'Bundesamt für das Personalmanagement der Bundeswehr (BAPersBw) – Wehrersatzbehörde',
      submissionAddress: 'Militärringstraße 1000, 50737 Köln',
      decidingAuthority: 'Bundesamt für Familie und zivilgesellschaftliche Aufgaben (BAFzA)',
      procedure: 'Der Antrag wird beim BAPersBw in Köln eingereicht. Bei Vorliegen der Voraussetzungen erfolgt die Weiterleitung an das BAFzA zur inhaltlichen Entscheidung.',
      legalEffect: 'Das BAFzA prüft bei ehemaligen Soldaten die Entwicklung des Gewissensnotstands. Die Wirkung gegenüber Heranziehungsbescheiden zu Übungen richtet sich nach KDVG und KDV-VwV.',
      legalSource: '§ 1 & § 3 KDVG, KDV-VwV',
      notice: 'Dringen Sie in Ihrer Begründung darauf ein, wie und warum sich Ihre Einstellung zum Dienst an der Waffe nach dem aktiven Dienst geändert hat.',
      steps: [
        'Militärische Stammdaten (Personenkennziffer, ehem. Dienstgrad/Einheit) bereithalten',
        'Entwicklung des Sinneswandels nach Dienstende nachvollziehbar beschreiben',
        'Antrag, Lebenslauf und Begründung beim BAPersBw in Köln einreichen',
        'Bescheid des BAFzA abwarten'
      ]
    }
  };

  const active = statusConfigs[selectedStatus];

  return (
    <section id="status-finder" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider mb-3">
            Behörden- &amp; Status-Orientierung
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Zuständige Behörden und Einreichungswege
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Ermitteln Sie für Ihren Wehr- und Dienststatus die zuständige Wehrersatzbehörde zur Antragstellung sowie die gesetzlichen Rahmenbedingungen nach dem KDVG.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-5xl mx-auto mb-8">
          {(['ungedient_vor_einberufung', 'ungedient_nach_einberufung', 'soldat_aktiv', 'reservist'] as UserStatus[]).map((st) => {
            const isSel = selectedStatus === st;
            return (
              <button
                key={st}
                onClick={() => setSelectedStatus(st)}
                className={`p-4 rounded-xl text-left transition-all border-2 flex flex-col justify-between ${
                  isSel
                    ? 'bg-white border-amber-500 shadow-md ring-2 ring-amber-400/20'
                    : 'bg-white/70 border-slate-200 hover:border-slate-300 hover:bg-white text-slate-700'
                }`}
              >
                <div>
                  <div className="font-bold text-sm text-slate-900 leading-snug">
                    {statusConfigs[st].title}
                  </div>
                  <div className="mt-1.5 text-[11px] text-slate-500 line-clamp-2 leading-normal">
                    {statusConfigs[st].description}
                  </div>
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
        <div className="max-w-5xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-9">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-200 gap-4">
            <div>
              <span className="text-xs font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
                Statusprofil
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-950 mt-1.5">
                {active.title}
              </h3>
            </div>
            <button
              onClick={onSelectMuster}
              className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm transition-all shadow-sm flex items-center justify-center gap-2 shrink-0 border border-amber-600/30"
            >
              <span>Antragsmuster aufrufen</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
            
            {/* Left Column: Authorities */}
            <div className="space-y-5">
              
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                  <Building2 className="w-4 h-4 text-slate-700" />
                  <span>1. Einreichungsbehörde (Antragstellung)</span>
                </div>
                <p className="text-sm font-bold text-slate-950">
                  {active.submissionAuthority}
                </p>
                <p className="text-xs text-slate-600 font-mono mt-1">
                  {active.submissionAddress}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-900 mb-1">
                  <Scale className="w-4 h-4 text-amber-700" />
                  <span>2. Entscheidende Behörde (Inhaltliche Prüfung)</span>
                </div>
                <p className="text-sm font-bold text-amber-950">
                  {active.decidingAuthority}
                </p>
                <p className="text-xs text-slate-700 mt-1 leading-relaxed">
                  {active.procedure}
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                  <ShieldCheck className="w-4 h-4 text-slate-700" />
                  <span>Gesetzliche Wirkung der Antragstellung</span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-200">
                  {active.legalEffect}
                </p>
              </div>

              {active.notice && (
                <div className="p-3.5 rounded-xl bg-slate-100 border border-slate-300 text-slate-800 text-xs leading-relaxed flex items-start gap-2.5">
                  <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-bold text-slate-950 block mb-0.5">Wichtiger Hinweis:</strong>
                    {active.notice}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Steps */}
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

              <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1.5">
                <div className="font-bold text-slate-900 flex items-center gap-1.5">
                  <ExternalLink className="w-3.5 h-3.5 text-amber-600" />
                  <span>Offizielle Quelle:</span>
                </div>
                <p>
                  Informationen des Bundesamtes für Familie und zivilgesellschaftliche Aufgaben (BAFzA):{' '}
                  <a 
                    href="https://www.bafza.de/rat-und-hilfe/kriegsdienstverweigerung-kdv" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-amber-700 font-bold hover:underline"
                  >
                    bafza.de/rat-und-hilfe/kriegsdienstverweigerung-kdv
                  </a>
                </p>
                <p className="text-[11px] text-slate-500">Rechtsgrundlage: {active.legalSource}</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

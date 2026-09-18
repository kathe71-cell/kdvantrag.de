import React from 'react';
import { Send, FileSearch, Scale, CheckCircle2, Clock, ArrowRight } from 'lucide-react';

interface TimelineGuideProps {
  onOpenGenerator: () => void;
}

export const TimelineGuide: React.FC<TimelineGuideProps> = ({ onOpenGenerator }) => {
  const steps = [
    {
      number: '01',
      title: 'Zusammenstellung der Antragsunterlagen (§ 2 KDVG)',
      duration: 'Schritt 1',
      description: 'Zusammenstellung der drei gesetzlich geforderten Teile: Formloses schriftliches Anschreiben mit Berufung auf Art. 4 Abs. 3 GG, vollständiger tabellarischer Lebenslauf und eigenständig verfasste Begründung der Gewissensentscheidung.',
      highlight: 'Wichtig: Das BAFzA verlangt eine persönliche, eigenhändig unterschriebene Begründung ohne kopierte Textvorlagen.',
      icon: FileSearch
    },
    {
      number: '02',
      title: 'Einreichung bei der zuständigen Wehrersatzbehörde',
      duration: 'Schritt 2',
      description: 'Einreichung im Original per Post beim BAPersBw – Wehrersatzbehörde, Militärringstraße 1000, 50737 Köln. Aktive Soldatinnen und Soldaten reichen den Antrag auf dem Dienstweg bei ihrem Disziplinarvorgesetzten ein.',
      highlight: 'Rechtswirkung: Der Antrag schützt grundsätzlich bis zur unanfechtbaren Ablehnung oder Rücknahme vor der Einberufung zum Grundwehrdienst (§ 3 Abs. 2 Satz 1 KDVG). Nach Erhalt eines Einberufungsbescheids greift die Ausnahme des § 3 Abs. 2 Satz 2 KDVG, sofern nicht die Privilegierung nach § 13 Abs. 3 i. V. m. Abs. 1 KDVG Anwendung findet.',
      icon: Send
    },
    {
      number: '03',
      title: 'Eingangsbestätigung & Weiterleitung an das BAFzA',
      duration: 'Schritt 3',
      description: 'Das BAPersBw bestätigt den Eingang des Antrags. Nach Feststellung der gesundheitlichen Eignung und Vollständigkeit leitet das BAPersBw die Akte an das Bundesamt für Familie und zivilgesellschaftliche Aufgaben (BAFzA) weiter.',
      highlight: 'Prüfkompetenz: Die inhaltliche Entscheidung über die Anerkennung als Kriegsdienstverweigerer liegt ausschließlich beim BAFzA.',
      icon: Scale
    },
    {
      number: '04',
      title: 'Entscheidungsbescheid & Rechtsbehelfsfristen',
      duration: 'Schritt 4',
      description: 'Das BAFzA stellt den schriftlichen Bescheid zu. Bei Anerkennung erfolgt die Bescheinigung. Bei Ablehnung kann innerhalb von einem Monat nach Bekanntgabe (§ 70 VwGO i. V. m. § 31 VwVfG / § 188 BGB) Widerspruch eingelegt werden.',
      highlight: 'Rechtsbehelf: Bei erfolglosem Widerspruch steht der Klageweg vor dem zuständigen Verwaltungsgericht offen.',
      icon: CheckCircle2
    }
  ];

  return (
    <section id="ablauf-guide" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider mb-3">
            Verfahrensablauf
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Der Ablauf des KDV-Verfahrens nach KDVG
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Von der Zusammenstellung der Unterlagen über die Einreichung beim BAPersBw Köln bis zur Entscheidung durch das BAFzA.
          </p>
        </div>

        {/* Timeline Steps */}
        <div className="max-w-4xl mx-auto space-y-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={idx}
                className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col md:flex-row gap-6 items-start"
              >
                {/* Step number badge */}
                <div className="flex items-center gap-3 md:flex-col md:items-center shrink-0">
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 text-amber-400 flex items-center justify-center font-black text-lg shadow-xs">
                    {step.number}
                  </div>
                  <div className="flex items-center gap-1 text-xs font-bold text-slate-500">
                    <Clock className="w-3.5 h-3.5 text-amber-600" />
                    <span>{step.duration}</span>
                  </div>
                </div>

                {/* Content area */}
                <div className="flex-1 space-y-3">
                  <div className="flex items-center gap-2">
                    <Icon className="w-5 h-5 text-amber-600 shrink-0" />
                    <h3 className="text-lg sm:text-xl font-black text-slate-900">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 font-medium">
                    <strong className="text-slate-900 font-bold block sm:inline mr-1">Gesetzliche Regelung:</strong>
                    {step.highlight}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenGenerator}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm shadow-sm transition-all border border-amber-600/30"
          >
            <span>Musterschreiben &amp; Gliederung aufrufen</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>
          <p className="mt-3 text-[11px] text-slate-500">
            Quelle: Offizielle Informationen des Bundesamtes für Familie und zivilgesellschaftliche Aufgaben (BAFzA), bafza.de
          </p>
        </div>

      </div>
    </section>
  );
};

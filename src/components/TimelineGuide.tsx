import React from 'react';
import { Send, FileSearch, Scale, CheckCircle2, Clock, ArrowRight } from 'lucide-react';

interface TimelineGuideProps {
  onOpenGenerator: () => void;
}

export const TimelineGuide: React.FC<TimelineGuideProps> = ({ onOpenGenerator }) => {
  const steps = [
    {
      number: '01',
      title: 'Vorbereitung & Zusammenstellung der Antragsunterlagen',
      duration: 'ca. 2–4 Wochen',
      description: 'Zusammenstellung des dreiteiligen Antragsdossiers nach § 2 KDVG: Formloser schriftlicher Antrag, vollständiger tabellarischer Lebenslauf und das eigenhändige Ausarbeiten der persönlichen Gewissensbegründung.',
      highlight: 'Wichtig: Das Ausarbeiten einer glaubhaften, tiefgründigen Gewissensbegründung erfordert intensive Selbstreflexion und Zeit.',
      icon: FileSearch
    },
    {
      number: '02',
      title: 'Einreichung bei der zuständigen Stelle',
      duration: 'Tag 1 nach Fertigstellung',
      description: 'Einreichung per Einschreiben mit Rückschein beim zuständigen Karrierecenter der Bundeswehr (bei Ungedienten & Reservisten) bzw. beim nächsten Disziplinarvorgesetzten (bei aktiven Soldaten).',
      highlight: 'Schutzwirkung: Aktive Soldaten haben ab Einreichung Anspruch auf Freistellung vom Dienst an der Waffe (§ 22 Abs. 4 KDVG).',
      icon: Send
    },
    {
      number: '03',
      title: 'Prüfverfahren & Beurteilung durch das BAPersBw',
      duration: 'ca. 3–9 Monate (Modellrechnung *)',
      description: 'Das Bundesamt für das Personalmanagement der Bundeswehr (Referat II 2) in Köln prüft die Unterlagen auf Schlüssigkeit, Ernsthaftigkeit und Glaubwürdigkeit. Bei Zweifeln kann eine persönliche Anhörung anberaumt werden.',
      highlight: 'Kein Automatismus: Das BAPersBw prüft anhand strenger verfassungsrechtlicher Maßstäbe des Bundesverwaltungsgerichts.',
      icon: Scale
    },
    {
      number: '04',
      title: 'Bescheid & Rechtsmittel (Anerkennung oder Widerspruch)',
      duration: 'Frist: 1 Monat',
      description: 'Bei positivem Bescheid erfolgt die offizielle Anerkennung als Kriegsdienstverweigerer. Bei Ablehnung muss zwingend innerhalb eines Monats schriftlich Widerspruch eingelegt werden.',
      highlight: 'Rechtsbehelf: Gegen einen ablehnenden Widerspruchsbescheid steht die Klage vor dem zuständigen Verwaltungsgericht offen.',
      icon: CheckCircle2
    }
  ];

  return (
    <section id="ablauf-guide" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-black uppercase tracking-wider mb-3">
            Verfahrensschritte
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Der Ablauf des KDV-Verfahrens im Überblick
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Vom Entschluss bis zum rechtskräftigen Anerkennungsbescheid – die vier maßgeblichen Phasen eines Antrags nach dem Kriegsdienstverweigerungsgesetz.
          </p>
        </div>

        {/* Timeline Steps */}
        <div className="max-w-4xl mx-auto space-y-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={idx}
                className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row gap-6 items-start"
              >
                {/* Step number badge */}
                <div className="flex items-center gap-3 md:flex-col md:items-center shrink-0">
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 text-amber-400 flex items-center justify-center font-black text-lg shadow-sm">
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
                    <strong className="text-slate-900 font-bold block sm:inline mr-1">Merke:</strong>
                    {step.highlight}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA & Transparency */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenGenerator}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm shadow-md transition-all border border-amber-600/30"
          >
            <span>Jetzt Schritt 1 beginnen: Unterlagen zusammenstellen *</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>
          <p className="mt-2 text-[11px] text-slate-500">
            * Modellrechnung der Bearbeitungszeiten. Die tatsächliche Dauer variiert je nach Arbeitsbelastung des BAPersBw.
          </p>
        </div>

      </div>
    </section>
  );
};

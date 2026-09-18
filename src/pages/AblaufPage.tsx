import React from 'react';
import { TimelineGuide } from '../components/TimelineGuide';
import { PageRoute } from '../types';
import { ArrowLeft, BookOpen, Scale, ArrowRight } from 'lucide-react';

interface AblaufPageProps {
  setRoute: (route: PageRoute) => void;
}

export const AblaufPage: React.FC<AblaufPageProps> = ({ setRoute }) => {
  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Header section */}
      <div className="bg-white border-b border-slate-200 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => setRoute('home')}
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-slate-950 mb-6 p-2 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Zurück zur Übersicht</span>
          </button>

          <span className="text-xs font-black uppercase tracking-wider text-amber-800 bg-amber-50 px-3 py-1 rounded-md border border-amber-200">
            Rechtlicher Leitfaden nach KDVG
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-950 mt-3 tracking-tight">
            Verfahrensablauf des KDV-Antrags
          </h1>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Zuständige Behörden, gesetzliche Voraussetzungen nach § 2 KDVG und Unterscheidung der Rechtswirkungen vor und nach Einberufung.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        
        {/* Behördenzuständigkeiten Box */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-amber-600" />
            <span>1. Zuständige Behörden nach KDVG &amp; BAFzA</span>
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Bei der Beantragung der Kriegsdienstverweigerung greift eine gesetzlich geregelte Arbeitsteilung zwischen Bundeswehr und Bundesamt:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-xs font-bold text-amber-800 uppercase">Wehrersatzbehörde (Antragstellung)</span>
              <h3 className="font-black text-slate-900 text-sm">BAPersBw Köln</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Bundesamt für das Personalmanagement der Bundeswehr, Wehrersatzbehörde, Militärringstraße 1000, 50737 Köln. (Bei aktiven Soldaten: Abgabe auf dem Dienstweg beim Disziplinarvorgesetzten).
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-xs font-bold text-amber-800 uppercase">Prüfungs- &amp; Entscheidungsbehörde</span>
              <h3 className="font-black text-slate-900 text-sm">BAFzA Köln</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Bundesamt für Familie und zivilgesellschaftliche Aufgaben (BAFzA). Das BAPersBw leitet die Vollständigkeitsakte an das BAFzA weiter, welches über die Anerkennung entscheidet.
              </p>
            </div>
          </div>
        </div>

        {/* Protection § 3 Abs. 2 KDVG vs. Post-Einberufung */}
        <div className="bg-amber-50/70 border border-amber-300 p-6 sm:p-8 rounded-2xl shadow-xs space-y-3">
          <div className="flex items-center gap-2 text-amber-950 font-bold">
            <Scale className="w-5 h-5 text-amber-700" />
            <h2 className="text-lg">Rechtswirkungen der Antragstellung (§ 3 Abs. 2 &amp; § 13 KDVG)</h2>
          </div>
          <div className="space-y-2 text-xs sm:text-sm text-slate-800 leading-relaxed">
            <p>
              <strong>Wirkung bei Antragstellung vor Einberufung (§ 3 Abs. 2 Satz 1 KDVG):</strong> Wird der Antrag eingereicht, wird der Antragsteller bis zur unanfechtbaren Ablehnung des Antrags auf Anerkennung oder bis zur Rücknahme des Antrags nicht zum Grundwehrdienst einberufen.
            </p>
            <p>
              <strong>Wirkung bei Antragstellung nach Einberufung (§ 3 Abs. 2 Satz 2 KDVG):</strong> Wird der Antrag erst nach Zustellung eines Einberufungsbescheids eingereicht, greift die Ausnahme des § 3 Abs. 2 Satz 2 KDVG, sodass eine Vollzugshemmung grundsätzlich nicht automatisch eintritt (einstweiliger Rechtsschutz nach § 80 Abs. 5 VwGO erforderlich). <em>Gesetzliche Ausnahme (§ 13 Abs. 3 KDVG):</em> Für Personen im Sinne des § 13 Abs. 1 KDVG (ungediente Wehrpflichtige, die vor dem 1. Januar 2010 geboren sind, in Fällen nach § 13 Abs. 1 KDVG) findet die Ausnahme aus § 3 Abs. 2 Satz 2 KDVG keine Anwendung, sodass die Schutzregel des § 3 Abs. 2 Satz 1 KDVG auch bei Antragstellung nach Zustellung des Einberufungsbescheids maßgeblich bleibt.
            </p>
          </div>
        </div>

        {/* Timeline visualization */}
        <TimelineGuide onOpenGenerator={() => setRoute('vorlagen')} />

        {/* Bottom Navigation */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 bg-white rounded-2xl border border-slate-200">
          <div>
            <h3 className="font-bold text-slate-900 text-sm">Unterlagen zusammenstellen</h3>
            <p className="text-xs text-slate-500">Erzeugen Sie das Anschreiben und die Gliederungsstrukturen.</p>
          </div>
          <button
            onClick={() => setRoute('vorlagen')}
            className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm flex items-center gap-2 shadow-xs border border-amber-600/30"
          >
            <span>Zu den Vorlagen</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

      </div>
    </div>
  );
};

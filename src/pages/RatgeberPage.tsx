import React from 'react';
import { MistakesGuide } from '../components/MistakesGuide';
import { PageRoute } from '../types';
import { ArrowLeft, Scale, ArrowRight } from 'lucide-react';

interface RatgeberPageProps {
  setRoute: (route: PageRoute) => void;
}

export const RatgeberPage: React.FC<RatgeberPageProps> = ({ setRoute }) => {
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

          <span className="text-xs font-black uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-md border border-amber-200">
            Rechtsratgeber &amp; Urteilspraxis
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-950 mt-3 tracking-tight">
            Typische Fehler, Mythen &amp; BVerwG-Rechtsprechung
          </h1>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Warum scheitern KDV-Anträge beim BAPersBw? Erfahren Sie, welche Anforderungen das Bundesverwaltungsgericht an eine echte Gewissensentscheidung stellt.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        
        {/* Definition of Conscience Box */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center gap-2 text-slate-900 font-black text-lg">
            <Scale className="w-5 h-5 text-amber-600" />
            <h2>Was ist eine „Gewissensentscheidung“ nach Art. 4 Abs. 3 GG?</h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            Nach der Grundsatzentscheidung des Bundesverfassungsgerichts (BVerfGE 12, 45) und ständiger Rechtsprechung des Bundesverwaltungsgerichts ist eine Gewissensentscheidung im Sinne von Art. 4 Abs. 3 GG:
          </p>
          <blockquote className="p-4 rounded-xl bg-slate-50 border-l-4 border-amber-500 italic text-xs sm:text-sm text-slate-800">
            „Jede ernste, sittliche, d.h. an den Kategorien von ‚Gut‘ und ‚Böse‘ orientierte Entscheidung, die der Einzelne in einer bestimmten Lage als für sich bindend und unbedingt verpflichtend erfährt, so dass er gegen sie nicht ohne schwere Gewissensnot handeln könnte.“
          </blockquote>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Daraus folgt: Politische Opportunitätserwägungen, Angst vor Gefahren oder Ablehnung einzelner Militäreinsätze genügen rechtlich nicht. Der Verweigerer muss die Tötung von Mitmenschen im Krieg schlechthin und ohne Ausnahme ablehnen.
          </p>
        </div>

        {/* The mistakes component */}
        <MistakesGuide onOpenGenerator={() => setRoute('vorlagen')} />

        {/* Next step CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
          <div>
            <h3 className="font-bold text-slate-900 text-sm">Prüfen Sie jetzt Ihre Fristen</h3>
            <p className="text-xs text-slate-500">Kalkulieren Sie Widerspruchsfristen und Bearbeitungszeiten.</p>
          </div>
          <button
            onClick={() => setRoute('rechner')}
            className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-sm"
          >
            <span>Zum Fristen-Rechner</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};

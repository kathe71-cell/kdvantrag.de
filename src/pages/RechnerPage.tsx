import React from 'react';
import { FristenRechner } from '../components/FristenRechner';
import { PageRoute } from '../types';
import { ArrowLeft, Clock } from 'lucide-react';

interface RechnerPageProps {
  setRoute: (route: PageRoute) => void;
}

export const RechnerPage: React.FC<RechnerPageProps> = ({ setRoute }) => {
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
            Fristen &amp; Bearbeitungsdauer
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-950 mt-3 tracking-tight">
            KDV-Fristen- und Bearbeitungszeiten-Rechner
          </h1>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Berechnen Sie wichtige Stichtage zur Widerspruchseinlegung (§ 70 VwGO) und erhalten Sie eine realistische Modellrechnung zur durchschnittlichen Bearbeitungsdauer beim Bundesamt.
          </p>
        </div>
      </div>

      <div className="py-8">
        <FristenRechner />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Clock className="w-5 h-5 text-amber-600" />
            <span>Was tun, wenn die Bearbeitung ungewöhnlich lange dauert?</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Dauert die Bearbeitung Ihres Antrags länger als sechs Monate ohne zureichenden Grund, kann nach § 75 der Verwaltungsgerichtsordnung (VwGO) eine sogenannte <strong>Untätigkeitsklage</strong> vor dem Verwaltungsgericht erhoben werden. 
          </p>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Für aktive Soldaten ist eine lange Bearbeitungszeit in der Regel unschädlich, da der Schutz vor Waffendienst nach § 22 Abs. 4 KDVG für die gesamte Dauer des Antragsverfahrens fortbesteht.
          </p>
        </div>
      </div>

    </div>
  );
};

import React from 'react';
import { TimelineGuide } from '../components/TimelineGuide';
import { PageRoute } from '../types';
import { ArrowLeft, BookOpen, ShieldCheck, ArrowRight } from 'lucide-react';

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

          <span className="text-xs font-black uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-md border border-amber-200">
            Rechtlicher Leitfaden
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-950 mt-3 tracking-tight">
            Der detaillierte Verfahrensablauf des KDV-Antrags
          </h1>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Schritt für Schritt von der Ausarbeitung der Gewissensgründe über den behördlichen Dienstweg bis zur Anerkennung durch das BAPersBw.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        
        {/* Deep Dive Box: Der Dienstweg */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-amber-600" />
            <span>1. Gesetzlicher Einreichungsweg nach Personengruppe</span>
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Die formale Einreichung richtet sich strikt nach § 2 des Kriegsdienstverweigerungsgesetzes (KDVG):
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-bold text-amber-700 uppercase">Ungediente &amp; Reservisten</span>
              <h3 className="font-black text-slate-900 text-sm mt-1">Örtliches Karrierecenter der Bundeswehr</h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Der Antrag wird schriftlich beim für den Hauptwohnsitz zuständigen Karrierecenter eingereicht. Dieses prüft die formale Vollständigkeit und leitet die Akte unverzüglich an das BAPersBw in Köln weiter.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-bold text-amber-700 uppercase">Aktive Soldaten (SaZ/FWDL/BS)</span>
              <h3 className="font-black text-slate-900 text-sm mt-1">Disziplinarvorgesetzter (Einheitsführer)</h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Zwingende Abgabe auf dem Dienstweg über die Kompanieführung. Der Disziplinarvorgesetzte führt eine Anhörung durch und erstellt eine dienstliche Stellungnahme über das Verhalten im Dienst.
              </p>
            </div>
          </div>
        </div>

        {/* Protection § 22 Abs. 4 KDVG */}
        <div className="bg-amber-50 border border-amber-200 p-6 sm:p-8 rounded-2xl shadow-sm space-y-3">
          <div className="flex items-center gap-2 text-amber-950 font-bold">
            <ShieldCheck className="w-5 h-5 text-amber-700" />
            <h2 className="text-lg">Sofortiger Schutz ab Antragstellung (§ 22 Abs. 4 KDVG)</h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
            Für aktive Soldatinnen und Soldaten besteht ab dem Tag des Eingangs des Antrags ein gesetzlicher Anspruch auf Freistellung von waffentragenden Tätigkeiten. Sie dürfen nicht mehr an der Waffe ausgebildet, nicht zum Wachdienst mit Waffe eingeteilt und nicht zu bewaffneten Auslands- oder Inlandseinsätzen befohlen werden.
          </p>
          <div className="pt-2 text-xs font-bold text-amber-900">
            Tipp: Lassen Sie sich den Eingang Ihres KDV-Antrags vom Disziplinarvorgesetzten stets schriftlich auf einer Kopie mit Datum und Dienststempel quittieren!
          </div>
        </div>

        {/* Timeline visualization */}
        <TimelineGuide onOpenGenerator={() => setRoute('vorlagen')} />

        {/* Bottom Navigation */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 bg-white rounded-2xl border border-slate-200">
          <div>
            <h3 className="font-bold text-slate-900 text-sm">Bereit für die Antragstellung?</h3>
            <p className="text-xs text-slate-500">Erzeugen Sie jetzt Ihr formgerechtes Anschreiben mit unserem Generator.</p>
          </div>
          <button
            onClick={() => setRoute('vorlagen')}
            className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm flex items-center gap-2 shadow-sm border border-amber-600/30"
          >
            <span>Zu den Vorlagen *</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

      </div>
    </div>
  );
};

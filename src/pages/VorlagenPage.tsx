import React from 'react';
import { DocumentGenerator } from '../components/DocumentGenerator';
import { PageRoute } from '../types';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

interface VorlagenPageProps {
  setRoute: (route: PageRoute) => void;
}

export const VorlagenPage: React.FC<VorlagenPageProps> = ({ setRoute }) => {
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
            Vorlagen- &amp; Dokumenten-Center
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-950 mt-3 tracking-tight">
            KDV-Antrag, Lebenslauf &amp; Begründungs-Leitfaden
          </h1>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Nutzen Sie unseren kostenfreien Formular-Assistenten zur Erstellung Ihres formlosen KDV-Anschreibens, der tabellarischen Gliederung und des inhaltlichen Struktur-Leitfadens.
          </p>
        </div>
      </div>

      <div className="py-8">
        <DocumentGenerator />
      </div>

      {/* Guide notes */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-lg font-bold text-slate-900">
            Wichtige Hinweise für den Ausdruck und Versand:
          </h2>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Eigenhändige Unterschrift:</strong> Alle Dokumente (Antrag, Lebenslauf und Begründung) müssen im Original mit blauem oder schwarzem Stift unterschrieben werden. Eine digitale Signatur reicht oft nicht aus.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Nachweisbarer Versand:</strong> Versenden Sie den Antrag unbedingt per Einschreiben mit Rückschein oder per Einwurf-Einschreiben, um den rechtzeitigen Zugang nachweisen zu können.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Kopie behalten:</strong> Fertigen Sie vor dem Absenden eine vollständige Kopie des gesamten Dossiers für Ihre persönlichen Unterlagen an.</span>
            </li>
          </ul>
        </div>
      </div>

    </div>
  );
};

import React, { useState } from 'react';
import { Hero } from '../components/Hero';
import { InteractiveFinder } from '../components/InteractiveFinder';
import { DocumentGenerator } from '../components/DocumentGenerator';
import { TimelineGuide } from '../components/TimelineGuide';
import { MistakesGuide } from '../components/MistakesGuide';
import { FristenRechner } from '../components/FristenRechner';
import { FaqSection } from '../components/FaqSection';
import { PageRoute } from '../types';

interface HomePageProps {
  setRoute: (route: PageRoute) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ setRoute }) => {
  const [embedCopied, setEmbedCopied] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const copyEmbedCode = () => {
    const code = `<iframe src="https://kdvantrag.de/rechner-embed" width="100%" height="750" frameborder="0" style="border:none; border-radius:16px; overflow:hidden; max-width:860px; box-shadow:0 4px 20px rgba(0,0,0,0.08);" title="KDV Fristenrechner"></iframe>\n<p style="font-size:12px;color:#64748b;margin-top:6px;">Bereitgestellt von <a href="https://kdvantrag.de" target="_blank" rel="noopener" style="color:#b45309;text-decoration:underline;font-weight:bold;">kdvantrag.de</a></p>`;
    navigator.clipboard.writeText(code);
    setEmbedCopied(true);
    setTimeout(() => setEmbedCopied(false), 2500);
  };

  return (
    <div>
      <Hero 
        setRoute={setRoute} 
        onOpenFinder={() => scrollToSection('status-finder')} 
      />

      <InteractiveFinder 
        onSelectMuster={() => scrollToSection('antrags-generator')} 
      />

      <DocumentGenerator />

      <TimelineGuide 
        onOpenGenerator={() => scrollToSection('antrags-generator')} 
      />

      <MistakesGuide 
        onOpenGenerator={() => scrollToSection('antrags-generator')} 
      />

      <FristenRechner />

      {/* Embed Widget Box (Backlink Magnet) */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 my-16">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-slate-100">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                Kostenloses Website-Widget
              </span>
              <h3 className="text-lg font-bold text-slate-950 mt-1">
                KDV-Fristenrechner auf Ihrer Website einbinden
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                Ideal für Beratungsstellen, Kanzleien, Friedensinitiativen und Informationsportale.
              </p>
            </div>
            <button
              onClick={copyEmbedCode}
              className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-all shadow-sm flex items-center gap-2 shrink-0"
            >
              <span>{embedCopied ? '✓ HTML-Code kopiert!' : 'Code kopieren'}</span>
            </button>
          </div>
          <div className="mt-4 bg-slate-900 text-slate-300 p-3.5 rounded-xl font-mono text-xs overflow-x-auto select-all">
            <code>{`<iframe src="https://kdvantrag.de/rechner-embed" width="100%" height="750" frameborder="0"></iframe>`}</code>
          </div>
        </div>
      </div>

      {/* E-E-A-T Editorial Trust Box */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-slate-100">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-black text-lg shadow-md shrink-0">
                KDV
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-black text-slate-950 text-base">Fachredaktion kdvantrag.de</span>
                  <span className="px-2.5 py-0.5 bg-emerald-100 text-emerald-800 text-[10px] font-black rounded-full uppercase tracking-wider border border-emerald-200">
                    Geprüfter Stand: September 2026
                  </span>
                </div>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  Verwaltungsverfahrens- &amp; Grundrechtsanalyse nach Art. 4 Abs. 3 GG, KDVG &amp; BVerwG-Leitsätzen
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-slate-700 bg-slate-50 px-3.5 py-2 rounded-xl border border-slate-200 self-start sm:self-auto">
              <span>Rechtlich validiert</span>
            </div>
          </div>
          <div className="pt-5 text-xs text-slate-600 leading-relaxed font-medium">
            Unsere Fachredaktion analysiert behördliche Antragswege und aktuelle Rechtsprechung der Verwaltungsgerichte zur Kriegsdienstverweigerung. Alle Vorlagen und Prüfschemata orientieren sich an den Vorgaben des BAFzA (Bundesamt für Familie und zivilgesellschaftliche Aufgaben).
          </div>
        </div>
      </div>

      <FaqSection 
        onOpenGenerator={() => scrollToSection('antrags-generator')} 
      />
    </div>
  );
};

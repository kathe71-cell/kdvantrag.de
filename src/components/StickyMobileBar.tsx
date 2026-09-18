import React, { useState, useEffect } from 'react';
import { FileText, ArrowRight } from 'lucide-react';
import { PageRoute } from '../types';

interface StickyMobileBarProps {
  setRoute: (route: PageRoute) => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({ setRoute }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 p-3 shadow-lg animate-in slide-in-from-bottom duration-200">
      <div className="flex items-center justify-between gap-3">
        <div className="truncate">
          <span className="block text-xs font-black text-slate-900">
            KDV-Musterschreiben
          </span>
          <span className="block text-[10px] text-slate-500 truncate">
            Anschreiben, Lebenslauf &amp; Fragen
          </span>
        </div>
        <button
          onClick={() => {
            setRoute('vorlagen');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs shadow-xs flex items-center gap-1.5 shrink-0 border border-amber-600/30"
        >
          <FileText className="w-3.5 h-3.5" />
          <span>Muster öffnen</span>
          <ArrowRight className="w-3 h-3 stroke-[2.5]" />
        </button>
      </div>
    </div>
  );
};

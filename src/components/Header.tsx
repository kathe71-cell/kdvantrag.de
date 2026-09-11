import React, { useState } from 'react';
import { Shield, FileText, CheckSquare, HelpCircle, Menu, X, Clock } from 'lucide-react';
import { PageRoute } from '../types';

interface HeaderProps {
  currentRoute: PageRoute;
  setRoute: (route: PageRoute) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentRoute, setRoute }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigateTo = (route: PageRoute) => {
    setRoute(route);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo & Brand */}
          <div 
            onClick={() => navigateTo('home')}
            className="flex items-center gap-3 cursor-pointer group select-none"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-slate-900 flex items-center justify-center text-amber-400 shadow-md group-hover:bg-slate-800 transition-colors">
              <Shield className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                  KDV<span className="text-amber-600">antrag</span>.de
                </span>
                <span className="hidden sm:inline-block text-[10px] uppercase tracking-wider font-extrabold px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                  Ratgeber
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium hidden sm:block">
                Leitfaden &amp; Formulare zur Kriegsdienstverweigerung
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            <button
              onClick={() => navigateTo('ablauf')}
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-1.5 ${
                currentRoute === 'ablauf'
                  ? 'bg-slate-100 text-slate-950 font-bold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <CheckSquare className="w-4 h-4 text-amber-600" />
              Ablauf &amp; Phasen
            </button>
            <button
              onClick={() => navigateTo('vorlagen')}
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-1.5 ${
                currentRoute === 'vorlagen'
                  ? 'bg-slate-100 text-slate-950 font-bold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <FileText className="w-4 h-4 text-amber-600" />
              Vorlagen-Generator
            </button>
            <button
              onClick={() => navigateTo('ratgeber')}
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-1.5 ${
                currentRoute === 'ratgeber'
                  ? 'bg-slate-100 text-slate-950 font-bold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <HelpCircle className="w-4 h-4 text-amber-600" />
              Ratgeber &amp; Fehler
            </button>
            <button
              onClick={() => navigateTo('rechner')}
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-1.5 ${
                currentRoute === 'rechner'
                  ? 'bg-slate-100 text-slate-950 font-bold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Clock className="w-4 h-4 text-amber-600" />
              Fristen-Check
            </button>
          </nav>

          {/* Action Button Desktop */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => navigateTo('vorlagen')}
              className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm shadow-sm transition-all transform active:scale-95 flex items-center gap-2 border border-amber-600/30"
            >
              <FileText className="w-4 h-4 stroke-[2.5]" />
              <span>Antrag zusammenstellen *</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => navigateTo('vorlagen')}
              className="px-3 py-1.5 rounded-lg bg-amber-500 text-slate-950 font-extrabold text-xs flex sm:hidden"
            >
              Muster *
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Hauptmenü umschalten"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top duration-200">
          <button
            onClick={() => navigateTo('ablauf')}
            className={`w-full text-left px-3 py-2.5 rounded-lg text-base font-semibold flex items-center justify-between ${
              currentRoute === 'ablauf' ? 'bg-slate-100 text-slate-950 font-bold' : 'text-slate-700'
            }`}
          >
            <span>Ablauf &amp; Verfahrensschritte</span>
            <CheckSquare className="w-4 h-4 text-amber-600" />
          </button>
          <button
            onClick={() => navigateTo('vorlagen')}
            className={`w-full text-left px-3 py-2.5 rounded-lg text-base font-semibold flex items-center justify-between ${
              currentRoute === 'vorlagen' ? 'bg-slate-100 text-slate-950 font-bold' : 'text-slate-700'
            }`}
          >
            <span>Vorlagen &amp; Begründungs-Hilfe</span>
            <FileText className="w-4 h-4 text-amber-600" />
          </button>
          <button
            onClick={() => navigateTo('ratgeber')}
            className={`w-full text-left px-3 py-2.5 rounded-lg text-base font-semibold flex items-center justify-between ${
              currentRoute === 'ratgeber' ? 'bg-slate-100 text-slate-950 font-bold' : 'text-slate-700'
            }`}
          >
            <span>Typische Fehler &amp; Mythen</span>
            <HelpCircle className="w-4 h-4 text-amber-600" />
          </button>
          <button
            onClick={() => navigateTo('rechner')}
            className={`w-full text-left px-3 py-2.5 rounded-lg text-base font-semibold flex items-center justify-between ${
              currentRoute === 'rechner' ? 'bg-slate-100 text-slate-950 font-bold' : 'text-slate-700'
            }`}
          >
            <span>Fristen- &amp; Bearbeitungs-Check</span>
            <Clock className="w-4 h-4 text-amber-600" />
          </button>
          <div className="pt-2">
            <button
              onClick={() => navigateTo('vorlagen')}
              className="w-full py-3 rounded-xl bg-amber-500 text-slate-950 font-black text-center shadow-md flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4 stroke-[2.5]" />
              KDV-Antrag jetzt vorbereiten *
            </button>
          </div>
          <div className="pt-2 text-center">
            <span className="text-[11px] text-slate-400">
              * Werbelink / Partnerempfehlung für Rechtsberatung &amp; Formulardienste
            </span>
          </div>
        </div>
      )}
    </header>
  );
};

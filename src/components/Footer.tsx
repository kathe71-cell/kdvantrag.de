import React from 'react';
import { Shield, Scale } from 'lucide-react';
import { PageRoute } from '../types';

interface FooterProps {
  setRoute: (route: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ setRoute }) => {
  const navigateTo = (route: PageRoute) => {
    setRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Purpose */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-amber-400">
                <Shield className="w-6 h-6" />
              </div>
              <span className="text-xl font-black text-white tracking-tight">
                KDV<span className="text-amber-400">antrag</span>.de
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Unabhängiges Informations- und Wissensportal zur Kriegsdienstverweigerung nach Art. 4 Abs. 3 Grundgesetz und dem Kriegsdienstverweigerungsgesetz (KDVG).
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700 text-xs text-slate-300 font-medium">
              <Scale className="w-4 h-4 text-amber-400" />
              <span>Information &amp; Musterschreiben</span>
            </div>
          </div>

          {/* Quick Links Navigation */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Navigation &amp; Werkzeuge
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button 
                  onClick={() => navigateTo('home')}
                  className="hover:text-amber-400 transition-colors text-slate-300 flex items-center gap-1.5"
                >
                  Startseite
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('ablauf')}
                  className="hover:text-amber-400 transition-colors text-slate-300 flex items-center gap-1.5"
                >
                  Verfahrensablauf &amp; Zuständigkeiten
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('vorlagen')}
                  className="hover:text-amber-400 transition-colors text-slate-300 flex items-center gap-1.5"
                >
                  Musterschreiben &amp; Gliederung
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('ratgeber')}
                  className="hover:text-amber-400 transition-colors text-slate-300 flex items-center gap-1.5"
                >
                  Rechtliche &amp; fachliche Maßstäbe
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('rechner')}
                  className="hover:text-amber-400 transition-colors text-slate-300 flex items-center gap-1.5"
                >
                  Fristenberechnung nach VwGO
                </button>
              </li>
            </ul>
          </div>

          {/* Rechtliche Pflicht-Links & Status */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Rechtliches &amp; Datenschutz
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => navigateTo('impressum')}
                  className="hover:text-amber-400 transition-colors text-amber-400 font-bold flex items-center gap-1.5"
                >
                  Impressum (§ 5 DDG)
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('datenschutz')}
                  className="hover:text-amber-400 transition-colors text-slate-300 flex items-center gap-1.5"
                >
                  Datenschutzerklärung (DSGVO)
                </button>
              </li>
            </ul>
            <div className="mt-5 p-3.5 rounded-lg bg-slate-800/60 border border-slate-700/60 text-xs text-slate-400 leading-relaxed">
              <span className="font-semibold text-slate-300 block mb-1">Datenschutzhinweis:</span>
              Dieses Portal lädt keine Schriftarten von Google-Servern. Eingaben im Formular-Generator verbleiben ausschließlich lokal in Ihrem Webbrowser.
            </div>
          </div>

        </div>

        {/* Transparenzhinweis & Abgrenzung */}
        <div className="mt-8 space-y-4 text-xs text-slate-400 leading-relaxed">
          
          <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-800 text-slate-400">
            <p className="font-semibold text-slate-200 mb-1">
              Behördenabgrenzung &amp; Rechtsdienstleistungshinweis:
            </p>
            <p className="mb-2">
              Dieses Internetangebot (kdvantrag.de) ist ein unabhängiges Informationsportal. Es steht in keinem verwaltungsrechtlichen, personellen oder behördlichen Verhältnis zum Bundesamt für das Personalmanagement der Bundeswehr (BAPersBw), zum Bundesamt für Familie und zivilgesellschaftliche Aufgaben (BAFzA) oder zum Bundesministerium der Verteidigung (BMVg).
            </p>
            <p>
              Die bereitgestellten Inhalte, Musterschreiben und Fristenrechner stellen keine individuelle Rechtsberatung nach dem Rechtsdienstleistungsgesetz (RDG) dar und ersetzen im Einzelfall keine Beratung durch zugelassene Rechtsanwälte oder anerkannte Beratungsstellen.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800 text-slate-400 text-xs">
            <p>© {new Date().getFullYear()} kdvantrag.de • Alle Rechte vorbehalten.</p>
            <div className="flex items-center gap-4">
              <button onClick={() => navigateTo('impressum')} className="hover:text-slate-200">Impressum</button>
              <span>•</span>
              <button onClick={() => navigateTo('datenschutz')} className="hover:text-slate-200">Datenschutz</button>
              <span>•</span>
              <button onClick={() => navigateTo('ablauf')} className="hover:text-slate-200">Ablauf</button>
            </div>
          </div>

        </div>
      </div>
    
            <div className="mt-8 p-4 rounded-xl bg-slate-900 border border-slate-800 text-sm text-slate-300">
              <span className="font-bold text-white block mb-1">Projektübernahme</span>
              <p className="mb-2">Interesse an der Übernahme von kdvantrag.de inklusive Projekt?</p>
              <a href="/projektuebernahme" className="text-blue-400 hover:text-blue-300 font-medium">
                Mehr erfahren &rarr;
              </a>
            </div>

</footer>
  );
};

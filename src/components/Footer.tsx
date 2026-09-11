import React from 'react';
import { Shield, Scale, ExternalLink, AlertTriangle } from 'lucide-react';
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
              Unabhängiger Ratgeber, Vorlagen-Leitfaden und Wissensportal zur Kriegsdienstverweigerung nach Art. 4 Abs. 3 Grundgesetz und dem Kriegsdienstverweigerungsgesetz (KDVG).
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700 text-xs text-slate-300 font-medium">
              <Scale className="w-4 h-4 text-amber-400" />
              <span>Neutral • Fundiert • Unabhängig</span>
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
                  Startseite &amp; Übersicht
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
                  Musterantrag &amp; Begründungs-Hilfe
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('ratgeber')}
                  className="hover:text-amber-400 transition-colors text-slate-300 flex items-center gap-1.5"
                >
                  Typische Ablehnungsgründe
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('rechner')}
                  className="hover:text-amber-400 transition-colors text-slate-300 flex items-center gap-1.5"
                >
                  Fristen- &amp; Bearbeitungszeit-Rechner
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
              <li>
                <a
                  href="https://ec.europa.eu/consumers/odr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors text-xs text-slate-400 flex items-center gap-1"
                >
                  <span>EU-Online-Streitbeilegung (OS)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
            <div className="mt-5 p-3.5 rounded-lg bg-slate-800/60 border border-slate-700/60 text-xs text-slate-400">
              <span className="font-semibold text-slate-300 block mb-1">100% Privacy-Garantie:</span>
              Dieses Portal lädt keinerlei externe Schriftarten von Google-Servern. Alle Daten im Formular-Generator verbleiben lokal in Ihrem Webbrowser.
            </div>
          </div>

        </div>

        {/* Regulatory Disclaimers & UWG Protection */}
        <div className="mt-8 space-y-4 text-xs text-slate-400 leading-relaxed">
          
          <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-800 text-slate-400 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
            <div className="space-y-1.5">
              <p className="font-semibold text-slate-200">
                Wichtiger Transparenz- und Rechtsberatungshinweis (RDG &amp; UWG):
              </p>
              <p>
                Dieses Portal ist ein unabhängiges Informations- und Hilfsangebot und steht in keinem gesellschaftsrechtlichen, verwaltungsrechtlichen oder dienstlichen Verhältnis zum Bundesministerium der Verteidigung (BMVg), der Bundeswehr, dem Bundesamt für das Personalmanagement der Bundeswehr (BAPersBw) oder dem Bundesamt für Familie und zivilgesellschaftliche Aufgaben (BAFzA).
              </p>
              <p>
                Die auf kdvantrag.de bereitgestellten Inhalte, Formulierungshilfen, Checklisten und Modellberechnungen stellen keine Rechtsberatung im Sinne des Rechtsdienstleistungsgesetzes (RDG) dar. Sie ersetzen im Streitfall keine anwaltliche Prüfung oder Rechtsberatung durch einen zugelassenen Fachanwalt oder eine anerkannte Kriegsdienstverweigerungs-Beratungsstelle (z. B. DFG-VK, EAK).
              </p>
              <p>
                * Kennzeichnung von Partner- und Werbelinks: Soweit Links oder Buttons mit einem Sternchen (*) markiert sind, handelt es sich um Partner- oder Empfehlungslinks. Bei Inanspruchnahme kooperierender Dienstleistungen (z. B. anwaltliche Erstprüfung oder Beratungsnetzwerke) erhalten wir unter Umständen eine Provision. Ihnen entstehen dadurch keine zusätzlichen Kosten.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800 text-slate-400 text-xs">
            <p>© {new Date().getFullYear()} kdvantrag.de • Alle Rechte vorbehalten.</p>
            <div className="flex items-center gap-4">
              <button onClick={() => navigateTo('impressum')} className="hover:text-slate-200">Impressum</button>
              <span>•</span>
              <button onClick={() => navigateTo('datenschutz')} className="hover:text-slate-200">Datenschutz</button>
              <span>•</span>
              <button onClick={() => navigateTo('ablauf')} className="hover:text-slate-200">Leitfaden</button>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

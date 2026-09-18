import ScrollToTop from './components/ScrollToTop';
import React, { useState, useEffect } from 'react';
import { PageRoute } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { StickyMobileBar } from './components/StickyMobileBar';
import { HomePage } from './pages/HomePage';
import { AblaufPage } from './pages/AblaufPage';
import { VorlagenPage } from './pages/VorlagenPage';
import { RatgeberPage } from './pages/RatgeberPage';
import { RechnerPage } from './pages/RechnerPage';
import { ImpressumPage } from './pages/ImpressumPage';
import { DatenschutzPage } from './pages/DatenschutzPage';
import { FristenRechner } from './components/FristenRechner';
import { Analytics } from '@vercel/analytics/react';

export const App: React.FC<{ initialPath?: string }> = ({ initialPath }) => {
  // Parse initial route from window pathname
  const getInitialRoute = (): PageRoute => {
    const rawPath = initialPath !== undefined
      ? initialPath
      : (typeof window !== 'undefined' ? window.location.pathname : '/');
    const path = rawPath.replace(/^\/+|\/+$/g, '');
    if (path === 'ablauf') return 'ablauf';
    if (path === 'vorlagen') return 'vorlagen';
    if (path === 'ratgeber') return 'ratgeber';
    if (path === 'rechner') return 'rechner';
    if (path === 'rechner-embed') return 'rechner-embed';
    if (path === 'impressum') return 'impressum';
    if (path === 'datenschutz') return 'datenschutz';
    return 'home';
  };

  const [currentRoute, setCurrentRoute] = useState<PageRoute>(getInitialRoute);

  // Synchronize route state with browser history
  const handleSetRoute = (newRoute: PageRoute) => {
    setCurrentRoute(newRoute);
    if (typeof window !== 'undefined') {
      const targetPath = newRoute === 'home' ? '/' : `/${newRoute}`;
      if (window.location.pathname !== targetPath) {
        window.history.pushState({ route: newRoute }, '', targetPath);
      }
    }
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const onPopState = () => {
      setCurrentRoute(getInitialRoute());
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  // Update page title per route
  useEffect(() => {
    const titles: Record<PageRoute, string> = {
      home: 'KDV-Antrag Leitfaden & Vorlagen | Kriegsdienstverweigerung',
      ablauf: 'Verfahrensablauf & Phasen des KDV-Antrags | kdvantrag.de',
      vorlagen: 'KDV-Musterantrag, Lebenslauf & Leitfaden | kdvantrag.de',
      ratgeber: 'Typische Fehler & BVerwG-Rechtsprechung | kdvantrag.de',
      rechner: 'Fristen- und Bearbeitungszeiten-Rechner | kdvantrag.de',
      'rechner-embed': 'KDV Fristen- & Bearbeitungszeiten-Rechner | kdvantrag.de',
      impressum: 'Impressum (§ 5 DDG) | kdvantrag.de',
      datenschutz: 'Datenschutzerklärung (DSGVO) | kdvantrag.de'
    };
    document.title = titles[currentRoute] || titles.home;

    // Dynamically update canonical link element for GSC indexing
    let canonicalElement = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalElement) {
      canonicalElement = document.createElement('link');
      canonicalElement.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalElement);
    }
    const canonicalPath = currentRoute === 'home' ? '' : currentRoute;
    canonicalElement.setAttribute('href', `https://www.kdvantrag.de/${canonicalPath}`);

    // Track SPA route change in Vercel Analytics
    if (typeof window !== 'undefined' && (window as unknown as { va?: (type: string, data: object) => void }).va) {
      (window as unknown as { va: (type: string, data: object) => void }).va('pageview', { path: window.location.pathname });
    }
  }, [currentRoute]);

  // Standalone embed widget view
  if (currentRoute === 'rechner-embed') {
    return (
      <div className="min-h-screen bg-slate-50 p-2 sm:p-4 text-slate-900 flex flex-col justify-between">
        <FristenRechner />
        <div className="text-center py-3 text-xs font-semibold text-slate-500 border-t border-slate-200 mt-6 bg-white/80 rounded-xl p-3 shadow-xs">
          Berechnung nach KDVG &amp; VwVfG · Widget bereitgestellt von{' '}
          <a
            href="https://kdvantrag.de"
            target="_blank"
            rel="noopener"
            className="text-amber-700 hover:text-amber-800 font-extrabold hover:underline"
          >
            kdvantrag.de – KDV-Antrag Leitfaden &amp; Vorlagen
          </a>
        </div>
        <ScrollToTop />
      <Analytics />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-amber-100 selection:text-amber-950">
      <Header currentRoute={currentRoute} setRoute={handleSetRoute} />

      <main className="flex-grow">
        {currentRoute === 'home' && <HomePage setRoute={handleSetRoute} />}
        {currentRoute === 'ablauf' && <AblaufPage setRoute={handleSetRoute} />}
        {currentRoute === 'vorlagen' && <VorlagenPage setRoute={handleSetRoute} />}
        {currentRoute === 'ratgeber' && <RatgeberPage setRoute={handleSetRoute} />}
        {currentRoute === 'rechner' && <RechnerPage setRoute={handleSetRoute} />}
        {currentRoute === 'impressum' && <ImpressumPage setRoute={handleSetRoute} />}
        {currentRoute === 'datenschutz' && <DatenschutzPage setRoute={handleSetRoute} />}
      </main>

      <StickyMobileBar setRoute={handleSetRoute} />
      <Footer setRoute={handleSetRoute} />
      <ScrollToTop />
      <Analytics />
    </div>
  );
};

export default App;

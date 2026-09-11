import React from 'react';
import { Shield, FileCheck, CheckCircle2, ArrowRight, BookmarkCheck, Calendar, Award } from 'lucide-react';
import { PageRoute } from '../types';

interface HeroProps {
  setRoute: (route: PageRoute) => void;
  onOpenFinder: () => void;
}

export const Hero: React.FC<HeroProps> = ({ setRoute, onOpenFinder }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-100/80 via-white to-slate-50 pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-200">
      {/* Decorative subtle background accents */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute -top-24 right-0 w-96 h-96 rounded-full bg-amber-200/40 blur-3xl" />
        <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-slate-300/30 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top constitutional quote badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 border border-amber-300 shadow-sm text-slate-950 text-xs sm:text-sm font-bold tracking-tight">
            <Shield className="w-4 h-4 text-amber-700 shrink-0" />
            <span>Grundgesetz für die Bundesrepublik Deutschland: Art. 4 Abs. 3</span>
          </div>
        </div>

        {/* Main Headline & Value Proposition */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.15]">
            Den KDV-Antrag <span className="underline decoration-amber-500 decoration-4 underline-offset-4">rechtssicher</span> und überzeugend vorbereiten.
          </h1>
          
          <p className="mt-6 text-base sm:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed font-normal">
            „Niemand darf gegen sein Gewissen zum Kriegsdienst mit der Waffe gezwungen werden.“ 
            Nutzen Sie unseren unabhängigen Leitfaden, Muster-Gliederungen und den interaktiven Behörden-Finder für Ungediente, Reservisten und Soldatinnen &amp; Soldaten.
          </p>

          {/* Position-0 Featured Snippet Definition Box (Google AI Overviews) */}
          <div className="mt-8 bg-amber-50/80 border-l-4 border-amber-500 rounded-r-2xl p-5 sm:p-6 shadow-sm text-left">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-amber-950 mb-2">
              <BookmarkCheck className="w-4 h-4 text-amber-600" />
              <span>Auf den Punkt gebracht: Definition &amp; Rechtliche Grundlagen des KDV-Antrags</span>
            </div>
            <p className="text-slate-950 font-bold text-sm sm:text-base leading-snug">
              Ein KDV-Antrag (Kriegsdienstverweigerung) stützt sich auf das Grundrecht aus Art. 4 Abs. 3 Satz 1 GG sowie das Kriegsdienstverweigerungsgesetz (KDVG). Er erfordert einen schriftlichen Antrag, einen ausführlichen tabellarischen Lebenslauf und eine persönliche, schlüssige Darlegung der Gewissensentscheidung gegen den Waffendienst. Zuständige Prüfbehörde ist das Bundesamt für Familie und zivilgesellschaftliche Aufgaben (BAFzA).
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-600 pt-2 border-t border-amber-200/60">
              <span className="flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-amber-600" />
                Rechtsnorm: <strong>Art. 4 Abs. 3 GG &amp; § 1 KDVG</strong>
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                Geprüfter Stand: <strong>September 2026</strong>
              </span>
              <span className="flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-amber-700" />
                BAFzA- &amp; VwVfG-konform
              </span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setRoute('vorlagen')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-base shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-3 border border-amber-600/30"
            >
              <FileCheck className="w-5 h-5 stroke-[2.5]" />
              <span>Musterantrag zusammenstellen *</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
            <button
              onClick={onOpenFinder}
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-900 font-bold text-base border-2 border-slate-300 hover:border-slate-400 shadow-sm transition-all flex items-center justify-center gap-2"
            >
              <span>Zuständigkeit &amp; Status prüfen</span>
            </button>
          </div>

          <p className="mt-3 text-xs text-slate-500 font-medium">
            * Unverbindliche Orientierungshilfe &amp; Partner-Leitfaden • Keine behördliche Einreichung
          </p>
        </div>

        {/* 3 Pillars Key Features Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center font-black text-lg mb-5">
              1
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">
              Der formlose Antrag
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Das offizielle Anschreiben mit Ihren vollständigen Personaldaten, Wohnsitz und der eindeutigen Berufung auf Art. 4 Abs. 3 GG &amp; § 1 KDVG.
            </p>
            <span className="inline-flex items-center gap-1 text-xs font-bold text-slate-900 bg-slate-100 px-2.5 py-1 rounded-md">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              Inklusive Muster-Deckblatt
            </span>
          </div>

          <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center font-black text-lg mb-5">
              2
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">
              Tabellarischer Lebenslauf
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Vollständiger Lebenslauf mit Schwerpunkt auf biografischen Prägungen, familiärer Wertevermittlung und ethischer Entwicklung.
            </p>
            <span className="inline-flex items-center gap-1 text-xs font-bold text-slate-900 bg-slate-100 px-2.5 py-1 rounded-md">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              Lückenlose Dokumentation
            </span>
          </div>

          <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center font-black text-lg mb-5">
              3
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">
              Die Gewissensbegründung
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Das Herzstück des KDV-Antrags: Ihre unumkehrbare innere Entscheidung gegen das Töten von Menschen. Niemals als fremdes Muster kopieren!
            </p>
            <span className="inline-flex items-center gap-1 text-xs font-bold text-slate-900 bg-slate-100 px-2.5 py-1 rounded-md">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              Individuelle Gliederungshilfe
            </span>
          </div>

        </div>

        {/* Live Fact Bar */}
        <div className="mt-10 p-4 rounded-xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-sm">
            <div className="p-2 rounded-lg bg-amber-500 text-slate-950 font-black shrink-0">
              TIPP
            </div>
            <span className="text-slate-300">
              <strong>Vorsicht vor Mustertexten:</strong> Das BAPersBw lehnt Anträge ab, wenn wortgleiche Argumentationen aus Internetforen verwendet werden. Nutzen Sie strukturierte Leitfragen statt Copy-Paste.
            </span>
          </div>
          <button
            onClick={() => setRoute('ratgeber')}
            className="shrink-0 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-400 text-xs font-extrabold transition-colors border border-slate-700"
          >
            Ratgeber lesen →
          </button>
        </div>

      </div>
    </section>
  );
};

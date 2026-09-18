import React from 'react';
import { Shield, FileCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { PageRoute } from '../types';

interface HeroProps {
  setRoute: (route: PageRoute) => void;
  onOpenFinder: () => void;
}

export const Hero: React.FC<HeroProps> = ({ setRoute, onOpenFinder }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-100/80 via-white to-slate-50 pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-200">
      
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute -top-24 right-0 w-96 h-96 rounded-full bg-amber-200/40 blur-3xl" />
        <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-slate-300/30 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Constitutional quote badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 border border-amber-300 shadow-xs text-slate-950 text-xs sm:text-sm font-bold tracking-tight">
            <Shield className="w-4 h-4 text-amber-700 shrink-0" />
            <span>Grundgesetz für die Bundesrepublik Deutschland: Art. 4 Abs. 3</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.15]">
            Den KDV-Antrag <span className="underline decoration-amber-500 decoration-4 underline-offset-4">form- &amp; fristgerecht</span> vorbereiten.
          </h1>
          
          <p className="mt-6 text-base sm:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed font-normal">
            „Niemand darf gegen sein Gewissen zum Kriegsdienst mit der Waffe gezwungen werden.“ 
            Unabhängiger Orientierungsleitfaden, Musterschreiben und Behörden-Finder für Ungediente, aktive Soldatinnen &amp; Soldaten sowie Reservisten.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setRoute('vorlagen')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-base shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-3 border border-amber-600/30"
            >
              <FileCheck className="w-5 h-5 stroke-[2.5]" />
              <span>Musterschreiben &amp; Gliederung</span>
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
            Kostenloses Informationsangebot · Einreichung bei der zuständigen Wehrersatzbehörde (BAPersBw)
          </p>
        </div>

        {/* 3 Pillars Key Features Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center font-black text-lg mb-5">
              1
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">
              Formloses Anschreiben
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              DIN 5008 konformes Anschreiben an das BAPersBw (Wehrersatzbehörde) in Köln mit Berufung auf Art. 4 Abs. 3 GG und das KDVG.
            </p>
            <span className="inline-flex items-center gap-1 text-xs font-bold text-slate-900 bg-slate-100 px-2.5 py-1 rounded-md">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              Inklusive Muster-Deckblatt
            </span>
          </div>

          <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center font-black text-lg mb-5">
              2
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">
              Tabellarischer Lebenslauf
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Lückenlose Aufstellung des schulischen und beruflichen Werdegangs gemäß § 2 KDVG.
            </p>
            <span className="inline-flex items-center gap-1 text-xs font-bold text-slate-900 bg-slate-100 px-2.5 py-1 rounded-md">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              Gesetzliche Pflichtanlage
            </span>
          </div>

          <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center font-black text-lg mb-5">
              3
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">
              Gewissensbegründung
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Offene Gliederungsfragen für Ihre eigenständige schriftliche Begründung. Keine vorgefertigten Copy-Paste-Texte (BAFzA-Vorgabe).
            </p>
            <span className="inline-flex items-center gap-1 text-xs font-bold text-slate-900 bg-slate-100 px-2.5 py-1 rounded-md">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              Eigenständige Ausarbeitung
            </span>
          </div>

        </div>

        {/* Official Info Banner */}
        <div className="mt-10 p-4 rounded-xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-sm">
            <div className="p-2 rounded-lg bg-amber-500 text-slate-950 font-black shrink-0">
              BAFzA
            </div>
            <span className="text-slate-300">
              <strong>Amtliche Vorgabe:</strong> Vorgefertigte Formulierungen oder KI-generierte Texte werden von den Prüfern abgelehnt. Die Gewissensentscheidung muss persönlich verfasst werden.
            </span>
          </div>
          <button
            onClick={() => setRoute('ratgeber')}
            className="shrink-0 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-400 text-xs font-extrabold transition-colors border border-slate-700"
          >
            Maßstäbe lesen →
          </button>
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { XCircle, CheckCircle2, ArrowRight, Scale } from 'lucide-react';

interface MistakesGuideProps {
  onOpenGenerator: () => void;
}

export const MistakesGuide: React.FC<MistakesGuideProps> = ({ onOpenGenerator }) => {
  const pitfalls = [
    {
      title: '1. Politische statt ethischer Argumentation',
      problem: 'Der Antrag wird primär mit Kritik an Bündnispolitik, bestimmten Auslandseinsätzen oder parteipolitischen Entscheidungen begründet.',
      requirement: 'Rechtsprechung des BVerfG & BVerwG: Eine Gewissensentscheidung nach Art. 4 Abs. 3 GG erfordert die unbedingte und kategorische Ablehnung jeder Tötung von Menschen im Krieg, unabhängig von Politik oder Gegner.',
      category: 'Fachlicher Maßstab'
    },
    {
      title: '2. Verwendung von Mustertexten oder KI-generierten Vorlagen',
      problem: 'Verwendung von vorgefertigten Textbausteinen, Internet-Mustern oder automatisierten Sprachtexten für die Gewissensbegründung.',
      requirement: 'Amtlicher Grundsatz des BAFzA: „Vorgefertigte Formulierungen, Internet-Vorlagen oder durch künstliche Intelligenz generierte Texte werden nicht akzeptiert. Bei der Prüfung steht die Ernsthaftigkeit Ihrer persönlichen Gewissensentscheidung im Fokus.“ (bafza.de)',
      category: 'Formale Prüfung'
    },
    {
      title: '3. Selektive oder situative Verweigerung',
      problem: 'Aussagen, dass der Dienst an der Waffe nur in bestimmten Kriegen oder Konstellationen verweigert werde (z. B. „Nur bei Angriffen auf Land X“).',
      requirement: 'Das BVerwG versagt bei situativer Pazifismus-Begründung die Anerkennung. Das Gewissen muss das Führen von Waffen im Krieg schlechthin verbieten.',
      category: 'Verfassungsrecht'
    },
    {
      title: '4. Ungeklärte Widersprüche in der Biografie',
      problem: 'Aktiver Schießsport, Waffenbesitz oder gewaltbetonte Freizeitaktivitäten im Lebenslauf, ohne dass deren Beendigung oder ein innerer Sinneswandel erläutert werden.',
      requirement: 'Die Darlegung muss schlüssig aufzeigen, wie und warum sich eine Kehrtwende in der eigenen Haltung vollzogen hat.',
      category: 'Biografie-Prüfung'
    },
    {
      title: '5. Verwechseln von Fristen und Bescheidarten',
      problem: 'Gleichsetzen der Monatsfrist mit pauschal 30 Tagen oder Fristversäumnis bei der Einlegung des Rechtsbehelfs.',
      requirement: 'Die Widerspruchsfrist (§ 70 VwGO) beträgt einen Kalendermonat und berechnet sich nach § 31 VwVfG i. V. m. §§ 187 ff. BGB unter Berücksichtigung von Bekanntgabe und Feiertagen.',
      category: 'Verwaltungsverfahren'
    },
    {
      title: '6. Irrtum über die Wirkung bei bereits erfolgter Einberufung',
      problem: 'Annahme, dass ein nach Zustellung des Einberufungsbescheids gestellter Antrag ausnahmslos vor dem Dienstantritt schützt.',
      requirement: 'Wird der KDV-Antrag erst nach Zustellung eines Einberufungsbescheids gestellt, greift vorbehaltlich der gesetzlichen Privilegierung nach § 13 Abs. 3 i. V. m. Abs. 1 KDVG die Ausnahme des § 3 Abs. 2 Satz 2 KDVG. Eine Vollzugshemmung tritt dann nicht automatisch ein und ein Eilantrag (§ 80 Abs. 5 VwGO) beim Verwaltungsgericht ist erforderlich.',
      category: 'Einstweiliger Rechtsschutz'
    }
  ];

  return (
    <section id="fehler-guide" className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider mb-3">
            Rechtliche &amp; Fachliche Maßstäbe
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Prüfungskriterien der Gewissensentscheidung
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Rechtsprechung des Bundesverfassungsgerichts (BVerfG), des Bundesverwaltungsgerichts (BVerwG) und Vorgaben des BAFzA.
          </p>
        </div>

        {/* BVerfG Definition Card */}
        <div className="max-w-5xl mx-auto mb-10 p-6 sm:p-8 rounded-2xl bg-slate-900 text-white shadow-md">
          <div className="flex items-center gap-2 text-amber-400 font-bold text-sm uppercase tracking-wider mb-3">
            <Scale className="w-5 h-5" />
            <span>Verfassungsrechtlicher Maßstab (BVerfGE 12, 45)</span>
          </div>
          <blockquote className="text-sm sm:text-base text-slate-200 italic leading-relaxed border-l-4 border-amber-500 pl-4 py-1">
            „Eine Gewissensentscheidung im Sinne von Art. 4 Abs. 3 GG ist jede ernste, sittliche, d. h. an den Kategorien von ‚Gut‘ und ‚Böse‘ orientierte Entscheidung, die der Einzelne in einer bestimmten Lage als für sich bindend und unbedingt verpflichtend erfährt, so dass er gegen sie nicht ohne schwere Gewissensnot handeln könnte.“
          </blockquote>
          <p className="mt-4 text-xs text-slate-400">
            Quelle: Bundesverfassungsgericht (BVerfGE 12, 45) · Entscheidung zum Grundrecht auf Kriegsdienstverweigerung
          </p>
        </div>

        {/* Pitfall Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {pitfalls.map((item, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <h3 className="font-bold text-base text-slate-950">
                    {item.title}
                  </h3>
                  <span className="px-2 py-0.5 rounded bg-slate-200 text-slate-800 text-[10px] font-bold shrink-0">
                    {item.category}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-slate-100 border border-slate-200 text-slate-900 text-xs sm:text-sm mb-3 flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-slate-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-bold">Problemstellung:</strong>
                    {item.problem}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white border border-slate-200 text-slate-800 text-xs sm:text-sm flex items-start gap-2.5 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-bold text-slate-900">Rechtliche Anforderung:</strong>
                    {item.requirement}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={onOpenGenerator}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm shadow-sm transition-all border border-amber-600/30"
          >
            <span>Gliederungsstruktur für die Begründung aufrufen</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

      </div>
    </section>
  );
};

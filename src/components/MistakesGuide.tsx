import React from 'react';
import { XCircle, CheckCircle2, ArrowRight } from 'lucide-react';

interface MistakesGuideProps {
  onOpenGenerator: () => void;
}

export const MistakesGuide: React.FC<MistakesGuideProps> = ({ onOpenGenerator }) => {
  const pitfalls = [
    {
      title: '1. Politische statt gewissensbezogene Argumentation',
      fatal: 'Der Antrag begründet die Verweigerung mit Kritik an der NATO, bestimmten Bundeswehr-Auslandseinsätzen oder aktuellen Regierungskoalitionen.',
      solution: 'Rechtsprechung des BVerwG: Eine Gewissensentscheidung nach Art. 4 Abs. 3 GG erfordert die unbedingte und kategorische Ablehnung jeder Tötung von Menschen, unabhängig von Politik, Bündnissen oder Staaten.',
      status: 'Häufigster Ablehnungsgrund'
    },
    {
      title: '2. Wörtliches Kopieren von Internet-Mustertexten',
      fatal: 'Verwendung von fertigen Vorlagen, Argumentationsschablonen oder KI-generierten Einheitsfloskeln für die Gewissensbegründung.',
      solution: 'Die Prüfbehörde (BAPersBw) vergleicht Texte intern. Identische Textpassagen begründen den Verdacht mangelnder Ernsthaftigkeit und führen fast ausnahmslos zur Ablehnung oder mündlichen Anhörung.',
      status: 'Sofortige Entlarvung'
    },
    {
      title: '3. Selektive Verweigerung („Situativer Pazifismus“)',
      fatal: 'Aussagen wie: „Gegen einen Aggressor an unseren Grenzen würde ich kämpfen, aber nicht in Übersee-Einsätzen.“',
      solution: 'Wer den Dienst an der Waffe nur unter bestimmten Bedingungen verweigert, ist nach ständiger Rechtsprechung kein Kriegsdienstverweigerer. Die Ablehnung muss absolut sein.',
      status: 'Rechtlich unwirksam'
    },
    {
      title: '4. Unaufgeklärte Widersprüche im Lebenslauf',
      fatal: 'Aktive Mitgliedschaft in Schützenvereinen, Paintball-Aktivitäten oder Jagdschein im Lebenslauf, ohne diesen Widerspruch im Begründungstext aufzuarbeiten.',
      solution: 'Ein Sinneswandel muss transparent und glaubhaft dargelegt werden: Wann und warum wurden solche Aktivitäten beendet und wie vollzog sich die innere Kehrtwende?',
      status: 'Glaubwürdigkeitslücke'
    },
    {
      title: '5. Versäumnis der einmonatigen Rechtsbehelfsfrist',
      fatal: 'Nach Erhalt eines ablehnenden Bescheids wird zu lange gewartet; die Widerspruchsfrist von einem Monat (§ 70 VwGO) verstreicht.',
      solution: 'Sobald der Bescheid im Briefkasten liegt, beginnt die Frist. Ein fristwahrender Widerspruch muss innerhalb von 30 Tagen schriftlich eingereicht werden.',
      status: 'Fristversäumnis unumkehrbar'
    },
    {
      title: '6. Unvollständigkeit der Unterlagen (§ 2 KDVG)',
      fatal: 'Es wird nur ein formloses Schreiben eingereicht, die Begründung oder der Lebenslauf wird „nachzureichen“ versprochen.',
      solution: 'Ein KDV-Antrag ist erst vollständig und prüfbar, wenn alle 3 gesetzlichen Bestandteile (Antrag, Lebenslauf, Begründung) im Original unterschrieben vorliegen.',
      status: 'Formfehler'
    }
  ];

  return (
    <section id="fehler-guide" className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-red-900 border border-red-200 text-xs font-black uppercase tracking-wider mb-3">
            Häufige Fallstricke vermeiden
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Die 6 folgenschwersten Fehler beim KDV-Antrag
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Aus der Praxis der Prüfungsstelle des Bundesamtes (BAPersBw) und den Urteilen der Verwaltungsgerichte.
          </p>
        </div>

        {/* Pitfall Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {pitfalls.map((item, idx) => (
            <div 
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <h3 className="font-black text-base sm:text-lg text-slate-950">
                    {item.title}
                  </h3>
                  <span className="px-2.5 py-1 rounded bg-red-100 text-red-900 border border-red-300 text-[10px] font-black uppercase tracking-wider shrink-0">
                    {item.status}
                  </span>
                </div>

                {/* The Fatal error */}
                <div className="p-3 rounded-xl bg-red-50/80 border border-red-200 text-red-950 text-xs sm:text-sm mb-4 flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-bold">Der Fehler:</strong>
                    {item.fatal}
                  </div>
                </div>

                {/* The Solution */}
                <div className="p-3 rounded-xl bg-white border border-slate-200 text-slate-800 text-xs sm:text-sm flex items-start gap-2.5 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-bold text-slate-900">So machen Sie es richtig:</strong>
                    {item.solution}
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
            <span>Fehlerfrei starten: Leitfaden nutzen *</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

      </div>
    </section>
  );
};

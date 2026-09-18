import React, { useState } from 'react';
import { ChevronDown, ExternalLink } from 'lucide-react';
import { FaqItem } from '../types';

interface FaqSectionProps {
  onOpenGenerator: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenGenerator }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      category: 'recht',
      question: 'Wer kann in Deutschland einen KDV-Antrag stellen?',
      answer: 'Jede Person, die nach deutschem Recht der Wehrpflicht unterliegt oder unterliegen könnte, kann sich auf das Grundrecht der Kriegsdienstverweigerung nach Art. 4 Abs. 3 Satz 1 Grundgesetz berufen. Dies umfasst ungediente Bürgerinnen und Bürger, aktive Soldatinnen und Soldaten (Freiwillig Wehrdienstleistende, Soldaten auf Zeit, Berufssoldaten) sowie Reservistinnen und Reservisten.',
      source: 'Art. 4 Abs. 3 GG, § 1 KDVG'
    },
    {
      category: 'ablauf',
      question: 'An welche Behörde muss der KDV-Antrag adressiert werden?',
      answer: 'Der schriftliche Antrag ist bei der zuständigen Wehrersatzbehörde einzureichen: Bundesamt für das Personalmanagement der Bundeswehr (BAPersBw), Wehrersatzbehörde, Militärringstraße 1000, 50737 Köln. Aktive Soldatinnen und Soldaten reichen den Antrag auf dem Dienstweg bei ihrem Disziplinarvorgesetzten ein. Das BAPersBw bestätigt den Eingang und leitet die Akte nach Prüfung an das Bundesamt für Familie und zivilgesellschaftliche Aufgaben (BAFzA) weiter, welches über die Anerkennung entscheidet.',
      source: 'BAFzA (bafza.de), § 3 KDVG'
    },
    {
      category: 'begruendung',
      question: 'Welche Unterlagen müssen dem Antrag zwingend beiliegen?',
      answer: 'Gemäß § 2 KDVG muss das Antragsdossier aus drei Teilen bestehen: 1. Einem schriftlichen Anschreiben mit Berufung auf Art. 4 Abs. 3 GG und Unterschrift, 2. einem vollständigen tabellarischen Lebenslauf und 3. einer ausführlich und persönlich verfassten Begründung der Gewissensentscheidung.',
      source: '§ 2 KDVG'
    },
    {
      category: 'begruendung',
      question: 'Warum akzeptieren Prüfbehörden keine vorgefertigten Mustertexte?',
      answer: 'Das BAFzA weist ausdrücklich darauf hin: „Vorgefertigte Formulierungen, Internet-Vorlagen oder durch künstliche Intelligenz generierte Texte werden nicht akzeptiert. Bei der Prüfung steht die Ernsthaftigkeit Ihrer persönlichen Gewissensentscheidung im Fokus.“ Da es sich verfassungsrechtlich um eine höchstpersönliche Gewissensentscheidung handelt, muss die Begründung eigenständig verfasst werden.',
      source: 'Offizielle BAFzA-Vorgabe (bafza.de)'
    },
    {
      category: 'recht',
      question: 'Schützt ein KDV-Antrag vor der Einberufung?',
      answer: 'Hierbei ist differenziert zu unterscheiden: Wird der Antrag rechtzeitig gestellt, wird der Antragsteller bis zur unanfechtbaren Ablehnung des Antrags auf Anerkennung oder bis zur Rücknahme des Antrags nicht zum Grundwehrdienst einberufen (§ 3 Abs. 2 Satz 1 KDVG). Wird der Antrag erst nach Zustellung eines Einberufungsbescheids gestellt, greift grundsätzlich die Ausnahme des § 3 Abs. 2 Satz 2 KDVG (einstweiliger Rechtsschutz nach § 80 Abs. 5 VwGO erforderlich). Für Personen im Sinne des § 13 Abs. 1 KDVG (ungediente Wehrpflichtige, die vor dem 1. Januar 2010 geboren sind, in Fällen nach § 13 Abs. 1 KDVG) ordnet § 13 Abs. 3 KDVG jedoch an, dass die Ausnahme aus § 3 Abs. 2 Satz 2 KDVG keine Anwendung findet, sodass die Schutzregel des Satzes 1 auch bei Einreichung nach der Einberufung maßgeblich bleibt.',
      source: '§ 3 Abs. 2 Satz 1 & 2 KDVG, § 13 Abs. 1 & 3 KDVG, § 80 VwGO'
    },
    {
      category: 'folgen',
      question: 'Wie berechnet sich die Frist für den Widerspruch bei einem ablehnenden Bescheid?',
      answer: 'Die Frist zur Einlegung des Widerspruchs beträgt gemäß § 70 VwGO einen Monat nach Bekanntgabe des Bescheids. Die Frist berechnet sich nach den allgemeinen Regeln (§ 31 VwVfG i. V. m. §§ 187 ff. BGB). Sie entspricht dem jeweiligen Kalendermonat und ist nicht pauschal mit 30 Tagen gleichzusetzen. Bei Übermittlung durch einfachen Postbrief gilt die 4-Tage-Bekanntgabefiktion (§ 41 Abs. 2 VwVfG) ab Aufgabe zur Post. Fällt das Fristende auf ein Wochenende oder einen Feiertag, endet die Frist am nächsten Werktag (§ 31 Abs. 3 VwVfG / § 193 BGB). Fehlt eine ordnungsgemäße Rechtsbehelfsbelehrung, gilt die 1-Jahres-Frist (§ 58 Abs. 2 VwGO).',
      source: '§ 70 & § 58 VwGO, § 41 Abs. 2 VwVfG, § 31 VwVfG, § 193 BGB'
    },
    {
      category: 'folgen',
      question: 'Können bei aktiven Zeitsoldaten oder Offizieren Ausbildungskosten zurückgefordert werden?',
      answer: 'Nach § 56 Abs. 4 des Soldatengesetzes (SG) kann von ehemaligen Soldaten auf Zeit oder Berufssoldaten, deren Dienstverhältnis wegen Anerkennung als Kriegsdienstverweigerer vorzeitig endet, unter bestimmten gesetzlichen Voraussetzungen die Erstattung der Kosten für ein Studium oder eine zivile Fachausbildung verlangt werden.',
      source: '§ 56 Abs. 4 Soldatengesetz (SG)'
    },
    {
      category: 'recht',
      question: 'Können auch Reservisten den Kriegsdienst verweigern?',
      answer: 'Ja. Auch wer früher Dienst bei der Bundeswehr geleistet hat, kann einen KDV-Antrag beim BAPersBw in Köln einreichen. In der Gewissensbegründung muss jedoch dargelegt werden, wie und wodurch sich der Sinneswandel nach der Dienstzeit vollzogen hat.',
      source: '§ 1 KDVG'
    }
  ];

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq-section" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider mb-3">
            Häufig gestellte Fragen (FAQ)
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Wissenswertes zur Kriegsdienstverweigerung
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Fundierte Antworten auf Basis von Grundgesetz, KDVG, VwGO und amtlichen Angaben des BAFzA.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 hover:bg-slate-50/80 transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-sm sm:text-base text-slate-900 leading-snug">
                    {faq.question}
                  </span>
                  <div className={`p-1 rounded-full bg-slate-100 text-slate-700 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 bg-amber-100 text-amber-900' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 animate-in fade-in duration-150 space-y-2">
                    <p>{faq.answer}</p>
                    {faq.source && (
                      <div className="pt-2 text-[11px] font-bold text-slate-500">
                        Quelle / Rechtsgrundlage: {faq.source}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Info box below FAQ */}
        <div className="mt-10 p-6 rounded-2xl bg-white border border-slate-200 text-center shadow-xs">
          <h3 className="text-lg font-bold text-slate-900">
            Offizielle Primärquellen nachlesen
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1.5 max-w-xl mx-auto leading-relaxed">
            Informationen des Bundesamtes für Familie und zivilgesellschaftliche Aufgaben (BAFzA) finden Sie direkt unter{' '}
            <a 
              href="https://www.bafza.de/rat-und-hilfe/kriegsdienstverweigerung-kdv" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-amber-700 font-bold hover:underline inline-flex items-center gap-1"
            >
              <span>bafza.de</span>
              <ExternalLink className="w-3 h-3" />
            </a>.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onOpenGenerator}
              className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm shadow-xs transition-all border border-amber-600/30"
            >
              Musterschreiben &amp; Gliederung aufrufen
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

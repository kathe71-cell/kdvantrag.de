import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
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
      answer: 'Jede Person, die nach deutschem Recht der Wehrpflicht unterliegt oder unterliegen könnte, kann sich auf das Grundrecht der Kriegsdienstverweigerung nach Art. 4 Abs. 3 GG berufen. Dies umfasst ungediente Bürger (z. B. bei Wiedereinführung von Erfassungsmaßnahmen oder Wehrdienst), aktive Soldatinnen und Soldaten (Freiwillig Wehrdienstleistende, Soldaten auf Zeit, Berufssoldaten) sowie Reservistinnen und Reservisten bis zum Erreichen der gesetzlichen Altersgrenze.'
    },
    {
      category: 'recht',
      question: 'Kann man verweigern, obwohl die Wehrpflicht derzeit im Frieden ausgesetzt ist?',
      answer: 'Ja. Zwar ist die Wehrpflicht im Frieden nach § 2 des Wehrpflichtgesetzes seit 2011 ausgesetzt, das verfassungsmäßige Grundrecht aus Art. 4 Abs. 3 Satz 1 GG („Niemand darf gegen sein Gewissen zum Kriegsdienst mit der Waffe gezwungen werden“) besteht jedoch uneingeschränkt fort. Bei einer Reaktivierung der Erfassung, Musterung oder im Spannungs- bzw. Verteidigungsfall ist der Status als anerkannter Kriegsdienstverweigerer rechtlich bindend.'
    },
    {
      category: 'ablauf',
      question: 'Welche Behörde entscheidet verbindlich über den KDV-Antrag?',
      answer: 'Die zentrale Entscheidungsbehörde in der Bundesrepublik Deutschland ist das Bundesamt für das Personalmanagement der Bundeswehr (BAPersBw) in Köln (Referat II 2). Je nach Status wird der Antrag entweder über das örtlich zuständige Karrierecenter der Bundeswehr (Ungediente und Reservisten) oder über den nächsten Disziplinarvorgesetzten (aktive Soldaten) eingereicht.'
    },
    {
      category: 'begruendung',
      question: 'Welche Unterlagen müssen zwingend eingereicht werden?',
      answer: 'Gemäß § 2 des Kriegsdienstverweigerungsgesetzes (KDVG) muss der Antrag zwingend aus drei Bestandteilen bestehen: 1. Einem schriftlichen (formlosen) Antrag, 2. einem vollständigen tabellarischen Lebenslauf und 3. einer ausführlichen persönlichen Darlegung der Beweggründe für die Gewissensentscheidung. Fehlt einer dieser Teile, ist der Antrag unvollständig.'
    },
    {
      category: 'recht',
      question: 'Was passiert mit einem aktiven Soldaten unmittelbar nach Einreichung des Antrags?',
      answer: 'Gemäß § 22 Abs. 4 KDVG darf eine Soldatin oder ein Soldat ab dem Tag der Einreichung des Antrags bis zum unanfechtbaren Abschluss des Verfahrens gegen ihren oder seinen Willen nicht mehr an der Waffe ausgebildet und nicht zu Einsätzen oder Wachdiensten mit Waffen herangezogen werden. Der Soldat verbleibt jedoch im Dienst und führt waffenlose Aufgaben aus.'
    },
    {
      category: 'folgen',
      question: 'Müssen Soldaten auf Zeit oder Offiziere Ausbildungskosten zurückzahlen?',
      answer: 'Nach § 56 Abs. 4 des Soldatengesetzes (SG) kann die Bundeswehr von ehemaligen Soldaten auf Zeit, deren Dienstverhältnis wegen der Anerkennung als KDV vorzeitig beendet wird, unter bestimmten Voraussetzungen die Kosten für ein Studium oder eine zivil verwertbare Fachausbildung anteilig zurückfordern. Es empfiehlt sich hierbei eine frühzeitige rechtliche Fachberatung *.'
    },
    {
      category: 'ablauf',
      question: 'Gibt es noch mündliche Gewissensprüfungen vor einem Prüfungsausschuss?',
      answer: 'Früher gab es standardmäßig mündliche Anhörungen vor Prüfungsausschüssen der Kreiswehrersatzämter. Nach der heutigen Rechtslage im KDVG entscheidet das BAPersBw primär nach Aktenlage anhand der schriftlichen Gewissensbegründung. Nur wenn nach Prüfung der schriftlichen Darlegung begründete Zweifel an der Ernsthaftigkeit oder Glaubwürdigkeit verbleiben, kann eine persönliche Anhörung anberaumt werden.'
    },
    {
      category: 'begruendung',
      question: 'Warum scheitern Anträge mit vorgefertigten Internet-Vorlagen?',
      answer: 'Das Bundesamt führt interne Plagiatsprüfungen durch. Da das Grundgesetz eine höchstpersönliche, innere Gewissensnot verlangt, werden identische Textbausteine oder vorgefertigte Muster sofort als nicht authentisch eingestuft. Eine erfolgreiche Begründung muss zwingend eigene Lebenserfahrungen, persönliche Konfliktsituationen und das individuelle Wertesystem widerspiegeln.'
    },
    {
      category: 'recht',
      question: 'Können auch Reservisten noch einen KDV-Antrag stellen?',
      answer: 'Ja, uneingeschränkt. Auch wer früher freiwillig oder pflichtgemäß Dienst bei der Bundeswehr geleistet hat, kann im Nachhinein zu der unumkehrbaren Gewissensüberzeugung gelangen, dass das Führen von Waffen unvereinbar mit dem eigenen Gewissen ist. Allerdings muss in der Begründung nachvollziehbar dargelegt werden, wie und wodurch sich der Sinneswandel nach dem aktiven Dienst vollzogen hat.'
    },
    {
      category: 'folgen',
      question: 'Gilt die Anerkennung als Kriegsdienstverweigerer dauerhaft?',
      answer: 'Ja. Ein unanfechtbarer Anerkennungsbescheid des Bundesamtes gilt grundsätzlich dauerhaft und kann nur unter ganz engen gesetzlichen Voraussetzungen (z. B. wenn die Anerkennung durch arglistige Täuschung erschlichen wurde oder die betroffene Person später freiwillig wieder Waffenübungen absolviert) widerrufen werden.'
    }
  ];

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq-section" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-black uppercase tracking-wider mb-3">
            Häufige Fragen (FAQ)
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Wissenswertes rund um den KDV-Antrag
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Rechtlich fundierte Antworten auf die wichtigsten Fragen nach Art. 4 Abs. 3 Grundgesetz und dem KDVG.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm transition-all"
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
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 animate-in fade-in duration-150">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA below FAQ */}
        <div className="mt-10 p-6 rounded-2xl bg-white border border-slate-200 text-center shadow-sm">
          <h3 className="text-lg font-bold text-slate-900">
            Haben Sie weitere individuelle Fragen zu Ihrem Fall?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1.5 max-w-xl mx-auto">
            Nutzen Sie unsere Vorlagen zur Vorbereitung Ihres Antrags oder wenden Sie sich bei komplexen Wehrdienstkonflikten an unabhängige Fachanwälte oder anerkannte Friedensberatungsstellen.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onOpenGenerator}
              className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm shadow-sm transition-all border border-amber-600/30"
            >
              Vorlagen-Assistent starten *
            </button>
          </div>
          <p className="mt-2 text-[11px] text-slate-400">
            * Unverbindliche Hilfestellung. Keine behördliche Einreichung.
          </p>
        </div>

      </div>
    </section>
  );
};

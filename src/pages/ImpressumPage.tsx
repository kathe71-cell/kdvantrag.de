import React from 'react';
import { Shield, Scale, Mail, Phone, ExternalLink, ArrowLeft } from 'lucide-react';
import { PageRoute } from '../types';

interface ImpressumPageProps {
  setRoute: (route: PageRoute) => void;
}

export const ImpressumPage: React.FC<ImpressumPageProps> = ({ setRoute }) => {
  return (
    <div className="py-12 sm:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back navigation */}
        <button
          onClick={() => setRoute('home')}
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-slate-950 mb-8 p-2 rounded-lg hover:bg-slate-100 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Zurück zur Startseite</span>
        </button>

        <div className="border-b border-slate-200 pb-6 mb-8">
          <span className="text-xs font-black uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-md border border-amber-200">
            Gesetzliche Anbieterkennzeichnung
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-950 mt-3 tracking-tight">
            Impressum
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Pflichtangaben nach § 5 Digitale-Dienste-Gesetz (DDG) und § 18 Abs. 2 Medienstaatsvertrag (MStV)
          </p>
        </div>

        {/* Impressum Content according to exact prompt guidelines */}
        <div className="space-y-8 text-sm text-slate-700 leading-relaxed">
          
          <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2">
              Angaben gemäß § 5 DDG:
            </h2>
            <div className="text-slate-800 space-y-1 font-medium">
              <p className="font-bold text-base text-slate-950">Jens Kathe</p>
              <p>Hansastraße 6</p>
              <p>34119 Kassel</p>
              <p>Deutschland</p>
            </div>

            <div className="pt-3 border-t border-slate-200 space-y-2">
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-600 shrink-0" />
                <span>E-Mail: </span>
                <a href="mailto:jens@kathe.org" className="text-amber-700 font-bold hover:underline">
                  jens@kathe.org
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Telefon: </span>
                <a href="tel:+491786652623" className="text-amber-700 font-bold hover:underline">
                  +49 178 6652623
                </a>
              </p>
            </div>

            <div className="pt-3 border-t border-slate-200">
              <p className="font-semibold text-slate-900">Umsatzsteuer-Status:</p>
              <p className="text-slate-600">Kleinunternehmer nach § 19 UStG (keine gesonderte Ausweisung der Umsatzsteuer).</p>
            </div>

            <div className="pt-3 border-t border-slate-200">
              <p className="font-semibold text-slate-900">Inhaltlich Verantwortlicher gemäß § 18 Abs. 2 MStV:</p>
              <p className="text-slate-600">Jens Kathe (Adresse wie oben)</p>
            </div>
          </div>

          {/* Unabhängigkeitserklärung */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3">
            <h2 className="text-base font-bold text-slate-950 flex items-center gap-2">
              <Shield className="w-5 h-5 text-amber-600" />
              <span>Unabhängigkeit &amp; behördliche Abgrenzung</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Dieses Internetportal (kdvantrag.de) ist ein unabhängiges, privates Informationsangebot. Es steht in keinerlei rechtlichem, personellem, organisatorischem oder verwaltungsrechtlichem Verhältnis zum Bundesministerium der Verteidigung (BMVg), zur Bundeswehr, zum Bundesamt für das Personalmanagement der Bundeswehr (BAPersBw), zum Bundesamt für Familie und zivilgesellschaftliche Aufgaben (BAFzA) oder zu sonstigen staatlichen Dienststellen.
            </p>
          </div>

          {/* Kein RDG Hinweis */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3">
            <h2 className="text-base font-bold text-slate-950 flex items-center gap-2">
              <Scale className="w-5 h-5 text-amber-600" />
              <span>Hinweis nach dem Rechtsdienstleistungsgesetz (RDG)</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Die auf dieser Website publizierten Inhalte, Berechnungsbeispiele, Formulierungshilfen und Checklisten dienen ausschließlich der allgemeinen Information und Orientierung. Sie stellen keine Rechtsberatung im Sinne des Rechtsdienstleistungsgesetzes (RDG) dar. Es findet keine individuelle Fallprüfung durch Rechtsanwälte über dieses Portal statt. Sollten Sie im Einzelfall rechtlichen Beistand benötigen, wenden Sie sich bitte an eine anerkannte Friedens- und Kriegsdienstverweigerungs-Beratungsstelle (z. B. DFG-VK, EAK) oder an einen zugelassenen Fachanwalt für Wehr- oder Verwaltungsrecht.
            </p>
          </div>

          {/* EU-Streitschlichtung & VSBG */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3">
            <h2 className="text-base font-bold text-slate-950">
              Verbraucherstreitbeilegung / Universalschlichtungsstelle
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, die Sie unter folgendem Link finden:{' '}
              <a 
                href="https://ec.europa.eu/consumers/odr" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-amber-700 font-bold hover:underline inline-flex items-center gap-1"
              >
                <span>https://ec.europa.eu/consumers/odr</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>

          {/* Haftung für Inhalte & Links */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3">
            <h2 className="text-base font-bold text-slate-950">
              Haftung für Inhalte &amp; externe Links
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

import React from 'react';
import { ShieldCheck, Lock, Server, ArrowLeft } from 'lucide-react';
import { PageRoute } from '../types';

interface DatenschutzPageProps {
  setRoute: (route: PageRoute) => void;
}

export const DatenschutzPage: React.FC<DatenschutzPageProps> = ({ setRoute }) => {
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
          <span className="text-xs font-black uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-md border border-emerald-200">
            Datenschutz &amp; Transparenz
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-950 mt-3 tracking-tight">
            Datenschutzerklärung
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Informationen über die Erhebung und Verarbeitung personenbezogener Daten nach der DSGVO
          </p>
        </div>

        <div className="space-y-8 text-sm text-slate-700 leading-relaxed">
          
          {/* Typografie & Privacy Note */}
          <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl space-y-3">
            <h2 className="text-base font-bold text-slate-950 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-amber-600" />
              <span>Einbindung von System-Schriftarten (Zero External Fonts)</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Dieses Internetangebot verzichtet auf das Nachladen von Schriftarten von externen Google-Servern. Die Darstellung erfolgt ausschließlich über den auf Ihrem Betriebssystem installierten System-Font-Stack.
            </p>
          </div>

          {/* 1. Verantwortlicher */}
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
            <h2 className="text-base font-bold text-slate-950">
              1. Name und Kontaktdaten des Verantwortlichen
            </h2>
            <div className="text-slate-800 space-y-1">
              <p className="font-bold">Jens Kathe</p>
              <p>Hansastraße 6, 34119 Kassel, Deutschland</p>
              <p>E-Mail: jens@kathe.org</p>
            </div>
          </div>

          {/* 2. Formular-Generator */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3">
            <h2 className="text-base font-bold text-slate-950 flex items-center gap-2">
              <Lock className="w-5 h-5 text-amber-600" />
              <span>2. Lokale Verarbeitung im Musterschreiben-Generator</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Die von Ihnen im Musterschreiben-Generator eingegebenen Daten (wie Name, Anschrift, Geburtsdatum) werden ausschließlich lokal im flüchtigen Arbeitsspeicher Ihres Webbrowsers auf Ihrem Endgerät verarbeitet. Es findet keine serverseitige Speicherung, Übermittlung oder Protokollierung dieser Daten statt. Die Formulardaten werden nicht in Analysen, Protokolle oder URLs übernommen.
            </p>
          </div>

          {/* 3. Hosting & Vercel Web Analytics */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3">
            <h2 className="text-base font-bold text-slate-950 flex items-center gap-2">
              <Server className="w-5 h-5 text-amber-600" />
              <span>3. Hosting &amp; Vercel Web Analytics</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Diese Website wird bei Vercel Inc. (440 N Barranca Ave #4133, Covina, CA 91723, USA) gehostet. Zur Reichweitenmessung und Gewährleistung der IT-Sicherheit nutzen wir Vercel Web Analytics. Die Erfassung erfolgt in aggregierter und anonymisierter Form ohne Speicherung von Cookies. Die Datenverarbeitung stützt sich auf Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem sicheren und stabilen Webauftritt).
            </p>
          </div>

          {/* 4. Google AdSense */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3">
            <h2 className="text-base font-bold text-slate-950">
              4. Einbindung von Google AdSense
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Auf dieser Website sind Werbeanzeigen über den Dienst Google AdSense (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland) eingebunden. Google AdSense verwendet Cookies und Web Beacons zur Auslieferung von Anzeigen. Rechtsgrundlage für die Verarbeitung personenbezogener Daten ist Ihre Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO.
            </p>
          </div>

          {/* 5. Betroffenenrechte */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3">
            <h2 className="text-base font-bold text-slate-950">
              5. Rechte der betroffenen Person
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Sie haben nach der DSGVO das Recht auf Auskunft (Art. 15), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20), Widerspruch gegen die Verarbeitung (Art. 21) sowie das Recht auf Beschwerde bei einer Datenschutz-Aufsichtsbehörde (Art. 77). Zur Ausübung Ihrer Rechte wenden Sie sich bitte an jens@kathe.org.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

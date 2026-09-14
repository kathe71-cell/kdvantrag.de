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
            Datenschutz &amp; Privatsphäre
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-950 mt-3 tracking-tight">
            Datenschutzerklärung
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Informationen über die Erhebung und Verarbeitung personenbezogener Daten nach der DSGVO
          </p>
        </div>

        <div className="space-y-8 text-sm text-slate-700 leading-relaxed">
          
          {/* Highlight Box: Zero Tracking */}
          <div className="bg-emerald-50/70 border border-emerald-200 p-6 rounded-2xl space-y-3">
            <h2 className="text-base font-bold text-emerald-950 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-700" />
              <span>Privatsphäre by Design: Keine externen CDNs, keine Google Fonts</span>
            </h2>
            <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed">
              Dieses Portal verzichtet vollständig auf die Einbindung von externen Schriftarten (wie Google Fonts) und externen Tracking-Diensten. Sämtliche Skripte und Stile werden direkt von unserem Webserver ausgeliefert. Ihre IP-Adresse wird zu keinem Zeitpunkt an unbefugte Dritte in Drittstaaten übertragen.
            </p>
          </div>

          {/* 1. Verantwortlicher */}
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
            <h2 className="text-base font-bold text-slate-950">
              1. Name und Kontaktdaten des Verantwortlichen
            </h2>
            <div className="text-slate-800"><p>Verantwortlicher im Sinne der DSGVO ist der im Impressum genannte Betreiber. Vollständige Kontaktdaten finden Sie im <a href="/impressum" className="text-amber-700 hover:underline font-semibold">Impressum</a>.</p></div>
          </div>

          {/* 2. Formular-Assistent */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3">
            <h2 className="text-base font-bold text-slate-950 flex items-center gap-2">
              <Lock className="w-5 h-5 text-amber-600" />
              <span>2. Lokale Verarbeitung im Dokumenten-Generator</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Wenn Sie unseren interaktiven Musterschreiben-Generator nutzen und Daten wie Ihren Namen, Ihre Anschrift oder Personenkennziffer eingeben, werden diese Daten <strong>ausschließlich lokal in Ihrem Webbrowser (im flüchtigen Arbeitsspeicher Ihres Endgeräts)</strong> verarbeitet. Es erfolgt keine serverseitige Speicherung, keine Protokollierung und keine Übermittlung Ihrer Formulardaten an uns oder Dritte.
            </p>
          </div>

          {/* 3. Server-Logfiles */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3">
            <h2 className="text-base font-bold text-slate-950 flex items-center gap-2">
              <Server className="w-5 h-5 text-amber-600" />
              <span>3. Bereitstellung der Website und Server-Logfiles</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Beim Aufrufen unserer Website erfasst der Hosting-Provider technisch bedingt automatische Informationen, die Ihr Browser übermittelt (Server-Logfiles). Dies umfasst:
            </p>
            <ul className="list-disc list-inside text-xs sm:text-sm text-slate-600 space-y-1 pl-2">
              <li>Browsertyp und Browserversion</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer URL (die zuvor besuchte Seite)</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse (in der Regel anonymisiert)</li>
            </ul>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Die Rechtsgrundlage für diese Datenverarbeitung ist Art. 6 Abs. 1 lit. f DSGVO zur Gewährleistung eines störungsfreien Betriebs und der IT-Sicherheit.
            </p>
          </div>

          {/* 4. Rechte der betroffenen Person */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3">
            <h2 className="text-base font-bold text-slate-950">
              4. Ihre Betroffenenrechte nach der DSGVO
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Sie haben nach Maßgabe der gesetzlichen Bestimmungen folgende Rechte:
            </p>
            <ul className="list-disc list-inside text-xs sm:text-sm text-slate-600 space-y-1 pl-2">
              <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
              <li>Recht auf Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
              <li>Recht auf Löschung (Art. 17 DSGVO)</li>
              <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Widerspruchsrecht gegen die Verarbeitung (Art. 21 DSGVO)</li>
              <li>Beschwerderecht bei einer zuständigen Datenschutz-Aufsichtsbehörde (Art. 77 DSGVO)</li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
};

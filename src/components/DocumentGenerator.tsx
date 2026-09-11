import React, { useState } from 'react';
import { FileText, Copy, Printer, Check, ShieldAlert } from 'lucide-react';
import { UserStatus } from '../types';

export const DocumentGenerator: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'anschreiben' | 'lebenslauf' | 'begruendung'>('anschreiben');
  
  // Formular-State
  const [formData, setFormData] = useState({
    name: 'Max Mustermann',
    strasse: 'Musterstraße 12',
    plzOrt: '10115 Berlin',
    geburtsdatum: '15.05.2003',
    geburtsort: 'Berlin',
    telefon: '0170 1234567',
    email: 'max.mustermann@example.de',
    status: 'ungedient' as UserStatus,
    pk: '', // Personenkennziffer falls Soldat/Reservist
    dienstgrad: '',
    bundesland: 'Berlin'
  });

  const [copied, setCopied] = useState(false);

  // Text-Generierung für das formlose Anschreiben
  const generateAnschreibenText = () => {
    const isSoldier = formData.status === 'soldat_aktiv';
    const isReservist = formData.status === 'reservist';

    const empfaenger = isSoldier
      ? `An den Disziplinarvorgesetzten\n[Dienststelle / Kompanie / Einheit eintragen]\n[Dienstort]\nz. H. des Einheitsführers\nzur Weiterleitung an das BAPersBw Referat II 2`
      : `An das\nKarrierecenter der Bundeswehr\n- KDV-Stelle -\n[Straße des zuständigen KarrC eintragen]\n[PLZ Ort des zuständigen KarrC]`;

    const pkZeile = (isSoldier || isReservist) && formData.pk 
      ? `\nPersonenkennziffer (PK): ${formData.pk} | Dienstgrad: ${formData.dienstgrad || '[Dienstgrad]'}`
      : '';

    const waffenverbotZeile = isSoldier
      ? `\n\nUnter Hinweis auf § 22 Abs. 4 KDVG beantrage ich hiermit ausdrücklich, mich ab sofort und bis zum rechtskräftigen Abschluss dieses Antragsverfahrens nicht mehr an der Waffe auszubilden und nicht zu Einsätzen oder Wachdiensten mit Schusswaffen heranzuziehen.`
      : '';

    return `${formData.name}
${formData.strasse}
${formData.plzOrt}
Geboren am: ${formData.geburtsdatum} in ${formData.geburtsort}
Telefon: ${formData.telefon} | E-Mail: ${formData.email}${pkZeile}

Ort: ${formData.plzOrt.split(' ')[1] || 'Berlin'}, den ${new Date().toLocaleDateString('de-DE')}

${empfaenger}


Betreff: Antrag auf Anerkennung als Kriegsdienstverweigerer nach Art. 4 Abs. 3 Grundgesetz (GG) in Verbindung mit § 1 ff. Kriegsdienstverweigerungsgesetz (KDVG)

Sehr geehrte Damen und Herren,

hiermit beantrage ich förmlich meine Anerkennung als Kriegsdienstverweigerer gemäß Artikel 4 Absatz 3 Satz 1 des Grundgesetzes für die Bundesrepublik Deutschland sowie nach den Bestimmungen des Gesetzes über die Verweigerung des Kriegsdienstes mit der Waffe (KDVG).

Ich verweigere aus Gewissensgründen den Kriegsdienst mit der Waffe und lehne jede Beteiligung am Waffendienst sowie an militärischen Tötungshandlungen unumkehrbar ab.${waffenverbotZeile}

Zur Begründung meines Antrags verweise ich auf die beigefügten gesetzlich geforderten Unterlagen:

1. Ausführliche persönliche Darlegung meiner Gewissensgründe (Anlage 1)
2. Vollständiger tabellarischer Lebenslauf (Anlage 2)

Ich versichere, dass die Darlegungen zu meinen Gewissensgründen von mir persönlich und wahrheitsgemäß verfasst wurden.

Bitte bestätigen Sie mir unverzüglich den Eingang dieses Antrags sowie der beigefügten Anlagen schriftlich.


Mit freundlichen Grüßen


_____________________________________________
(Unterschrift ${formData.name})`;
  };

  // Text-Gliederung für den Lebenslauf
  const generateLebenslaufText = () => {
    return `TABELLARISCHER LEBENSLAUF
(Schwerpunkt: Wertevermittlung & persönliche Entwicklung)

Name: ${formData.name}
Geburtsdatum: ${formData.geburtsdatum} in ${formData.geburtsort}
Anschrift: ${formData.strasse}, ${formData.plzOrt}

SCHULISCHER & BERUFLICHER WERDEGANG
• [Jahr - Jahr]: Grundschule [Schulname, Ort]
• [Jahr - Jahr]: Weiterführende Schule [Schulname, Ort] - Abschluss: [Abschluss]
• [Jahr - Jahr]: Berufsausbildung / Studium [Fachrichtung, Institution]
• [Jahr - heute]: Berufliche Tätigkeit als [Berufsbezeichnung]

FAMILIÄRE PRÄGUNG & WERTEVERMITTLUNG
• Erziehung im Elternhaus (z. B. friedliche Konfliktlösung, Respekt vor dem Leben)
• Relevante familiäre Vorbilder oder prägende generationenübergreifende Erfahrungen

SOZIALES & ETHICHES ENGAGEMENT
• [Jahr - Jahr]: Ehrenamtliche Tätigkeit / Engagement in [Verein, Kirche, Hilfsorganisation, Zivilgesellschaft]
• Praktika im sozialen Bereich oder Betreuung von Mitmenschen

FREIZEIT, SPORT & KONFLIKTVERHALTEN
• Hobbys und Interessen (z. B. Mannschaftssportarten mit Fairplay, Kunst, Musik)
• Verzicht auf gewaltbetonte Aktivitäten / Haltung zu Schusswaffen

[Ort], den ${new Date().toLocaleDateString('de-DE')}


_____________________________________________
(Unterschrift ${formData.name})`;
  };

  // Leitfaden für die Gewissensbegründung
  const generateBegruendungGliederung = () => {
    return `STRUKTUR-LEITFADEN FÜR DIE PERSÖNLICHE GEWISSENSBEGRÜNDUNG
(Art. 4 Abs. 3 GG / Rechtsprechung des Bundesverwaltungsgerichts BVerwG)

ACHTUNG: Das Bundesamt (BAPersBw) lehnt standardisierte Mustertexte sofort ab! 
Schreiben Sie diesen Text unbedingt in Ihren eigenen Worten anhand der folgenden 5 Prüfungsstufen:

1. EINLEITUNG & MORALISCHES GRUNDVERSTÄNDNIS
- Was bedeutet für mich der Wert menschlichen Lebens?
- Welche inneren moralischen Gebote leiten mein tägliches Handeln?
- Kurze Definition der eigenen Gewissensentscheidung (ernst, unumkehrbar, zwingend).

2. BIOGRAFISCHE WURZELN & ENTWICKLUNG
- Wie wurde meine gewaltfreie Haltung in Kindheit und Jugend geformt?
- Gab es in der Familie Gespräche über Krieg, Gewalt oder den Schutz des Lebens?
- Welche Schlüsselerfahrungen in Schule, Ausbildung oder Freundeskreis haben mich geprägt?

3. DAS SCHLÜSSELERLEBNIS / DER ENTSCHEIDENDE WENDEPUNKT
- Welches konkrete Ereignis hat mir unmissverständlich bewusst gemacht, dass ich niemals eine Waffe gegen einen Menschen richten kann?
- (Für aktive Soldaten / Reservisten): Warum war ich früher zum Dienst bereit, und was genau hat in meinem Inneren diesen grundlegenden Sinneswandel ausgelöst?
- Beschreibung der emotionalen und rationalen Auseinandersetzung mit der Tötungshandlung.

4. KONKRETE REQUISITEN DES GEWISSENSNOTSTANDS
- Die Unmöglichkeit, zwischen „gerechtem“ und „ungerechtem“ Krieg zu unterscheiden.
- Das unausweichliche Dilemma: Befehl gegen das eigene Gewissen.
- Warum ich den Befehl, auf einen Menschen zu schießen, verweigern MUSS – selbst unter Androhung von Nachteilen.

5. GEWALTFREIHEIT IM ALLTAG & KONFLIKTSITUATIONEN
- Wie verhalte ich mich im realen Leben, wenn ich provoziert oder angegriffen werde?
- Konkretes Beispiel friedlicher Konfliktlösung aus meinem persönlichen Alltag.
- Haltung zu Notwehr und Zivilcourage.

6. SCHLUSSWORT
- Bekräftigung, dass diese Haltung unumstößlich ist.
- Bereitschaft, einen zivilen Ersatzdienst bzw. Friedensdienst zum Wohle der Allgemeinheit zu leisten.

Umfang-Empfehlung: 3 bis 6 DIN-A4-Seiten, handschriftlich oder mit Schreibprogramm verfasst und eigenhändig unterschrieben.`;
  };

  const handleCopy = () => {
    let content = '';
    if (activeTab === 'anschreiben') content = generateAnschreibenText();
    else if (activeTab === 'lebenslauf') content = generateLebenslaufText();
    else content = generateBegruendungGliederung();

    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="antrags-generator" className="py-14 sm:py-20 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-950 border border-amber-300 text-xs font-black uppercase tracking-wider mb-3">
            Interaktiver Dokumenten-Assistent
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
            KDV-Musterantrag &amp; Begründungs-Leitfaden
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Erstellen Sie in wenigen Schritten ein formgerechtes Anschreiben nach DIN 5008 sowie die geforderten Gliederungen für Lebenslauf und Gewissensbegründung.
          </p>
        </div>

        {/* Warning Banner regarding Plagiarism */}
        <div className="max-w-5xl mx-auto mb-8 p-4 rounded-xl bg-amber-50 border border-amber-300 text-slate-900 text-xs sm:text-sm flex items-start gap-3 shadow-sm">
          <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div>
            <span className="font-black text-amber-950 block text-sm">
              Rechtlicher Hinweis zur Gewissensbegründung:
            </span>
            <p className="mt-0.5 text-slate-700 leading-relaxed">
              Das behördliche Prüfverfahren beim BAPersBw verlangt eine <strong>höchstpersönliche Gewissensentscheidung</strong>. Das Verwenden von vorgefertigten Textschablonen aus dem Internet führt im Regelfall zur Anhörung oder unmittelbaren Ablehnung. Nutzen Sie unsere Gliederung daher als inhaltliches Gerüst für Ihre eigenen Gedanken.
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Form Configuration (4 cols) */}
          <div className="lg:col-span-4 bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
            <h3 className="font-extrabold text-slate-900 text-sm uppercase tracking-wider flex items-center gap-2">
              <FileText className="w-4 h-4 text-amber-600" />
              <span>Ihre Stammdaten</span>
            </h3>

            <div className="space-y-3 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Vollständiger Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Straße &amp; Hausnummer</label>
                <input
                  type="text"
                  value={formData.strasse}
                  onChange={(e) => setFormData({ ...formData, strasse: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">PLZ &amp; Wohnort</label>
                <input
                  type="text"
                  value={formData.plzOrt}
                  onChange={(e) => setFormData({ ...formData, plzOrt: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Geburtsdatum</label>
                  <input
                    type="text"
                    value={formData.geburtsdatum}
                    onChange={(e) => setFormData({ ...formData, geburtsdatum: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Geburtsort</label>
                  <input
                    type="text"
                    value={formData.geburtsort}
                    onChange={(e) => setFormData({ ...formData, geburtsort: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Aktueller Wehrstatus</label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value as UserStatus })}
                  className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium"
                >
                  <option value="ungedient">Ungedienter Bürger</option>
                  <option value="soldat_aktiv">Aktiver Soldat (SaZ / FWDL / BS)</option>
                  <option value="reservist">Reservist (ehem. Soldat)</option>
                  <option value="musterung">Bescheid erhalten (Eilfall)</option>
                </select>
              </div>

              {(formData.status === 'soldat_aktiv' || formData.status === 'reservist') && (
                <div className="grid grid-cols-2 gap-2 pt-1 border-t border-slate-200">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Personenkennziffer (PK)</label>
                    <input
                      type="text"
                      placeholder="z. B. 150503-M-12345"
                      value={formData.pk}
                      onChange={(e) => setFormData({ ...formData, pk: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Dienstgrad</label>
                    <input
                      type="text"
                      placeholder="z. B. Gefreiter / Olt"
                      value={formData.dienstgrad}
                      onChange={(e) => setFormData({ ...formData, dienstgrad: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium"
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="pt-3 border-t border-slate-200">
              <p className="text-[11px] text-slate-500">
                🔒 Alle Eingaben werden ausschließlich lokal im Arbeitsspeicher Ihres Browsers verarbeitet und nicht gespeichert.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Document Preview & Tabs (8 cols) */}
          <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-300 shadow-lg overflow-hidden">
            
            {/* Header / Tabs */}
            <div className="bg-slate-900 p-2 sm:p-3 flex flex-wrap items-center justify-between gap-2 border-b border-slate-800">
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setActiveTab('anschreiben')}
                  className={`px-3 py-2 rounded-lg text-xs font-bold transition-all ${
                    activeTab === 'anschreiben'
                      ? 'bg-amber-500 text-slate-950 font-black shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  1. Formloser Antrag
                </button>
                <button
                  onClick={() => setActiveTab('lebenslauf')}
                  className={`px-3 py-2 rounded-lg text-xs font-bold transition-all ${
                    activeTab === 'lebenslauf'
                      ? 'bg-amber-500 text-slate-950 font-black shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  2. Lebenslauf-Gliederung
                </button>
                <button
                  onClick={() => setActiveTab('begruendung')}
                  className={`px-3 py-2 rounded-lg text-xs font-bold transition-all ${
                    activeTab === 'begruendung'
                      ? 'bg-amber-500 text-slate-950 font-black shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  3. Begründungs-Leitfaden
                </button>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopy}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold flex items-center gap-1.5 transition-colors border border-slate-700"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Kopiert!' : 'Kopieren'}</span>
                </button>
                <button
                  onClick={handlePrint}
                  className="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-black flex items-center gap-1.5 transition-colors shadow-sm"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Drucken / PDF</span>
                </button>
              </div>
            </div>

            {/* Document Content Paper */}
            <div id="printable-document" className="p-6 sm:p-8 bg-white font-mono text-xs sm:text-sm text-slate-800 leading-relaxed whitespace-pre-wrap select-text border-b border-slate-100 overflow-x-auto min-h-[480px]">
              {activeTab === 'anschreiben' && generateAnschreibenText()}
              {activeTab === 'lebenslauf' && generateLebenslaufText()}
              {activeTab === 'begruendung' && generateBegruendungGliederung()}
            </div>

            {/* Document Footer Bar */}
            <div className="p-4 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Konform nach DIN 5008 &amp; § 2 KDVG</span>
              </div>
              <div className="text-[11px] text-slate-500">
                * Nach dem Ausdrucken mit eigenhändiger Unterschrift im Original einreichen
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

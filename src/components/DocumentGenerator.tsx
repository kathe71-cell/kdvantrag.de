import React, { useState } from 'react';
import { FileText, Copy, Printer, Check, ShieldAlert, AlertCircle } from 'lucide-react';
import { UserStatus } from '../types';

export const DocumentGenerator: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'anschreiben' | 'lebenslauf' | 'begruendung'>('anschreiben');
  
  // Initialer Zustand: Leer lassen (keine vorausgefüllten Beispieldaten)
  const [formData, setFormData] = useState({
    name: '',
    strasse: '',
    plzOrt: '',
    geburtsdatum: '',
    geburtsort: '',
    telefon: '',
    email: '',
    status: 'ungedient_vor_einberufung' as UserStatus,
    pk: '',
    dienstgrad: ''
  });

  const [copied, setCopied] = useState(false);
  const [validationWarning, setValidationWarning] = useState<string | null>(null);

  // Prüfe unvollständige Pflichtangaben
  const checkValidation = () => {
    const missing: string[] = [];
    if (!formData.name.trim()) missing.push('Name');
    if (!formData.strasse.trim()) missing.push('Straße & Hausnummer');
    if (!formData.plzOrt.trim()) missing.push('PLZ & Ort');
    if (!formData.geburtsdatum.trim()) missing.push('Geburtsdatum');

    if (missing.length > 0) {
      setValidationWarning(`Folgende Stammdaten sind noch nicht eingetragen: ${missing.join(', ')}. Bitte ergänzen Sie diese vor dem Absenden.`);
    } else {
      setValidationWarning(null);
    }
  };

  // Text-Generierung für das formlose Anschreiben nach DIN 5008
  const generateAnschreibenText = () => {
    const isSoldier = formData.status === 'soldat_aktiv';

    const empfaenger = isSoldier
      ? `An den Disziplinarvorgesetzten\n[Dienststelle / Kompanie / Einheit eintragen]\n[Dienstort]\nz. H. des Einheitsführers\nzur Weiterleitung an das BAPersBw – Wehrersatzbehörde`
      : `An das\nBundesamt für das Personalmanagement der Bundeswehr\n- Wehrersatzbehörde -\nMilitärringstraße 1000\n50737 Köln`;

    const nameStr = formData.name.trim() || '[Vorname Nachname]';
    const strasseStr = formData.strasse.trim() || '[Straße und Hausnummer]';
    const plzOrtStr = formData.plzOrt.trim() || '[PLZ und Wohnort]';
    const geburtsdatumStr = formData.geburtsdatum.trim() || '[Geburtsdatum]';
    const geburtsortStr = formData.geburtsort.trim() ? ` in ${formData.geburtsort.trim()}` : '';

    const kontaktdaten: string[] = [];
    if (formData.telefon.trim()) kontaktdaten.push(`Telefon: ${formData.telefon.trim()}`);
    if (formData.email.trim()) kontaktdaten.push(`E-Mail: ${formData.email.trim()}`);
    const kontaktZeile = kontaktdaten.length > 0 ? `\n${kontaktdaten.join(' | ')}` : '';

    const pkZeile = formData.pk.trim()
      ? `\nPersonenkennziffer (PK): ${formData.pk.trim()}${formData.dienstgrad.trim() ? ` | Dienstgrad: ${formData.dienstgrad.trim()}` : ''}`
      : '';

    const heuteStr = new Date().toLocaleDateString('de-DE');
    const ortTeil = formData.plzOrt.trim().split(' ').slice(1).join(' ') || '[Wohnort]';

    return `${nameStr}
${strasseStr}
${plzOrtStr}
Geboren am: ${geburtsdatumStr}${geburtsortStr}${kontaktZeile}${pkZeile}

Ort: ${ortTeil}, den ${heuteStr}

${empfaenger}


Betreff: Antrag auf Anerkennung als Kriegsdienstverweigerer nach Art. 4 Abs. 3 Satz 1 Grundgesetz (GG) in Verbindung mit § 1 ff. Kriegsdienstverweigerungsgesetz (KDVG)

Sehr geehrte Damen und Herren,

hiermit beantrage ich meine Anerkennung als Kriegsdienstverweigerer gemäß Artikel 4 Absatz 3 Satz 1 des Grundgesetzes für die Bundesrepublik Deutschland sowie nach den Bestimmungen des Kriegsdienstverweigerungsgesetzes (KDVG).

Ich verweigere aus Gewissensgründen den Kriegsdienst mit der Waffe und lehne jede Beteiligung am Waffendienst ab.

Fristwahrend verweise ich auf die gesetzlich geforderten Anlagen gemäß § 2 KDVG:

1. Ausführliche persönliche Darlegung meiner Gewissensgründe (Anlage 1)
2. Vollständiger tabellarischer Lebenslauf (Anlage 2)

Ich versichere, dass die Darlegung meiner Gewissensgründe von mir persönlich und eigenständig verfasst wurde.

Ich bitte um schriftliche Bestätigung des Eingangs dieses Antrags.


Mit freundlichen Grüßen


_____________________________________________
(Unterschrift ${nameStr})`;
  };

  // Text-Gliederung für den Lebenslauf
  const generateLebenslaufText = () => {
    const nameStr = formData.name.trim() || '[Vorname Nachname]';
    const geburtsdatumStr = formData.geburtsdatum.trim() || '[Geburtsdatum]';
    const geburtsortStr = formData.geburtsort.trim() || '[Geburtsort]';
    const strasseStr = formData.strasse.trim() || '[Straße und Hausnummer]';
    const plzOrtStr = formData.plzOrt.trim() || '[PLZ und Wohnort]';
    const heuteStr = new Date().toLocaleDateString('de-DE');

    return `TABELLARISCHER LEBENSLAUF
(Anlage 2 gemäß § 2 KDVG)

PERSÖNLICHE DATEN
Name, Vorname: ${nameStr}
Geburtsdatum & -ort: ${geburtsdatumStr} in ${geburtsortStr}
Anschrift: ${strasseStr}, ${plzOrtStr}

SCHULISCHER WERDEGANG
• [Monat/Jahr – Monat/Jahr]: Grundschule [Schulname, Ort]
• [Monat/Jahr – Monat/Jahr]: Weiterführende Schule [Schulname, Ort] - Abschluss: [Abschlussbezeichnung]

BERUFLICHER WERDEGANG / STUDIUM / AUSBILDUNG
• [Monat/Jahr – Monat/Jahr]: Berufsausbildung / Studium [Fachrichtung, Einrichtung]
• [Monat/Jahr – heute]: Berufliche Tätigkeit als [Berufsbezeichnung]

FAMILIÄRE PRÄGUNG & WERTEVERMITTLUNG
• Erziehung im Elternhaus (z. B. Einstellungen zu Gewaltfreiheit und Konfliktlösung)
• Familienhintergrund und prägende Lebenserfahrungen

EHRENAMT & SOZIALES ENGAGEMENT
• [Monat/Jahr – Monat/Jahr]: Engagement in Vereinen, sozialen Einrichtungen oder Initiativen

FREIZEIT, SPORT & LEBENSFORM
• Freizeitaktivitäten und Interessen
• Haltung zu Waffen und gewaltsamen Auseinandersetzungen im Alltag

[Ort], den ${heuteStr}


_____________________________________________
(Unterschrift ${nameStr})`;
  };

  // Offene Reflexionsfragen & Gliederungsstruktur für die Gewissensbegründung
  const generateBegruendungGliederung = () => {
    return `GLIEDERUNGSSTRUKTUR & OFFENE REFLEXIONSFRAGEN
FÜR DIE EIGENSTÄNDIGE GEWISSENSBEGRÜNDUNG (Anlage 1 gemäß § 2 KDVG)

WICHTIGER HINWEIS DES BAFzA:
Das Bundesamt für Familie und zivilgesellschaftliche Aufgaben (BAFzA) betont ausdrücklich:
„Vorgefertigte Formulierungen, Internet-Vorlagen oder durch künstliche Intelligenz generierte Texte werden nicht akzeptiert. Bei der Prüfung steht die Ernsthaftigkeit Ihrer persönlichen Gewissensentscheidung im Fokus.“ (Quelle: bafza.de)

Verwenden Sie daher keine kopierten Fremdtexte, sondern beantworten Sie die folgenden Fragen in Ihren eigenen Worten:

1. MORALISCHES GRUNDVERSTÄNDNIS & GEWISSENSBEGRIFF
- Was verstehen Sie persönlich unter der Würde und dem Wert menschlichen Lebens?
- Welche moralischen oder ethischen Grundsätze leiten Ihr tägliches Handeln?

2. BIOGRAFISCHE ENTWICKLUNG & PRÄGUNG
- Wie wurde Ihre Einstellung zu Gewalt und Krieg in Elternhaus, Schule oder Umfeld geformt?
- Gab es bestimmte Ereignisse oder Gespräche, die Ihre Haltung nachhaltig geprägt haben?

3. DER SCHLÜSSELMOMENT / SINNESWANDEL
- Welches konkrete Ereignis oder welche Erkenntnis hat Sie zu der Überzeugung geführt, niemals eine Waffe gegen einen Menschen richten zu können?
- (Bei aktiven Soldaten / Reservisten): Warum waren Sie früher zum Dienst an der Waffe bereit, und wodurch hat sich Ihr Sinneswandel nachvollziehbar vollzogen?

4. GEWISSENSNOTSTAND BEIM DIENST AN DER WAFFE
- Warum ist es Ihnen persönlich absolut unmöglich, im Ernstfall Befehlen zum Einsatz von Schusswaffen zu folgen?
- Warum lehnen Sie das Töten von Menschen bedingungslos ab?

5. CONFLICT-HANDLUNG IM ALLTAG
- Wie verhalten Sie sich im realen Leben, wenn Sie mit Konflikten, Provokationen oder Aggressionen konfrontiert werden?
- Über welche gewaltfreien Lösungswege verfügen Sie?

6. ABSCHLIESSENDE ERKLÄRUNG
- Bekräftigung, dass Ihre Gewissensentscheidung ernsthaft, unumkehrbar und absolut bindend ist.

(Hinweis: Die Begründung sollte ausgiebig, persönlich und eigenhändig verfasst sowie handschriftlich unterschrieben werden.)`;
  };

  const handleCopy = () => {
    checkValidation();
    let content = '';
    if (activeTab === 'anschreiben') content = generateAnschreibenText();
    else if (activeTab === 'lebenslauf') content = generateLebenslaufText();
    else content = generateBegruendungGliederung();

    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    checkValidation();
    window.print();
  };

  return (
    <section id="antrags-generator" className="py-14 sm:py-20 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider mb-3">
            Dokumenten-Vorbereitung
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
            KDV-Musterschreiben &amp; Begründungs-Gliederung
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Erstellen Sie ein formloses Anschreiben nach DIN 5008 sowie die Gliederungsstrukturen für Lebenslauf und persönliche Gewissensbegründung.
          </p>
        </div>

        {/* Offizieller BAFzA Hinweis */}
        <div className="max-w-5xl mx-auto mb-8 p-4 rounded-xl bg-amber-50 border border-amber-300 text-slate-900 text-xs sm:text-sm flex items-start gap-3 shadow-sm">
          <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-amber-950 block text-sm">
              Amtlicher Hinweis des BAFzA zur Gewissensbegründung:
            </span>
            <p className="mt-0.5 text-slate-700 leading-relaxed">
              „Vorgefertigte Formulierungen, Internet-Vorlagen oder durch künstliche Intelligenz generierte Texte werden nicht akzeptiert. Bei der Prüfung steht die Ernsthaftigkeit Ihrer persönlichen Gewissensentscheidung im Fokus.“ (Quelle: bafza.de)
              Erstellen Sie Ihre Begründung daher stets eigenständig anhand unserer Gliederungsfragen.
            </p>
          </div>
        </div>

        {validationWarning && (
          <div className="max-w-5xl mx-auto mb-6 p-4 rounded-xl bg-slate-100 border border-slate-400 text-slate-900 text-xs sm:text-sm flex items-start gap-2.5">
            <AlertCircle className="w-5 h-5 text-slate-700 shrink-0 mt-0.5" />
            <div>
              <strong className="font-bold block">Hinweis zu unvollständigen Angaben:</strong>
              <p>{validationWarning}</p>
            </div>
          </div>
        )}

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Form Configuration (4 cols) */}
          <div className="lg:col-span-4 bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
            <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider flex items-center gap-2">
              <FileText className="w-4 h-4 text-amber-600" />
              <span>Stammdaten eingeben</span>
            </h3>

            <div className="space-y-3 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Name, Vorname *</label>
                <input
                  type="text"
                  placeholder="z. B. Vorname Nachname"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Straße &amp; Hausnummer *</label>
                <input
                  type="text"
                  placeholder="z. B. Musterstraße 1"
                  value={formData.strasse}
                  onChange={(e) => setFormData({ ...formData, strasse: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">PLZ &amp; Wohnort *</label>
                <input
                  type="text"
                  placeholder="z. B. 10115 Berlin"
                  value={formData.plzOrt}
                  onChange={(e) => setFormData({ ...formData, plzOrt: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Geburtsdatum *</label>
                  <input
                    type="text"
                    placeholder="TT.MM.JJJJ"
                    value={formData.geburtsdatum}
                    onChange={(e) => setFormData({ ...formData, geburtsdatum: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Geburtsort</label>
                  <input
                    type="text"
                    placeholder="z. B. Berlin"
                    value={formData.geburtsort}
                    onChange={(e) => setFormData({ ...formData, geburtsort: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Telefon (optional)</label>
                  <input
                    type="text"
                    placeholder="optional"
                    value={formData.telefon}
                    onChange={(e) => setFormData({ ...formData, telefon: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">E-Mail (optional)</label>
                  <input
                    type="text"
                    placeholder="optional"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Wehrstatus</label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value as UserStatus })}
                  className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium"
                >
                  <option value="ungedient_vor_einberufung">Ungedienter (vor Einberufung)</option>
                  <option value="ungedient_nach_einberufung">Ungedienter (Einberufungsbescheid vorliegend)</option>
                  <option value="soldat_aktiv">Aktiver Soldat (SaZ / FWDL / BS)</option>
                  <option value="reservist">Reservist (ehem. Soldat)</option>
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
                      placeholder="z. B. Gefreiter"
                      value={formData.dienstgrad}
                      onChange={(e) => setFormData({ ...formData, dienstgrad: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium"
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="pt-3 border-t border-slate-200">
              <p className="text-[11px] text-slate-500 leading-normal">
                Eingaben verbleiben lokal in Ihrem Webbrowser und werden weder serverseitig gespeichert noch weitergeleitet.
              </p>
            </div>
          </div>

          {/* Document Preview & Tabs (8 cols) */}
          <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-300 shadow-md overflow-hidden">
            
            {/* Header Tabs */}
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
                  3. Begründungs-Fragen
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

            {/* Preview Banner */}
            <div className="bg-slate-100 px-4 py-1.5 border-b border-slate-200 text-[11px] font-bold text-slate-600 flex items-center justify-between">
              <span>Beispielhafte Textvorschau (Muster)</span>
              <span>Nach dem Ausdrucken eigenhändig unterschreiben</span>
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
                <span className="w-2 h-2 rounded-full bg-slate-700"></span>
                <span>Musterkonformität nach DIN 5008 &amp; § 2 KDVG</span>
              </div>
              <div className="text-[11px] text-slate-500">
                Im Original mit Unterschrift per Einschreiben beim BAPersBw einreichen
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

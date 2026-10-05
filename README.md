# kdvantrag.de – Domain-Projekt & Portal für Kriegsdienstverweigerung

Vollwertiges, conversion-optimiertes und rechtssicheres Webportal für die Domain **`kdvantrag.de`**. Entwickelt als eigenständiges, übergabefähiges Projekt für den Vercel-Export.

---

## 1. Domain-Steckbrief

- **Domain**: `kdvantrag.de`
- **Branche & Nische**: Wehrrecht, Bürgerrechte, Gewissensfreiheit & Vorlagenportal (Art. 4 Abs. 3 GG & KDVG)
- **Modus**: Fokussiertes Service- und Informationsportal (Single-Domain Showcase)
- **Zielgruppe**: Ungediente Zivilisten, wehrfähige Jahrgänge, aktive Soldatinnen & Soldaten (SaZ, FWDL, BS) sowie Reservisten
- **Seitenanzahl**: 7 vollständige Routen (Startseite, Ablauf & Phasen, Vorlagen-Generator, Ratgeber & Urteile, Fristen-Rechner, Impressum gem. § 5 DDG, Datenschutzerklärung nach DSGVO)

---

## 2. Rechtliche Konformität & Abmahn-Sicherheit

- **Impressum gem. § 5 DDG & § 18 MStV**:
  - Vollständige Anbieterkennzeichnung mit ladungsfähiger Anschrift:
    `Jens Kathe, Hansastraße 6, 34119 Kassel, Deutschland`
  - Direkte Kontaktdaten: `jens@kathe.org`
  - Hinweis auf Kleinunternehmerregelung nach § 19 UStG
  - Inhaltlich Verantwortlicher nach § 18 Abs. 2 MStV
  - EU-Streitbeilegung (OS-Plattform) & VSBG-Verbraucherhinweis
- **UWG- & RDG-Schutz**:
  - Verbot unzulässiger Superlative (keine „Testsieger“- oder „Erfolgsgarantie“-Versprechen)
  - Vollständiger Ausschluss unerlaubter Rechtsberatung (§ 2 RDG)
  - Transparente Kennzeichnung aller CTAs und Empfehlungen (`* Partnerlink` / `* Werbelink`)
  - Transparenzhinweis zur Unabhängigkeit von BMVg, Bundeswehr und BAPersBw
  - Modellrechnungshinweis bei allen Bearbeitungszeiten- und Fristen-Kalkulationen

---

## 3. Technische Spezifikation & DSGVO

- **Framework**: Vite + React 18 (TypeScript) + Tailwind CSS
- **Zero-CDN Policy**: 100 % DSGVO-konform. Keinerlei Google-Fonts-CDNs oder Drittserver-Verbindungen beim Laden der Seite.
- **Lokale Datenverarbeitung**: Alle Formulareingaben im Musterschreiben-Generator verbleiben ausschließlich im lokalen Browser-Speicher (Client-Side).
- **SEO & Schema.org**: Vollständiges JSON-LD (`WebSite`, `Organization`, `Service`, `FAQPage`, `BreadcrumbList`) in `index.html`.
- **Barrierefreiheit (WCAG AAA)**: Kontrastverhältnis über 12:1 auf Akzent-Elementen (Amber-Gold mit schwarzer Schrift, Dark Slate, Off-White).

---

## 4. Lokale Entwicklung & Build-Prüfung

```bash
# Abhängigkeiten installieren
npm install

# Entwicklungsserver starten
npm run dev

# Produktions-Build erstellen
npm run build
```

---

## 5. Vercel Deployment

Das Projekt ist durch `vercel.json` für unterbrechungsfreie SPA-Routen vorbereitet.

```bash
# Preview Deployment
vercel

# Produktions-Deployment
vercel --prod
```

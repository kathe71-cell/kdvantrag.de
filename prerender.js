import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8');
const { render } = await import('./dist-ssr/entry-server.js');

const routesToPrerender = [
  {
    url: '/',
    title: 'KDV-Antrag Leitfaden, Vorlagen & Musterschreiben | Kriegsdienstverweigerung',
    desc: 'KDV-Antrag rechtssicher stellen: Kostenlose DIN 5008 Vorlagen, Gliederung für die Gewissensbegründung nach Art. 4 Abs. 3 GG und interaktiver Behörden-Finder für BAPersBw & KarrC.'
  },
  {
    url: '/ablauf',
    title: 'Verfahrensablauf & Phasen des KDV-Antrags | kdvantrag.de',
    desc: 'Schritt-für-Schritt durch das KDV-Anerkennungsverfahren: Von der Einreichung über die Prüfung durch das BAFzA bis zum Bescheid.'
  },
  {
    url: '/vorlagen',
    title: 'KDV-Musterantrag, Lebenslauf & Leitfaden | kdvantrag.de',
    desc: 'Kostenlose Muster und Vorlagen für den KDV-Antrag, tabellarischen Lebenslauf und die Gewissensbegründung nach DIN 5008.'
  },
  {
    url: '/ratgeber',
    title: 'Typische Fehler & BVerwG-Rechtsprechung | kdvantrag.de',
    desc: 'Häufige Ablehnungsgründe vermeiden: Wichtige Leitsätze des Bundesverwaltungsgerichts zur Gewissensentscheidung nach Art. 4 Abs. 3 GG.'
  },
  {
    url: '/rechner',
    title: 'Fristen- und Bearbeitungszeiten-Rechner | kdvantrag.de',
    desc: 'Interaktiver Fristenrechner für KDV-Anträge, Widerspruchsfristen nach VwGO und durchschnittliche Verfahrensdauer.'
  },
  {
    url: '/rechner-embed',
    title: 'KDV Fristen- & Bearbeitungszeiten-Rechner Widget | kdvantrag.de',
    desc: 'Kompaktes KDV-Fristenrechner-Widget zur kostenlosen Einbindung auf Kanzlei- und Beratungs-Websites.'
  },
  {
    url: '/impressum',
    title: 'Impressum (§ 5 DDG) | kdvantrag.de',
    desc: 'Gesetzliche Anbieterkennzeichnung und rechtliche Angaben für kdvantrag.de.'
  },
  {
    url: '/datenschutz',
    title: 'Datenschutzerklärung (DSGVO) | kdvantrag.de',
    desc: 'Datenschutzerklärung und Hinweise zur DSGVO-konformen Verarbeitung auf kdvantrag.de.'
  }
];

console.log(`Starting prerendering of ${routesToPrerender.length} routes for kdvantrag.de...`);

for (const route of routesToPrerender) {
  try {
    const { html: appHtml } = render(route.url);
    let rendered = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
    rendered = rendered.replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`);
    rendered = rendered.replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${route.desc}" />`);
    const fullUrl = `https://www.kdvantrag.de${route.url === '/' ? '' : route.url}`;
    rendered = rendered.replace(/<link rel="canonical" href=".*?" \/>/, `<link rel="canonical" href="${fullUrl}" />`);
    rendered = rendered.replace(/<meta property="og:url" content=".*?" \/>/, `<meta property="og:url" content="${fullUrl}" />`);
    rendered = rendered.replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${route.title}" />`);
    rendered = rendered.replace(/<meta name="twitter:title" content=".*?" \/>/, `<meta name="twitter:title" content="${route.title}" />`);
    rendered = rendered.replace(/<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${route.desc}" />`);
    rendered = rendered.replace(/<meta name="twitter:description" content=".*?" \/>/, `<meta name="twitter:description" content="${route.desc}" />`);

    const filePath = route.url === '/' ? 'dist/index.html' : `dist${route.url}/index.html`;
    const absolutePath = toAbsolute(filePath);
    fs.mkdirSync(path.dirname(absolutePath), { recursive: true });
    fs.writeFileSync(absolutePath, rendered);
    console.log(`  ✓ ${route.url} -> ${filePath} (${(rendered.length / 1024).toFixed(1)} kB)`);
  } catch (err) {
    console.error(`  ✗ Error prerendering ${route.url}:`, err);
  }
}

console.log('Prerendering complete!');

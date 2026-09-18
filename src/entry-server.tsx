import ReactDOMServer from 'react-dom/server';
import { App } from './App';

export function render(url: string) {
  const html = ReactDOMServer.renderToString(<App initialPath={url} />);
  return { html };
}

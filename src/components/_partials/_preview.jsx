/* eslint-disable react/no-danger, react/jsx-filename-extension */
import {h, Component} from 'preact';

export default class PreviewTemplate extends Component {
  render(props) {
    return (
      <html lang="es" dir="ltr" prefix="og: http://ogp.me/ns#" className="no-js fonts-loaded">
      <head>
        <meta charSet="utf-8" />
        <meta name="referrer" content="origin" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="/assets/styles/app.css" />
      </head>
      <body>
      <div dangerouslySetInnerHTML={{ __html: props.yield }} />

      <script src="/assets/scripts/app.js" />
      </body>
      </html>
    );
  }
}

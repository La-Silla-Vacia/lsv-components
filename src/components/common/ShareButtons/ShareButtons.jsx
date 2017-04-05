/* eslint-disable react/react-in-jsx-scope */
import { h, Component } from 'preact';

const ShareButtons = () => (
  <div className="c-shareButtons">
    <ul className="c-shareButtons__list">
      <li className="twitter">
        <button>
          Tweet
        </button>
      </li>
      <li className="facebook">
        <button>Share on Facebook</button>
      </li>
      <li className="whatsapp">
        <a
          data-action="share/whatsapp/share"
          href="whatsapp://send?text=I'm a nice title en http://localhost:5000/"
        >
          Share on WhatsApp
        </a>
      </li>
      <li className="email">
        <a
          href="mailto:?subject=I'm a nice title&amp;amp;body=I'm the text thats that will be the postcontent: http://localhost:5000/"
        >
          Share by e-mail
        </a>
      </li>
    </ul>
    <script src="http://connect.facebook.net/es_ES/all.js" type="text/javascript" charSet="utf-8" />
  </div>
);

export default ShareButtons;

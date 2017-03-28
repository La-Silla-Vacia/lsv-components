const { h, Component } = require('preact');

const shareButtons = ({ children, ...props }) => (
  <div class="c-shareButtons">
    <ul class="c-shareButtons__list">
      <li class="twitter">
        <button>
          <img alt="Tweet" src="/assets/icons/twitter.svg" />
        </button>
      </li>
      <li class="facebook">
        <button>
          <img alt="Share on Facebook" src="/assets/icons/facebook.svg" />
            <script src="http://connect.facebook.net/es_ES/all.js" type="text/javascript" charSet="utf-8" />
        </button>
      </li>
      <li class="whatsapp">
        <a data-action="share/whatsapp/share"
           href="whatsapp://send?text=I'm a nice title en http://localhost:5000/">
          <img alt="Share on WhatsApp" src="/assets/icons/whatsapp.svg" />
        </a>
      </li>
      <li class="email">
        <a href="mailto:?subject=I'm a nice title&amp;amp;body=I'm the text thats that will be the postcontent: http://localhost:5000/">
          <img alt="Share by e-mail" src="/assets/icons/email.svg" />
        </a>
      </li>
    </ul>
  </div>
);

export default shareButtons;

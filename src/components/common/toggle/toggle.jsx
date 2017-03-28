const { h, Component } = require('preact');

export default class Toggle extends Component {
  render(props) {
    const { title, content } = props;
    return (
      <div className="c-toggle">
        <button className="c-toggle__button">
          {title}
        </button>

        <div className="c-toggle__content">
          {content}
        </div>
      </div>
    );
  }
}

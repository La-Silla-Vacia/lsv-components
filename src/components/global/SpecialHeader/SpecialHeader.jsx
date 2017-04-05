import { h, Component } from 'preact';
import Toggle from '../../common/Toggle/Toggle';

const SpecialHeader = ({ children, ...props }) => (
  <header className="g-specialHeader">
    <h1 className="g-specialHeader__title">The special title</h1>
    <h2 className="g-specialHeader__subtitle">this special subtitle</h2>

    <div className="g-specialHeader__content">
      <Toggle />
    </div>

    <nav className="g-specialHeader__navigation">
      <ul className="g-specialHeader__navigation__list">

      </ul>
    </nav>
  </header>
);

export default SpecialHeader;

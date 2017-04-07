/* eslint-disable react/react-in-jsx-scope */
import { h, Component } from 'preact';

const Toggle = ({ children, ...props }) => (
  <div className="c-toggle">
    <button className="c-toggle__button">
      {props.title}
    </button>

    <div className="c-toggle__content">
      {children}
    </div>
  </div>
);

export default Toggle;

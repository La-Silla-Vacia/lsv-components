const { h, Component } = require('preact');

const Button = ({ children, ...props }) => (
  <a className="c-button" href={props.link}>{ children }</a>
);

export default Button;

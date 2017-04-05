import { h, Component } from 'preact';

const Button = ({ children, ...props }) => (
  <a className="c-button" href={props.link}>{ children }</a>
);

export default Button;

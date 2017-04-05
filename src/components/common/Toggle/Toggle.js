import Velocity from 'velocity-animate';

class cToggle {
  constructor(element) {
    this.element = element;
    this.button = element.querySelector('.c-toggle__button');
    this.content = element.querySelector('.c-toggle__content');

    this.open = false;

    this.watch();
  }

  watch() {
    this.button.addEventListener('click', this.toggle.bind(this));
  }

  toggle() {
    let direction = "slideDown";
    this.element.classList.add('c-toggle--open');
    if (this.open) {
      direction = "slideUp";
      this.element.classList.remove('c-toggle--open');
    }
    this.open = !this.open;
    Velocity(this.content, direction, {
      duration: 500
    });
  }
}

document.addEventListener("DOMContentLoaded", function (event) {
  (function (d) {
    const toggles = d.querySelectorAll('.c-toggle');
    for (let toggle of toggles) {
      new cToggle(toggle);
    }
  })(document);
});


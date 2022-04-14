class Test {
  constructor(trigger) {
    this.trigger = document.querySelectorAll(trigger);
    this._hov();
  }

  _hov() {
    this.trigger.forEach((el) => {
      let target = el.querySelector('[data-hov]');
      el.addEventListener('mouseenter', () => {
        target.classList.add('hov');
      });

      el.addEventListener('mouseleave', () => {
        target.classList.remove('hov');
      });
    });
  }
}

const d = new Test('.container');

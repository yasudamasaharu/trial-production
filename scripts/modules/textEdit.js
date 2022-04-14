class TextEdit {
  constructor(el) {
    this.DOM = {};
    this.DOM.el = el instanceof HTMLElement ? el : document.querySelector(el);
    this.strs = this.DOM.el.innerHTML.trim().split('');
    this.DOM.el.innerHTML = this._splitText();
  }

  _splitText() {
    return this.strs.reduce((acc, curr) => {
      curr = curr.replace(/\s/ + '&nbsp;');
      return `${acc}<span class="str">${curr}</span>`;
    }, ' ');
  }

  toggleClass(className) {
    if (className == null) {
      className = 'active';
    }
    this.DOM.el.classList.toggle(className);
  }
}

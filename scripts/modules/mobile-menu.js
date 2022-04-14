class ToggleMobileMenu {
  constructor(el) {
    this.el = el instanceof HTMLElement ? el : document.querySelector(el);
    this.btn = this.el.nextElementSibling;
    this._toggleClass();
  }

  _toggleClass() {
    this.btn.addEventListener('click', () => {
      this.el.classList.toggle('active');
      this.btn.classList.toggle('active');

      this._initScroll('mousewheel');
      this._initScroll('touchmove');
    });
  }

  //モバイルメニューが表示されている場合のみスクロールを無効化する処理
  _initScroll(type) {
    if (this.el.classList.contains('active')) {
      this.el.addEventListener(type, (e) => {
        e.preventDefault();
      });
    }
  }
}

const spMenu = new ToggleMobileMenu('#mobile-menu');

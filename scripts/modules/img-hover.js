class ImgHoverEvent {
  constructor(els) {
    this.els = document.querySelectorAll(els);
    this._initHover();
  }

  _initHover() {
    this.els.forEach((el) => {
      el.addEventListener('mouseenter', (e) => {
        e.target.classList.add('active');
      });

      el.addEventListener('mouseleave', (e) => {
        e.target.classList.remove('active');
      });
    });
  }
}

const hoverImg = new ImgHoverEvent('.lifeplanner__li');

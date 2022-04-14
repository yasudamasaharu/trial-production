// const icons = document.querySelectorAll('.hero-navi__li');

// const arys = ['red', 'blue', 'green', 'orange', 'pink'];

// icons.forEach((el, index) => {
//   arys.forEach((str, num) => {
//     if (index === num) {
//       el.style.backgroundColor = arys[num];
//     }
//   });
// });

class HoverEvents {
  constructor(els) {
    this.els = document.querySelectorAll(els);
    this._hoverEvents();
  }

  _hoverEvents() {
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

const heroNavi = new HoverEvents('.hero-navi__li');

class ScrollInit {
  constructor(el) {
    this.el = el instanceof HTMLElement ? el : document.querySelector(el);
    const io = new IntersectionObserver(this._callback);
    io.observe(this.el);
  }

  _callback(entries, ob) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log('inview');
      } else {
        console.log('inview');
      }
    });
  }
}

const test = new ScrollInit('.el');
const test2 = new ScrollInit('.el2');

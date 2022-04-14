class MainSlider {
  constructor(els, effect) {
    this.els = document.querySelector(els);
    this.effect = effect;
    this.swiper = this._initSlider();
  }

  _initSlider() {
    return new Swiper(this.els, {
      loop: true,
      grabCursor: true,
      effect: this.effect,
      centeredSlides: true,
      slidesPerView: 1,
    });
  }

  start(options = {}) {
    options = Object.assign(
      {
        delay: 3000,
        disableOnInteraction: false,
      },
      options
    );

    this.swiper.params.autoplay = options;
    this.swiper.autoplay.start();
  }

  stop() {
    this.swiper.autoplay.stop();
  }
}

class SubSlide {
  constructor(els) {
    this.els = document.querySelector(els);
    this.swiper = this._initSlider();
  }

  _initSlider() {
    return new Swiper(this.els, {
      effect: 'slide',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      slidesPerView: 2,
      spaceBetween: 10,
      breakpoints: {
        600: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        960: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
      grabCursor: true,
      loop: true,
    });
  }

  start(options = {}) {
    options = Object.assign(
      {
        delay: 3000,
        disableOnInteraction: false,
      },
      options
    );

    this.swiper.params.autoplay = options;
    this.swiper.autoplay.start();
  }

  stop() {
    this.swiper.autoplay.stop();
  }
}

class HoverCover {
  constructor(triggers, targets) {
    this.triggers = document.querySelectorAll(triggers);
    // this.targets = document.querySelectorAll(targets);
    this._hoverToggle();
  }

  _hoverToggle() {
    this.triggers.forEach((trigger) => {
      let target = trigger.querySelector('[data-img-cover]');
      trigger.addEventListener('mouseenter', () => {
        target.classList.add('cover');
      });
      trigger.addEventListener('mouseleave', () => {
        target.classList.remove('cover');
      });
    });
  }
}
const hoverTest = new HoverCover('.lifeplanner__li');
const recommendImg = new HoverCover('.recommend__li');

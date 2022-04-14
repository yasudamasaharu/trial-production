class EventClear {
  constructor(els) {
    this.els = document.querySelectorAll(els);
    this._defaultEventClear();
  }

  _defaultEventClear() {
    this.els.forEach((el) => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
      });
    });
  }
}

const tel = new EventClear('.tel');

const newsTab = new EventClear('.news-tab__li');

class ToggleNewsItem {
  constructor(tabs, items) {
    this.tabs = document.querySelectorAll(tabs);
    this.items = document.querySelectorAll(items);
    this._init();
    this._clickEvent();
  }

  _init() {
    // 一番最初のタブを表示させる
    this.tabs.forEach((tab, index) => {
      if (!tab.classList.contains('active')) {
        this.tabs[0].classList.add('active');
        this.items.forEach((el, index) => {
          this.items[0].classList.add('active');
        });
      }
    });
  }

  _clickEvent() {
    this.tabs.forEach((tab, index) => {
      this.items.forEach((el) => {
        tab.addEventListener('click', () => {
          // 一旦全てのタブのクラスを外す。
          this.tabs.forEach((tab, index) => {
            tab.classList.remove('active');
            el.classList.remove('active');
          });
          // クリックした要素にクラスを付与する。
          this.items[index].classList.add('active');
          this.tabs[index].classList.add('active');
        });
      });
    });
  }
}

window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('resize', () => {
    let demo = {};
    if (window.innerWidth < 960) {
      demo = new ToggleNewsItem('.news-tab__li', '.news-item__ul');
    } else {
      console.log(demo);
    }
  });
});

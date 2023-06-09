import outsideClick from './outside-click.js';

class MenuMobile {
  constructor(btnMenu, menuList, events) {
    this.btnMenu = document.querySelector(btnMenu);
    this.menuList = document.querySelector(menuList);
    this.activeClass = 'active';

    // Define touchstart e click como argumento padrão
    // caso o usuário não defina
    if (events === undefined) this.events = ['touchstart', 'click'];
    else this.events = events;
  }

  openMenu = (event) => {
    event.stopPropagation();
    this.menuList.classList.add(this.activeClass);
    this.btnMenu.classList.add(this.activeClass);

    outsideClick(this.menuList, this.events, () => {
      this.menuList.classList.remove(this.activeClass);
      this.btnMenu.classList.remove(this.activeClass);
    });
  };

  addMenuMobileEvents() {
    this.events.forEach((userEvent) => {
      this.btnMenu.addEventListener(userEvent, this.openMenu);
    });
  }

  init() {
    if (this.btnMenu && this.menuList) {
      this.addMenuMobileEvents();
    }
    return this;
  }
}
export default MenuMobile;

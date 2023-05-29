import outsideClick from './outside-click.js';

export default class DropdownMenu {
  constructor(dropdownMenus, events) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);
    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);

    // Define touchstart e click como argumento padrão
    // caso o usuário não defina
    if (events === undefined) this.events = ['touchstart', 'click'];
    else this.events = events;
    this.activeClass = 'active';
  }

  // Ativa o dropdownmenu e adiciona
  // a função que observa o  clique fora dele
  activeDropdownMenu = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    outsideClick(element, this.events, () => {
      element.classList.remove(this.activeClass);
    });
  };

  // Adiciona os eventos ao dropdownmenu
  addDropdownMenusEvent() {
    this.dropdownMenus.forEach((item) => {
      this.events.forEach((userEvent) => {
        item.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownMenusEvent();
    }
    return this;
  }
}

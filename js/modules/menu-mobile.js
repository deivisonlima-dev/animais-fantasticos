import outsideClick from './outside-click.js';

const initMenuMobile = () => {
  const btnMenu = document.querySelector('[data-menu="mobile"]');
  const menuList = document.querySelector('[data-menu="lista"]');
  const events = ['click', 'touchstart'];

  if (btnMenu) {
    /** @param {MouseEvent} event */
    const openMenu = (event) => {
      event.stopPropagation();
      menuList.classList.add('active');
      btnMenu.classList.add('active');

      outsideClick(menuList, events, () => {
        menuList.classList.remove('active');
        btnMenu.classList.remove('active');
      });
    };

    events.forEach((userEvent) => {
      btnMenu.addEventListener(userEvent, openMenu);
    });
  }
};

export default initMenuMobile;

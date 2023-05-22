const initDropdowMenu = () => {
  const dropdownMenus = document.querySelectorAll('[data-dropdown]');
  const eventAll = ['touchstart', 'click'];

  function outsideClick(element, events, callback) {
    const html = document.documentElement;
    const outside = 'data-outside';

    function handleOutside(event) {
      if (!element.contains(event.target)) {
        events.forEach((userEvent) => {
          html.removeEventListener(userEvent, handleOutside);
        });
        element.removeAttribute(outside);
        callback();
      }
    }

    if (!element.hasAttribute(outside)) {
      events.forEach((userEvent) => {
        html.addEventListener(userEvent, handleOutside);
      });
      element.setAttribute(outside, '');
    }
  }

  /** @param {MouseEvent} event */
  function handleDropdown(event) {
    event.preventDefault();
    event.stopPropagation();
    this.classList.add('active');
    outsideClick(this, eventAll, () => {
      this.classList.remove('active');
    });
  }

  dropdownMenus.forEach((item) => {
    eventAll.forEach((userEvent) => {
      item.addEventListener(userEvent, handleDropdown);
    });
  });
};

export default initDropdowMenu;

// const initDropdownMenu = () => {
//   const dropdownMenus = document.querySelectorAll("[data-dropdown]");

//   function handleClick(event) {
//     event.preventDefault();
//     this.classList.add("active");
//     clickOutside(this, ["touchstart", "click"], () => {
//       this.classList.remove("active");
//     });
//   }

//   function clickOutside(element, events, callback) {
//     const outside = "data-outside";
//     const html = document.documentElement;

//     if (!element.hasAttribute(outside)) {
//       events.forEach((userEvent) => {
//         html.addEventListener(userEvent, handleOutside);
//       });
//       element.setAttribute(outside, "");
//     }

//     /**@param {MouseEvent} event */
//     function handleOutside(event) {
//       if (!element.contains(event.target)) {
//         events.forEach((userEvent) => {
//           html.removeEventListener(userEvent, handleOutside);
//         });
//         element.removeAttribute(outside);
//         callback();
//       }
//     }
//   }

//   dropdownMenus.forEach((menu) => {
//     ["touchstart", "click"].forEach((userEvent) => {
//       menu.addEventListener(userEvent, handleClick);
//     });
//   });
// };

// export default initDropdownMenu;

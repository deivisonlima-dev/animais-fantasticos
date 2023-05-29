function outsideClick(element, events, callback) {
  const html = document.documentElement;
  const outside = 'data-outside';

  function handleOutside(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(outside);
      events.forEach((userEvent) => {
        html.removeEventListener(userEvent, handleOutside);
      });
      callback();
    }
  }

  if (!element.hasAttribute(outside)) {
    events.forEach((userEvent) => {
    //  setTimeout(() => {
      html.addEventListener(userEvent, handleOutside);
    //  });
    });
    element.setAttribute(outside, '');
  }
}
export default outsideClick;

/*
 outsideClick(element, events, callback) {
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
*/

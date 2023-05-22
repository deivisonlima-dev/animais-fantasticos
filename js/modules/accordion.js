// Accordion list
const initAccordion = () => {
  const accordionList = document.querySelectorAll('[data-animate="accordion"] dt');
  if (accordionList.length) {
    const activeClass = 'active';
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    /** @param { MouseEvent } event */
    const accordionContent = (event) => {
      const nextElement = event.currentTarget.nextElementSibling;
      event.currentTarget.classList.toggle(activeClass);
      nextElement.classList.toggle(activeClass);
    };

    accordionList.forEach((item) => {
      item.addEventListener('click', accordionContent);
    });
  }
};
export default initAccordion;

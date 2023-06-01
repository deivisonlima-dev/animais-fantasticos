class Accordion {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list);// '[data-animate="accordion"] dt'
    this.activeClass = 'active';
  }

  toggleAccordion = (item) => {
    item.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.activeClass);
  };

  // adiciona os eventos ao accordion
  addAccordionEvent() {
    this.accordionList.forEach((item) => {
      item.addEventListener('click', () => this.toggleAccordion(item));
    });
  }

  // iniciar função
  init() {
    if (this.accordionList.length) {
      // ativar primeiro item
      this.toggleAccordion(this.accordionList[0]);
      this.addAccordionEvent();
    }
    return this;
  }
}
export default Accordion;

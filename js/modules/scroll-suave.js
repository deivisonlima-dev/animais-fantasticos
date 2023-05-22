// Scroll suave - link interno
const smoothScrolling = () => {
  const internalLinks = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');
  if (internalLinks.length) {
    /** @param {MouseEvent} event */
    const scrollToSection = (event) => {
      event.preventDefault();
      const href = event.currentTarget.getAttribute('href');
      const section = document.querySelector(href);
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    };
    internalLinks.forEach((link) => {
      link.addEventListener('click', scrollToSection);
    });
  }
};
export default smoothScrolling;

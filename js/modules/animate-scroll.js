// Animar scroll
const initAnimationScroll = () => {
  const sections = document.querySelectorAll('[data-animate="scroll"]');
  if (sections.length) {
    const windowHalf = window.innerHeight * 0.6;
    const animateScrolling = () => {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top - windowHalf;
        if (sectionTop < 0) {
          section.classList.add('animate');
        } else if (section.classList.contains('animate')) {
          section.classList.remove('animate');
        }
      });
    };
    animateScrolling();
    window.addEventListener('scroll', animateScrolling);
  }
};
export default initAnimationScroll;

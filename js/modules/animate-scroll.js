// Animar scroll
class AnimationScroll {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowHalf = window.innerHeight * 0.6;
  }

  animateScrolling = () => {
    this.sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top - this.windowHalf;
      if (sectionTop < 0) {
        section.classList.add('animate');
      } else if (section.classList.contains('animate')) {
        section.classList.remove('animate');
      }
    });
  };

  init() {
    this.animateScrolling();
    window.addEventListener('scroll', this.animateScrolling);
  }
}
export default AnimationScroll;

// class AnimationScroll {
//   constructor(sections) {
//     this.sections = document.querySelectorAll(sections);
//   }

//   animateScrolling() {
//     const myObserver = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('animate');
//         } else if (entry.target.classList.contains('animate')) {
//           entry.target.classList.remove('animate');
//         }
//       });
//     });
//     this.sections.forEach((element) => {
//       myObserver.observe(element);
//     });
//   }

//   init() {
//     this.animateScrolling();
//   }
// }
// export default AnimationScroll;

// Animar scroll
class AnimationScroll {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowHalf = window.innerHeight * 0.6;
  }

  // Pega a distância em relação
  // ao topo do site
  getDistance = () => {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: Math.floor(offset - this.windowHalf),
      };
    });
  };

  // Verifica a distância em cada objeto
  // em relação ao scroll do site
  checkDistance = () => {
    console.log('ativou');
    this.distance.forEach((item) => {
      if (window.scrollY > item.offset) {
        item.element.classList.add('animate');
      } else if (item.element.classList.contains('animate')) {
        item.element.classList.remove('animate');
      }
    });
  };

  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance();
      window.addEventListener('scroll', this.checkDistance);
    }
    return this;
  }

  // Remove o event de scroll
  stop() {
    window.removeEventListener('scroll', this.checkDistance);
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
//     return this;
//   }
// }
// export default AnimationScroll;

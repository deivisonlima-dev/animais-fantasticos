class AnimateNumbers {
  constructor(numbers, observerTarget, observerClass) {
    this.numbers = document.querySelectorAll(numbers);
    this.observerTarget = document.querySelector(observerTarget);
    this.observerClass = observerClass;
  }

  // Recebe um elemento do dom, com número em seu texto
  // incrementa a partir de 0 até o número final
  static incrementNumber(num) {
    const total = +num.innerText;
    const add = Math.floor(total / 100);
    let start = 0;
    const timer = setInterval(() => {
      start += add;
      num.innerText = start;
      if (start > total) {
        num.innerText = total;
        clearInterval(timer);
      }
    }, 25);
  }

  // Ativa incrementa número para cada
  // número selecionado do dom
  animateNumbers() {
    this.numbers.forEach((num) => {
      this.constructor.incrementNumber(num);
    });
  }

  // Função que ocorre quando a mutação ocorrer
  handleMutation = (mutation) => {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animateNumbers();
    }
  };

  // Adiciona o MutationObserver para verificar
  // quando a classe animate é adiconada ao elemento target
  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init() {
    if (this.numbers.length && this.observerTarget) {
      this.addMutationObserver();
    }
    return this;
  }
}

export default AnimateNumbers;

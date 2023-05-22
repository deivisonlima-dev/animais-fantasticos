const initAnimateNumbers = () => {
  function animateNumbers() {
    const numbers = document.querySelectorAll('[data-numero]');
    numbers.forEach((num) => {
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
    });
  }
  let observer;
  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains('animate')) {
      observer.disconnect();
      animateNumbers();
    }
  }
  observer = new MutationObserver(handleMutation);
  const sectionObserver = document.querySelector('.numeros');
  observer.observe(sectionObserver, { attributes: true });
};

export default initAnimateNumbers;

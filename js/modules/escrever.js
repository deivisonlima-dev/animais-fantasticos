// Efeito maquina de escrever
const initWritingEfferct = () => {
  const titleH1 = document.querySelector('#title');

  const writeTitle = (element) => {
    const el = element;
    const titleArray = el.innerHTML.split('');
    el.innerHTML = '';
    titleArray.forEach((letter, index) => {
      setTimeout(() => (el.innerHTML += letter), 70 * index);
    });
  };
  if (titleH1) {
    writeTitle(titleH1);
  }
};

export default initWritingEfferct;

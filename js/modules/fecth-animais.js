import initAnimateNumbers from './numeros.js';

// animais fecth
function createAnimail(animal) {
  const div = document.createElement('div');
  div.classList.add('numero-animal');

  div.innerHTML = `
      <h3>${animal.specie}</h3>
      <span data-numero>${animal.total}</span>
      `;
  return div;
}

const initFecthAnimais = () => {
  function fetchAnimais(url) {
    const animais = fetch(url);
    const grid = document.querySelector('.numeros-grid');
    animais
      .then((response) => response.json())
      .then((animalText) => {
        animalText.forEach((animal) => {
          const divAnimal = createAnimail(animal);
          grid.appendChild(divAnimal);
        });
        initAnimateNumbers();
      }).catch((erro) => {
        console.log(Error(erro));
      });
  }

  fetchAnimais('./animaisapi.json');
};

export default initFecthAnimais;

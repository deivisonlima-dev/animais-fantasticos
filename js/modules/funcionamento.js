// const initFuncionamento = () => {
//   const funcionamento = document.querySelector('[data-semana]');

//   const diasSemana = funcionamento.dataset.semana.split(',').map(Number);
//   const horaSemana = funcionamento.dataset.horario.split(',').map(Number);
//   const dataAtual = new Date();
//   const diaAtual = dataAtual.getDay();
//   const horaAtual = dataAtual.getHours();
//   // const semanaAberto = diasSemana.indexOf(diaAtual) !== -1;
//   const semanaAberto1 = diasSemana.includes(diaAtual);
//   const horarioAberto = horaAtual >= horaSemana[0] && horaAtual < horaSemana[1];
//   if (semanaAberto1 && horarioAberto) {
//     funcionamento.classList.add('open');
//   }
// };
// export default initFuncionamento;

class Operation {
  constructor(operation, activeClass) {
    this.operation = document.querySelector(operation);
    this.activeClass = activeClass;
  }

  operatingData() {
    this.diasSemana = this.operation.dataset.semana.split(',').map(Number);
    this.horaSemana = this.operation.dataset.horario.split(',').map(Number);
  }

  dataNow() {
    this.dataAtual = new Date();
    this.diaAtual = this.dataAtual.getDay();
    this.horaAtual = this.dataAtual.getUTCHours() - 3;
  }

  open = () => {
    const semanaAberto = this.diasSemana.indexOf(this.diaAtual) !== -1;
    const horarioAberto = this.horaAtual >= this.horaSemana[0]
    && this.horaAtual < this.horaSemana[1];
    return semanaAberto && horarioAberto;
  };

  activeOpen() {
    if (this.open()) {
      this.operation.classList.add(this.activeClass);
    }
  }

  init() {
    if (this.operation) {
      this.operatingData();
      this.dataNow();
      this.activeOpen();
    }
    return this;
  }
}

export default Operation;

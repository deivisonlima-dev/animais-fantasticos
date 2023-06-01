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

const initFuncionamento = () => {
  const funcionamento = document.querySelector('[data-semana]');

  const diasSemana = funcionamento.dataset.semana.split(',').map(Number);
  const horaSemana = funcionamento.dataset.horario.split(',').map(Number);
  const dataAtual = new Date();
  const diaAtual = dataAtual.getDay();
  const horaAtual = dataAtual.getHours();
  // const semanaAberto = diasSemana.indexOf(diaAtual) !== -1;
  const semanaAberto1 = diasSemana.includes(diaAtual);
  const horarioAberto = horaAtual >= horaSemana[0] && horaAtual < horaSemana[1];
  if (semanaAberto1 && horarioAberto) {
    funcionamento.classList.add('open');
  }
};
export default initFuncionamento;

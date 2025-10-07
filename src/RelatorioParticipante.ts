import Participantes from "./Participantes";

export default class ControlePresenca {
  static gerarControlePresenca(participantes: Participantes[], totalEventos: number): void {
    console.log(" Controle de Presença ");
    participantes.forEach((participante) => {
      const percentual = ((participante.presenca / totalEventos) * 100).toFixed(1); //porcentagem de preseça de cada aluno
      console.log(
        `ID: ${participante.id} | Nome: ${participante.nome} | Presenças: ${participante.presenca}/${totalEventos} (${percentual}%)`
      );
    });
    console.log();
  }
}

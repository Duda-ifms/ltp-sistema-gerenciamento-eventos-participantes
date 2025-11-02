import Participantes from "./Participantes";

export default class ControlePresenca {
  static gerarControlePresenca(participantes: Participantes[], totalEventos: number): void {
    console.log(" Controle de Presença");

    participantes.forEach((participante) => {
      const percentual = ((participante.getPresenca() / totalEventos) * 100).toFixed(1);
      console.log(
        `ID: ${participante.id} | Nome: ${participante.nome} | Presenças: ${participante.getPresenca()}/${totalEventos} (${percentual}%)`
      );
    });

    console.log();
  }
}

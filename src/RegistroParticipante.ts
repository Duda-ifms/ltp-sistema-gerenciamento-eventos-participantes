import Participantes from "./Participantes";
import RegistroPresenca from "./RegistroPresenca";

// Subclasse especializada para registrar presença de PARTICIPANTES
export default class RegistroParticipante extends RegistroPresenca {
  tipoParticipante: string;

  constructor(estudante: Participantes, data: Date, tipoParticipante: string) {
    super(estudante, data);
    this.tipoParticipante = tipoParticipante;
  }

  // Polimorfismo: comportamento diferente do método registrar()
  registrar(): void {
    super.registrar();
    console.log(`Tipo de Participante: ${this.tipoParticipante}`);
  }
}

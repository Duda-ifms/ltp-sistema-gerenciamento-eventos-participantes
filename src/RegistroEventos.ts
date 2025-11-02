import Participantes from "./Participantes";

// Classe base (RegistroPresenca) é genérica — serve para qualquer tipo de registro
import RegistroPresenca from "./RegistroPresenca";

// Subclasse especializada para registrar presença em EVENTOS
export default class RegistroEvento extends RegistroPresenca {
  evento: string;

  constructor(estudante: Participantes, data: Date, evento: string) {
    super(estudante, data); // Chama o construtor da classe mãe
    this.evento = evento;
  }

  // Polimorfismo: sobrescreve o método registrar()
  registrar(): void {
    super.registrar();
    console.log(`Evento: ${this.evento}`);
  }
}

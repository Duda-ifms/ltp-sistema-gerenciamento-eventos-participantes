import Participantes from "./Participantes";

export default class RegistroPresenca {
  private participante: Participantes; 
  private data: Date;

  constructor(participante: Participantes, data: Date) {
    this.participante = participante;
    this.data = data;
  }

  
  public registrar(): void {
    this.participante.registrarPresenca();
    console.log(`Data: ${this.data.toLocaleDateString()}`);
  }
}

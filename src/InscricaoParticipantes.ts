export default class InscricaoParticipantes {
  id: number;
  nome: string;
  presenca: number = 0; // número de presenças

  constructor(id: number, nome: string) {
    this.id = id;
    this.nome = nome;
  }

  registrarPresenca(): void {
    this.presenca += 1; // incrementa presença
    console.log(`${this.nome} marcou presença!`);
  }
}

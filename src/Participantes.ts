export default class Participantes {
  id: number;
  nome: string; 
  presenca: number = 0; // A presença começa em 0 e vai aumentando

  constructor(id: number, nome: string) {
    this.id = id;
    this.nome = nome;
  }

  registrarPresenca(): void {
    this.presenca += 1; // sempre que for chamado, soma +1 na presença
    console.log(`${this.nome} marcou presença!`);
  }
}
//mudar para participante
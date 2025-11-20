export default class Participantes {
  id: number;
  nome: string; 
  private presenca: number = 0; // atributo privado

  constructor(id: number, nome: string) {
    this.id = id;
    this.nome = nome;
  }

  public registrarPresenca(): void {
    this.presenca += 1;
    console.log(`${this.nome} marcou presença!`);
  }

  // Getter público para acessar o valor de presenças
  public getPresenca(): number {
    return this.presenca;
  }
}

//atividade erro 
//video segunda atividade 
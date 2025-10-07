import InscricaoParticipantes from "./Participantes";

export default class CriacaoEventos {
  id: number;
  titulo: string;
  data: Date;
  participantes: InscricaoParticipantes[] = [];

  constructor(id: number, titulo: string, data: Date) {
    this.id = id;
    this.titulo = titulo;
    this.data = data;
  }

  adicionarParticipante(participante: InscricaoParticipantes): void {
    this.participantes.push(participante);
    console.log(`Participante ${participante.nome} adicionado ao evento ${this.titulo}!`);
  }
//relatorio de participante do evento
  registrarPresencaGeral(): void {
    this.participantes.forEach((p) => p.registrarPresenca());
  }
}

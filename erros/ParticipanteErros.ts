export class ParticipanteError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ParticipanteError";
  }
}

export class ParticipanteNaoEncontradoError extends ParticipanteError {
  constructor(id: number) {
    super(`Participante com ID ${id} não encontrado.`);
    this.name = "ParticipanteNaoEncontradoError";

  }
}

export class DadosInvalidosParticipanteError extends ParticipanteError {
  constructor(campo: string) {
    super(`Dados inválidos: ${campo}`);
    this.name = "DadosInvalidosParticipanteError";

  }
}




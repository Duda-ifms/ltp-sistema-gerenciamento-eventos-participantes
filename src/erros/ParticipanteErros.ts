export class ParticipanteErros extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ParticipanteError";
  }
}

export class ParticipanteNaoEncontradoErros extends ParticipanteErros {
  constructor(id: number) {
    super(`Estudante com ID ${id} não encontrado ou não pertence à turma.`);
    this.name = "ParticipanteNaoEncontradoError";
  }
}

export class DadosInvalidosParticipanteErros extends ParticipanteErros {
  constructor(campo: string) {
    super(`Dados inválidos: ${campo}`);
    this.name = "DadosInvalidosParticipanteError";
  }
}
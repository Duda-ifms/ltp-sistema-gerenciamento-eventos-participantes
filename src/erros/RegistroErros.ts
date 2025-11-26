export class RegistroErros extends Error {
  constructor(message: string) {
    super(message);
    this.name = "RegistroError";
  }
}

export class RegistroLotadoError extends RegistroErros {
  constructor(capacidade: number) {
    super(`O registro já atingiu a capacidade máxima de ${capacidade} participantes.`);
    this.name = "RegistroLotadoError";
  }
}

export class ParticipanteDuplicadoError extends RegistroErros {
  constructor(nome: string) {
    super(`Participante ${nome} já está registrado.`);
    this.name = "ParticipanteDuplicadoError";
  }
}

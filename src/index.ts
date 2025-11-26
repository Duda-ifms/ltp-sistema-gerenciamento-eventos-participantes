import InscricaoParticipantes from "./Participantes";
import CriacaoEventos from "./CriacaoEventos";
import ControlePresenca from "./RelatorioParticipante";
import RegistroEvento from "./RegistroEventos";
import RegistroParticipante from "./RegistroParticipante";


import {
  DadosInvalidosParticipanteErros,
  ParticipanteNaoEncontradoErros
} from "./erros/ParticipanteErros";

import {
  RegistroLotadoError,
  ParticipanteDuplicadoError
} from "./erros/RegistroErros";


// Lista de participantes
const participantes: InscricaoParticipantes[] = [];

let participante1!: InscricaoParticipantes;
let participante2!: InscricaoParticipantes;
let participante3!: InscricaoParticipantes;
let participante4!: InscricaoParticipantes;
let participante5!: InscricaoParticipantes;


// ==========================
// 🔹 CRIAÇÃO DE PARTICIPANTES
// ==========================
try {
  participante1 = new InscricaoParticipantes(1, "João Felix");
  participante2 = new InscricaoParticipantes(2, "João Pedro");
  participante3 = new InscricaoParticipantes(3, "Maria Clara");
  participante4 = new InscricaoParticipantes(4, "Rayssa");
  participante5 = new InscricaoParticipantes(4, "Rayssa");
//erro aoduplicar
  try {
  throw new ParticipanteDuplicadoError("Rayssa");
} catch (error) {
  if (error instanceof ParticipanteDuplicadoError) {
    console.error(`❌ ${error.message}`);
  }
}

  participantes.push(
    participante1,
    participante2,
    participante3,
    participante4,
    participante5
  );

} catch (error: any) {
  
  if (error instanceof DadosInvalidosParticipanteErros) {
    console.error(`❌ Erro ao criar participante: ${error.message}`);
    process.exit(1);
  } else {
    console.error(`❌ Erro inesperado: ${error.message ?? error}`);
    process.exit(1);
  }
}


// ==========================
// 🔹 CRIAÇÃO DE EVENTOS
// ==========================
const evento01 = new CriacaoEventos(1, "Semana de Tecnologia", new Date("2025-10-10"));
const evento02 = new CriacaoEventos(2, "Semana de Arte Cultura", new Date("2025-11-05"));
const evento03 = new CriacaoEventos(3, "Jifena", new Date("2025-05-18"));

try {
  throw new RegistroLotadoError(3);
} catch (error) {
  if (error instanceof RegistroLotadoError) {
    console.error(`❌ ${error.message}`);
  }
}

// ==========================
// 🔹 ADICIONAR PARTICIPANTES AOS EVENTOS
// ==========================

try {
  evento01.adicionarParticipante(participante1);
  evento01.adicionarParticipante(participante2);

  evento02.adicionarParticipante(participante2);
  evento02.adicionarParticipante(participante3);

  evento03.adicionarParticipante(participante3);
  evento03.adicionarParticipante(participante4);
evento03.adicionarParticipante(participante4);

} catch (error: any) {
  if (error instanceof ParticipanteDuplicadoError) {
    console.error(`❌ ${error.message}`);
  } else if (error instanceof RegistroLotadoError) {
    console.error(`❌ ${error.message}`);
  } else {
    console.error(`❌ Erro inesperado: ${error.message ?? error}`);
  }
}


// ==========================
// 🔹 RELATÓRIO INICIAL
// ==========================
ControlePresenca.gerarControlePresenca(participantes, 3);


// ==========================
// 🔹 REGISTRO DE EVENTO
// ==========================
const registroEvento = new RegistroEvento(
  participante1,
  new Date(),
  "Semana de Tecnologia"
);
registroEvento.registrar();


// ==========================
// 🔹 REGISTRO DE PRESENÇA INDIVIDUAL
// ==========================
participante1.registrarPresenca();
participante2.registrarPresenca();
participante3.registrarPresenca();
participante4.registrarPresenca();

ControlePresenca.gerarControlePresenca(participantes, 3);


// ==========================
// 🔹 PRESENÇA GERAL POR EVENTO
// ==========================
evento01.registrarPresencaGeral();
ControlePresenca.gerarControlePresenca(participantes, 3);

evento02.registrarPresencaGeral();
ControlePresenca.gerarControlePresenca(participantes, 3);

evento03.registrarPresencaGeral();
ControlePresenca.gerarControlePresenca(participantes, 3);

try {
  throw new ParticipanteNaoEncontradoErros(2);
} catch (error) {
  if (error instanceof ParticipanteNaoEncontradoErros) {
    console.error(`❌ ${error.message}`);
  }
}
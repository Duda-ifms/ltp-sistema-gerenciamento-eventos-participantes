import InscricaoParticipantes from "./Participantes";
import CriacaoEventos from "./CriacaoEventos";
import ControlePresenca from "./RelatorioParticipante";
import RegistroEvento from "./RegistroEventos";
import RegistroParticipante from "./RegistroParticipante";



// Lista de participantes
const participantes = [];

// Criando participantes
const participante1 = new InscricaoParticipantes(1, "João Felix");
const participante2 = new InscricaoParticipantes(2, "João Pedro");
const participante3 = new InscricaoParticipantes(3, "Maria Clara");
const participante4 = new InscricaoParticipantes(4, "Rayssa");
const participante5 = new InscricaoParticipantes(4, "Rayssa");
participantes.push(participante1, participante2, participante3, participante4, participante5);

// Criando eventos
const evento01 = new CriacaoEventos(1, "Semana de Tecnologia", new Date("2025-10-10"));
const evento02 = new CriacaoEventos(2, "Semana de Arte Cultura", new Date("2025-11-05"));
const evento03 = new CriacaoEventos(3, "Jifena", new Date("2025-05-18"));

// Adicionando participantes aos eventos
evento01.adicionarParticipante(participante1);
evento01.adicionarParticipante(participante2);

evento02.adicionarParticipante(participante2);
evento02.adicionarParticipante(participante3);

evento03.adicionarParticipante(participante3);
evento03.adicionarParticipante(participante4);

// Relatório inicial
ControlePresenca.gerarControlePresenca(participantes, 3);

// Registrando evento corretamente (corrigido)
const registroEvento = new RegistroEvento(participante1, new Date(), "Semana de Tecnologia");
registroEvento.registrar();

// Registrando presença individual
participante1.registrarPresenca();
participante2.registrarPresenca();
participante3.registrarPresenca();
participante4.registrarPresenca();

ControlePresenca.gerarControlePresenca(participantes, 3);

// Presença geral por evento
evento01.registrarPresencaGeral();
ControlePresenca.gerarControlePresenca(participantes, 3);

evento02.registrarPresencaGeral();
ControlePresenca.gerarControlePresenca(participantes, 3);

evento03.registrarPresencaGeral();
ControlePresenca.gerarControlePresenca(participantes, 3);

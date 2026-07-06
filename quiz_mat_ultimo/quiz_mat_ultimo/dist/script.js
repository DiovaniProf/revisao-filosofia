const TOTAL_QUESTOES_BANCO = 20;
const QUESTOES_POR_RODADA = 5;
const TOTAL_RODADAS = 4;
const PONTOS_POR_QUESTAO = 20;

const CHAVE_HISTORICO = "quizizz_matematica_historico_v4";
const CHAVE_RANKING = "quizizz_matematica_ranking_v4";

const bancoQuestoes = [
  {
    pergunta: "Em uma feira, uma agricultora organizou 6 caixas com 8 tomates em cada uma. Quantos tomates foram organizados ao todo?",
    alternativas: ["48 tomates", "42 tomates", "56 tomates", "64 tomates"],
    correta: "48 tomates"
  },
  {
    pergunta: "Um mercado recebeu 7 pacotes com 9 garrafas de água em cada pacote. Quantas garrafas chegaram ao mercado?",
    alternativas: ["63 garrafas", "56 garrafas", "72 garrafas", "49 garrafas"],
    correta: "63 garrafas"
  },
  {
    pergunta: "Joana comprou 4 cadernos por R$ 12,00 cada. Quanto ela gastou no total?",
    alternativas: ["R$ 48,00", "R$ 36,00", "R$ 40,00", "R$ 52,00"],
    correta: "R$ 48,00"
  },
  {
    pergunta: "Uma turma organizou 5 filas com 6 estudantes em cada fila. Quantos estudantes estavam organizados?",
    alternativas: ["30 estudantes", "25 estudantes", "35 estudantes", "40 estudantes"],
    correta: "30 estudantes"
  },
  {
    pergunta: "Um artesão produziu 8 pulseiras por dia durante 5 dias. Quantas pulseiras ele produziu nesse período?",
    alternativas: ["40 pulseiras", "35 pulseiras", "45 pulseiras", "48 pulseiras"],
    correta: "40 pulseiras"
  },
  {
    pergunta: "Carlos comprou 3 caixas de lápis. Cada caixa tinha 12 lápis. Quantos lápis Carlos comprou?",
    alternativas: ["36 lápis", "30 lápis", "39 lápis", "42 lápis"],
    correta: "36 lápis"
  },
  {
    pergunta: "Uma loja vendeu 9 camisetas por R$ 15,00 cada. Qual foi o valor total da venda?",
    alternativas: ["R$ 135,00", "R$ 125,00", "R$ 145,00", "R$ 150,00"],
    correta: "R$ 135,00"
  },
  {
    pergunta: "Em um álbum, há 10 páginas com 6 figurinhas em cada página. Quantas figurinhas cabem no álbum?",
    alternativas: ["60 figurinhas", "50 figurinhas", "66 figurinhas", "70 figurinhas"],
    correta: "60 figurinhas"
  },
  {
    pergunta: "Um vendedor colocou 7 bandejas com 4 bolos em cada uma. Quantos bolos foram colocados nas bandejas?",
    alternativas: ["28 bolos", "24 bolos", "32 bolos", "36 bolos"],
    correta: "28 bolos"
  },
  {
    pergunta: "Uma escola comprou 6 pacotes de borrachas. Cada pacote tinha 10 borrachas. Quantas borrachas foram compradas?",
    alternativas: ["60 borrachas", "50 borrachas", "66 borrachas", "70 borrachas"],
    correta: "60 borrachas"
  },
  {
    pergunta: "Um agricultor colheu 9 cestos com 7 maçãs em cada cesto. Quantas maçãs ele colheu?",
    alternativas: ["63 maçãs", "56 maçãs", "72 maçãs", "54 maçãs"],
    correta: "63 maçãs"
  },
  {
    pergunta: "Marina comprou 8 pacotes de balas. Cada pacote tinha 5 balas. Quantas balas Marina comprou?",
    alternativas: ["40 balas", "35 balas", "45 balas", "48 balas"],
    correta: "40 balas"
  },
  {
    pergunta: "Uma papelaria vendeu 6 estojos por R$ 14,00 cada. Quanto recebeu pela venda?",
    alternativas: ["R$ 84,00", "R$ 74,00", "R$ 80,00", "R$ 90,00"],
    correta: "R$ 84,00"
  },
  {
    pergunta: "Um ônibus levou 4 grupos com 11 estudantes em cada grupo. Quantos estudantes foram transportados?",
    alternativas: ["44 estudantes", "40 estudantes", "48 estudantes", "52 estudantes"],
    correta: "44 estudantes"
  },
  {
    pergunta: "Em uma horta, há 5 canteiros com 9 mudas em cada canteiro. Quantas mudas há na horta?",
    alternativas: ["45 mudas", "40 mudas", "50 mudas", "54 mudas"],
    correta: "45 mudas"
  },
  {
    pergunta: "Uma família comprou 7 ingressos de cinema por R$ 18,00 cada. Qual foi o valor total pago?",
    alternativas: ["R$ 126,00", "R$ 116,00", "R$ 136,00", "R$ 108,00"],
    correta: "R$ 126,00"
  },
  {
    pergunta: "Um produtor separou 8 sacolas com 6 laranjas em cada uma. Quantas laranjas foram separadas?",
    alternativas: ["48 laranjas", "42 laranjas", "54 laranjas", "56 laranjas"],
    correta: "48 laranjas"
  },
  {
    pergunta: "Uma professora distribuiu 9 folhas para cada um dos 5 grupos. Quantas folhas foram distribuídas?",
    alternativas: ["45 folhas", "40 folhas", "50 folhas", "54 folhas"],
    correta: "45 folhas"
  },
  {
    pergunta: "Um brinquedo custa R$ 23,00. Se uma pessoa comprar 4 brinquedos iguais, quanto pagará?",
    alternativas: ["R$ 92,00", "R$ 82,00", "R$ 96,00", "R$ 88,00"],
    correta: "R$ 92,00"
  },
  {
    pergunta: "Uma padaria assou 12 bandejas com 6 pães em cada bandeja. Quantos pães foram assados?",
    alternativas: ["72 pães", "68 pães", "76 pães", "80 pães"],
    correta: "72 pães"
  }
];

const telaInicial = document.getElementById("telaInicial");
const telaQuiz = document.getElementById("telaQuiz");
const telaResultado = document.getElementById("telaResultado");

const nomeJogadorInput = document.getElementById("nomeJogador");
const erroNome = document.getElementById("erroNome");
const btnComecar = document.getElementById("btnComecar");
const btnSair = document.getElementById("btnSair");

const jogadorAtual = document.getElementById("jogadorAtual");
const numeroRodada = document.getElementById("numeroRodada");
const numeroQuestao = document.getElementById("numeroQuestao");
const pontosRodadaTela = document.getElementById("pontosRodadaTela");
const pontosTotalTela = document.getElementById("pontosTotalTela");

const perguntaTexto = document.getElementById("pergunta");
const alternativasContainer = document.getElementById("alternativas");
const btnConfirmar = document.getElementById("btnConfirmar");
const feedback = document.getElementById("feedback");
const rascunhoQuestao = document.getElementById("rascunhoQuestao");
const btnContinuar = document.getElementById("btnContinuar");

const tituloResultado = document.getElementById("tituloResultado");
const subtituloResultado = document.getElementById("subtituloResultado");
const resumoRodada = document.getElementById("resumoRodada");
const resumoAcertosRodada = document.getElementById("resumoAcertosRodada");
const resumoPontosRodada = document.getElementById("resumoPontosRodada");
const resumoPontosTotal = document.getElementById("resumoPontosTotal");
const resumoStatus = document.getElementById("resumoStatus");
const mensagemResultado = document.getElementById("mensagemResultado");
const listaRegistrosTela = document.getElementById("listaRegistrosTela");

const btnProximaRodada = document.getElementById("btnProximaRodada");
const btnBaixarRelatorio = document.getElementById("btnBaixarRelatorio");
const btnReiniciarJogo = document.getElementById("btnReiniciarJogo");
const rankingFinal = document.getElementById("rankingFinal");

const btnHistorico = document.getElementById("btnHistorico");
const btnFecharHistorico = document.getElementById("btnFecharHistorico");
const btnLimparHistorico = document.getElementById("btnLimparHistorico");
const historicoLateral = document.getElementById("historicoLateral");
const overlayHistorico = document.getElementById("overlayHistorico");
const listaHistorico = document.getElementById("listaHistorico");
const listaRanking = document.getElementById("listaRanking");

let nomeJogador = "";
let questoesEmbaralhadas = [];
let questoesDaRodada = [];
let rodadaAtual = 1;
let indiceQuestao = 0;
let pontosRodada = 0;
let pontosTotal = 0;
let acertosRodada = 0;
let alternativaSelecionada = null;
let respostaConfirmada = false;
let registros = [];

function embaralhar(lista) {
  const copia = [...lista];

  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }

  return copia;
}

function mostrarTela(tela) {
  telaInicial.classList.remove("ativa");
  telaQuiz.classList.remove("ativa");
  telaResultado.classList.remove("ativa");
  tela.classList.add("ativa");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function normalizarNome(nome) {
  return nome.trim().replace(/\s+/g, " ");
}

function obterHistorico() {
  return JSON.parse(localStorage.getItem(CHAVE_HISTORICO)) || [];
}

function salvarHistorico(historico) {
  localStorage.setItem(CHAVE_HISTORICO, JSON.stringify(historico));
}

function obterRanking() {
  return JSON.parse(localStorage.getItem(CHAVE_RANKING)) || [];
}

function salvarRanking(ranking) {
  localStorage.setItem(CHAVE_RANKING, JSON.stringify(ranking));
}

function atualizarHistoricoTela() {
  const historico = obterHistorico();
  const ranking = obterRanking();

  listaHistorico.innerHTML = "";
  listaRanking.innerHTML = "";
  rankingFinal.innerHTML = "";

  if (historico.length === 0) {
    listaHistorico.innerHTML = "<li>Nenhum participante registrado.</li>";
  } else {
    historico.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = `${item.nome} - ${item.data}`;
      listaHistorico.appendChild(li);
    });
  }

  if (ranking.length === 0) {
    listaRanking.innerHTML = "<li>Nenhum resultado registrado.</li>";
    rankingFinal.innerHTML = "<li>Nenhum resultado registrado.</li>";
  } else {
    ranking.slice(0, 5).forEach((item) => {
      const texto = `${item.nome}: ${item.pontos}/400 pontos - ${item.data}`;

      const liPainel = document.createElement("li");
      liPainel.textContent = texto;
      listaRanking.appendChild(liPainel);

      const liFinal = document.createElement("li");
      liFinal.textContent = texto;
      rankingFinal.appendChild(liFinal);
    });
  }
}

function registrarEntrada(nome) {
  const historico = obterHistorico();

  historico.push({
    nome,
    data: new Date().toLocaleString("pt-BR")
  });

  salvarHistorico(historico);
  atualizarHistoricoTela();
}

function nomeJaUsado(nome) {
  const historico = obterHistorico();

  return historico.some(
    (item) => item.nome.toLowerCase() === nome.toLowerCase()
  );
}

function iniciarJogo() {
  const nome = normalizarNome(nomeJogadorInput.value);

  erroNome.textContent = "";

  if (nome.length < 3) {
    erroNome.textContent = "Digite um nome com pelo menos 3 caracteres.";
    nomeJogadorInput.focus();
    return;
  }

  if (nomeJaUsado(nome)) {
    erroNome.textContent = "Este nome já foi usado. Digite outro nome.";
    nomeJogadorInput.focus();
    return;
  }

  nomeJogador = nome;
  questoesEmbaralhadas = embaralhar(bancoQuestoes);

  rodadaAtual = 1;
  indiceQuestao = 0;
  pontosRodada = 0;
  pontosTotal = 0;
  acertosRodada = 0;
  registros = [];

  registrarEntrada(nomeJogador);
  prepararRodada();
  mostrarTela(telaQuiz);
}

function prepararRodada() {
  const inicio = (rodadaAtual - 1) * QUESTOES_POR_RODADA;
  const fim = inicio + QUESTOES_POR_RODADA;

  questoesDaRodada = questoesEmbaralhadas.slice(inicio, fim);

  indiceQuestao = 0;
  pontosRodada = 0;
  acertosRodada = 0;

  carregarQuestao();
}

function carregarQuestao() {
  const questao = questoesDaRodada[indiceQuestao];

  alternativaSelecionada = null;
  respostaConfirmada = false;

  perguntaTexto.textContent = questao.pergunta;
  alternativasContainer.innerHTML = "";
  feedback.textContent = "";
  btnConfirmar.disabled = true;
  btnContinuar.classList.add("oculto");

  rascunhoQuestao.value = "";
  rascunhoQuestao.disabled = false;
  rascunhoQuestao.placeholder = "Escreva aqui seu rascunho, cálculo ou justificativa...";

  const alternativasMisturadas = embaralhar(questao.alternativas);

  alternativasMisturadas.forEach((alternativa, index) => {
    const botao = document.createElement("button");
    botao.className = "alternativa";
    botao.type = "button";
    botao.textContent = `${String.fromCharCode(65 + index)}) ${alternativa}`;

    botao.addEventListener("click", () => {
      if (respostaConfirmada) return;

      document.querySelectorAll(".alternativa").forEach((btn) => {
        btn.classList.remove("selecionada");
      });

      botao.classList.add("selecionada");
      alternativaSelecionada = alternativa;
      btnConfirmar.disabled = false;
    });

    alternativasContainer.appendChild(botao);
  });

  atualizarStatus();
}

function atualizarStatus() {
  jogadorAtual.textContent = `Participante: ${nomeJogador}`;
  numeroRodada.textContent = `${rodadaAtual}/${TOTAL_RODADAS}`;
  numeroQuestao.textContent = `${indiceQuestao + 1}/${QUESTOES_POR_RODADA}`;
  pontosRodadaTela.textContent = pontosRodada;
  pontosTotalTela.textContent = pontosTotal;
}

function confirmarResposta() {
  if (!alternativaSelecionada || respostaConfirmada) return;

  const questao = questoesDaRodada[indiceQuestao];
  const acertou = alternativaSelecionada === questao.correta;

  respostaConfirmada = true;

  if (acertou) {
    pontosRodada += PONTOS_POR_QUESTAO;
    pontosTotal += PONTOS_POR_QUESTAO;
    acertosRodada++;
  }

  document.querySelectorAll(".alternativa").forEach((btn) => {
    btn.classList.add("bloqueada");
  });

  btnConfirmar.disabled = true;
  btnContinuar.classList.remove("oculto");

  rascunhoQuestao.disabled = false;

  feedback.textContent =
    "Resposta registrada. Você ainda pode completar o rascunho antes de continuar.";

  atualizarStatus();
}

function continuarQuiz() {
  salvarRegistroDaQuestao();

  if (indiceQuestao < QUESTOES_POR_RODADA - 1) {
    indiceQuestao++;
    carregarQuestao();
    return;
  }

  mostrarResultadoRodada();
}

function salvarRegistroDaQuestao() {
  const questao = questoesDaRodada[indiceQuestao];
  const acertou = alternativaSelecionada === questao.correta;

  registros.push({
    rodada: rodadaAtual,
    numeroNaRodada: indiceQuestao + 1,
    pergunta: questao.pergunta,
    marcada: alternativaSelecionada,
    correta: questao.correta,
    acertou,
    rascunho: rascunhoQuestao.value.trim() || "Nenhum rascunho registrado."
  });
}

function mostrarResultadoRodada() {
  const jogoFinalizado = rodadaAtual === TOTAL_RODADAS;

  mostrarTela(telaResultado);

  if (jogoFinalizado) {
    tituloResultado.textContent = "RESULTADO FINAL";
    subtituloResultado.textContent = `Parabéns, ${nomeJogador}! Você concluiu as 4 rodadas.`;
    resumoStatus.textContent = definirStatusFinal();
    btnProximaRodada.classList.add("oculto");
    registrarRankingFinal();
  } else {
    tituloResultado.textContent = "Rodada concluída";
    subtituloResultado.textContent = `Você concluiu a rodada ${rodadaAtual}.`;
    resumoStatus.textContent = "Em andamento";
    btnProximaRodada.classList.remove("oculto");
  }

  resumoRodada.textContent = `${rodadaAtual}/${TOTAL_RODADAS}`;
  resumoAcertosRodada.textContent = `${acertosRodada}/${QUESTOES_POR_RODADA}`;
  resumoPontosRodada.textContent = `${pontosRodada}/100`;
  resumoPontosTotal.textContent = `${pontosTotal}/400`;

  const totalAcertos = registros.filter((registro) => registro.acertou).length;

  mensagemResultado.textContent = jogoFinalizado
    ? `Resultado final: ${pontosTotal} pontos de 400 possíveis. Você acertou ${totalAcertos} questões de ${TOTAL_QUESTOES_BANCO}.`
    : `Você marcou ${pontosRodada} pontos nesta rodada. Clique em INICIAR PRÓXIMA RODADA para continuar.`;

  renderizarRegistrosDaRodada();
  atualizarHistoricoTela();
}

function definirStatusFinal() {
  if (pontosTotal >= 340) return "Excelente desempenho";
  if (pontosTotal >= 260) return "Bom desempenho";
  if (pontosTotal >= 180) return "Desempenho em desenvolvimento";
  return "Precisa revisar a multiplicação";
}

function renderizarRegistrosDaRodada() {
  listaRegistrosTela.innerHTML = "";

  const registrosDaRodada = registros.filter(
    (registro) => registro.rodada === rodadaAtual
  );

  registrosDaRodada.forEach((registro) => {
    const card = document.createElement("article");
    card.className = "registro-card";

    card.innerHTML = `
      <div class="registro-topo">
        <strong>Rodada ${registro.rodada} - Questão ${registro.numeroNaRodada}</strong>
        <span class="${registro.acertou ? "tag-correto" : "tag-incorreto"}">
          ${registro.acertou ? "Correta" : "Incorreta"}
        </span>
      </div>

      <p><strong>Pergunta:</strong> ${registro.pergunta}</p>
      <p><strong>Alternativa marcada:</strong> ${registro.marcada}</p>
      <p><strong>Resposta correta:</strong> ${registro.correta}</p>
      <p class="rascunho"><strong>Rascunho:</strong><br>${registro.rascunho}</p>
    `;

    listaRegistrosTela.appendChild(card);
  });
}

function iniciarProximaRodada() {
  rodadaAtual++;
  prepararRodada();
  mostrarTela(telaQuiz);
}

function reiniciarJogo() {
  nomeJogadorInput.value = "";
  erroNome.textContent = "";
  mostrarTela(telaInicial);
}

function sairDoQuiz() {
  const confirmarSaida = confirm("Deseja sair do quiz e voltar para a tela inicial?");

  if (confirmarSaida) {
    reiniciarJogo();
  }
}

function registrarRankingFinal() {
  const ranking = obterRanking();

  const jaRegistrado = ranking.some(
    (item) =>
      item.nome.toLowerCase() === nomeJogador.toLowerCase() &&
      item.pontos === pontosTotal
  );

  if (!jaRegistrado) {
    ranking.push({
      nome: nomeJogador,
      pontos: pontosTotal,
      data: new Date().toLocaleString("pt-BR")
    });
  }

  ranking.sort((a, b) => b.pontos - a.pontos);
  salvarRanking(ranking.slice(0, 20));
}

function baixarRelatorio() {
  const totalAcertos = registros.filter((registro) => registro.acertou).length;
  const data = new Date().toLocaleString("pt-BR");

  const linhasQuestoes = registros.map((registro) => `
    <div class="questao">
      <h3>Rodada ${registro.rodada} - Questão ${registro.numeroNaRodada}</h3>
      <p><strong>Pergunta:</strong> ${registro.pergunta}</p>
      <p><strong>Alternativa marcada:</strong> ${registro.marcada}</p>
      <p><strong>Resposta correta:</strong> ${registro.correta}</p>
      <p><strong>Situação:</strong> ${registro.acertou ? "Correta" : "Incorreta"}</p>
      <p><strong>Rascunho do participante:</strong></p>
      <pre>${registro.rascunho}</pre>
    </div>
  `).join("");

  const conteudo = `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <title>Relatório de respostas - ${nomeJogador}</title>

      <style>
        body {
          font-family: Arial, Helvetica, sans-serif;
          color: #111827;
          line-height: 1.5;
          padding: 24px;
        }

        h1 {
          color: #1d4ed8;
          text-transform: uppercase;
        }

        h2 {
          color: #111827;
          border-bottom: 2px solid #1d4ed8;
          padding-bottom: 6px;
        }

        .resumo,
        .questao {
          border: 1px solid #cbd5e1;
          border-radius: 12px;
          padding: 16px;
          margin: 16px 0;
        }

        .questao h3 {
          color: #b45309;
        }

        pre {
          white-space: pre-wrap;
          background: #f8fafc;
          border-left: 4px solid #facc15;
          padding: 12px;
          border-radius: 8px;
        }
      </style>
    </head>

    <body>
      <h1>Relatório de respostas</h1>
      <h2>Quizizz - Multiplicação em situações concretas</h2>

      <div class="resumo">
        <p><strong>Participante:</strong> ${nomeJogador}</p>
        <p><strong>Data:</strong> ${data}</p>
        <p><strong>Total de pontos:</strong> ${pontosTotal}/400</p>
        <p><strong>Total de acertos:</strong> ${totalAcertos}/${TOTAL_QUESTOES_BANCO}</p>
        <p><strong>Situação:</strong> ${definirStatusFinal()}</p>
      </div>

      <h2>Anexo - Rascunhos do participante</h2>
      ${linhasQuestoes}
    </body>
    </html>
  `;

  const blob = new Blob(["\ufeff", conteudo], {
    type: "application/msword;charset=utf-8"
  });

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  const nomeArquivo = `relatorio_de_respostas_${nomeJogador
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "_")}.doc`;

  link.href = url;
  link.download = nomeArquivo;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  URL.revokeObjectURL(url);
}

function abrirHistorico() {
  historicoLateral.classList.add("ativo");
  overlayHistorico.classList.add("ativo");
}

function fecharHistorico() {
  historicoLateral.classList.remove("ativo");
  overlayHistorico.classList.remove("ativo");
}

function limparHistorico() {
  const confirmarLimpeza = confirm("Deseja limpar o histórico e o ranking?");

  if (!confirmarLimpeza) return;

  localStorage.removeItem(CHAVE_HISTORICO);
  localStorage.removeItem(CHAVE_RANKING);
  atualizarHistoricoTela();
}

btnComecar.addEventListener("click", iniciarJogo);

nomeJogadorInput.addEventListener("keydown", (evento) => {
  if (evento.key === "Enter") {
    iniciarJogo();
  }
});

btnConfirmar.addEventListener("click", confirmarResposta);
btnContinuar.addEventListener("click", continuarQuiz);
btnProximaRodada.addEventListener("click", iniciarProximaRodada);
btnReiniciarJogo.addEventListener("click", reiniciarJogo);
btnBaixarRelatorio.addEventListener("click", baixarRelatorio);
btnSair.addEventListener("click", sairDoQuiz);

btnHistorico.addEventListener("click", abrirHistorico);
btnFecharHistorico.addEventListener("click", fecharHistorico);
overlayHistorico.addEventListener("click", fecharHistorico);
btnLimparHistorico.addEventListener("click", limparHistorico);

atualizarHistoricoTela();
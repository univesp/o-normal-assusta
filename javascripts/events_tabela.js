//Variáveis Globais
let tabelaNormal = [];
let valorZ = 0;
document.getElementById('calculaZ').addEventListener('click', calculoZ);
document.getElementById('media').addEventListener('keyup', validacao);
document.getElementById('valorDeX').addEventListener('keyup', validacao);
document.getElementById('desvioPadrao').addEventListener('keyup', validacao);
document.getElementById('z').addEventListener('keyup', validacao);
document.getElementById('zPreenchido').addEventListener('click', tabela);
document.getElementById('zCalculado').addEventListener('click', tabela);
document.getElementById('reencontrar').addEventListener('click', scroll);
document.getElementById('tabelaScroll').addEventListener('scroll', movimentaMapinha);
document.getElementById('alteraZ').addEventListener('click', alteraZ);
document.getElementById('reencontrar').addEventListener('click', reencontrar);
document.getElementsByClassName('btnVoltar')[0].addEventListener('click', voltaAoInicio);
document.getElementsByClassName('btnVoltar')[0].addEventListener('click', voltaAoInicio);
document.getElementById('recalcular').addEventListener('click', recalcular);


//Volta a tabela para o normal.
function refreshNormal() {
  tabelaNormal = [];
  tabelaNormal.push([0.00000, 0.00399, 0.00798, 0.01197, 0.01595, 0.01994, 0.02392, 0.02790, 0.03188, 0.03586]);
  tabelaNormal.push([0.03983, 0.04380, 0.04776, 0.05172, 0.05567, 0.05962, 0.06356, 0.06749, 0.07142, 0.07535]);
  tabelaNormal.push([0.07926, 0.08317, 0.08706, 0.09095, 0.09483, 0.09871, 0.10257, 0.10642, 0.11026, 0.11409]);
  tabelaNormal.push([0.11791, 0.12172, 0.12552, 0.12930, 0.13307, 0.13683, 0.14058, 0.14431, 0.14803, 0.15173]);
  tabelaNormal.push([0.15542, 0.15910, 0.16276, 0.16640, 0.17003, 0.17364, 0.17724, 0.18082, 0.18439, 0.18793]);
  tabelaNormal.push([0.19146, 0.19497, 0.19847, 0.20194, 0.20540, 0.20884, 0.21226, 0.21566, 0.21904, 0.22240]);
  tabelaNormal.push([0.22575, 0.22907, 0.23237, 0.23565, 0.23891, 0.24215, 0.24537, 0.24857, 0.25175, 0.25490]);
  tabelaNormal.push([0.25804, 0.26115, 0.26424, 0.26730, 0.27035, 0.27337, 0.27637, 0.27935, 0.28230, 0.28524]);
  tabelaNormal.push([0.28814, 0.29103, 0.29389, 0.29673, 0.29955, 0.30234, 0.30511, 0.30785, 0.31057, 0.31327]);
  tabelaNormal.push([0.31594, 0.31859, 0.32121, 0.32381, 0.32639, 0.32894, 0.33147, 0.33398, 0.33646, 0.33891]);
  tabelaNormal.push([0.34134, 0.34375, 0.34614, 0.34849, 0.35083, 0.35314, 0.35543, 0.35769, 0.35993, 0.36214]);
  tabelaNormal.push([0.36433, 0.36650, 0.36864, 0.37076, 0.37286, 0.37493, 0.37698, 0.37900, 0.38100, 0.38298]);
  tabelaNormal.push([0.38493, 0.38686, 0.38877, 0.39065, 0.39251, 0.39435, 0.39617, 0.39796, 0.39973, 0.40147]);
  tabelaNormal.push([0.40320, 0.40490, 0.40658, 0.40824, 0.40988, 0.41149, 0.41308, 0.41466, 0.41621, 0.41774]);
  tabelaNormal.push([0.41924, 0.42073, 0.42220, 0.42364, 0.42507, 0.42647, 0.42785, 0.42922, 0.43056, 0.43189]);
  tabelaNormal.push([0.43319, 0.43448, 0.43574, 0.43699, 0.43822, 0.43943, 0.44062, 0.44179, 0.44295, 0.44408]);
  tabelaNormal.push([0.44520, 0.44630, 0.44738, 0.44845, 0.44950, 0.45053, 0.45154, 0.45254, 0.45352, 0.45449]);
  tabelaNormal.push([0.45543, 0.45637, 0.45728, 0.45818, 0.45907, 0.45994, 0.46080, 0.46164, 0.46246, 0.46327]);
  tabelaNormal.push([0.46407, 0.46485, 0.46562, 0.46638, 0.46712, 0.46784, 0.46856, 0.46926, 0.46995, 0.47062]);
  tabelaNormal.push([0.47128, 0.47193, 0.47257, 0.47320, 0.47381, 0.47441, 0.47500, 0.47558, 0.47615, 0.47670]);
  tabelaNormal.push([0.47725, 0.47778, 0.47831, 0.47882, 0.47932, 0.47982, 0.48030, 0.48077, 0.48124, 0.48169]);
  tabelaNormal.push([0.48214, 0.48257, 0.48300, 0.48341, 0.48382, 0.48422, 0.48461, 0.48500, 0.48537, 0.48574]);
  tabelaNormal.push([0.48610, 0.48645, 0.48679, 0.48713, 0.48745, 0.48778, 0.48809, 0.48840, 0.48870, 0.48899]);
  tabelaNormal.push([0.48928, 0.48956, 0.48983, 0.49010, 0.49036, 0.49061, 0.49086, 0.49111, 0.49134, 0.49158]);
  tabelaNormal.push([0.49180, 0.49202, 0.49224, 0.49245, 0.49266, 0.49286, 0.49305, 0.49324, 0.49343, 0.49361]);
  tabelaNormal.push([0.49379, 0.49396, 0.49413, 0.49430, 0.49446, 0.49461, 0.49477, 0.49492, 0.49506, 0.49520]);
  tabelaNormal.push([0.49534, 0.49547, 0.49560, 0.49573, 0.49585, 0.49598, 0.49609, 0.49621, 0.49632, 0.49643]);
  tabelaNormal.push([0.49653, 0.49664, 0.49674, 0.49683, 0.49693, 0.49702, 0.49711, 0.49720, 0.49728, 0.49736]);
  tabelaNormal.push([0.49744, 0.49752, 0.49760, 0.49767, 0.49774, 0.49781, 0.49788, 0.49795, 0.49801, 0.49807]);
  tabelaNormal.push([0.49813, 0.49819, 0.49825, 0.49831, 0.49836, 0.49841, 0.49846, 0.49851, 0.49856, 0.49861]);
  tabelaNormal.push([0.49865, 0.49869, 0.49874, 0.49878, 0.49882, 0.49886, 0.49889, 0.49893, 0.49896, 0.49900]);
  tabelaNormal.push([0.49903, 0.49906, 0.49910, 0.49913, 0.49916, 0.49918, 0.49921, 0.49924, 0.49926, 0.49929]);
  tabelaNormal.push([0.49931, 0.49934, 0.49936, 0.49938, 0.49940, 0.49942, 0.49944, 0.49946, 0.49948, 0.49950]);
  tabelaNormal.push([0.49952, 0.49953, 0.49955, 0.49957, 0.49958, 0.49960, 0.49961, 0.49962, 0.49964, 0.49965]);
  tabelaNormal.push([0.49966, 0.49968, 0.49969, 0.49970, 0.49971, 0.49972, 0.49973, 0.49974, 0.49975, 0.49976]);
  tabelaNormal.push([0.49977, 0.49978, 0.49978, 0.49979, 0.49980, 0.49981, 0.49981, 0.49982, 0.49983, 0.49983]);
  tabelaNormal.push([0.49984, 0.49985, 0.49985, 0.49986, 0.49986, 0.49987, 0.49987, 0.49988, 0.49988, 0.49989]);
  tabelaNormal.push([0.49989, 0.49990, 0.49990, 0.49990, 0.49991, 0.49991, 0.49992, 0.49992, 0.49992, 0.49992]);
  tabelaNormal.push([0.49993, 0.49993, 0.49993, 0.49994, 0.49994, 0.49994, 0.49994, 0.49995, 0.49995, 0.49995]);
  tabelaNormal.push([0.49995, 0.49995, 0.49996, 0.49996, 0.49996, 0.49996, 0.49996, 0.49996, 0.49997, 0.49997]);
  tabelaNormal.push([0.49997, 0.49997, 0.49997, 0.49997, 0.49997, 0.49997, 0.49998, 0.49998, 0.49998, 0.49998]);
}

//Executa quando a o html é carregado.
window.onload = function() {
  refreshNormal();
  constroiTabela()
}

function tabela(parametro) {
  $("#resultado").removeClass("d-none");

  let posicao = [];
  let resultado = 0;
  let posColuna = 0;
  let posLinha = 0;
  //Se o Z não foi calculado, pega o Z preenchido.
  if (this.id == 'zPreenchido')
    valorZ = parseFloat(document.getElementById('z').value);


  posicao = posicaoNaTabela(valorZ);

  posLinha = posicao[0];
  posColuna = posicao[1];

  if (posicao[0] > 39) {
    posLinha = 39
    posColuna = 9;
  }

  resultado = tabelaNormal[posLinha][posColuna];
  document.getElementById('spanZ').innerHTML = valorZ;
  scroll(posLinha, posColuna);
  animacao(posLinha, posColuna);
  trocaImagem(resultado);
}

function scroll(linha, coluna) {
  let tabela = document.getElementById('tabelaScroll');
  let largura = 0;
  let horizontal = 0;
  let vertical = 0;

  vertical = (linha - 2) * 56;
  tabela.scrollTop = vertical;

  setTimeout(function() {
    horizontal = (coluna - 2) * (document.getElementById('1_5').offsetWidth);
    tabela.scrollLeft = horizontal;
  }, 25);

}

function animacao(linha, coluna) {
  let linhasAnimadas = [];
  let colunasAnimadas = [];
  let tempo = 500;
  //Verifica quais linhas serão animadas.
  switch (linha) {
    case 0:
      linhasAnimadas = [4, 3, 2, 1, 0];
      break;
    case 1:
      linhasAnimadas = [4, 3, 2, 1];
      break;
    case 38:
      linhasAnimadas = [35, 36, 37, 38];
      break;
    case 39:
      linhasAnimadas = [35, 36, 37, 38, 39];
      break;
    default:
      linhasAnimadas = [linha - 2, linha - 1, linha];
  }

  switch (coluna) {
    case 0:
      colunasAnimadas = [4, 3, 2, 1, 0];
      break;
    case 1:
      colunasAnimadas = [4, 3, 2, 1];
      break;
    case 8:
      colunasAnimadas = [5, 6, 7, 8];
      break;
    case 9:
      colunasAnimadas = [5, 6, 7, 8, 9];
      break;
    default:
      colunasAnimadas = [coluna - 2, coluna - 1, coluna];
      break;
  }

  for (let i = 0; i < linhasAnimadas.length; i++) {
    setTimeout(function() {
      animaLinha(linhasAnimadas[i], true)
    }, tempo);
    tempo += 200;
    if (i < linhasAnimadas.length - 1)
      setTimeout(function() {
        animaLinha(linhasAnimadas[i], false)
      }, tempo);
    tempo += 50;
  }

  tempo += 200;

  for (let j = 0; j < colunasAnimadas.length; j++) {
    setTimeout(function() {
      animaColuna(colunasAnimadas[j], true)
    }, tempo);
    tempo += 200;
    if (j < colunasAnimadas.length - 1)
      setTimeout(function() {
        animaColuna(colunasAnimadas[j], false)
      }, tempo);
    tempo += 50;
  }

  setTimeout(function() {
    animaCelula(linha, coluna, false)
  }, tempo + 1);
  setTimeout(function() {
    animaCelula(linha, coluna, true)
  }, tempo + 2);

}


function movimentaMapinha() {
  //Pega a tabela.
  let elemento = document.getElementById("tabelaScroll");
  //Posição do scroll em pixels na horizontal.
  let x = elemento.scrollLeft;
  //Posição do scroll em pixels na vertical.
  let y = elemento.scrollTop;
  //Máximo horizontal do scroll em pixels
  let largura = elemento.scrollWidth - elemento.clientWidth;
  //Máximo vertical do scroll em pixels
  let altura = elemento.scrollHeight - elemento.clientHeight;
  //O quanto foi scrollado na horizontal em porcentagem.
  let porcentagemLargura = (x / largura);
  //O quanto foi scrollado na vertical em porcentagem.
  let porcentagemAltura = (y / altura);
  //Pega o quadradinho amarelo
  let localizador = document.getElementsByClassName('localizador')[0];
  //Verifica altura e largura do quadradinho.
  let larguraLocalizador = localizador.offsetWidth;
  let alturaLocalizador = localizador.offsetHeight;
  //Verifica altura e largura da imagem da tabela.
  let alturaMapinha = document.getElementById('mapinha').offsetHeight;
  let larguraMapinha = document.getElementById('mapinha').offsetWidth;
  //Calcula a relação do tamanho do quadradinho amarelo para a tabela.
  let porcentagemRealAltura = 1 - (alturaLocalizador / alturaMapinha);
  let porcentagemRealLargura = 1 - (larguraLocalizador / larguraMapinha);
  //Faz o movimento do quadradinho amarelo, descontando a relação do tamanho do quadradinho amarelo em relação à imagem da tabela.
  localizador.style.top = (porcentagemAltura * porcentagemRealAltura * 100) + '%';
  localizador.style.left = (porcentagemLargura * porcentagemRealLargura * 100) + '%';
}

//col-resultado - classe da cor cell-resultado.

function constroiTabela() {
  //Busca o body da tabela
  let body = $('#body');
  //String onde os elementos HTML serão construídos.
  let elemento = '';
  //Variável para o ID
  let id = ''
  //Constrói a tabela como string na variável elemento.
  for (let i = 0; i < 40; i++) {
    elemento += "<tr>"
    elemento += "<th>" + (0 + 0.1 * i).toFixed(1) + "</th>";
    for (let j = 0; j < 10; j++) {
      id = i.toString() + "_" + j.toString();
      elemento += "<td id = '" + id + "'>" + tabelaNormal[i][j] + "</td>";
    }
    elemento += "</tr>"
  }
  //Faz o append.
  body.append(elemento);
};


function posicaoNaTabela(valor) {
  let busca_linha = Math.trunc(valor * 10);
  let busca_coluna = (valor * 1000) % 100;
  let valor_linha = 1;
  let valor_coluna = 10;
  let linha = 0;
  let coluna = 0;
  let resultado = [];

  //busca a linha
  while (valor_linha <= busca_linha) {
    valor_linha += 1;
    linha++;
  }
  resultado.push(linha);

  //busca a coluna.
  while (valor_coluna <= busca_coluna) {
    valor_coluna += 10;
    coluna++;
  }
  //Faz o arredondamento da coluna.
  if (busca_coluna % 10 > 5)
    coluna++

  resultado.push(coluna);

  //Muda as tag's coloridas, tanto no PC como no celular.
  document.getElementsByClassName('row-resultado')[0].innerHTML = (busca_linha / 10).toFixed(1).toString();
  document.getElementsByClassName('row-resultado')[1].innerHTML = (busca_linha / 10).toFixed(1).toString();
  document.getElementsByClassName('col-resultado')[0].innerHTML = busca_coluna.toFixed(0).toString();
  document.getElementsByClassName('col-resultado')[1].innerHTML = busca_coluna.toFixed(0).toString();

  return (resultado);
}

//Calculo do Z com desvio-padrão e média.
function calculoZ() {
  //Pega os valores de média, desvio-padrão e
  let media = parseFloat(document.getElementById('media').value);
  let valorX = parseFloat(document.getElementById('valorDeX').value);
  let dp = parseFloat(document.getElementById('desvioPadrao').value);
  //Faz o cálculo do Z
  valorZ = (valorX - media) / dp;
  document.getElementById('zLabel').innerHTML = "\(" + valorZ.toFixed(4).toString() + "\)";
}

function animaLinha(linha, anima) {
  let elemento = '';
  let celula = '';
  for (let i = 0; i < 10; i++) {
    celula = linha + '_' + i;
    elemento = document.getElementById(celula);
    if (anima)
      elemento.classList.add('row-resultado');
    else
      elemento.classList.remove('row-resultado');
  }
}

function animaColuna(coluna, anima) {
  let elemento = '';
  let celula = '';
  for (let i = 0; i < 40; i++) {
    celula = i + '_' + coluna;
    elemento = document.getElementById(celula);
    if (anima)
      elemento.classList.add('col-resultado');
    else
      elemento.classList.remove('col-resultado');
  }
}

function animaCelula(linha, coluna, anima) {
  let celula = linha + '_' + coluna;
  let elemento = document.getElementById(celula);
  if (anima)
    elemento.classList.add('cell-resultado');
  else
    elemento.classList.remove('col-resultado', 'row-resultado', 'cell-resultado');
}


function validacao() {
  //console.log(this.value);
}

function limpaTabela() {
  for (let i = 0; i < 40; i++) {
    for (let j = 0; j < 10; j++) {
      let celula = i + '_' + j;
      let elemento = document.getElementById(celula);
      elemento.classList.remove('col-resultado', 'row-resultado', 'cell-resultado');
    }
  }
}

function reencontrar() {
  scroll(posicaoNaTabela(valorZ)[0], posicaoNaTabela(valorZ)[1]);
}

function zeraCampos() {
  document.getElementById('media').value = "";
  document.getElementById('valorDeX').value = "";
  document.getElementById('desvioPadrao').value = "";
  document.getElementById('zLabel').innerHTML = "";
  document.getElementById('z').value = "";
  document.getElementsByClassName('row-resultado')[0].innerHTML = "";
  document.getElementsByClassName('row-resultado')[1].innerHTML = "";
  document.getElementsByClassName('col-resultado')[0].innerHTML = "";
  document.getElementsByClassName('col-resultado')[1].innerHTML = "";
  document.getElementById('spanZ').innerHTML = "";
}


function trocaImagem(valor) {
  imagem = document.getElementById('grafico');
  if (valor <= 0.1097)
    imagem.src = "assets/grafico1.png";
  else if (valor > 0.1097 && valor <= 0.2027)
    imagem.src = "assets/grafico2.png";
  else if (valor > 0.2027 && valor <= 0.3042)
    imagem.src = "assets/grafico3.png";
  else if (valor > 0.3042 && valor <= 0.4003)
    imagem.src = "assets/grafico4.png";
  else
    imagem.src = "assets/grafico5.png"
}

function voltaAoInicio() {
  limpaTabela();
  zeraCampos();
  valorZ = 0;
}

function recalcular() {
  limpaTabela();
  zeraCampos();
  valorZ = 0;
}

function alteraZ() {
  limpaTabela();
  zeraCampos();
  valorZ = 0;
}

//variáveis da bolinha
let xbolinha = 300;
let ybolinha = 200;
let diametro = 12;
let raio = diametro /2;

//variaveis da velocidade da bolinha
let velocidadexbolinha = 6;
let velocidadeybolinha = 6;

//variavéis da raquete
let xraquete = 5;
let yraquete = 150;
let raquetecomprimento = 10;
let raquetealtura = 90;
let colidiu = false;

//placar do jogo
let meuspontos = 0;
let pontosdooponente = 0;

//sons do jogo
let raquetada;
let ponto;
let trilha;

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}

//variavéis do oponente
let xraqueteoponente = 585 ;
let yraqueteoponente = 150 ;
let velocidadeyoponente ;
let velocidadexoponente ;

//variavel dificuldade oponente
let chancedeerrar = 0;


function setup(){
  createCanvas(600,400);
  trilha.loop();
}

function draw(){
  background(0);
  mostrabolinha ();
  movimentabolinha ();
  verificacolisaoborda();
  mostraraquete(xraquete,yraquete);
  movimentaminharaquete();
  //verificacolisaocomaraquete();
  verificacolisaoraquete(xraquete,yraquete);
  mostraraquete(xraqueteoponente,yraqueteoponente);
  movimentaraqueteoponente();
  verificacolisaoraquete(xraqueteoponente,yraqueteoponente);
  incluiplacar();
  marcaponto();
  }

function mostrabolinha(){
  circle(xbolinha,ybolinha,diametro);
}

function movimentabolinha(){
  xbolinha += velocidadexbolinha;
  ybolinha += velocidadeybolinha;
}
function verificacolisaoborda(){
if (xbolinha + raio > width || 
    xbolinha - raio < 0) {
  velocidadexbolinha *= -1;
  }

  if (ybolinha + raio > height || 
    ybolinha - raio < 0) {
  (velocidadeybolinha *= -1);
  }
}

function mostraraquete(x,y){rect(x,y,raquetecomprimento,
      raquetealtura);
}

function movimentaminharaquete() {
    if (keyIsDown(UP_ARROW)) {
        yraquete -= 10;
    }
    if (keyIsDown(DOWN_ARROW)) {
        yraquete += 10;
    }
}

function verificacolisaocomaraquete(){
  if (xbolinha - raio < xraquete + raquetecomprimento && ybolinha - raio < yraquete + raquetealtura && ybolinha + raio > yraquete ) {
    velocidadexbolinha *= -1;
    raquetada.play();
  }
}

function verificacolisaoraquete(x,y){
  colidiu = 
  collideRectCircle(x, y, raquetecomprimento, raquetealtura, xbolinha,ybolinha,raio);
  if (colidiu){
    velocidadexbolinha *= -1;
    raquetada.play();
  }
}

function movimentaraqueteoponente(){
  velocidadeyoponente = ybolinha -yraqueteoponente - raquetecomprimento / 2 - 30;
  yraqueteoponente += velocidadeyoponente + chancedeerrar
  calculachancedeerrar()
}


function incluiplacar() {
    stroke(255);
    textAlign(CENTER);
    textSize(16);
    fill(color(255, 140, 0));
    rect(150, 10, 40, 20);
    fill(255);
    text(meuspontos, 170, 26);
    fill(color(255, 140, 0));
    rect(450, 10, 40, 20);
    fill(255);
    text(pontosdooponente, 470, 26);
}

function marcaponto(){
  if(xbolinha > 595){
    meuspontos += 1;
    ponto.play();
  }
  if(xbolinha < 6){
    pontosdooponente += 1;
    ponto.play();
  }
}

function calculachancedeerrar() {
  if (pontosdooponente >= meuspontos) {
    chancedeerrar += 1
    if (chancedeerrar >= 39){
    chancedeerrar = 40
    }
  } else {
    chancedeerrar -= 1
    if (chancedeerrar <= 35){
    chancedeerrar = 35
    }
  }
}






  
  

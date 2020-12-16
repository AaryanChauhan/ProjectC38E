var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var p1,p2,p3,p4;

var players;

var p1Img,p2Img,p3Img,p4Img; 

function preload(){
    p1Img = loadImage("images/kid.png");
    p2Img = loadImage("images/kid2.png");
    p3Img = loadImage("images/kid3.png");
    p4Img = loadImage("images/kid4.png");
    backgroundImage = loadImage("images/canvas.png");
}

function setup(){
    canvas = createCanvas(displayWidth-20,displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw(){
    if(playerCount === 4){
        game.update(1);
      }
      if(gameState === 1){
        clear();
        game.play();
      }
      if(gameState === 2){
        game.end();
      }
}


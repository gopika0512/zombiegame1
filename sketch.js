var database,gameState,game,form,player
var playerCount = 0
var bgImg, player1Img, player2Img
var players 

function preload(){
  bgImg = loadImage("./images/long_bg.jpg")
  player1Img = loadAnimation("./images/p10.png","./images/p11.png","./images/p12.png","./images/p13.png","./images/p14.png")
  player2Img = loadAnimation("./images/p20.png","./images/p21.png","./images/p22.png","./images/p23.png","./images/p24.png","./images/p25.png")

}
function setup() {
  createCanvas(displayWidth,displayHeight);
database = firebase.database()
game = new Game()
game.getState()
game.start()
  

}

function draw() {
  background(bgImg)
  if(playerCount == 2){
    game.updateState(1)

  }
  if(gameState == 1){
    game.play()
  }
}
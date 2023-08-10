import  GameHandler  from "./class/handlers/gameHandler";
let game;
let x = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(50);
  const boundaries = { width: windowWidth, height: windowHeight };
  game = new GameHandler(boundaries);
}
function keyPressed() {
  //any commands from user are understood -domp
if("keyistheleftjey"){
  game.playerHandler.movePlayer(-5)
}
if("keyisright"){ 
  game.playerHandler.movePlayer(5)
}
}

gameFakeVersion ={
playerHandler : {
  player : {x:20, y:10},
  movePlayer : function(howmUchTOmove){
    this.player.x += howmUchTOmove
  }
}

}


function draw() {
  background(30, 25, 230);
  ellipse(x, 100, 50, 100);
  x++;
  game.nextFrame();
}

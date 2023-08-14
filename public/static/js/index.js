// import  GameHandler  from "./class/handlers/gameHandler";

const FLOOR_OFFSET= 10
const FLOOR_DEPTH = 50

let game;
let x = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(50);
  // const boundaries = { width: windowWidth, height: windowHeight };
  // game = new GameHandler(boundaries);
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

let gameFakeVersion ={
playerHandler : {
  player : {x:20, y:10},
  movePlayer : function(howmUchTOmove){
    this.player.x += howmUchTOmove
  }
}

}

function draw() {
  background(0);
  fill(255, 255, 255)
  ellipse(x, 100, 50, 100);
  x++;
  fill(255,0,0)
  // game.nextFrame();
  rect(0,windowHeight-FLOOR_OFFSET,windowWidth,FLOOR_DEPTH)
  rect(10, 200, 150, 50)
  rect(250, 350, 200, 50)
  rect(475, 100, 50, 225)
  rect(75, 475, 50, 25)
  rect(250, 600, 50, 25)
  triangle(0, 700, 50, 700, 25, 600)
for(let i = 0; i<4;i++){
  triangle(35, 700, 90, 700, 60, 600)
  triangle(35, 700, 90, 700, 60, 600)
  triangle(35, 700, 90, 700, 60, 600)

}
}

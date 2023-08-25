// import  GameHandler  from "./class/handlers/gameHandler";
import levelData from "./Levels/levelData";
import { FLOOR_DEPTH, FLOOR_OFFSET, NUMBER_OF_SPIKES } from "./constants";

level1Obstacles = levelData.level1Obstacles

let game;

let l1Spikes = []

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
  // const boundaries = { width: windowWidth, height: windowHeight };
  // game = new GameHandler(boundaries);


  for (let i = 0; i < NUMBER_OF_SPIKES; i++) {
    let startpoint = i * 35
    l1Spikes.push([startpoint, 700, startpoint + 60, 700, startpoint + 30, 600])

  }


function keyPressed() {
  //any commands from user are understood -domp
  if ("keyistheleftjey") {
    game.playerHandler.movePlayer(-5)
  }
  if ("keyisright") {
    game.playerHandler.movePlayer(5)
  }
}

let gameFakeVersion = {
  playerHandler: {
    player: {
      x: 20,
      y: 10
    },
    movePlayer: function (howmUchTOmove) {
      this.player.x += howmUchTOmove
    }
  }

}

function draw() {
  background(0);
  fill(255, 0, 0)
  // game.nextFrame();
  floor(0, windowHeight - FLOOR_OFFSET, windowWidth, FLOOR_DEPTH)

  level1Obstacles.forEach(obstacle => rect(obstacle.x, obstacle.y, obstacle.w, obstacle.h))
  l1Spikes.forEach(spike => triangle(spike[0], spike[1], spike[2], spike[3], spike[4], spike[5]))


}
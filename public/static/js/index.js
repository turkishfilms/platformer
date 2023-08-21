<<<<<<< HEAD
// import { GameHandler } from "./class/handlers/gameHandler";
// let game;
let x =0
let playerHandler = new PlayerHandler()
=======
// import  GameHandler  from "./class/handlers/gameHandler";

const FLOOR_OFFSET = 10
const FLOOR_DEPTH = 50
const NUMBER_OF_SPIKES = 36

let game;
let x = 0;
let level1Obstacles = [new Obstacle(10, 200, 150, 50), new Obstacle(250, 350, 200, 50), new Obstacle(475, 100, 50, 225), new Obstacle(75, 475, 50, 25), new Obstacle(250, 575, 50, 25), new Obstacle(450, 550, 100, 25), new Obstacle(650, 550, 25, 25), new Obstacle(800, 500, 25, 25), new Obstacle(950, 450, 25, 25), new Obstacle(1100, 400, 25, 25)]
let l1Spikes = []

>>>>>>> 85b2bf3b49abbce78f4d338cf1db468ac72f2077
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(50);
  playerHandler.players.push(new player())
  // const boundaries = { width: windowWidth, height: windowHeight };
  // game = new GameHandler(boundaries);
<<<<<<< HEAD
}



if (keyPressed(RIGHTARROW))

function keyPressed() {
  //any commands from user are understood -domp
if(key == "RIGHT_ARROW"){
  playerHandler.movePlayer(5)
}
if(key == "LEFT_ARROW"){
  playerHandler.movePlayer(-5)
}
}
=======
>>>>>>> 85b2bf3b49abbce78f4d338cf1db468ac72f2077


  for (let i = 0; i < NUMBER_OF_SPIKES; i++) {
    let startpoint = i * 35
    l1Spikes.push([startpoint, 700, startpoint + 60, 700, startpoint + 30, 600])

  }
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
  fill(255, 255, 255)
  ellipse(x, 100, 50, 100);
  x++;
  fill(255, 0, 0)
  // game.nextFrame();
  floor(0, windowHeight - FLOOR_OFFSET, windowWidth, FLOOR_DEPTH)

<<<<<<< HEAD
}

fill(0,0,255)
playerHandler.show()
}
=======
  level1Obstacles.forEach(obstacle => rect(obstacle.x, obstacle.y, obstacle.w, obstacle.h))
  l1Spikes.forEach(spike => triangle(spike[0], spike[1], spike[2], spike[3], spike[4], spike[5]))


}
>>>>>>> 85b2bf3b49abbce78f4d338cf1db468ac72f2077

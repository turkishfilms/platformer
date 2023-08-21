// import { GameHandler } from "./class/handlers/gameHandler";
// let game;
// import  GameHandler  from "./class/handlers/gameHandler";

const FLOOR_OFFSET = 10;
const FLOOR_DEPTH = 50;
const NUMBER_OF_SPIKES = 36;

let game;
let x = 0;
let level1Obstacles = [
  new Obstacle(10, 200, 150, 50),
  new Obstacle(250, 350, 200, 50),
  new Obstacle(475, 100, 50, 225),
  new Obstacle(75, 475, 50, 25),
  new Obstacle(250, 575, 50, 25),
  new Obstacle(450, 550, 100, 25),
  new Obstacle(650, 550, 25, 25),
  new Obstacle(800, 500, 25, 25),
  new Obstacle(950, 450, 25, 25),
  new Obstacle(1100, 400, 25, 25),
];
let l1Spikes = [];

let playerHandler = new PlayerHandler();

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(50);
  playerHandler.players.push(new player());

  for (let i = 0; i < NUMBER_OF_SPIKES; i++) {
    let startpoint = i * 35;
    l1Spikes.push([
      startpoint,
      700,
      startpoint + 60,
      700,
      startpoint + 30,
      600,
    ]);
  }

  // const boundaries = { width: windowWidth, height: windowHeight };
  // game = new GameHandler(boundaries);
}

if (keyPressed(RIGHTARROW))
  function keyPressed() {
    //any commands from user are understood -domp
    if (key == "RIGHT_ARROW") {
      playerHandler.movePlayer(5);
    }
    if (key == "LEFT_ARROW") {
      playerHandler.movePlayer(-5);
    }
  }


function draw() {
  background(0);
  fill(255, 255, 255);
  ellipse(x, 100, 50, 100);
  x++;
  fill(255, 0, 0);

  fill(0, 0, 255);
  playerHandler.show();

  level1Obstacles.forEach((obstacle) =>
    rect(obstacle.x, obstacle.y, obstacle.w, obstacle.h)
  );
  l1Spikes.forEach((spike) =>
    triangle(spike[0], spike[1], spike[2], spike[3], spike[4], spike[5])
  );
}

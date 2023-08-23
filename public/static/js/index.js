// import { GameHandler } from "./class/handlers/gameHandler";
// let game;
// import  GameHandler  from "./class/handlers/gameHandler";

// module aliases
const Engine = Matter.Engine,
  Bodies = Matter.Bodies,
  Composite = Matter.Composite;

// create an engine
const engine = Engine.create();

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
  // const boundaries = { width: windowWidth, height: windowHeight };
  // game = new GameHan:dler(boundaries);

  const player = new Player();
<<<<<<<<< Temporary merge branch 1
}
function keyPressed() {
  //any commands from user are understood -domp
  if (key == "d") {
    playerHandler.movePlayer(5);
  } else if (key == "a") {
    playerHandler.movePlayer(-5);
  }
}

function drawRectBody(body) {
  const w = body.width;
  const h = body.height;
  const y = body.position.y;
  const x = body.position.x - w / 2;

  rect(x, y, w, h);
}

function draw() {
  background(0);
  Engine.update(engine);
  fill(255, 0, 0);
  Composite.allBodies(engine.world).forEach((body) => {
    if (body.label == "Rectangle Body") drawRectBody(body); //rect only
  });
<<<<<<< HEAD
=======
  fill(255, 255, 255);
  ellipse(x, 100, 50, 100);
  x++;
>>>>>>> 290fafd8a3730a7a18c4f15ca5363a2965e4b91d

  // fill(0, 0, 255);
  // playerHandler.show();

  l1Spikes.forEach((spike) =>
    triangle(spike[0], spike[1], spike[2], spike[3], spike[4], spike[5])
  );
  fill(255, 255, 255);
  ellipse(x, 100, 50, 100);
  x++;
}

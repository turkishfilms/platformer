// import  GameHandler  from "./class/handlers/gameHandler";
import levelData from "./Levels/levelData";

const FLOOR_OFFSET = 10
const FLOOR_DEPTH = 50
const NUMBER_OF_SPIKES = 36

let game;
let x = 0;
let level = levelData.level2Obstacles

let l1Spikes = []

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(50);

  // const player = new Player();
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
  // fill(255, 255, 255)
  // ellipse(x, 100, 50, 100);
  // x++;
  // fill(255, 0, 0)
  // game.nextFrame();
  // floor(0, windowHeight - FLOOR_OFFSET, windowWidth, FLOOR_DEPTH)

  // // fill(0, 0, 255);
  // // playerHandler.show();

  // l1Spikes.forEach((spike) =>
  //   triangle(spike[0], spike[1], spike[2], spike[3], spike[4], spike[5])
  // );
  // fill(255, 255, 255);
  // ellipse(x, 100, 50, 100);
  // x++;
  level.forEach(obstacle=>{
    const {x,y,w,h} = obstacle
    rect(x,y,w,h)
  })
}

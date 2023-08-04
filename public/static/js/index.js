import { GameHandler } from "./class/handlers/gameHandler";
let game;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(50);
  const boundaries = { width: windowWidth, height: windowHeight };
  game = new GameHandler(boundaries);
}
function keyPressed() {
  //any commands from user are understood -domp
}
function draw() {
  game.nextFrame();
}

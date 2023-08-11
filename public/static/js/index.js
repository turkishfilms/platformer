import { GameHandler } from "./gameHandler";
let game;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(50);
  const boundaries = { width: windowWidth, height: windowHeight };
  game = new GameHandler(boundaries);
}

function draw() {
  game.nextFrame();
}

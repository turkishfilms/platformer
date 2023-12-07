
let game;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(50);
  game = new GameHandler()
}

function keyPressed() {
  //any commands from user are understood -domp
  if (key == "d") {
    game.movePlayerRight(); //5 is just for testing purposes
  } else if (key == "a") {
    game.movePlayerLeft();
  }
}

function draw() {
  background(0);
  game.nextFrame()
  game.show()
}

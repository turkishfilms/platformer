
let game;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(50);
  game = new GameHandler()
}

function keyPressed() {
  //any commands from user are understood -domp
  if (key == "d") {
    game.movePlayerRight(); 
  } else if (key == "a") {
    game.movePlayerLeft();
  }
}

function draw() {
  background(0);
  game.nextFrame("HOWDY PARTNERS")
}

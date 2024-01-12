let game;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(50);
  game = new GameHandler({ levels: levelData })
}

function keyPressed() {
  //any commands from user are understood -domp
  if (key == "d") {
    game.movePlayerRight();
  } else if (key == "a") {
    game.movePlayerLeft();
  } else if (key == "3") {
    game.setCurrentLevel(game.getPreviousLevel())
  } else if (key == "4") {
    game.setCurrentLevel(game.getNextLevel())
  }
}

function draw() {
  background(0);
  game.nextFrame()
}

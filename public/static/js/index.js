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
//Matter.Composite.clear(composite, keepStatic, [deep=false])
// Removes all bodies, constraints and 
//composites from the given composite. 
//Optionally clearing its children recursively.
// Matter.Composite.add(composite, object)
// Adds a single or an array of body(s), 
//constraint(s) or composite(s) to the given composite.
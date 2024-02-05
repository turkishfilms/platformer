let game;
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(50);
	game = new GameHandler({ physicsHandler: new PhysicsHandler({ world: compositeStructure }), levels: levelData })
}

function keyPressed() {
	if (key == "d") {
		game.movePlayerRight(PLAYER_MOVE_SPEED);
	} else if (key == "a") {
		game.movePlayerLeft(PLAYER_MOVE_SPEED);
	} else if (key == "w") {
		game.movePlayerUp(PLAYER_JUMP_SPEED);
	} else if (key == "3") {
		game.setCurrentLevel(game.getPreviousLevel())
	} else if (key == "4") {
		game.setCurrentLevel(game.getNextLevel())
	} else if (key == "5") {
		(game.physicsHandler.clearComposite())
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
//
//
//
//
/**
 *
 *
 * **/

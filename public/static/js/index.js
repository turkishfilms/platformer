
let game;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	game = new GameHandler({ physicsHandler: new PhysicsHandler(), levels: levelData })

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
		game.physicsHandler.clearComposite()
	} else if (key == "q") {
		game.togglePaused()
	}
}

function draw() {
	game.nextFrame()
}

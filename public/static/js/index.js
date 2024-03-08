
let game;
let bob
let blackSteve
let deathScreen
function preload(){
	bob = loadImage("static/assets/ememy.jpg")
	blackSteve =  loadImage("static/assets/steveBlack.png")
	deathScreen = loadImage("static/assets/burger cube player.jpg")
}
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	textSize(25)
	game = new GameHandler({ dimensions:{width:windowWidth,height:windowHeight}, physicsHandler: new PhysicsHandler({ sub: ['player', 'obstacles'] }), levels: levelData })
}

function keyPressed() {
	if (key == "d" || key == "D") {
		game.movePlayerRight();
	} else if (key == "a" || key == "A") {
		game.movePlayerLeft();
	} else if (key == "w" || key == "W") {
		game.movePlayerUp();
	} else if (key == "q" || key == "Q") {
		game.togglePaused()
	} else if (key == "e" || key == "E") {
		game.resetLevel()
	} else if (key == "p" || key == "P") {
		game.nextLevel()
	} else if (key == "o" || key == "O") {
		game.previousLevel()
	}
}

function draw() {
	game.nextFrame()
// image(bob, game.playerHandler.player.position.x, game.playerHandler.player.position.y, 50, 50)
}

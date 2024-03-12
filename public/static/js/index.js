
let game,assets ={}

function preload(){
assets.img = loadImage('static/assets/burgercube.jpg');
assets.yellowGuy = loadImage('static/assets/ememy.jpg');
assets.blackGuy = loadImage('static/assets/steveBlack.png')
assets.skull = loadImage('static/assets/skull.png')
assets.cryskull = loadImage('static/assets/skull-orig.png')
assets.creeper = loadImage('static/assets/creeper.webp')
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	textSize(25)
	imageMode(CENTER)
	game = new GameHandler({ physicsHandler: new PhysicsHandler({ sub: ['player', 'obstacles'] }), levels: levelData })
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
	//let x=windowWidth
	//let y=windowHeight
	//	image(img, x/2, y/2, x,y)
	

	game.nextFrame()

}

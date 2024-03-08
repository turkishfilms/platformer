
let game;
let img;
let yellowGuy;
let blackGuy;
let getImg;

function preload(){
img = loadImage('static/assets/burgercube.jpg');
yellowGuy = loadImage('static/assets/ememy.jpg');
blackGuy = loadImage('static/assets/steveBlack.png')
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

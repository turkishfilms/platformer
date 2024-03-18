let game, assets = {}

function preload() {
	assets.img = loadImage('static/assets/burgercube.jpg');
	assets.yellowGuy = loadImage('static/assets/ememy.jpg');
	assets.blackGuy = loadImage('static/assets/steveBlack.png')
	assets.skull = loadImage('static/assets/skull.png')
	assets.cryskull = loadImage('static/assets/skull-orig.png')
	assets.creeper = loadImage('static/assets/creeper.webp')
	assets.spiderSheet = loadImage('static/assets/LPC_Spiders/LPC_Spiders/spider05.png')
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	assets.spiderSprite = getSpriteFromSheet(assets.spiderSheet)
	
	assets.spiderSprite = getSpriteFromSheet(assets.spiderSheet)
	background(0);
	textSize(25)
	imageMode(CENTER)
	assets.new = assets.blackGuy.get(50,50,50,50)
	game = new GameHandler({ physicsHandler: new PhysicsHandler({ sub: ['player', 'obstacles'] }), levels: levelData, dimensions:{height: windowHeight,width: windowWidth}})
}

function getSpriteFromSheet(sheet){
const spriteList = []
let size = 64
for (let index = 0; index < 10; index++) {
	spriteList.push(sheet.get(index*size, 64, size, size))
}



return spriteList

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
	//image(assets.new, frameCount % windowWidth, 80)
}
let game, assets = {}

function preload() {
	assets.img = loadImage('static/assets/Player/Health bar/burgercube.jpg');
	assets.yellowGuy = loadImage('static/assets/ememy.jpg');
	assets.blackGuy = loadImage('static/assets/steveBlack.png')
	assets.skull = loadImage('static/assets/skull.png')
	assets.cryskull = loadImage('static/assets/skull-orig.png')
	assets.creeper = loadImage('static/assets/creeper.webp')
	assets.spiderSheet = loadImage('static/assets/LPC_Spiders/LPC_Spiders/spider05.png')
	assets.deathScreen1 = loadImage('static/assets/black-screen-of-death.webp')
	assets.clay = loadImage('static/assets/sbs_-_base_materials_pack_128x128/Base Materials 128x128/Clay/Mat_Clay_Red_06-128x128.png')
	assets.dark = loadImage("static/assets/sbs_-_base_materials_pack_128x128/Base Materials 128x128/Metal/Mat_Metal_Brushed_03-128x128.png")

}

function setup() {
	createCanvas(windowWidth, windowHeight);
	assets.spiderSprite = getSpriteFromSheet(assets.spiderSheet)
	background(0);
	textSize(25)
	imageMode(CENTER)
	game = new GameHandler({ physicsHandler: new PhysicsHandler({ sub: ['player', 'obstacles'] }), levels: levelData, dimensions: { height: windowHeight, width: windowWidth } })
}

function getSpriteFromSheet(sheet) {
	const spriteList = []
	let size = 64
	for (let index = 0; index < 10; index++) {
		spriteList.push(sheet.get(index * size, 64, size, size))
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

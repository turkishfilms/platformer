let game, assets = {}

function preload() {
	assets.img = loadImage('static/assets/6coloredpipes_byimogiagames.png')
	assets.skull = loadImage('static/assets/skull.png')
	assets.cryskull = loadImage('static/assets/skull-orig.png')
	assets.spiderSheet = loadImage('static/assets/LPC_Spiders/LPC_Spiders/spider05.png')
	assets.deathScreen1 = loadImage('static/assets/black-screen-of-death.webp')
	assets.clay= loadImage('static/assets/sbs_-_base_materials_pack_128x128/Base Materials 128x128/Clay/Mat_Clay_Red_06-128x128.png')
	assets.dark= loadImage("static/assets/sbs_-_base_materials_pack_128x128/Base Materials 128x128/Metal/Mat_Metal_Brushed_03-128x128.png")
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	assets.spiderSprite = getSpriteFromSheet(assets.spiderSheet, 7, 3,3, 64)
	game = new GameHandler({ physicsHandler: new PhysicsHandler({ sub: ['player', 'obstacles'] }), levels: levelData, dimensions: { height: windowHeight, width: windowWidth } })
}

function getSpriteFromSheet(sheet, numberOfImages, row, column, size) {
	const spriteList = []
	for (let index = column; index < column + numberOfImages; index++) {
		spriteList.push(sheet.get(index * size, row * size, size, size))
	}
	return spriteList
}

function keyPressed() {
	switch (key) {
		case ("d" || "D"):
			game.movePlayerRight();
			break
		case ("a" || "A"):
			game.movePlayerLeft();
			break
		case ("w" || "W"):
			game.movePlayerUp();
			break
		case ("q" || "Q"):
			game.togglePaused()
			break
		case ("e" || "E"):
			game.resetLevel()
			break
		case ("p" || "P"):
			game.nextLevel()
			break
		case ("o" || "O"):
			game.previousLevel()
			break
	}
}

function draw() {
	game.nextFrame()
}

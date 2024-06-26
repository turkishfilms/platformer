/**
 * Goal: Make the resting sprite not the attacking spider
 * Ingredients:
 * Non attacking sprite
 * Translate:
 * assets.spiderSheet
 * assets.spiderSprite
 * getSpriteFromSheet
 */
let game,
  assets = {};

function preload() {
  assets.burger= loadImage("static/assets/Player/Avatar/burgercube.jpg");
  assets.skull = loadImage("static/assets/skull.png");
  assets.cryskull = loadImage("static/assets/skull-orig.png");
  assets.spiderSheet = loadImage(
    "static/assets/LPC_Spiders/LPC_Spiders/spider05.png"
  );
  assets.deathScreen1 = loadImage("static/assets/black-screen-of-death.webp");
  assets.clay = loadImage(
    "static/assets/sbs_-_base_materials_pack_128x128/Base Materials 128x128/Clay/Mat_Clay_Red_06-128x128.png"
  );
  assets.dark = loadImage(
    "static/assets/sbs_-_base_materials_pack_128x128/Base Materials 128x128/Metal/Mat_Metal_Brushed_03-128x128.png"
  )
  assets.gem = loadImage(
    "static/assets/Collectibles/gems_db16.png"
  );
  assets.underWaterAbyss = loadImage("static/assets/abyss.jpg")
  assets.crypt1 = loadImage("static/assets/crypt-2.jpg")
  assets.crypt2 = loadImage("static/assets/crypt-3-hall.jpg")
  assets.crypt3 = loadImage("static/assets/crypt-dungeon.jpg")
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	assets.spiderSpriteWalkLeft = getSpriteFromSheet(assets.spiderSheet,64,64,7,1,4)
	assets.spiderSpriteWalkRight = getSpriteFromSheet(assets.spiderSheet,64,64,7,3,4)
	assets.spiderSpriteRest = getSpriteFromSheet(assets.spiderSheet,64,64,1,4,0)
  assets.spiderSpriteJump = getSpriteFromSheet(assets.spiderSheet,64,64,1,0,2)

  assets.gemWhite = getSpriteFromSheet(assets.gem,32,32,1,2,1)[0]
	background(0);
	textSize(25)
	imageMode(CENTER)
  // getAllSpritesFromSheets() -wraps all the above
	game = new GameHandler({ physicsHandler: new PhysicsHandler({ sub: ['player', 'obstacles'] }), levels: levelData, dimensions: { height: windowHeight, width: windowWidth } })
}

function getSpriteFromSheet(sheet,sizeWidth,sizeHeight,numImg,row,startCol) {
	const spriteList = []
	for (let index = startCol; index < numImg + startCol; index++) {
		spriteList.push(sheet.get(index * sizeWidth, row * sizeHeight, sizeWidth, sizeHeight))
	}
	return spriteList

}
function keyPressed() {
  switch (key) {
    case "d" || "D":
      game.movePlayerRight();
      break;
    case "a" || "A":
      game.movePlayerLeft();
      break;
    case "w" || "W":
      game.movePlayerUp();
      break;
    case "q" || "Q":
      game.togglePaused();
      break;
    case "e" || "E":
      game.resetLevel();
      break;
    case "p" || "P":
      game.nextLevel();
      break;
    case "o" || "O":
      game.previousLevel();
      break;
  }
}

function draw() {
  game.nextFrame();
}

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
  assets.img = loadImage("static/assets/Player/Health bar/burgercube.jpg");
  assets.yellowGuy = loadImage("static/assets/ememy.jpg");
  assets.blackGuy = loadImage("static/assets/steveBlack.png");
  assets.skull = loadImage("static/assets/skull.png");
  assets.cryskull = loadImage("static/assets/skull-orig.png");
  assets.creeper = loadImage("static/assets/creeper.webp");
  assets.spiderSheet = loadImage(
    "static/assets/LPC_Spiders/LPC_Spiders/spider05.png"
  );
  assets.deathScreen1 = loadImage("static/assets/black-screen-of-death.webp");
  assets.clay = loadImage(
    "static/assets/sbs_-_base_materials_pack_128x128/Base Materials 128x128/Clay/Mat_Clay_Red_06-128x128.png"
  );
  assets.dark = loadImage(
    "static/assets/sbs_-_base_materials_pack_128x128/Base Materials 128x128/Metal/Mat_Metal_Brushed_03-128x128.png"
  );
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  assets.spiderAttackLeftSprite = getSpriteFromSheet(
    assets.spiderSheet,
    64,
    10
  );
  assets.spiderRestSprite = getSpriteFromSheet(assets.spiderSheet, 1);
  assets.spiderWalkRightSprite = getSpriteFromSheet(assets.spiderSheet, 5);
  background(0);
  textSize(25);
  imageMode(CENTER);
  game = new GameHandler({
    physicsHandler: new PhysicsHandler({ sub: ["player", "obstacles"] }),
    levels: levelData,
    dimensions: { height: windowHeight, width: windowWidth },
  });
}

function getSpriteFromSheet(sheet, x, y, width, height) {
  return sheet.get(x, y, width, height);
}

function getAnimationFromSheet(sheet, imagePositions = [], imageSize = {width: 0, height: 0}) {
  const spriteList = [];
  imagePositions.forEach((position) => {
    const x = position.x, 
      y = position.y,
      width = imageSize.width,
      height = imageSize.height;
    spriteList.push(sheet.get(x, y, width, height));
  });
  return spriteList;
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

class GameHandler {
  constructor({
    levels = [],
    physics = new Physics(),
    player = new Player(),
    playerHandler = new PlayerHandler({ player: player }),
    levelHandler = new LevelHandler({ levels: levels }),
    physicsHandler = new PhysicsHandler({ physics: physics }),
    dimensions = { width: 100, height: 100 },
    renderHandler = new RenderHandler({ screenDimensions: dimensions }),
  } = {}) {
    this.playerHandler = playerHandler;
    this.levelHandler = levelHandler;
    this.physicsHandler = physicsHandler;
    this.renderHandler = renderHandler;
    this.dimensions = dimensions;
    this.isPaused = false;
    this.levelInit();
  }

  nextFrame() {
    if (this.isPaused) return;
    this.physicsHandler.simulateWorldByOneFrame();
    if (this.physicsHandler.isPlayerOffScreen()) {
      this.playerHandler.resetPlayer();
    }
    this.playerHandler.updatePlayer();
    this.renderHandler.showFrame(
      this.getItemData(),
      [{ text: this.playerHandler.player.lives, x: 80, y: 80 }],
      this.getBackdrop()
    );
  }

  getBackdrop() {
    const { redraw, backdrop } = this.levelHandler.getLevelBackdrop();
    return {
      redraw: redraw,
      backdrop: assets[backdrop],
    };
  }

  getItemData() {
    const data = [];
    data.push(this.getPlayerData());
    this.physicsHandler.getObstacleData().map((obstacle) => {
      obstacle.sprite = assets[obstacle.sprite];
      data.push(obstacle);
    });
    return data;
  }

  getPlayerData() {
    const { x, y, width, height } = this.playerHandler.getPlayerAsOptions();
    return {
      color: this.playerHandler.getColor(),
      sprite: this.playerHandler.getSprite(),
      size: { w: width, h: height },
      position: { x: x, y: y },
      angle: this.physicsHandler.getPlayerBody().angle,
      type: "player",
    };
  }

  levelInit() {
    const currentLevelNumber = this.getCurrentLevel();
    const currrentLevel = this.levelHandler.getLevelData(currentLevelNumber);
    const physicsHandler = new PhysicsHandler({
      physics: currrentLevel.physics,
    }); //FIXME physics is beng added in a wierd way fix it
    this.playerHandler.addPlayer(currrentLevel.player[0]);
    physicsHandler.addPlayer(this.playerHandler.getPlayerAsOptions());
    physicsHandler.addObstacles2(currrentLevel.obstacles);
    this.physicsHandler = physicsHandler;
  }

  movePlayerRight() {
    this.playerHandler.movePlayer({ x: 1, y: 0 });
  }

  movePlayerLeft() {
    this.playerHandler.movePlayer({ x: -1, y: 0 });
  }

  movePlayerUp() {
    this.playerHandler.movePlayer({ x: 0, y: -1 });
  }

  movePlayerDown() {
    this.playerHandler.movePlayer({ x: 0, y: 1 });
  }

  getCurrentLevel() {
    return this.levelHandler.currentLevel;
  }

  resetLevel() {
    this.levelInit();
  }

  setCurrentLevel(levelNumber) {
    this.levelHandler.setCurrentLevel(levelNumber);
  }

  getPreviousLevel() {
    return this.levelHandler.getPreviousLevel();
  }

  getNextLevel() {
    const nextLevel = this.levelHandler.getNextLevel();
    return nextLevel;
  }

  nextLevel() {
    this.setCurrentLevel(this.getNextLevel());
    this.levelInit();
  }

  previousLevel() {
    this.setCurrentLevel(this.getPreviousLevel());
    this.levelInit();
  }

  togglePaused() {
    this.isPaused = this.isPaused ? false : true;
  }

  pauseDeath() {
    this.isPaused = true;
    this.renderHandler.deathScreen();
  }

  addLives() {
    game.playerHandler.player.lives++;
  }

  startOver() {
    game.setCurrentLevel(1);
    game.resetLevel();
    game.togglePaused();
    console.log("GH:startOver->startoverbutton", this.startOverButton);
    game.startOverButton.hide();
  }

  startButton() {
    const button = createButton("Try Again?");
    this.startOverButton = button;
    this.startOverButton.position(windowWidth - 100, windowHeight / 2);
    this.startOverButton.mousePressed(this.startOver);
  }
}

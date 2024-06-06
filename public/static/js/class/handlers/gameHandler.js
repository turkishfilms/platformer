class GameHandler {
  constructor({
    levels = [],
    physics = new Physics(),
    player = new Player(),
    playerHandler = new PlayerHandler({ player: player }),
    levelHandler = new LevelHandler({ levels: levels }),
    physicsHandler = new PhysicsHandler({ physics: physics }),
    dimensions = { width: 0, height: 0 },
    renderHandler = new RenderHandler({ screenDimensions: dimensions }),
  } = {}) {
    this.playerHandler = playerHandler;
    this.levelHandler = levelHandler;
    this.physicsHandler = physicsHandler;
    this.renderHandler = renderHandler;
    this.dimensions = dimensions;
    this.isPaused = true;
    this.startGameButton = this.createStartGameButton("START GAME!!! >:)");
    this.deathButton = this.createDeathButton("WOW GARB");
    this.deathButton.hide();
    this.gameOpeningScreen();
  }

  nextFrame() {
    if (this.isPaused) return;
    this.physicsHandler.simulateWorldByOneFrame();
    const player = this.getPlayer(0);
    console.log("gh nextFrame player", player);
    this.playerHandler.updatePlayer(
      player.position,
      this.hasCollided("player", "obstacle"),
      { Xspeed: player.velocity.x, Yspeed: player.velocity.y }
    );
    //this.physicsHandler.handleSpecialBlocks() - wraps those two into one function
    this.renderHandler.showFrame(
      this.getItemData(),
      [{ text: this.getLives(0), x: 80, y: 80 }],
      this.getBackdrop()
    );
    if (this.physicsHandler.isPlayerOffScreen()) {
      this.playerHandler.resetPlayer();
    }
  }

  keyPressed(key) {
    switch (key) {
      case "d" || "D":
        this.movePlayerRight();
        break;
      case "a" || "A":
        this.movePlayerLeft();
        break;
      case "w" || "W":
        this.movePlayerUp();
        break;
      case "q" || "Q":
        this.togglePaused();
        break;
      case "e" || "E":
        this.resetLevel();
        break;
      case "p" || "P":
        this.nextLevel();
        break;
      case "o" || "O":
        this.previousLevel();
        break;
    }
  }

  levelInit() {
    const currrentLevel = this.levelHandler.getLevelData(
      this.getCurrentLevel()
    );
    this.physicsHandler.newEngine(currrentLevel.physics);

    // FIXME: LevelData restructure---currentLevel.entity.forEach(entity=>entity.forEach(x=>this.physicsHandler.addItem({ label: entity, ...x }))))
    currrentLevel.player.forEach((player) =>
      this.physicsHandler.addItem({
        options: { label: "player" },
        x: player.position.x,
        y: player.position.y,
        width: player.bounds.width,
        height: player.bounds.height,
      })
    );
    currrentLevel.obstacles.forEach((obs) =>
      this.physicsHandler.addItem({ label: "obstacle", ...obs })
    );
    // currrentLevel.enemies.forEach(enemy => this.physicsHandler.addItem({ label: "enemy", ...enemy }))
  }

  movePlayerRight() {
    this.playerHandler.movePlayer({ x: 1, y: 0 });
    this.playerHandler.player.isFacingRight = true;
  }

  movePlayerLeft() {
    this.playerHandler.movePlayer({ x: -1, y: 0 });
    this.playerHandler.player.isFacingRight = false;
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

  getPlayer(index) {
    const player = this.physicsHandler.getItem("player")[index];
    console.log("gh gPl player", player);
    return player;
  }

  getLives(index) {
    return this.playerHandler.getLives(index);
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
    return this.levelHandler.getNextLevel();
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
    this.setPaused(true);
    this.renderHandler.deathScreen();
  }

  setPaused(bool) {
    this.isPaused = bool;
  }

  addLives() {
    this.playerHandler.incrementLives();
  }

  gameOpeningScreen() {
    image(
      assets.burger,
      windowWidth / 2,
      windowHeight / 2,
      windowWidth,
      windowHeight
    );
    text("start here", 50, 50);
    this.isPaused = true;
  }

  //Reset game to start screen FIXME: game.
  deathButtonActivation() {
    game.hideDeathButton();
    game.startGameButton.show();
    game.gameOpeningScreen();
  }
  // Reset death button FIXME: game.
  hideDeathButton() {
    game.deathButton.hide();
  }
  //returns a new button that resets the game ->name-str ->p5JsButton
  createDeathButton(name) {
    let button = createButton(name);
    button.position(windowWidth - 100, windowHeight / 2);
    button.mousePressed(this.deathButtonActivation);
    return button;
  }

  startOver() {
    game.setCurrentLevel(1);
    game.togglePaused();
    game.startGameButton.hide();
  }

  startButton(name) {
    let button = createButton(name);
    button.position(windowWidth - 100, windowHeight / 2);
    button.mousePressed(this.startOver);
  }

  startGame() {
    game.levelInit();
    game.togglePaused();
    game.startGameButton.hide();
  }

  createStartGameButton(name) {
    const button = createButton(name);
    button.position(windowWidth - 100, windowHeight / 2);
    button.mousePressed(this.startGame);
    return button;
  }

  hasCollided(label1, label2) {
    return this.physicsHandler.hasCollided(label1, 0, label2);
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
  /**
   *
   * @returns
   */
  getPlayerData() {
    const { x, y, width, height } = this.playerHandler.getPlayerAsOptions();
    return {
      color: this.playerHandler.getColor(),
      sprite: this.playerHandler.getSprite(),
      size: { w: width, h: height },
      position: { x: x, y: y + 10 },
      angle: this.physicsHandler.getPlayerBody().angle,
      type: "player",
    };
  }
}

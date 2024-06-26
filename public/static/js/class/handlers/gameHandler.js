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
		this.isPaused = true
		this.startGameButton = this.createStartGameButton("START GAME!!! >:)")
		this.deathButton = this.createDeathButton("WOW GARB")
		this.deathButton.hide()
		this.gameOpeningScreen()
	}

	nextFrame() {
		if (this.isPaused) return;
		this.physicsHandler.simulateWorldByOneFrame();
		this.playerHandler.updatePlayer(
			this.physicsHandler.getPlayerBody().position,
			this.hasCollided(),
			{Xspeed:this.physicsHandler.getPlayerBody().velocity.x,Yspeed:this.physicsHandler.getPlayerBody().velocity.y}
		);
		//this.physicsHandler.handleSpecialBlocks() - wraps those two into one function
		this.physicsHandler.handleDisappear()
		this.physicsHandler.handleEndBlock()
		this.renderHandler.showFrame(
			this.getItemData(),/** items */
			[{ text: this.playerHandler.player.lives, x: 80, y: 80 }],
			this.getBackdrop()
		);
		if (this.physicsHandler.isPlayerOffScreen()) {
			this.playerHandler.resetPlayer();
		}
	}
	levelInit() {
		const currentLevelNumber = this.getCurrentLevel();
		const currrentLevel = this.levelHandler.getLevelData(currentLevelNumber);
		const physicsHandler = new PhysicsHandler({
			physics: currrentLevel.physics,
		}); //FIXME physics is beng added in a wierd way fix it
		this.playerHandler.addPlayer(currrentLevel.player[0]);
		physicsHandler.addPlayer(this.playerHandler.getPlayerAsOptions());
		physicsHandler.addObstacles(currrentLevel.obstacles);
		this.physicsHandler = physicsHandler;
	}

	movePlayerRight() {
		this.playerHandler.movePlayer({ x: 1, y: 0 });
		this.playerHandler.player.isFacingRight = true
	}

	movePlayerLeft() {
		this.playerHandler.movePlayer({ x: -1, y: 0 });
		this.playerHandler.player.isFacingRight = false
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
		this.isPaused = true;
		this.renderHandler.deathScreen();
	}

	addLives() {
		game.playerHandler.player.lives++;
	}

	gameOpeningScreen() {
		image(assets.burger, windowWidth / 2, windowHeight / 2, windowWidth, windowHeight)
		text("start here", 50, 50)
		this.isPaused = true
	}

	deathButtonActivation() {
		game.hideDeathButton()
		game.startGameButton.show()
		game.gameOpeningScreen()
	}

	hideDeathButton() {
		game.deathButton.hide()
	}

	createDeathButton(name) {
		let button = createButton(name);
		button.position(windowWidth - 100, windowHeight / 2);
		button.mousePressed(this.deathButtonActivation)
		return button
	}

	startOver() {
		game.setCurrentLevel(1)
		game.togglePaused()
		game.startGameButton.hide()
	}

	startButton(name) {
		let button = createButton(name);
		button.position(windowWidth - 100, windowHeight / 2);
		button.mousePressed(this.startOver)
	}

	startGame() {
		game.levelInit()
		game.togglePaused()
		game.startGameButton.hide()
	}

	createStartGameButton(name) {
		const button = createButton(name);
		button.position(windowWidth - 100, windowHeight / 2);
		button.mousePressed(this.startGame)
		return button
	}

	hasCollided() {
		return this.physicsHandler.hasCollided();
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
			position: { x: x, y: y + 10 },
			angle: this.physicsHandler.getPlayerBody().angle,
			type: "player",
		};
	}


}



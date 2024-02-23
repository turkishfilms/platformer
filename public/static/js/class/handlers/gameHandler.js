class GameHandler {
	constructor({
		levels = [],
		physics = new Physics(),
		player = new Player(),
		playerHandler = new PlayerHandler({ player: player }),
		levelHandler = new LevelHandler({ levels: levels }),
		physicsHandler = new PhysicsHandler({ physics: physics }),
		renderHandler = new RenderHandler()
	} = {}) {
		this.playerHandler = playerHandler;
		this.levelHandler = levelHandler;
		this.physicsHandler = physicsHandler
		this.renderHandler = renderHandler
		this.gamePaused = false
		// this.gameInit()
		this.levelInit()
	}

	gameInit() {// start the game 
		const { obstacles, player, physics } = this.levelHandler.getLevelData(this.getCurrentLevel())
		this.playerHandler.fillPlayer(player)
		this.physicsHandler = new PhysicsHandler({ physics: physics })
		this.physicsHandler.addPlayer(this.playerHandler.getPlayerAsOptions()) //adding player to physics handler
		this.physicsHandler.addObstacles(obstacles, { isStatic: true }) //adding current level obtacles to physics handler
	}

	nextFrame() {
		if (this.gamePaused) return
		this.physicsHandler.simulateWorldByOneFrame()
		this.playerHandler.updatePlayer()
		this.renderHandler.show()
	}

	levelInit() {
		const currentLevelNumber = this.getCurrentLevel()
		const currrentLevel = this.levelHandler.getLevelData(currentLevelNumber)
		this.physicsHandler = new PhysicsHandler({ physics: currrentLevel.physics }) //physics is beng added in a wierd way fix it
		this.playerHandler.addPlayer(currrentLevel.player[0])
		this.physicsHandler.addPlayer(this.playerHandler.getPlayerAsOptions())
		this.physicsHandler.addObstacles(currrentLevel.obstacles, { isStatic: true })
	}

	movePlayerRight(speed) {
		this.playerHandler.movePlayer({ x: speed, y: 0 })
	}

	movePlayerLeft(speed) {
		this.playerHandler.movePlayer({ x: -speed, y: 0 })
	}

	movePlayerUp(jumpSpeed) {
		this.playerHandler.movePlayer({ x: 0, y: -jumpSpeed })
	}

	movePlayerDown(jumpSpeed) {
		this.playerHandler.movePlayer({ x: 0, y: jumpSpeed })
	}

	getCurrentLevel() {
		return this.levelHandler.currentLevel
	}

	resetLevel() {
		this.physicsHandler.clearWorld()
		this.physicsHandler.addPlayer(this.playerHandler.getPlayerAsOptions()) //adding player to physics handler
		const obstacles = this.levelHandler.getLevelData(this.getCurrentLevel())
		this.physicsHandler.addObstacles(obstacles, { isStatic: true }) //adding current level obtacles to physics handler
	}

	setCurrentLevel(levelNumber) {
		this.levelHandler.setCurrentLevel(levelNumber)
	}

	getPreviousLevel() {
		return Math.max(this.getCurrentLevel() - 1, 1) //Ensure previous level always picks a positive levelNumber
	}

	getNextLevel() {
		return this.getCurrentLevel() + 1
	}

	togglePaused() {
		this.gamePaused = this.gamePaused ? false : true
	}

}

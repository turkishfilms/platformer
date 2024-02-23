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
		this.levelInit()
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
		const physicsHandler = new PhysicsHandler({ physics: currrentLevel.physics }) //physics is beng added in a wierd way fix it
		this.playerHandler.addPlayer(currrentLevel.player[0])
		physicsHandler.addPlayer(this.playerHandler.getPlayerAsOptions())
		physicsHandler.addObstacles(currrentLevel.obstacles, { isStatic: true })
		this.physicsHandler = physicsHandler
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
		this.levelInit()
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

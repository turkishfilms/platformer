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
		if (this.physicsHandler.isPlayerOffScreen()) this.playerHandler.resetPlayer()
		this.playerHandler.updatePlayer()
		this.renderHandler.renderFrame()
	}

	levelInit() {
		const currentLevelNumber = this.getCurrentLevel()
		const currrentLevel = this.levelHandler.getLevelData(currentLevelNumber)
		const physicsHandler = new PhysicsHandler({ physics: currrentLevel.physics }) //FIXME physics is beng added in a wierd way fix it
		this.playerHandler.addPlayer(currrentLevel.player[0])
		physicsHandler.addPlayer(this.playerHandler.getPlayerAsOptions())
		physicsHandler.addObstacles(currrentLevel.obstacles, { isStatic: true })
		this.physicsHandler = physicsHandler
	}

	movePlayerRight() {
		this.playerHandler.movePlayer({ x: 1, y: 0 })
	}

	movePlayerLeft() {
		this.playerHandler.movePlayer({ x: -1, y: 0 })
	}

	movePlayerUp() {
		this.playerHandler.movePlayer({ x: 0, y: -1 })
	}

	movePlayerDown() {
		this.playerHandler.movePlayer({ x: 0, y: 1 })
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
		return this.levelHandler.getPreviousLevel()
	}

	getNextLevel() {
		const nextLevel = this.levelHandler.getNextLevel()
		return nextLevel
	}

	nextLevel() {
		this.setCurrentLevel(this.getNextLevel())
		this.levelInit()
	}

	previousLevel() {
		this.setCurrentLevel(this.getPreviousLevel())
		this.levelInit()
	}

	togglePaused() {
		this.gamePaused = this.gamePaused ? false : true
	}

}

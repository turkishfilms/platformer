class GameHandler {
	constructor({
		levels = [],
		worldStructure={},
		physics = new Physics(),
		player = new Player(),
		scoreHandler = new ScoreHandler(),
		playerHandler = new PlayerHandler({ player: player }),
		levelHandler = new LevelHandler({ levels: levels }),
		physicsHandler = new PhysicsHandler({ world: worldStructure, physics: physics }),
		renderHandler = { show: () => console.log("rendering") }
	} = {}) {
		this.scoreHandler = scoreHandler;
		this.playerHandler = playerHandler;
		this.levelHandler = levelHandler;
		this.physicsHandler = physicsHandler
		this.renderHandler = renderHandler
		this.gamePaused = true
	}

	gameInit() {
		this.physicsHandler.addItems(this.playerHandler.players[0], 0) //adding player to physics handler
		this.physicsHandler.addItems(this.levelHandler.levels[this.getCurrentLevel()], 1) //adding current level obtacles to physics handler
	}

	gameStart() {
		/**
		 * Wipe screen, 
		 * display next level screen
		 *
		  * **/
		this.physicsHandler.clear()//clears obstacles
		this.physicsHandler.addItems(this.levelHandler.levels[this.getCurrentLevel()], 1)

	}

	nextFrame() {
		/**
		 * each frame this gets called
		 * sometimes game will be in a level
		 * sometimes it will be on a death screen
		 *
		 * **/                       
		this.show()
		this.playerShow(this.playerHandler.players[0])
		// this.physicsHandler.simulateWorldByOneFrame()
	}

	playerShow(player){
		let x = player.position.x
		let y = player.position.y
		let width = player.size.width
		let height = player.size.height
		rect(x, y, width, height)
	}

	show() {

		this.renderHandler.show(this.physicsHandler.getObstaclePosition())
	}

	movePlayerRight() {
		this.playerHandler.movePlayer(1)
	}

	movePlayerLeft() {
		this.playerHandler.movePlayer(-1)
	}

	getCurrentLevel() {
		return this.levelHandler.currentLevel
	}

	setCurrentLevel(levelNumber) {
		this.levelHandler.currentLevel = levelNumber
	}

	getPreviousLevel() {
		return Math.max(this.levelHandler.currentLevel - 1, 1) //Ensure previous level always picks a positive levelNumber
	}

	getNextLevel() {
		return this.levelHandler.currentLevel + 1
	}
}

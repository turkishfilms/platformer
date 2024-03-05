/**
 * playerhandler manages players staate
 * methods jump, addPlayer, removePlayer, signalplayerlostlife, signalPLayerGainLife, player physics happens here
 * properties: physicsX
 * keyboard handled by game not player handler
 *
 */

class PlayerHandler {
	constructor({
		player = new Player(),
	} = {}) {
		this.player = player
	}

	updatePlayer() {
		const player = game.physicsHandler.getPlayerBody()
		this.player.position = player.position
		if (Matter.Query.collides(player, game.physicsHandler.getObstacleComposite().bodies).length > 0) {
			this.player.jumpCount = Math.min(this.player.jumpCount + 1, this.player.maxJumpCount)
		}
	}

	movePlayer(velocity) {
		if (velocity.x != 0 || velocity.y > 0 || this.canJump(this.player)) {
			//if horizontal or downwards go for it. if upwards, check if jump available.
			if (velocity.y < 0) this.player.jumpCount--
			game.physicsHandler.movePlayer({ x: velocity.x * this.player.moveSpeed, y: velocity.y * this.player.jumpSpeed })
		}
	}


	handleOffScreen() { if (this.physicsHandler.isPlayerOffScreen()) this.playerHandler.resetPlayer() }

	canJump(player) {
		return player.jumpCount > 0
	}

	decrementLives() {
		this.player.lives--
	}

	incrementLives() {
		this.player.lives++
	}

	isPlayerDead() {
		return this.player.lives <= 0
	}

	resetPlayer() {
		if (!this.isPlayerDead()) this.decrementLives()
		else console.log("out of lives")
		game.physicsHandler.playerStill()
		game.physicsHandler.translatePlayer(game.levelHandler.getPlayerStartingPosition())
	}

	getPlayerAsOptions() {
		const { position: { x, y }, bounds: { width, height }, options: { restitution } } = this.player
		return { x, y, width, height, restitution }
	}

	addPlayer(player) {
		this.player = JSON.parse(JSON.stringify(player)) //ensuring no coupling occurs
	}

}

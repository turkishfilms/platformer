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
		currentLevelobstacles = []
	} = {}) {
		this.players = [player];
		this.currentLevelobstacles = currentLevelobstacles;
	}

	showPlayer() {
		const { color: { r, g, b, a }, size: { width: w, height: h }, position: { x, y } } = this.players[0]
		fill(r, g, b, a)
		ellipse(x, y, w, h)
	}

	jump(jumpSpeed) {
		this.players[0].speed.ySpeed -= jumpSpeed
	}

	jump2(jumpSpeed) {
		const position = this.players[0].position
		game.physicsHandler.movePlayer(this.players[0], { x: position.x, y: position.y - jumpSpeed })
	}

	addPlayer(player) {
		this.players.push(player)
	}

	show() {
		ellipse(
			this.players[0].position.x,
			this.players[0].position.y,
			this.players[0].size.width
		);
	}

	losesLife(player = this.players[0], numberOfLives) {
		for (let index = 0; index < numberOfLives; index++) {
			if (this.lives == 0) {
				this.die(player)
				break
			}
			player.livesminus()
		}
	}

}

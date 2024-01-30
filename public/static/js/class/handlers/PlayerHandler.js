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

	movePlayer(distance) {
		const position = this.players[0].position
		const vector = Matter.Vector.create(position.x - distance, position.y)
		game.physicsHandler.movePlayer(this.players[0], vector)
	}

	jump(jumpSpeed) {
		const position = this.players[0].position
		const vector = Matter.Vector.create(position.x, position.y - jumpSpeed)
		game.physicsHandler.movePlayer(this.players[0], vector)
	}

	addPlayer(player) {
		this.players.push(player)
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

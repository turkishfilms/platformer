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

	updatePlayer() {
		const playerData = game.physicsHandler.getPlayerBody()
		this.players[0].position = playerData.position
	}

	movePlayer(distance, jumpspeed) {
		const { x, y } = this.players[0].position
		const vector = { x: x - distance, y: y - jumpspeed }
		game.physicsHandler.movePlayer(vector)
	}

	getPlayerAsOptions() {
		//return the options for the player class
		// ingredients:
		//the player class
		let playerPosition = this.players[0].position
		let playerSize = this.players[0].bounds
		return {
			x: playerPosition.x,
			y: playerPosition.y,
			width: playerSize.width,
			height: playerSize.height,
		}
	}

	getPlayerAsOptions2() {
		const { position: { x, y }, bounds: { width, height } } = this.players[0]
		return { x, y, width, height }
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

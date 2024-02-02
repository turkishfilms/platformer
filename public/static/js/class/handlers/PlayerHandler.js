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
		const {
			color: {
				r,
				g,
				b,
				a
			},
			size: {
				width: w,
				height: h
			},
			position: {
				x,
				y
			}
		} = this.players[0]
		fill(r, g, b, a)
		ellipse(x, y, w, h)
	}
	//combine moveplayer and jump
	
	movePlayer(distance, jumpspeed) {
		const position = this.players[0].position
		const vector = Matter.Vector.create(position.x - distance, position.y - jumpspeed)
		game.physicsHandler.movePlayer(this.players[0], vector)
	}
	getPlayerAsOptions(){
		//return the options for the player class  in matter.body.create
		// ingredients:
		//the player class
		//
		//
	let plaerPosition = this.players[0].position
	let playerSize = this.players[0].bounds
	console.log(plaerPosition, playerSize)
	return {
		x :plaerPosition.x,
		y: plaerPosition.y, 
		width: playerSize.width,
		height: playerSize.height,	
	}
	

	}

	addPlayer(player) {
		this.players.push(player)
	}

	losesLife(player = this.players[0], numberOfLives) {
		for (let index = 0; index < numberOfLives; dindex++) {
			if (this.lives == 0) {
				this.die(player)
				break
			}
			player.livesminus()
		}
	}

}
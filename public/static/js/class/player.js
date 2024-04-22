class Player {
	constructor({
		alternateColors = [{
				r: 222,
				g: 150,
				b: 35,
				a: 250
			}


		],
		color = {
			r: 222,
			g: 150,
			b: 35,
			a: 250
		},
		size = {
			width: 50,
			height: 50
		},
		position = {
			x: 56,
			y: 215
		},
		speed = {
			xSpeed: 50,
			ySpeed: 50
		},
		lives = 3,
		startingJumpCount = 1,
		maxMoveSpeed = 4,
		maxJumpSpeed = 4,
		maxJumpCount = 1,
		options = {
			restitution: 0
		}
	} = {}) {
		this.color = color
		this.bounds = size
		this.position = position
		this.speed = speed
		this.lives = lives
		this.jumpSpeed = maxJumpSpeed
		this.moveSpeed = maxMoveSpeed
		this.jumpCount = startingJumpCount
		this.maxJumpCount = maxJumpCount
		this.options = options
		this.alternateColors = alternateColors
	}
}










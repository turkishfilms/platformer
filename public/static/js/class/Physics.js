class Physics {
	constructor({ gravity = 3 / 3, windSpeed = 0 } = {}) {
		this.gravity = { x: 0, y: gravity, scale: 0.001 };
		this.windSpeed = windSpeed;
		this.friction = 0.01
	}
}

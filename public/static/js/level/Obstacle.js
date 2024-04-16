
class Obstacle {
	constructor({ x = 50, y = 50, w = 10, h = 50, color = { r: 255, g: 255, b: 255 },sprite="cryskull" }={}) {
		this.position = { x: x, y: y }
		this.size = { w: w, h: h }
		this.color = color;
		this.disapear = false
		this.sprite = sprite
	}
}

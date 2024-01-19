class Physics {
  constructor({ gravity = 3, windSpeed = 0 } = {}) {
    this.gravity = { x: 0, y: gravity, scale: 1.001 };
    this.windSpeed = windSpeed;
  }
}

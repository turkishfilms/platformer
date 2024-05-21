class Obstacle {
  constructor({
    x = 50,
    y = 50,
    w = 10,
    h = 50,
    color = { r: 255, g: 255, b: 255 },
    sprite = "cryskull",
    isDisappearing = false,
    isEndBlock = false,
    isKillBlock = false,
  } = {}) {
    this.position = { x: x, y: y };
    this.size = { w: w, h: h };
    this.color = color;
    this.isDisappearing = isDisappearing;
    this.isEndBlock = isEndBlock;
    this.sprite = sprite;
    this.isKillBlock = isKillBlock;
  }

  getRectData() {
    return {
      x: this.position.x,
      y: this.position.y,
      width: this.size.width,
      height: this.size.width,
      options: {
        color: this.color,
        isDisappearing: this.isDisappearing,
        isEndBlock: this.isEndBlock,
        sprite: this.sprite,
        isKillBlock: this.isKillBlock,
      },
    };
  }
}

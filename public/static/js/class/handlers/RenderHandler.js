class RenderHandler {
  constructor({ screenDimensions = game.dimensions } = {}) {
    this.screenDimensions = screenDimensions;
    this.initRenderHandler();
  }

  initRenderHandler() {
    textSize(25);
    imageMode(CENTER);
  }

  showFrame(items, data, {redraw, backdrop}) {
    if (redraw) {
      background(0);
      if (backdrop) this.backgroundChanger(backdrop);
    }
    items.forEach(item => this.showSprite(item));
    data.forEach(info => this.showText(info.text, info.x, info.y));
  }

  backgroundChanger(userImage) {
    const { width: w, height: h } = this.screenDimensions;
    background(0);
    image(userImage, w / 2, h / 2, w, h);
  }

  showRect(data) {
    const {
      color: { r, g, b, a } = {
        r: 255,
        g: 255,
        b: 255,
        a: 255,
      },
      size: { w, h },
      position: { x, y },
      angle = 0,
    } = data;
    translate(x, y);
    rotate(angle);
    fill(r, g, b, a);
    rect(0, 0, w, h);
    resetMatrix();
  }

  showText(userText, x, y) {
    text(userText, x, y);
  }

  showSprite(data) {
    const {
      color: { r, g, b, a } = {
        r: 255,
        g: 255,
        b: 255,
        a: 255,
      },
      size: { w, h },
      position: { x, y },
      angle = 0,
      sprite,
    } = data;
    translate(x, y);
    rotate(angle);
    fill(r, g, b, a);
    image(sprite, 0, 0, w, h);
    resetMatrix();
  }

  backgroundChanger(userImage) {
    const { width: w, height: h } = this.screenDimensions;
    image(userImage, w / 2, h / 2, w, h);
  }

  deathScreen() {
    const { width: w, height: h } = this.screenDimensions;
    this.backgroundChanger(assets.deathScreen1, w / 2, h / 2);
    this.showText("You Died Loser💀!", w / 2, h / 2);
    game.deathButton.show()
    /*
		 Goal To make a Death Screen When you run out of lives you get to restart the game after
		 It will have a Text that says YOU DIED LOSER! skull emoji
		 Ingredients Image, the pause function,text */
  }
}

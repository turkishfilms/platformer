/**
 * playerhandler manages players staate
 * methods jump, addPlayer, removePlayer, signalplayerlostlife, signalPLayerGainLife, player physics happens here
 * properties: physicsX
 * keyboard handled by game not player handler
 *
 */

class PlayerHandler {
  constructor({
    player = new Player()
  } = {}) {
    this.player = player;
  }

  updatePlayer(hasCollided, { Xspeed, Yspeed }) {
    this.player.speed.x = Xspeed
    this.player.speed.y = Yspeed

    if (hasCollided) this.incrementJumpCount();
  }

  incrementJumpCount() {
    this.player.jumpCount = Math.min(
      this.player.jumpCount + 1,
      this.player.maxJumpCount
    );
  }

  livesZero() {
    console.log('death window')

    const color = {
      r: 0,
      g: 0,
      b: 0,
      a: 250
    }; //black
    this.colorPicker(color);
    game.pauseDeath();
  }

  movePlayer(velocity) {
    if (
      (velocity.x != 0 || velocity.y > 0 || this.canJump(this.player)) &&
      !game.isPaused
    ) {
      //if horizontal or downwards go for it. if upwards, check if jump available.
      if (velocity.y < 0) this.player.jumpCount--;
      game.physicsHandler.movePlayer({
        x: velocity.x * this.player.moveSpeed,
        y: velocity.y * this.player.jumpSpeed,
      });
    }
  }

  handleOffScreen() {
    if (this.physicsHandler.isPlayerOffScreen())
      this.playerHandler.resetPlayer();
  }

  canJump(player) {
    return player.jumpCount > 0;
  }

  decrementLives() {
    this.player.lives--;
  }

  incrementLives() {
    this.player.lives++;
  }

  isPlayerDead() {
    return this.player.lives <= 0;
  }

  resetPlayer() {
    if (!this.isPlayerDead()) this.decrementLives();
    else this.livesZero();
    game.physicsHandler.playerStill();
    game.physicsHandler.translatePlayer(
      game.levelHandler.getPlayerStarting
    );
  }

  getLives(index) {
    return this.player.lives
  }

  getColor() {
    return this.canJump(this.player) ?
      this.player.color :
      this.player.noJumpColor;
  }

  getSprite({ sprite, isFacingRight, speed, } = this.player) {
    const animation = this.getSpriteKind(sprite, isFacingRight, { xSpeed: speed.x, ySpeed: speed.y })
    return this.getAnimationFrame(animation, 1)
  }

  getSpriteKind(sprite, isFacingRight, { xSpeed, ySpeed }) {
    if (ySpeed < 0) return sprite.jump
    if (xSpeed === 0) return sprite.rest
    return isFacingRight ? sprite.right : sprite.left
  }

  getAnimationFrame(animation, speed = 1) {
    const frameModulus = frameCount % (animation.length - 2) * speed
    return animation[frameModulus];
  }

  addPlayer(player) {

    const playera = JSON.parse(JSON.stringify(player)); //ensuring no coupling occurs
    playera.sprite.left = assets.spiderSpriteWalkLeft
    playera.sprite.right = assets.spiderSpriteWalkRight
    playera.sprite.jump = assets.spiderSpriteJump
    playera.sprite.rest = assets.spiderSpriteRest
    this.player = playera;

    /**
     * Goal make a resting for the sprite
     * Ingriedients 
     * sprite
     * physic handler
     * Xpeed
     * Translate 
     * if xSpeed == 0 
     * playera.sprite.resting = assets.spiderSpriteRest
     */

  }
}

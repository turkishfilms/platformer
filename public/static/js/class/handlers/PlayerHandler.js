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

  updatePlayer(position, hasCollided, {Xspeed,Yspeed}) {
    this.player.position = position;
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
    /** goal: when you lose all of your lives, your color changes
     * ingriedents: -lives  -color
     *ADD THESE THINGS: when lives zero and try agian button hit restore lives
     * */
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
      game.levelHandler.getPlayerStartingPosition()
    );
  }

  getPlayerAsOptions() {
    const {
      position: {
        x,
        y
      },
      bounds: {
        width,
        height
      },
      options: {
        restitution
      },
    } = this.player;
    return {
      x,
      y,
      width,
      height,
      restitution
    };
  }

  getColor() {
    return this.canJump(this.player) ?
      this.player.color :
      this.player.noJumpColor;
  }

  getSprite() {
    /**
     * Goal 
     * Return the Sprtie as the same direction as the player
     * Sprite
     * Direction
     * Translate.
     * Direction =this.player.isFacingRight 
     */
    let directionIsRight = this.player.isFacingRight
    let showSprite
    if (directionIsRight) {
      showSprite = this.player.sprite.right
    } else {
      showSprite = this.player.sprite.left
    }
    if (this.player.speed.x == 0) {
      showSprite = this.player.sprite.rest
    }
    if(this.player.speed.y < 0 ){

    showSprite = this.player.sprite.jump
    }
    const frameModulus = frameCount % (showSprite.length -2  );
    // ????? -2 ??????????
    const sprite = showSprite[frameModulus];
    
    return sprite
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
  livesDeath() {
    // goal when player lives = 0 change color.
    //ingriedents player, color, lives
    if (this.isPlayerDead()) {
      this.colorPicker({
        r: 0,
        g: 0,
        b: 0,
        a: 250
      });
    }
  }
  colorPicker(color) {
    this.player.color = color;
  }
}
/**
 * playerhandler manages players staate
 * methods jump, addPlayer, removePlayer, signalplayerlostlife, signalPLayerGainLife, player physics happens here
 * properties: physicsX
 * keyboard handled by game not player handler
 *
 */

class PlayerHandler {
  constructor({ physics = new Physics(), currentLevelobstacles = [] } = {}) {
    this.players = [];
    this.physics = physics;
    this.currentLevelobstacles = currentLevelobstacles
    this.jumpheight = 20;
  }

  updateCurrentLevelObstacles(obstacles) {
    this.currentLevelobstacles = [];
    this.currentLevelobstacles = obstacles;
  }

  didPlayerHitLevelBoundary({ position, size }, levelBoundaries) {
    if (position.x + size.width >= levelBoundaries.RIGHTSIDE) return true; //left side
    //bottom
    //top
  }

  jump(player) {
  // the y will go higher = jump
  player.potion.y -= this.jumpheight
 
  }

  playerFeelsPhyics;
  update() {
    //every frame check collisions
  }
  direction = 50
moveplayer(player, direction){
//directioin will be negative when we want to go to the left
//posiitve if to the right
player.x += direction
}
}

  



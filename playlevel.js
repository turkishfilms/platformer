//Have a player that and jump and move up,right,left. And player will have gravity. 
//The obstacles will mattter,js bodies with gravity. Also the player hitbox so it doesn't phase through walls.

class Player {
    constructor({jumpSpeed = {
      x: 5,
      y: 5
    }, playerHandler = new PlayerHandler(), color = {
      r: 222,
      g: 150,
      b: 35,
      a: 250
    }, size = {
      width: 50,
      height: 50
    }, position = {
      x: 50,
      y: 50
    }, speed = {
      xSpeed: 50,
      ySpeed: 50
    }, lives = 3}={}) {
      this.color = color
      this.size = size
      this.position = position
      this.speed = speed
      this.lives = lives
      this.playerHandler = playerHandler
      this.jumpSpeed = jumpSpeed
    }}
    movePlayer(direction){
        // this.players[0].x += direction
        const player = Composite.allBodies(engine.world).filter(body => body.id == 1)
        player[0].position.x += direction
    }
      
      class Obstacle {
        constructor(x=50, y=50, w=10 , h=50, color= {r:255, g: 255, b: 255}) {
            this.x = x;
            this.y = y;
            this.w = w;
            this.h = h;
            this.color = color;
        }
    }
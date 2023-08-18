class player {
  constructor(JumpSpeed = {
    x: 5,
    y: 5
  }, playerHander = new PlayerHander(), color = {
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
  }, lives = 3) {
    this.color = color
    this.size = size
    this.position = position
    this.speed = speed
    this.lives = lives
    this.playerHander = playerHander
    thisJumpSpeed = JumpSpeed
  }
  /*



  Player can jump and move left and right 
  Have a any color that the player could choose
  Have a speeed!
  Have size
  Have a x and y 
  `

  */


  jump() {
    // this code will make the y higher then minus by the y how high it jumped 
    this.playerHander.jump(this)
  }
  livesplus() {
    this.lives++
  }
  livesminus() {
    this.lives--
    if (this.lives == 0) this.playerHander.Die(this)
  }
  playerhealthcolor() {
    if (this.lives >= 3) this.color = {//green
      r: 0,
      g: 250,
      b: 0,
      a: 250
    }
    else if (this.lives == 2) this.color = {//yellow
      r: 250,
      g: 250,
      b: 0,
      a: 250
    }
    else if (this.lives == 1) this.color = {//red
      r: 250,
      g: 0,
      b: 0,
      a: 250
    }
  }
}
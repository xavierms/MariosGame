class Enemy {

  constructor() {
    this.r = 75
    this.x = width
    this.y = height - this.r
    

  }

  show () {
    image(imgEnemy, this.x,this.y,this.r,this.r)
   
  }
  
  move () {
    this.x-=5  
  }
  
}
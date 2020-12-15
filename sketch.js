let mario
let cactis = []
let imgMario, imgEnemy, imgFondo
let music
let gameStatus = null

function preload(){
  imgMario = loadImage('mario.png')
  imgEnemy = loadImage('enemy.png')
  imgFondo = loadImage('bg.jpg')
  music = loadSound('bgmusic.mp3')
  gameStatus = "Play"
}

function setup() {
  createCanvas(600, 400);
  mario = new Mario()
  music.loop()
}

function draw() {
  background(imgFondo);


  if (random(1) > 0.995) {
     cactis.push(new Enemy()) 
  }
  
  for (let c of cactis){
   c.move()
   c.show() 
    
   if (mario.hits(c)){
     textSize(40)
     fill("red")
     text("Game Over",150,150)
     textSize(20)
     fill("blue")
     text("Click to Play Again",180,180)
    noLoop() 
     music.stop()
    
   }
  }

  mario.show()
  mario.update()
  

}
  
function mousePressed () {
  
 mario.jump () 
  
}  
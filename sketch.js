
var trex ,trex_running;

function preload(){
  
  trex_running=loadAnimation("trex1.png","trex4.png","trex3.png",)
  groundImage=loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  trex=createSprite(50,160,20,50)
  trex.addAnimation("running",trex_running)
  trex.scale=0.5
  ground=createSprite(200,180,400,20)
  ground.addImage(groundImage)
}

function draw(){
  background("white")

  if(keyDown("space"))
  {
    trex.velocityY=-10
  }
  trex.velocityY=trex.velocityY+0.5
  trex.collide(ground)
drawSprites()
}

var ground
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score = 0
var gameState
var PLAY = 1;
var END = 0;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
 monkey=createSprite(80,315,50);
    ground = createSprite(200,350,800,20);
   ground.x = ground.width /2;
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;

  obstacleGroup=createGroup();
  foodGroup=createGroup();
}


function draw() {
background(220);

gameState=PLAY; 


  var survivalTime=0;
  stroke("white");
  textSize("20")
 fill("white");
 survivalTime=Math.ceil(frameCount/frameRate());  
  
  stroke("black")
  textSize("20");
  fill("black");
 
  text("survival time: " + survivalTime,100,50);
  monkey.collide(ground)

    if(gameState===PLAY){

  spawnBanana()
  spawnObstacles();


      if(keyDown("space")&& monkey.y >= 300) {
        monkey.velocityY = -15;
    
    } 
    monkey.velocityY = monkey.velocityY + 0.8
  ground.velocityX =-4
      if (ground.x < 0){
      ground.x = ground.width/2;
    }
   
    }
  if(obstacleGroup.isTouching(monkey)){
    gameState=END;
  }
  if(gameState===END){

    
    

    obstacleGroup.setLifetimeEach(-1);
    foodGroup.setLifetimeEach(-1);
 
    obstacleGroup.setVelocityXEach(0);
    foodGroup.setVelocityXEach(0);
  }
  
  
 

  drawSprites();

}

function spawnObstacles(){   
 if (frameCount % 60 === 0){
    obstacle = createSprite(400,325,10,40);
  
   obstacle.addImage("obstacles",obstaceImage)
   obstacle.velocityX = -6
   obstacle.scale=0.1
   obstacle.setLifeTime=150;
   obstacleGroup.add(obstacle)
 }
}
function spawnBanana(){
  if (frameCount % 70 === 0){
    banana = createSprite(400,200,10,40);
    banana.addImage(bananaImage);
    banana.velocityX=-6
    banana.scale=0.1
    banana.setLifeTime=150;
    foodGroup.add(banana);
  }
    
}



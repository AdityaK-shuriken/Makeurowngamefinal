var gameOver, retry;
var score = 0;
var enemy;
var backgroundimg,fishimg,pillarimg, bubbleimg;
var gameState="PLAY";
var fish;
var ground;
var obstacle;
var obstacleGroup;
function preload(){
bubbleimg = loadImage("Bubbleok.png")
  backgroundimg = loadImage("background.jpeg")
fishimg = loadImage("fishimg.png")
pillarimg = loadImage("pillarimg.png")
}
function setup() {
  createCanvas(1200,800);
  fish=new Fish()
  ground = createSprite(600,800,1200,10)
  obstacleGroup=new Group()
  enemyGroup=new Group()
  gameOver = createSprite(600,400,20,20)
  retry = createSprite(600, 500, 20, 20)
  gameOver.visible = false;
  retry.visible = false;
}

function draw() {
  background(backgroundimg);
  if (gameState==="PLAY") {
    generateObstacles();
    generateBubbles();
    enemyspawn();
    if(fish.body.isTouching(obstacleGroup)){
      gameState = "END"
    }
    fish.jump();
  } else if(gameState==="END"){
    obstacleGroup.setVelocityXEach(0);
    gameOver.visible = true;
    retry.visible = true;
    obstacleGroup.setLifetimeEach(-1)
    if(mousePressedOver(retry)){
      restart();
    }
  }
  drawSprites();
  textSize(25);
  fill("Black")
  stroke("Blue")
  strokeWeight(2)
  text("Score " + score, 100, 100)
}
function generateObstacles(){
  if(frameCount%60 === 0){
    score = score + 1
    var rand=Math.round(random(1,6))
    if(rand===1 || rand===3 || rand===5){
      obstacle = new Obstacles(10, rand/2)
      obstacle.spawn()
      obstacleGroup.add(obstacle.body)
    }else if(rand===2 || rand===4 || rand===6){
      obstacle = new Obstacles(800, rand/2)
      obstacle.spawn()
      obstacleGroup.add(obstacle.body)
    }
  }
}

function generateBubbles () {
  if(frameCount%80 === 0){
    bubble = new Bubble(fish.body.x,fish.body.y)
    bubble.blow()
  }
}
function enemyspawn(){
if(frameCount%70 === 0){
  enemy = new Enemy()
  enemy.move();
}
}
function restart(){
  gameState = "PLAY"
  obstacleGroup.destroyEach()
  gameOver.visible = false;
  retry.visible = false;
  score = 0 ;
  fish.body.x = 200;
  fish.body.y =200
}
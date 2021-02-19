var gameState = 0
var playButton
var Bg
var ballImage,ball,player1Image,Player2Image,Player1,Player2,Player3,player3Image,Player4,player4Image,Player4
var score = 0
var count = 10

function preload(){
  Bg = loadImage("Bg.jpg")
  ballImage = loadImage("4592.png")
  player3I = loadAnimation("PlayerComputer.png","PlayerComputer3.png")
  
  player1Image = loadAnimation("PlayerComputer.png")
  player2Image = loadAnimation("Player.png")
  player3Image = loadAnimation("Player4.png","Player5.png")
  

}
function setup() {
  createCanvas(windowWidth,windowHeight);
  playButton = createButton("Play")
  playButton.position(windowWidth/2,windowHeight/2+50)
  playButton.style("font-size","30px")
  playButton.style("border-radius","10px")
  playButton.style("background-color","lightblue")

  ball = createSprite(windowWidth/2,windowHeight/2,10,10)
  ball.addImage(ballImage)
  ball.scale = 0.08
  
  Player1 = createSprite(100,windowHeight/2,10,10)
  Player1.addAnimation("Player1",player1Image)
  Player1.scale = 1

  Player2 = createSprite(0.9*windowWidth,windowHeight/2,10,10)
  Player2.addAnimation("Player2",player2Image)
  Player2.scale = 0.6


  Player3 = createSprite(0.25*windowWidth,windowHeight/2,10,10)
  Player3.addAnimation("Player31",player3Image)
  Player3.scale = 1

  


 
  Player3.setCollider("circle",0,0,30)
  Player2.setCollider("circle",0,0,60)
  Player1.setCollider("circle",0,0,30)
  
  

  Edges = createEdgeSprites()
  Player1.velocityY = 2
  Player2.velocityY = 2

  Player1.visible = false
  Player2.visible = false
  Player3.visible = false
  
  ball.visible = false
}

function draw() {
  
  if (gameState == 0){
    background("black");
    fill("yellow")
    textSize(30)
    text("THE FOOTBALL GAME",windowWidth/2-150,40)
    textSize(20)
    fill("yellow")
    text("Hit The Goal If You Can",200,200)
    text("Test Your Football Skills",300,400)
    text("Beat The Best Goalkeeper, Lloris",500,700)
    text("With The Help Of Bhaichung Bhutia",900,200)
    

  
  }
  playButton.mousePressed(function(){
    playButton.hide()
    gameState = 1
  
  })
  if (gameState == 1){
    background(Bg);

  Player1.visible = true
  Player2.visible = true
  Player3.visible = true
 
  ball.visible = true

    textSize(40)
    fill("black")
    text("GOAL:"+score,windowWidth-200,70)
    if(Player1.y>0.75*windowHeight){
      Player1.velocityY = -2
    }

    else if(Player1.y<0.25*windowHeight){
      Player1.velocityY = 2
    }

    if(Player2.y>0.75*windowHeight){
      Player2.velocityY = -2
    }

    else if(Player2.y<0.25*windowHeight){
      Player2.velocityY = 2
    }

    /*if(keyDown("up")){
      Player3.y = Player3.y-5
     
    }

    if(keyDown("down")){
      Player3.y = Player3.y+5
    }
    if(keyDown("right")){
      Player3.x = Player3.x+5
    }
    if(keyDown("left")){
      Player3.x = Player3.x-5
    }*/
    player3.x = mouseX
    player3.y = mouseY

    if(Player3.isTouching(ball)){
      ball.velocityX = random(1,6)
      ball.velocityY = random(-5,+5)
    }


    if(ball.y>160&&ball.y<470&&ball.x>1200){
      score = score+1
      count = count-1
      ball.x = windowWidth/2
      ball.y = windowHeight/2
      ball.velocityX = 0
      ball.velocityY = 0
    }

    if(score === 5&&count==0){
      gameState = 2
    }


    if(score !=5&&count==0){
      gameState = 3
    }
    



    if(ball.x<0||ball.x>windowWidth||ball.y<0||ball.y>windowHeight){
      ball.x = windowWidth/2
      ball.y = windowHeight/2
      count = count-1
      ball.velocityX = 0
      ball.velocityY = 0
    }

    if(ball.isTouching(Player2)){
      ball.bounceOff(Player2)
    }

    if(ball.isTouching(Player1)){
      ball.bounceOff(Player1)
    }
    


  }

  if(gameState === 2){
    background("black")
    textSize(40)
    fill("yellow")
    text("You Win",windowWidth/2,windowHeight/2)
    Player1.visible = false
    Player2.visible = false
    Player3.visible = false
  
    ball.visible = false
    text("Press Space To Restart",windowWidth/2-100,windowHeight/2+50)

  }


  if(gameState === 3){
    background("black")
    textSize(40)
    fill("yellow")
    text("You Lose",windowWidth/2,windowHeight/2)
    Player1.visible = false
    Player2.visible = false
    Player3.visible = false
   
    ball.visible = false
    text("Press Space To Restart",windowWidth/2-100,windowHeight/2+50)
  }

  if(keyDown("space")){
    score = 0
    count = 10
    gameState = 1
  }





  


  drawSprites();
}

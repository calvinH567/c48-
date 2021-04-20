var egg,eggIMG

var basket,basketSafeZone,b1,b2,b3,b4,b5,b6,basketGroup,basketIMG

var bgSprite;
var bg2;
var gameState=0,score = 0
var canvas
var edge;
var bg1
var bg
var currentBasket = 1;
var isCollided1 = false;
var initialBasket = true;




function preload() {
  basketIMG = loadImage("basket.png");
  eggIMG = loadImage("egg1.png");
  bg1 = loadImage("bg1.png");
  bg2 = loadImage("bg2.png");
  bg = loadImage("bg.png");
}


function setup() {
  
  canvas = createCanvas(500,800);

  retry = createButton("Restart?");
  retry.position(200,600);
  retry.hide();

  play = createButton("Play");
  play.position(200,600);
  basketGroup = createGroup();
  
  bgSprite = createSprite(250,400,500,800);
  bgSprite.scale = 1.3;
  bgSprite.addImage("bg1",bg);
  edge = createEdgeSprites();
  createBasket();
  egg = createSprite(400,700);
  egg.addImage("egg",eggIMG);
  
  egg.scale = 0.3  
}

function draw() {
  
  background(bg1);
  if(bgSprite.y>800){
    bgSprite.y = 400;
  }
  play.mousePressed(()=>{
    gameState = 1;
    play.style("visibility","hidden");
    bg1 = bg2;
    initialBasket = false
  })
  console.log(gameState) 
  if(gameState==1){
    
  b1.bounceOff(edge[0]);
  b2.bounceOff(edge[0]);
  b3.bounceOff(edge[0]);
  b4.bounceOff(edge[0]);
  b5.bounceOff(edge[0]);
  b6.bounceOff(edge[0]);

  
  
  b1.bounceOff(edge[1]);
  b2.bounceOff(edge[1]);
  b3.bounceOff(edge[1]);
  b4.bounceOff(edge[1]);
  b5.bounceOff(edge[1]);
  b6.bounceOff(edge[1]);

    drawSprites();

    egg.velocityY = egg.velocityY +0.3;
    
    if(egg.isTouching(b1)&& egg.velocityY>0){
      
      egg.position.x = b1.position.x;
      egg.position.y = b1.position.y - 20;
      initialBasket = true;
      egg.VelocityY = 0;
      
    }
    if(egg.isTouching(b2)&& egg.velocityY>=0){
      if(currentBasket !=2){
        currentBasket = 2;
        score = score +1;   //increments score
        
      }
      isCollided1 =false
      bgSprite.velocityY = 0;
    
      //locks the egg on basket
      egg.velocityY = 0
        b2.position.x = egg.position.x;
        egg.position.y =b2.position.y;


        // makes baskets move when you jump
      for(var i = 0;i <basketGroup.length;i++){
        basketGroup.get([i]).velocityY = 3;
        if(b2.position.y>400){
          basketGroup.get([i]).velocityY = 0;
        }
      }
      
    }
    if(!egg.isTouching(b2)&&currentBasket==2&&egg.velocityY>6){
      gameState = 2;
    }
 /////////////////
 if(egg.isTouching(b3)&& egg.velocityY>=0){
  if(currentBasket !=3){
    currentBasket = 3;
    score = score +1;   //increments score
  }
  isCollided1 =false
  bgSprite.velocityY = 0;

  egg.velocityY = 0
  b3.position.x = egg.position.x;
  egg.position.y =b3.position.y;

  for(var i = 0;i <basketGroup.length;i++){
    basketGroup.get([i]).velocityY = 3;
    if(b3.position.y>500){
      basketGroup.get([i]).velocityY = 0;
    }
  }
  
}
if(!egg.isTouching(b3)&&currentBasket==3&&egg.velocityY>6){
  gameState = 2;
}
    
     
  ////////////////////////////////////////
  if(egg.isTouching(b4)&& egg.velocityY>0){
  
    if(currentBasket !=4){
      currentBasket = 4;
      score = score +1;   //increments score
    }
    isCollided1 =false
    bgSprite.velocityY = 0;
    
    egg.velocityY = 0;

    b4.position.x = egg.position.x;
    egg.position.y =b4.position.y;
    for(var i = 0;i <basketGroup.length;i++){
      basketGroup.get([i]).velocityY = 3;
      if(b4.position.y>600){
        basketGroup.get([i]).velocityY = 0;
      }
    }
    
  }
  if(!egg.isTouching(b4)&&currentBasket==4&&egg.velocityY>6){
    gameState = 2;
  }
  /////////
  if(egg.isTouching(b5)&& egg.velocityY>=0 &&currentBasket ==5){
    
    if(currentBasket !=5){
      currentBasket = 5;
      score = score +1;   //increments score
    }
    isCollided1 =false
    bgSprite.velocityY = 0;
  
  egg.velocityY = 0
  b5.position.x = egg.position.x;
  egg.position.y =b5.position.y;

   /* for(var i = 0;i <basketGroup.length;i++){
      basketGroup.get([i]).velocityY = 3;
      if(b5.position.y>700){
        basketGroup.get([i]).velocityY = 0;
        
      }
      
    }
    */
    
  }
  if(!egg.isTouching(b5)&&currentBasket==5&&egg.velocityY>6){
    gameState = 2;
  }
//////////////////////////////
   if(egg.isTouching(b6)&& egg.velocityY>=0 &&currentBasket =="b6"){
  
  score = score +1;
  isCollided1 =false
  bgSprite.velocityY = 0;

  egg.position.x = b6.position.x;
  egg.position.y = b6.position.y - 20;
  alert("You Win!");
  
}/*
    if(keyDown("space")){
      egg.velocityY = -5;
    }
    */
  }
  if(gameState ==2){
    gameOver();
  }
  if(gameState ==1){
    push()
    fill ("black");
    textSize (25)
    text("Score:" + score,100,50);
    pop ()
  }
  bgSprite.velocityY = bgSprite.velocityY -0.25
  if(bgSprite.y>200){
    bgSprite.y = bgSprite.y + 10
  }
}
function createBasket(){
  
  b1 = createSprite(400,700);
  b1.shapeColor = "red"
  b2 = createSprite(400,500);
  b2.shapeColor = "yellow"
  b3 = createSprite(400,300);
  b3.shapeColor = "purple"
  b4 = createSprite(400,100);
  b4.shapeColor = "green"
  b5 = createSprite(400,-100);
  b5.shapeColor = "blue"
  b6 = createSprite(400,-400);
  b6.shapeColor = "red"

  b1.addImage("basket6",basketIMG);
  b2.addImage("basket5",basketIMG);
  b3.addImage("basket4",basketIMG);
  b4.addImage("basket3",basketIMG);
  b5.addImage("basket2",basketIMG);
  b6.addImage("basket1",basketIMG);




  b1.setCollider("rectangle",0,0,30,30);
  b2.setCollider("rectangle",0,0,30,30);
  b3.setCollider("rectangle",0,0,30,30);
  b4.setCollider("rectangle",0,0,30,30);
  b5.setCollider("rectangle",0,0,30,30);
  b6.setCollider("rectangle",0,0,30,30);

  basketGroup.add(b1);
  basketGroup.add(b2);
  basketGroup.add(b3);
  basketGroup.add(b4);
  basketGroup.add(b5);
  basketGroup.add(b6)
       
  b2.velocityX = -5;
  b3.velocityX = 5;
  b4.velocityX = -5;
  b5.velocityX = 5;
  b6.velocityX = -5;
  
}

function mouseClicked(){
  /*
  if(gameState ==1){
    if(initialBasket =true){
      
    
    if(egg.velocityY ==0){
      egg.velocityY = -5;
    }
    
    bgSprite.velocityY = 5;
    isCollided1 = true
    if(currentBasket == "b1"){
      currentBasket = "b2"
    }else if(currentBasket =="b2"){currentBasket ="b3"}else if
    (currentBasket =="b3"){currentBasket = "b4"}else if(
      currentBasket =="b4"){currentBasket = "b5"}else if(
      currentBasket=="b5"){gameState =3}
    }  
    
  }
  */
 //egg.velocityY = -10
}
function keyPressed(){
  if(keyWentDown("E")){
    alert("Game Paused")
  }else{
    
    egg.velocityY = -7
    bgSprite.velocityY = 5;
  }
}
function gameOver(){
 // alert("you lost!");
  retry.show();
  retry.mousePressed(()=>{
    alert("Press space when your ready to start");
    gameState = 1;
    retry.hide()
  
    b1.y = 700;
    b2.y = 500;
    b2.velocityX = 5
    b2.x = 200;
    b3.y = 300;
    b3.velocityX = -5
    b3.x = 200;
    b4.y = 100;
    b4.velocityX = 5
    b4.x = 200;
    b5.y = -100;
    b5.x = 200;
    b6.y = -400
    b6.x = 200;

    egg.velocityY = 0;
    egg.x = b1.x;
    egg.y = b1.y;
    score = 0;
    currentBasket = 1;
  
    basketGroup.setVelocityYEach(0);
    for(var i = 0;i <basketGroup.length;i++){
        basketGroup.get([i]).velocityY = 0;
    }
    console.log(basketGroup)
  })

  push()
  fill("black");
  stroke ("white");
  textSize(35)
  text("You lost! Try again?",100,400);
  pop ()
}
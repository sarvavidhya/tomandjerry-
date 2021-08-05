
function preload() {
    //load the images here
    cat1=loadAnimation(" images/cat1.png");
    cat3=loadAnimation("images/cat2.png","images/cat3.png");
    cat2=loadImage("images/cat4.png");
    mouse3=loadAnimation("images/mouse2.png","images/mouse3.png");
    mouse1=loadImage("images/mouse1.png");
    mouse2=loadImage("images/mouse4.png");
    gardenImg=loadImage("images/garden.png");
}

function setup(){
    createCanvas(800,800);
    //create tom and jerry sprites here
    backGround=createSprite(400,400,800,800);
    backGround.addImage("Background",gardenImg);
    cat=createSprite(700,650,10,10)
    cat.addAnimation("sit",cat1);
    cat.scale=0.1
    mouse=createSprite(80,650,10,10);
    mouse.addAnimation("cheese",mouse1);
    mouse.scale=0.1
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x<cat.width/2-mouse.width/2){
        cat.velocityX=0;
        cat.addAnimation("stand",cat2);
        cat.changeAnimation("stand");
        cat.x=120
        mouse.addAnimation("search",mouse2);
        mouse.changeAnimation("search");
    }
    
    
    drawSprites();
}


function keyPressed(){
  //For moving and changing animation write code here
  if(keyDown(LEFT_ARROW)){
    cat.velocityX=-2
    cat.addAnimation("walk",cat3);
    cat.changeAnimation("walk");
    mouse.addAnimation("call",mouse3);
    mouse.changeAnimation("call");
  }
}
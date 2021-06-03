var jerry, jerryhappy, jerrytease;
var tom, tomhappy, tomrun;
var garden;

function preload() {
    //load the images here
jerry = loadImage("images/mouse2.png");
jerryhappy = loadImage("images/mouse1.png");
jerrytease = loadImage("images/mouse3.png");
tom = loadImage("images/cat1.png");
tomhappy = loadImage("images/cat4.png","images/cat3.png");
tomrun = loadImage("images/cat2.png");
garden = loadImage("images/garden.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
   jerry = createSprite(100,700);
   tom = createSprite(900,700);
}

function draw() {

    background(garden);
    //Write condition here to evalute if tom and jerry collide

 tom.addImage(tomhappy);
 tom.scale = 0.3;
 jerry.addImage( jerryhappy);
jerry.scale = 0.3;

if(tom.x -jerry.x < (tom.width - jerry.width)/2)  {
 tom.addImage(tomrun);
 jerry.addImage(jerrytease);
 tom.velocityX = 0;
}

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyDown(RIGHT_ARROW)){
    
      tom.velocityX = -4;
      tom.addImage(tomrun);
      jerry.addImage(jerry);
  }

}

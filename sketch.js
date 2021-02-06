var fairy, fairyImg;
var bg;
var star;
var starImg;

function preload()
{
   //preload the images here
   fairyImg = loadAnimation("fairy1.png", "fairy2.png");
   bg = loadImage("starnight.png");
  starImg = loadImage("star.png");
}

function setup() {
  createCanvas( 1200, 750);
  fairy = createSprite(100, 450);
  fairy.scale = .25;
  fairy.addAnimation("fairyfly", fairyImg);

  star = createSprite(950, 50);
  star.scale = .25;
  star.addImage(starImg);
}


function draw() {
  background(bg);

  if (keyDown("RIGHT_ARROW")){
    fairy.x += 2;
  }

  if (keyDown("LEFT_ARROW")){
    fairy.x += -2;
  }

  if (keyDown("DOWN_ARROW")){
    star.y = 400;
  }

drawSprites();
}

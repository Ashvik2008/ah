//gameState
var gameState = 0;
var visibility = 255
function preload()
{
  //loading images
  logo_Img = loadImage("images/APP_LOGO.png");

 
}

function setup()
{
  //creating the canvas
  createCanvas(1000,2000);

  //creating the logo
  logo = createSprite(1000/2,2000/2,20,20);
  logo.addImage(logo_Img);
  logo.scale = 0.9;
}

function draw()
{
  //background color as black
  background(0);

  //making the logo dissapear
  visibility = visibility - 1;
  tint(255,visibility);

  //changing the gameState
  if(visibility<= 0)
  {
    gameState = 1
  }

 
  //drawing the sprites
  drawSprites();
}



var screen, screenImage
var gameState = "Start"

function preload(){
  screenImage = loadImage("images/gamebackground.jpg");
  startImage = loadImage("images/start.jfif");
  yesImage = loadImage("images/yes.jpg");
  noImage = loadImage("images/no.jpg");
}

function setup() {
  createCanvas(1200,600);
  screen = createSprite(0, 0, 600, 300);
  screen.addImage(screenImage);
  start = createSprite(100, 300, 10, 20);
  start.addImage(startImage);
  start.visible = false;
  yes = createSprite(100,100, 10, 20);
  yes.addImage(yesImage);
  yes.visible = false;
  yes.scale = 0.1;
  no = createSprite(100, 300, 10, 20);
  no.scale=0.1;
  no.addImage(noImage);
  no.visible = false;
}

function draw() {
  background("white");
  fill("white");
  //title.style.color("red");

  drawSprites();
  stroke(8);
  textSize(35);
  if (gameState === "Start"){
    text("Welcome To Your Safe World", 100, 330);
     start.visible = true;
  }
  if (mousePressedOver(start)){
    gameState = "stage1"
    start.visible = false;
  }
  if (mousePressedOver(yes)){
    gameState = "stage3";
    yes.visible = false;
    no.visible = false;
  }

  if (mousePressedOver(no)){
    gameState = "stage2";
   
  }

  if (gameState === "stage2"){
    yes.visible = false;
    no.visible = false;
    text("Stay Safe In The House", 100, 330);
  }
 
  if (gameState === "stage1"){
    text("Are You Going Out Somewhere?", 100, 330);
    yes.visible = true;
    no.visible = true;
  }
}
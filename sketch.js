var mainImage;
var canvas;
var man;

function preload(){
  mainImage = loadImage("./spritesheet.png");
}

function setup(){
  canvas = createCanvas(window.innerWidth, window.innerWidth);
  man = new ImageManupulator();
}
function draw(){
  background(0);
  // man.drawADeafaultImage(mainImage, 0, 0, 100, 100);
  // man.drawRotatedImage(mainImage, 110, 110, 100, 100, mouseX/100);
  man.drawPartOfImage(mainImage, 110, 100, 100, 100, 0, 0);
}

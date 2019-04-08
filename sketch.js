var mainImage;
var canvas;
function preload(){
  mainImage = loadImage("./spritesheet.png");
}

function setup(){
  canvas = createCanvas(window.innerWidth, window.innerWidth);
}
function draw(){
  background(0);
  drawADeafaultImage(mainImage, 0, 0, 100, 100);
  imageRotated(mainImage, 110, 110, 100, 100, 90);

}

function imageRotated(image, x, y, w, h, rotation){
  rotate(rotation);
  fill(255);
  rect(x, y, w, h);
  image(image, x, y, w, h);
}

function drawADeafaultImage(image, x, y, w, h){
  fill(255);
  rect(x, y, w, h);
  image(image, x, y, w, h);
}

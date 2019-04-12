var mainImage = [];
var canvas;
var man;
var imagex;
var imageY;
var frames = 0;
var animFrames = 0;

function preload(){
  for(let i = 1;  i < 12; i++){
    if(i > 9){
      mainImage.push(loadImage("assets/idle.sprite/idle00" + i + ".png"));
    }
    else{
      mainImage.push(loadImage("assets/idle.sprite/idle000" + i + ".png"));
    }
  }
}

function setup(){
  canvas = createCanvas(window.innerWidth, window.innerWidth);
  man = new ImageManupulator();
  imageX = mainImage[0].width;
  imageY = mainImage[0].height;
  frameRate(60);
}
function draw(){
  background(100);
  // man.drawADeafaultImage(mainImage, 0, 0, 100, 100);
  // man.drawRotatedImage(mainImage, 110, 110, 100, 100, mouseX/100);
  if(frames === 2){
    man.drawAnimation(mainImage, mouseX, mouseY, imageX, imageY, animFrames);
    frames = 0;
    if(animFrames > 10){
      animFrames = 0;
    }
    else{
      animFrames++;
    }
  }
  else{
    man.drawAnimation(mainImage, mouseX, mouseY, imageX, imageY, animFrames);
  }
  console.log(frames);
  frames++;
}

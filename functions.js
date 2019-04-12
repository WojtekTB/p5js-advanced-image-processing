class ImageManupulator{
  constructor(){

  }


  drawRotatedImage(img, x, y, w, h, rotation){
    translate(x, y);
    rotate(rotation);
    fill(255);
    rect(-w/2, -h/2, w, h);
    image(img, -w/2, -h/2, w, h);
  }

  drawADeafaultImage(img, x, y, w, h){
    fill(255);
    rect(x, y, w, h);
    image(img, x, y, w, h);
  }

  drawPartOfImage(img, x, y, w, h, startX,startY){//image, x, y, width, height, location of where the x and y on the image the crop should start
    img.loadPixels();
    let newPixels = [];
    for(let i = startX*3; i < startX*3+w*3; i++){
      newPixels.push(img.pixels[i]);
    }
    // console.log(img.pixels);
    // console.log(sortedPixels);
    img.pixels = sortedPixels;
    image(img, 10, 10, w, h);
    img.updatePixels();
  }

  drawAnimation(imgs, x, y, w, h, frame){
    let length = imgs.length;
    image(imgs[frame%length], x, y, w, h);
  }
}

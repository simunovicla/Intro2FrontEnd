function setup() {
  createCanvas(windowWidth,windowHeight).position(0,0).style('z-index',-1);
  createA("https://github.com/simunovicla","Mi Súper cuenta de Github","_blank").id("cuenta");
  textSize(90);
}

function draw() {
text("☣",mouseX,mouseY);
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}
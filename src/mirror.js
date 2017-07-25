var capture;

function setup() {
  createCanvas(1400, 800);
  capture = createCapture(VIDEO);
}

function draw() {
  image(capture, 0, 0, width/2+mouseX,height+500-mouseY);
  image(capture, width/2+mouseX, -200, width/2-mouseX/2, 2*height-mouseY);
  //filter(INVERT);
  //image(capture, 0, 10*mouseY, width/2+mouseX,height+mouseY);
}

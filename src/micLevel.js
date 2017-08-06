/**
 * Make some noise to float the ellipse
 */
var x=0;

function setup() {
   createCanvas(1300,1000);
   mic = new p5.AudioIn();
   mic.start();
   img = loadImage("images/gradients_logo2.svg");
}

function draw() {
   x=x+1;
   fill(0);
   background(0+x,120,180);
   if (x>255){background(510-x,120,180);};
   if (x>510){x=0};
   // getLevel takes an optional smoothing value, or defaults to 0.0
   micLevel = mic.getLevel();
   image(img,0,0,width,1.5*height-micLevel*2000);
}

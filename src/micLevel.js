/**
 * Make some noise to float the ellipse
 */

function setup() {
   createCanvas(1500,1000);
   mic = new p5.AudioIn();
   mic.start();
   img = loadImage("images/fifi-drawing.svg");
}

function draw() {
   background(255);
   image(img, 0, 0,width,height);

   // getLevel takes an optional smoothing value, or defaults to 0.0
   micLevel = mic.getLevel();
   ellipse(width/2, height - micLevel*height, 100, 100);
}

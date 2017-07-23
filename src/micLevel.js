/**
 * Make some noise to float the ellipse
 */

function setup() {
   createCanvas(1300,1000);
   mic = new p5.AudioIn();
   mic.start();
   img = loadImage("images/fifi-drawing.svg");
}

function draw() {
   //background(255);
   fill(0);
   background(255);
   //image (img,0,0,width/2,height/2);
   // getLevel takes an optional smoothing value, or defaults to 0.0
   micLevel = mic.getLevel();
   //ellipse(width/2, height - micLevel*height, 100, 100);
    image(img,0,0,width,height/2+micLevel*1500);
   //image(img, 0, micLevel,width,height);
}

var sometext;

function setup() {
  createCanvas(1400,800);
  background(0);
  sometext ="In Tandem";
  frameRate(3);
}

function draw() {

  fill(random(255));
  textSize(30);
  text(sometext, random(width-100), random(30,height-25));

  fill(random(255),0,0);
  textSize(20);
  text(sometext, random(width-65), random(20,height-5));
}

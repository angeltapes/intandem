/**
 * Make some noise to float the ellipse
 */
var x=0;
var y=0;
function setup() {
   createCanvas(1300,1000);
   mic = new p5.AudioIn();
   mic.start();
   img = loadImage("images/gradients_logo2.svg");
  // fifi = loadImage("images/fifi_3.png");
}

function draw() {
   x=x+1;
   fill(0);
   //background(0+x,120,180);
   //if (x>255){background(510-x,120-mouseX/40,180-mouseY/40);};
   //if (x>510){x=0};
   // getLevel takes an optional smoothing value, or defaults to 0.0
   micLevel = mic.getLevel();
   textSize(30);
   text("In Tandem",width/2,height/6,width,height/2-micLevel*3000);
   tint(255,x/2);
   //image(fifi,0,0,width,height/1.5);
   //x=x+1;
   if(x<499){
   stroke (x,x-20,x-40);
   line(x,0,2*x/x*x,(2*x)/x*x);
   //line(width/4-width/2+x,10*x/x*x,5*x/x*x,2*x);
   }
   if(x>499){
     y=y+1;
   //fill(255-(2*y/y*y),y/20);
   //rect(0,0,width,height);
   stroke(255-y/5,255-y/15,255-y/15);
   //line(5*y,0,0,5*y);
   line(0,y,2*y/y*y,2*y/y*y,2*y/y*y);
   //line(width-y,y/2,2*y/y*y,2*y);
   //line(width-x,height/6+x,5*x/x*x,2*x);
 }
 if(x>999){x=0;};
}

var x=0;
var y=0;

function setup() {
   createCanvas(1300,1000);

}

function draw() {
   x=x+1;
   if(x<=999){
   stroke (x,x-20,x-40);
   line(x,0,2*x/x*x,(2*x)/x*x);
   line(width/4-width/2+x,10*x/x*x,5*x/x*x,2*x);
   }
   if(x>499){
     y=y+1;
   fill(255-(2*y/y*y),y/20);
   rect(0,0,width,height);
   stroke(255-y/5,255-y/15,255-y/15);
   line(5*y,0,0,5*y);
   //line(0,y,2*y/y*y,2*y/y*y,2*y/y*y);
   //line(width-y,y/2,2*y/y*y,2*y);
   //line(width-x,height/6+x,5*x/x*x,2*x);
 }
 if(x>999){x=0;};
}

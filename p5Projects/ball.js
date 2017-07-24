function setup(){
  createCanvas(600,600);
}
var x=60;
var y=60;
var xSpeed=10;
var ySpeed=10;

function draw(){
  background(255, 153, 204);
  ellipse(x,y,50,50);

var x=50;
var sum = x+55;

if(x>=600-60){
  xSpeed=-xSpeed;
}
else if(x<=0+60){
  xSpeed = xSpeed;
}
x+=xSpeed; //going to make the ball move in general


if(y>=600){
  ySpeed =-ySpeed;
}
y+=ySpeed


}

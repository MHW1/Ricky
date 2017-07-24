var a = 0;

function setup() {
  background(0);
  noStroke();
  fill(102);
}

function draw() {
  rect(a++%width, 10, 2, 80);
}

var value = 0;
function draw() {
  fill(value);
  rect(25, 25, 50, 50);
}
function mouseDragged() {
  value = value + 5;
  if (value > 255) {
    value = 0;
  }
}
for (var i = 0; i < 100; i++) {
  var r = random(50);
  stroke(r*5);
  line(50, i, 50+r, i);

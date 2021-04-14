var hr,mn;
var sc;
//var end;


function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);
}

function draw() {
  background("black");  
  translate(200,200);
  rotate(-90);

  hr = hour();
  mn = minute();
  sc = second();


  strokeWeight(8);

  stroke(33, 152, 198);
  noFill();
  let scAngle = map(sc, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, scAngle);

  push();
  rotate(scAngle);
  stroke(33, 152, 198);
  line(0,0,100,0);
  pop();


  stroke(113, 153, 27);
  noFill();
  let mnAngle = map(mn, 0, 60, 0, 360);
  arc(0, 0, 280, 280, 0, mnAngle);

  push();
  rotate(mnAngle);
  stroke(113, 153, 27);
  line(0,0,75,0);
  pop();

  stroke(244, 196, 4);
  noFill();
  let hrAngle = map(hr%12, 0, 12, 0, 360);
  arc(0, 0, 260, 260, 0, hrAngle);

  push();
  rotate(hrAngle);
  stroke(244, 196, 4);
  line(0,0,50,0);
  pop();

  stroke(255);
  point(0,0)
  
  drawSprites();
}
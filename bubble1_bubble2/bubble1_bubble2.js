let bubble1;
let bubble2;

function setup() {
  createCanvas(600, 400);
  bubble1 = new bubble(200, 300, 70);
  bubble2 = new bubble(150, 200, 40);
};

function draw() {
  background(51);
  if (bubble1.intersects(bubble2)) {
    bubble1.show();
    bubble1.move();
    bubble2.show();
    bubble2.move();
  } else {
    bubble1.transform();
    bubble1.move();
    bubble2.show();
    bubble2.move();
  };
};

class bubble{
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.radius = r;
  };
  intersects(other) {
    let d = dist(this.x, this.y, other.x, other.y);
    return (d < this.radius + other.radius);
  };
  move() {
	this.x = this.x + random(-5, 5);
	this.y = this.y + random(-5, 5);
  };
  show() {
    strokeWeight(4);
    stroke(255);
    noFill();
    ellipseMode(CENTER);
    ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
  };
  transform() {
    strokeWeight(4);
    stroke(255);
    noFill();
    rectMode(CENTER);
    rect(this.x, this.y, this.radius * 2, this.radius * 2);
  };
};

class Bubble{
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.brightness = 0;
  };
  move() {
    this.x = this.x + random(10) - 5;
    this.y = this.y + random(10) - 5;
  };
  show() {
    stroke(255);
    strokeWeight(4);
    fill(this.brightness, this.brightness);
    ellipse(this.x, this.y, this.r * 2);
  };
  intersects(other) {
    var d = dist(this.x, this.y, other.x, other.y);
    if(this.r + other.r > d) {
      return true;
    };
  };
  changeColor(bright){
    this.brightness = bright;
  };
};

let bubbles = [];

function setup() {
  createCanvas(600, 400);
  for (let i = 0; i < 100; i++) {
    let x = random(width);
    let y = random(height);
    let r = 10;
    bubbles[i] = new Bubble(x, y, r);
  };
  for (let i = 100; i < 200; i++) {
    let x = random(width);
    let y = random(height);
    let r = 20;
    bubbles[i] = new Bubble(x, y, r);
  };
};

function draw() {
  background(0);

  for (let b of bubbles) {
    b.move();
    b.show();

    let overlapping = false;
    for (let other of bubbles){
      if(b !== other && other.intersects(b)) {
        overlapping = true;
      };
      if(overlapping) {
        b.changeColor(200);
      } else {
        b.changeColor(0);
      };
    };
  };
};

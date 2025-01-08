function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0x1a, 0x1a, 0x1a);
  
  textAlign(CENTER, CENTER);
  fill(255);
  textSize(64);
  text('p5-base', windowWidth / 2, windowHeight / 2);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

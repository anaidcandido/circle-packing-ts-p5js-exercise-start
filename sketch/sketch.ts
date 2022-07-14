function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  background ("#1c2130");

  const circlesArray = calculatePackedCircles(width, height);

  for (const c of circlesArray) {
    const threshold = 100
    if (c.radius < threshold){
      drawCircle(c);
    }
  }
}

const palette = [
  "#028f76",
  "#b3e099",
  "#ffeaad",
  "#d14334"
]

function drawCircle(c: Circle) {
  const shade = random(palette);
  fill(shade);
  noStroke();
  circle(c.pos.x, c.pos.y, c.radius * 2);
}

// If user clicks, draw() will be called again (eventually)
function mousePressed() {
  redraw();
}

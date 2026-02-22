function setup() {
  let container = document.getElementById("canvas-container");
  let c = createCanvas(400, 300);
  c.parent(container);
}

function draw() {
  background(220);
  fill(0);
  textSize(24);
  text("Welcome to CodeBugs!", 50, 150);
}

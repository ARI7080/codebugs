let userCode = localStorage.getItem("codebugs_game");

function setup() {
  let container = document.getElementById("game-container");
  let c = createCanvas(400, 300);
  c.parent(container);

  if (userCode) {
    try {
      eval(userCode);
    } catch (e) {
      console.error("Error running user code:", e);
    }
  }
}

function draw() {
  background(200);
}

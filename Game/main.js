const canvas = document.getElementById("canvas1");
const contx = canvas.getContext("2d");
const bang = new Image();
bang.src = "explosion1.png";

canvas.width = 600;
canvas.height = 400;

let spacedPressed = false;
let angle = 0;
let hue = 0;
let frame = 0;
let score = 0;
let gamespeed = 2;

function animate() {
  contx.clearRect(0, 0, canvas.width, canvas.height);
  //contx.fillRect(10, canvas.height - 90, 50, 50);

  handleObstacles();
  handleParticles();
  bird.update();
  bird.draw();

  contx.font = "80px Gerogia";
  contx.fillStyle = "black";
  contx.strokeText(score, 450, 70);

  handleCollisions();
  if (handleCollisions()) return;

  requestAnimationFrame(animate);
  angle += 0.12;
  hue++;
  frame++;

  if (frame % 1000 === 0) {
    gamespeed++;
  }
  //console.log(gamespeed);
}

animate();

window.addEventListener("keydown", function (e) {
  if (e.code === "Space") spacedPressed = true;
});

window.addEventListener("keyup", function (e) {
  if (e.code === "Space") spacedPressed = false;
});

function handleCollisions() {
  for (let i = 0; i < obstactlesArray.length; i++) {
    if (
      bird.x < obstactlesArray[i].x + obstactlesArray[i].width &&
      bird.x + bird.width > obstactlesArray[i].x &&
      ((bird.y < 0 + obstactlesArray[i].topH && bird.y + bird.height > 0) ||
        (bird.y > canvas.height - obstactlesArray[i].bottomH &&
          bird.y + bird.height < canvas.height))
    ) {
      //collision detection
      contx.drawImage(bang, bird.x - 14, bird.y - 14, 50, 50);
      contx.font = "25px Gerogia";
      contx.fillStyle = "black";
      contx.fillText(
        "Game Over--- Socre: " + score,
        160,
        canvas.height / 2 - 10
      );
      return true;
    }
  }
}

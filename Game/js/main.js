const canvas = document.getElementById("canvas1");
const contx = canvas.getContext("2d");

//-------------------Images -------------------------------
const bang = new Image();
bang.src = "image/explosion1.png";

const background = new Image();
background.src = "image/BG.png";
//---------------------------------------------------

canvas.width = 600;
canvas.height = 400;

let spacedPressed = false;
let angle = 0;
let hue = 0;
let sat = 0;
let arr = [25, 50, 75];
let frame = 0;
let score = 0;
let gamespeed = 2;

const BG = {
  x1: 0,
  x2: canvas.width,
  y: 0,
  width: canvas.width,
  height: canvas.height,
};

function handleBackground() {
  if (BG.x1 <= -BG.width + gamespeed) {
    BG.x1 = BG.width;
  } else {
    BG.x1 -= gamespeed;
  }
  contx.drawImage(background, BG.x1, BG.y, BG.width, BG.height);

  if (BG.x2 <= -BG.width + gamespeed) {
    BG.x2 = BG.width;
  } else {
    BG.x2 -= gamespeed;
  }
  contx.drawImage(background, BG.x2, BG.y, BG.width, BG.height);
}

function animate() {
  contx.clearRect(0, 0, canvas.width, canvas.height);
  //contx.fillRect(10, canvas.height - 90, 50, 50);

  handleBackground();
  handleObstacles();
  handleParticles();
  bird.update();
  bird.draw();

  contx.font = "80px Gerogia";
  contx.fillStyle = "white";
  contx.strokeText(score, 450, 70);
  contx.fillText(score, 450, 70);

  handleCollisions();
  if (handleCollisions()) return;

  requestAnimationFrame(animate);
  angle += 0.12;
  hue++;
  sat = arr[Math.floor(Math.random() * arr.length)];
  frame++;

  //console.log(gamespeed);
}

animate();

window.addEventListener("keydown", function (e) {
  if (e.code === "Space") spacedPressed = true;
});

window.addEventListener("keyup", function (e) {
  if (e.code === "Space") spacedPressed = false;
  bird.frameX = 0;
});

function handleCollisions() {
  for (let i = 0; i < obstactlesArray.length; i++) {
    // Original Detection
    // if (
    //   bird.x < obstactlesArray[i].x + obstactlesArray[i].width &&
    //   bird.x + bird.width > obstactlesArray[i].x &&
    //   ((bird.y < 0 + obstactlesArray[i].topH && bird.y + bird.height > 0) ||
    //     (bird.y > canvas.height - obstactlesArray[i].bottomH &&
    //       bird.y + bird.height < canvas.height))
    // )

    // modified Detection
    if (
      bird.x < obstactlesArray[i].x + obstactlesArray[i].width &&
      bird.x + bird.width > obstactlesArray[i].x &&
      (bird.y < 0 + obstactlesArray[i].topH ||
        bird.y + bird.height > canvas.height - obstactlesArray[i].bottomH)
    ) {
      //collision detection
      contx.drawImage(bang, bird.x - 8, bird.y - 14, 50, 50);
      contx.font = "25px Gerogia";
      contx.fillStyle = "white";
      contx.fillText(
        "Game Over--- Socre: " + score,
        160,
        canvas.height / 2 - 10
      );

      // Collision Debugging
      // let b = bird.y + bird.height;
      // let d = bird.x + bird.width;
      // let c = obstactlesArray[i].x + obstactlesArray[i].width;

      // console.log("bird.l: " + bird.x);
      // console.log("bird.t: " + bird.y);
      // console.log("bird.b: " + b);
      // console.log("bird.r: " + d);
      // console.log("obstactlesArray[i].l: " + obstactlesArray[i].x);
      // console.log("obstactlesArray[i].r: " + c);
      // console.log("obstactlesArray[i].tb: " + obstactlesArray[i].topH);
      // console.log("obstactlesArray[i].bt: " + obstactlesArray[i].bottomH);
      // console.log("obstactlesArray[i].color: " + obstactlesArray[i].color);
      // console.log("i: " + i);
      // console.log("obstactlesArray.length: " + obstactlesArray.length);

      return true;
    }
  }
}

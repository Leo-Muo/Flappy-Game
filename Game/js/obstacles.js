const obstactlesArray = [];

class Obstacle {
  constructor() {
    this.topH = (Math.random() * canvas.height) / 3 + 20;
    this.bottomH = (Math.random() * canvas.height) / 3 + 20;
    this.x = canvas.width;
    this.width = 20;
    this.color = "hsla(" + hue + ", 100%, 50%, 1)";
    this.counted = false;
  }

  update() {
    this.x -= gamespeed;
    if (!this.counted && this.x < bird.x) {
      score++;
      this.counted = true;
    }
    this.draw();
  }

  draw() {
    contx.fillStyle = this.color;
    contx.fillRect(this.x, 0, this.width, this.topH);
    contx.fillRect(
      this.x,
      canvas.height - this.bottomH,
      this.width,
      this.bottomH
    );
  }
}

function handleObstacles() {
  if (frame % 50 === 0) {
    obstactlesArray.unshift(new Obstacle());
  }

  for (let i = 0; i < obstactlesArray.length; i++) {
    obstactlesArray[i].update();
  }

  if (obstactlesArray.length > 200) {
    obstactlesArray.pop(obstactlesArray[0]);
  }
}

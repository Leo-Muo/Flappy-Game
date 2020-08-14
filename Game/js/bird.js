const ship = new Image();
ship.src = "image/ship.png";

class Bird {
  constructor() {
    this.y = 150;
    this.x = 150;
    this.velocityY = 0;
    this.originalWidth = 202;
    this.originalHeight = 202;
    this.width = this.originalWidth / 4;
    this.height = this.originalHeight / 5;
    this.weight = 1;
    this.frameX = 0;
  }

  update() {
    let curve = Math.sin(angle) * 20;

    if (this.y > canvas.height - this.height * 2 + curve) {
      this.y = canvas.height - this.height * 2 + curve;
      this.velocityY = 0;
    } else {
      this.velocityY += this.weight;
      this.velocityY *= 0.85;
      this.y += this.velocityY;
    }

    if (this.y < 0 + this.height - 20) {
      this.y = 0 + this.height - 20;
      this.velocityY = 0;
    }

    if (spacedPressed && this.y > this.height * 0.85) this.flop();
  }

  draw() {
    contx.fillStyle = "green";
    //contx.fillRect(this.x, this.y, this.width, this.height);
    contx.drawImage(
      ship,
      this.frameX * this.originalWidth,
      0,
      this.originalWidth,
      this.originalHeight,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }

  flop() {
    this.velocityY -= 2;
    if (this.frameX >= 3) {
      this.frameX = 0;
    } else if (frame % 3 === 0) {
      this.frameX++;
    }
  }
}

const bird = new Bird();

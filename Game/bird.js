class Bird {
  constructor() {
    this.y = 150;
    this.x = 150;
    this.velocityY = 0;
    this.width = 20;
    this.height = 20;
    this.weight = 1;
  }

  update() {
    let curve = Math.sin(angle) * 20;

    if (this.y > canvas.height - this.height * 3 + curve) {
      this.y = canvas.height - this.height * 3 + curve;
      this.velocityY = 0;
    } else {
      this.velocityY += this.weight;
      this.velocityY *= 0.85;
      this.y += this.velocityY;
    }

    if (this.y < 0 + this.height) {
      this.y = 0 + this.height;
      this.velocityY = 0;
    }

    if (spacedPressed && this.y > this.height * 3) this.flop();
  }

  draw() {
    contx.fillStyle = "green";
    contx.fillRect(this.x, this.y, this.width, this.height);
  }

  flop() {
    this.velocityY -= 2;
  }
}

const bird = new Bird();

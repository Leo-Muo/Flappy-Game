const particlesArray = [];

class Particle {
  constructor() {
    this.x = bird.x + 7;
    this.y = bird.y + 20;
    this.size = Math.random() * 7 + 3;
    this.speedY = Math.random() * 1 - 0.5;
    this.color = "hsla(" + hue + ", 0%, " + sat + "%, 0.8)";
  }

  update() {
    this.x -= gamespeed;
    this.y += this.speedY;
  }

  draw() {
    contx.fillStyle = this.color;
    contx.beginPath();
    contx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    contx.fill();
  }
}

function handleParticles() {
  particlesArray.unshift(new Particle());

  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].update();
    particlesArray[i].draw();
  }

  if (particlesArray.length > 80) {
    for (let i = 0; i < 10; i++) {
      particlesArray.pop(particlesArray[i]);
    }
  }
}

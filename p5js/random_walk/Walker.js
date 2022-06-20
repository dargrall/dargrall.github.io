class Walker {
  constructor(x,y) {
    this.tx = 0;
    this.ty = 10000;
    this.width = 32;
    this.x = x;
    this.y = y;
    this.startColor = color(255, 0, 0);
    this.endColor = color(0, 0, 255);
    this.color = color(255, 255, 255);
    this.amt = 0;
    this.stepLength = 0.016;
  }
  
  setStepLength(length) {
    this.stepLength = length;
  }
  
  display() {
    stroke(255);
    strokeWeight(0.2);
    fill(this.color);
    ellipse(this.x, this.y, this.width);
  }
  
  step() {
    this.x = map(noise(this.tx), 0, 1, 0, width);
    this.y = map(noise(this.ty), 0, 1, 0, height);
    this.tx += this.stepLength;
    this.ty += this.stepLength;
    
    this.color = lerpColor(this.startColor, this.endColor, this.amt);
    this.amt += 0.005;
  
    
    if (this.amt >= 1.00) {
      this.startColor = this.color;
      this.endColor = color(random(255), random(255), random(255));
      this.amt = 0;
    }
  }
}
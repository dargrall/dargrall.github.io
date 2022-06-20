let walker;

function setup() {
  frameRate(100);
  createCanvas(400, 400);
  background(0);
  walker = new Walker(width / 2, height / 2);
  walker.step();

  slider = createSlider(0, 0.1, 0.016, 0.001);
  slider.position(10, 10);
  slider.style('width', '80px');
  let stepLength = slider.value();

  // Try it when using on website
  //fullscreen(true);
}

function draw() {
  // Comment this out to disable fading
  if (this.frameCount / 2 % 2 == 0) {
    background(color(0, 0, 0, 20));
  }
  walker.setStepLength(slider.value());
  walker.display();
  walker.step();
}
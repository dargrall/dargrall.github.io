let pos;
let currentPos;
let trace = [];
let xslider;
let yslider;
function setup() {
    pos = createVector(1,1);

    xslider = createSlider(1, 50, 1);
    xslider.position(10,10);

    yslider = createSlider(1, 50, 1);
    yslider.position(10,40);

    createCanvas(300, 300);

}

function draw() {
    background(30);
    stroke('green');

    currentPos = createVector(map(sin(pos.x), -1, 1, 50, 250), map(cos(pos.y), -1, 1, 50, 250));

    currentPos.z = 0;
    trace.push(currentPos);

    if (trace.length > 0) {
        trace.forEach(function(el, index) {
            stroke(0, 255, 0, 64);
            strokeWeight(index + 10);
            point(el.x, el.y);
        });
    }

    // Only save last 5 positions
    if (trace.length > 19) {
        trace.splice(0,1);
    }
    pos.x += xslider.value() / 100;
    pos.y += yslider.value() / 100;
}
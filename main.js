function preload() {

}

function setup() {
    canvas = createCanvas(450,350);
    canvas.position(440,130);
}

function draw() {
    circle(30, 30, 50);
    circle(30, 320, 50);
    circle(420, 30, 50);
    circle(420, 320, 50);

    rect(0, 57, 55, 237,255,255,255);
    rect(395, 57, 55, 237,255,255,255);
}

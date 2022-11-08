let direction = 0;

let ctx;
let ArrowImage;
let ImageSize;

function preload() {
	ArrowImage = loadImage("Assets/Arrow.png");
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	textAlign(CENTER, CENTER);
	textSize(700);
	ArrowImage.loadPixels();
	ImageSize = ArrowImage.get(ArrowImage.width / 100, ArrowImage.height / 100);
	imageMode(CENTER);
}

function draw() {
	const angleInDegrees = direction * 90;
	const angleInRadians = radians(angleInDegrees);

	background("black");

	push();
	translate(width / 2, height / 2);
	rotate(angleInRadians);
	image(ArrowImage, 0, 0, ArrowImage.width / 4, ArrowImage.height / 4);
	pop();
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function mouseReleased() {
	direction = round(random(0, 4));
}

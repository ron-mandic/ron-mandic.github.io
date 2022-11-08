let direction = 0;

/**
 * Quelle für Timer: https://editor.p5js.org/marynotari/sketches/S1T2ZTMp-
 */

let ctx;
let ArrowImage;
let ImageSize;
const angles = [90, 270];
let ArrowAnimation = [];
let AnimationCounter = 0;

const TIMER_MIN = 5,
	TIMER_MAX = 15;

let timer;
let customColor;

function getAngle() {
	return angles[Math.floor(Math.random() * angles.length)];
}

function preload() {
	ArrowImage = loadImage("Assets/Arrow.png");
	ArrowImageWhite = loadImage("Assets/ArrowWhite.png");
	ArrowAnimation = [ArrowImage, ArrowImageWhite];
	console.log(ArrowAnimation);
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	textAlign(CENTER, TOP);
	textSize(100);
	ArrowImage.loadPixels();
	ImageSize = ArrowImage.get(ArrowImage.width / 100, ArrowImage.height / 100);
	imageMode(CENTER);

	timer = int(random(TIMER_MIN, TIMER_MAX));
	customColor = color(208, 191, 132);
}

function draw() {
	background("black");
	fill(customColor);

	push();
	translate(width / 2, height / 2);
	rotate(direction);
	image(
		ArrowAnimation[AnimationCounter],
		0,
		0,
		ArrowImage.width / 4,
		ArrowImage.height / 4
	);
	pop();

	text(timer, width / 2, 50);

	if (frameCount % 60 == 0 && timer > 0) {
		timer--;
	}

	if (timer == 0) {
		// text("GAME OVER", width / 2, height * 0.7);
		// make the image blink 10 times
		if (frameCount % 10 == 0) {
			AnimationCounter = (AnimationCounter + 1) % ArrowAnimation.length;
		}

		timer = int(random(TIMER_MIN, TIMER_MAX));
		direction = radians(getAngle());
	}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

/* function mouseReleased() {
	direction = round(random(0, 4));
} */

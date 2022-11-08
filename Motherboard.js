let direction = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);
	textAlign(CENTER, CENTER);
	textSize(700);
}

function draw() {
	const angleInDegrees = direction * 45;
	const angleInRadians = radians(angleInDegrees);

	background("black");

	push();
	translate(width / 2, height / 2);
	rotate(angleInRadians);
	fill("white");
	text("↑", 0, 0);
	pop();
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function mouseReleased() {
	direction = round(random(0, 7));
}

//@ts-check
"use strict";

console.clear();

// ##################################################
function preload() {
	// @ts-ignore
	dataAbs = Canvas.load(DATA_PATH_ABS);
	// @ts-ignore
	dataRel = Canvas.load(DATA_PATH_REL);
	// @ts-ignore
	dataPopulation = Canvas.load(DATA_PATH_POPULATION);

	INTER_REGULAR = loadFont(DATA_PATH_INTER_REGULAR);
	INTER_MEDIUM = loadFont(DATA_PATH_INTER_MEDIUM);
	INTER_BOLD = loadFont(DATA_PATH_INTER_BOLD);
}

function setup() {
	canvas = createCanvas(Canvas.WIDTH, Canvas.HEIGHT);
	canvas.parent(Canvas.DOM_ID);

	colorMode(HSL, 360, 100, 100, 1);

	chartL = new Chart(dataAbs, false);
	chartL.build(chartL.getResultsFrom(CHART_YEAR_DEFAULT), () => {
		for (let children of chartL.list.children) {
			children.addEventListener("click", () => {
				let code = children.getAttribute("code");

				chartL.selectListItem(children, code);
			});
		}
	});
}

function draw() {
	background(Canvas.BACKGROUND_GRAY);
	cursor(ARROW);

	chartL.draw();

	f = frameCount;

	if (f >= f0 && f <= fN) {
		let progress = (f - f0) / fDuration;

		// let easedProgress = TimingFunctions.elastic(progress);
		// y = lerp(y0, yN, easedProgress);

		let easedProgress = TimingFunctions.cubicBezier(0.8, 1.67, 0.83, 0.99);
		y = lerp(y0, yN, easedProgress(progress));

		chartL.slider.y = y;
	}

	chartL.slider.render();

	Modal.display();
}

// ##################################################
function keyPressed() {
	chartL.onPress(Keys.G, () => {
		chartL.toggleGrid();
	});
	chartL.onPress(Keys.R, () => {
		location.reload();
		return false;
	});
	chartL.onPress(Keys.S, () => {
		saveCanvas(canvas, "canvas", "png");
	});
	chartL.onPress(Keys.PLUS, () => {
		chartL.setHalved(true);
		chartL.ui.style.display = "block";
		chartL.ui.classList.toggle("animated");
	});
	chartL.onPress(Keys.MINUS, () => {
		chartL.setHalved(false);
		chartL.ui.style.display = "none";
		chartL.ui.classList.toggle("animated");
	});
}

function mousePressed() {
	chartL.slider.onMouseClick();
}

function mouseReleased() {
	chartL.slider.onMouseReleased();
}

function mouseDragged() {
	chartL.slider.onMouseDrag((value) => {
		if (value === chartL.year) return;

		let year = Math.ceil(value);
		chartL.rebuildFor(year);
	});
}

//@ts-check
"use strict";

let list;
let template;
let clone;

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

	chartL.slider.render();

	Modal.display();
}

// ##################################################
function keyPressed() {
	chartL.onPress(Keys.S, () => {
		saveCanvas(canvas, "chart", "png");
	});
	chartL.onPress(Keys.PLUS, () => {
		chartL.setHalved(true);
		chartL.ui.style.display = "block";
	});
	chartL.onPress(Keys.MINUS, () => {
		chartL.setHalved(false);
		chartL.ui.style.display = "none";
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

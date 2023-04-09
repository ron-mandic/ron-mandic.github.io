//@ts-check
"use strict";

class Bar {
	/**
	 * @param {Point} origin
	 * @param {number} x
	 * @param {number} y
	 * @param {number} w
	 * @param {number} h
	 */
	constructor(origin, x, y, w, h) {
		this.origin = origin;
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
	}

	// #############################################################################

	isHovering() {
		return (
			mouseX >= this.origin.x + this.x &&
			mouseX <= this.origin.x + this.x + this.w &&
			mouseY >= this.origin.y + this.y &&
			mouseY <= this.origin.y + this.y + this.h
		);
	}

	draw() {
		once(() => {
			rectMode(CORNER);
			translate(this.origin.x, this.origin.y);

			noStroke();
			fill(CHART_COLOR_HSL_LIGHTER);

			rect(this.x, this.y, this.w, this.h);
		});
	}
}

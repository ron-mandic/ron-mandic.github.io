//@ts-check
"use strict";

class Arc {
	/**
	 * @param {Point} origin
	 * @param {number} x
	 * @param {number} y
	 * @param {number} w
	 * @param {number} h
	 * @param {number} h
	 * @param {number} sW
	 * @param {number} rA
	 * @param {number} rB
	 * @param {number} start
	 * @param {number} stop
	 * @param {number} globalStart
	 * @param {number} globalStop
	 * @param {string} colour
	 * @param {string} colourLighter
	 * @param {null | Segment} parent
	 * @param {boolean} isSubArc
	 * @param {string} mode
	 */
	constructor(
		origin,
		x,
		y,
		w,
		h,
		sW,
		rA,
		rB,
		start,
		stop,
		globalStart,
		globalStop,
		colour,
		colourLighter,
		parent,
		isSubArc = false,
		mode = OPEN
	) {
		this.origin = origin;
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;

		this.strokeWidth = sW;

		this.rA = rA;
		this.rB = rB;
		this.dA = this.rA * 2;
		this.dB = this.rB * 2;

		this.start = start;
		this.stop = stop;
		this.globalStart = globalStart;
		this.globalStop = globalStop;

		this.parent = parent;

		this.colour = colour;
		this.colourLighter = colourLighter;
		this.tempColour = null;
		this.isSubArc = isSubArc;

		this.mode = mode;

		this.ageGroup = "";
		this.absValue = null;
		this.perValue = null;
	}

	/**
	 * @see https://www.desmos.com/calculator/fjaz7sv20l?lang=de
	 * @param {number} startAngle
	 * @param {number} endAngle
	 * @returns {boolean}
	 */
	isHovering(startAngle = this.start, endAngle = this.stop) {
		// isHalved = true, side = LEFT
		if (endAngle < 0) endAngle = Math.abs(endAngle);
		// isHalved = true, side = RIGHT
		if (startAngle < 0) startAngle = Math.abs(startAngle);

		const d = dist(mouseX, mouseY, this.origin.x, this.origin.y);
		if (d < this.rA || d > this.rB) {
			return false;
		}

		let angle = -atan2(mouseY - this.origin.y, mouseX - this.origin.x);

		// if right sided, not-halved chart
		if (startAngle >= PI && !endAngle)
			angle = TWO_PI - map(angle, PI, TWO_PI, PI, 0);

		return startAngle >= PI && !endAngle
			? angle >= endAngle % PI &&
					angle <= map(startAngle, PI, TWO_PI, PI, 0)
			: angle >= endAngle && angle <= startAngle;
	}

	/**
	 * @param {Segment | null} parent
	 */
	draw(parent = null) {
		once(() => {
			ellipseMode(CENTER);
			translate(this.origin.x, this.origin.y);

			noFill();

			strokeWeight(this.strokeWidth);
			strokeCap(SQUARE);

			// Background
			if (!this.isSubArc) {
				stroke(CHART_COLOR_HSL_LIGHTER);
				arc(
					this.x,
					this.y,
					this.w,
					this.h,
					this.globalStart,
					this.globalStop,
					this.mode
				);
			}

			if (this.isSubArc || this?.flag) {
				stroke(this.colour);
				arc(
					this.x,
					this.y,
					this.w,
					this.h,
					this.start,
					this.stop,
					this.mode
				);
			} else {
				stroke(CHART_COLOR_HSL_LIGHT);
				arc(
					this.x,
					this.y,
					this.w,
					this.h,
					this.start,
					this.stop,
					this.mode
				);
			}
		});
	}
}

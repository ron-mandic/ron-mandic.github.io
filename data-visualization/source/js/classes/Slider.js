//@ts-check
"use strict";

/*
franklin hernandez-castro
www.skizata.com
TEC costa rica, hfg schw. gmuend
2019
 */

class Slider {
	/**
	 * @param {number} x
	 * @param {number} y
	 * @param {number} w
	 * @param {number} h
	 * @param {number} minValue
	 * @param {number} maxValue
	 * @param {number} value
	 */
	constructor(x, y, w, h, minValue, maxValue, value) {
		this.x = x;
		this.y = y;

		this.w = w;
		this.h = h;
		this.minValue = minValue;
		this.maxValue = maxValue;
		this.value = value;

		this.posButtonX = map(
			this.value,
			this.minValue,
			this.maxValue,
			this.x,
			this.x + this.w
		);

		this.mouseIsDragged = false;
		this.diff = 0;
	}

	isHovering() {
		return (
			mouseY > this.y &&
			mouseY < this.y + this.h &&
			mouseX > this.posButtonX &&
			mouseX < this.posButtonX + this.h
		);
	}

	render() {
		if (this.isHovering()) {
			cursor(HAND);
		}
		once(() => {
			stroke(CHART_COLOR_HSL_DARK);
			fill(CHART_COLOR_HSL_LIGHTER);
			rect(this.x, this.y, this.w, this.h);

			once(() => {
				noStroke();
				textFont(INTER_REGULAR);
				textAlign(LEFT, BOTTOM);
				fill("black");
				translate(this.x, this.y);
				text(`${this.minValue}`, 0, -5);
				translate(this.w - textWidth(`${this.maxValue}`), 0);
				text(`${this.maxValue - 1}`, 0, -5);
			});
			once(() => {
				noStroke();
				textFont(INTER_MEDIUM);
				textSize(28);
				textAlign(CENTER, BOTTOM);
				fill("black");
				translate(this.x, this.y);

				let year = Math.round(this.value);

				text(`${Math.round(year)}`, this.w / 2, -15);
			});

			fill(CHART_COLOR_HSL_LIGHT);
			if (this.isHovering()) fill(CHART_COLOR_HSL_DARK);

			strokeWeight(1);
			stroke(CHART_COLOR_HSL_DARK);
			rect(this.posButtonX, this.y, this.h, this.h);
		});
	}

	translateButton() {
		if (this.mouseIsDragged && this.posButtonX > this.x + this.w) {
			this.mouseIsDragged = false;
			return;
		}

		if (mouseX > this.x && mouseX < this.x + this.w - this.h / 2) {
			if (mouseX > this.x && mouseX < this.x + this.w)
				this.posButtonX = mouseX + this.diff;

			if (this.posButtonX < this.x) this.posButtonX = this.x;

			if (this.posButtonX > this.x + this.w)
				this.posButtonX = this.posButtonX;
		}
	}

	onMouseClick() {
		if (this.isHovering()) {
			this.mouseIsDragged = true;
			this.diff = this.posButtonX - mouseX;
		}
	}

	onMouseDrag(callback) {
		if (!this.mouseIsDragged) return;
		if (!this.isHovering()) return;

		if (
			mouseX < this.x ||
			(mouseX > this.x + this.w &&
				(mouseY < this.y - 20 || mouseY > this.y + this.h + 20))
		) {
			this.mouseIsDragged = false;
			this.diff = 0;
		}

		if (this.mouseIsDragged) {
			cursor("grab");
		}

		this.translateButton();

		this.value = map(
			this.posButtonX,
			this.x,
			this.x + this.w - this.h / 2,
			this.minValue,
			this.maxValue
		);

		callback(this.value);
	}

	onMouseReleased() {
		this.mouseIsDragged = false;
		this.diff = 0;
	}
} // end of class

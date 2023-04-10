//@ts-check
"use strict";

class Segment {
	/** @type {Arc[]} */ subArcs;

	/**
	 * @param {number} id
	 * @param {Chart} parent
	 * @param {Arc} arc
	 */
	constructor(id, parent, arc) {
		this.id = id;
		this.parent = parent;
		this.arc = arc;

		this.name = "";
		this.code = "";
		this.perTotalValue = null;

		this.highlighted = false;

		this.subArcs = [];
	}

	// ############################################################################# Logic

	isHovering() {
		return this.arc.isHovering();
	}

	isIncomplete() {
		return this.flag === FLAG_INCOMPLETE;
	}

	highlight(code) {
		if (code === this.code && !this.highlighed) this.highlighed = true;
		console.log(this);
	}

	// ############################################################################# Graphics

	draw() {
		if (this.isHovering()) {
			cursor(HAND);
			Modal.register(this, this.parent.side);
		} else {
			Modal.unregister(this, this.parent.side);
		}

		this.arc.draw();
		this.drawLabels();

		for (let i = 0; i < this.subArcs.length; i++) {
			this.subArcs[i].draw(this);
		}
	}

	drawLabels(
		onlyCode = false,
		labelText = !onlyCode ? this.name : this.code
	) {
		let i =
			this.parent.side === LEFT
				? this.id
				: this.parent.segments.length - this.id;

		let {
			originBarL: originL,
			originArc: originR,
			w,
			g,
			pB,
			rA,
		} = this.parent;

		let angle = radians(-90);
		let tSize = w <= 13 ? 14 : w * 0.75;

		// ellipse(originL.x, originL.y, 10, 10);

		once(() => {
			let xOffset = i * w + i * g;
			this.parent.side === LEFT
				? translate(originL.x + xOffset, height - pB)
				: translate(originR.x + rA + xOffset, height - pB);

			// this.parent.side === LEFT
			// 	? ellipse(0, 0, 10, 10)
			// 	: ellipse(-w, 0, 10, 10);

			if (!this.parent.selectedSegment) {
				once(() => {
					translate(0, 0);
					textAlign(RIGHT, CENTER);
					rotate(angle);

					fill("rgb(0, 0, 0)");
					textSize(tSize);
					this.parent.side === LEFT
						? text(labelText, -10, tSize / 4 + w / 2 - g / 2)
						: text(labelText, -10, -tSize / 4 - w / 2);
				});
			} else {
				let itIsMe = this.parent.selectedSegment.code === this.code;

				if (itIsMe) {
					once(() => {
						translate(0, 0);
						textAlign(RIGHT, CENTER);
						rotate(angle);

						textStyle(BOLD);
						fill("rgb(0, 0, 0)");
						textSize(tSize);
						this.parent.side === LEFT
							? text(labelText, -10, tSize / 4 + w / 2 - g / 2)
							: text(labelText, -10, -tSize / 4 - w / 2);
					});
				} else {
					once(() => {
						translate(0, 0);
						textAlign(RIGHT, CENTER);
						rotate(angle);

						fill("rgba(0, 0, 0, .25)");
						textSize(tSize);
						this.parent.side === LEFT
							? text(labelText, -10, tSize / 4 + w / 2 - g / 2)
							: text(labelText, -10, -tSize / 4 - w / 2);
					});
				}
			}
		});
	}
}

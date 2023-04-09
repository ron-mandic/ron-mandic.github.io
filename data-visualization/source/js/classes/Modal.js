//@ts-check
"use strict";

class Modal {
	/** @type {{left: Segment, right: Segment}} */ static #segment = {
		left: null,
		right: null,
	};

	static n = Object.keys(AgeGroupColours).length;

	static p = 12;
	static textSizeHeading = 16;
	static textSizeHeadingLabel = 10;
	static textSizeSubHeading = 14;
	static textSizeBody = 8;
	static textSizeFooter = 14;

	static gV1 = 22;
	static gV2 = 16;
	static gV3 = 8;
	static gV4 = 16;

	static gH1 = 24;
	static gH2 = Modal.gH1;

	static boxP = 2;
	static boxH = Modal.textSizeBody + Modal.boxP * 2;

	static hHeader =
		Modal.textSizeHeading +
		Modal.gV1 +
		Modal.textSizeSubHeading +
		Modal.gV2;
	static hBody = Modal.boxH * Modal.n + Modal.gV3 * (Modal.n - 1) + Modal.gV3;
	static hFooter = Modal.textSizeFooter + Modal.gV4;

	static h = Modal.p * 2 + Modal.hHeader + Modal.hBody + Modal.hFooter;

	/** @type {null | number} */ static w = 1;

	static col0_Width = 0;
	static col1_Width = 0;
	static col2_Width = 0;

	static col0_Origin = { x: Modal.p, y: Modal.p };
	static col1_Origin = {
		x: Modal.p + Modal.gH1,
		y: Modal.p + Modal.textSizeHeading + Modal.gV1,
	};
	static col2_Origin = {
		x: Modal.p + Modal.gH1 + Modal.gH2,
		y: Modal.p + Modal.textSizeHeading + Modal.gV1,
	};

	static col0_YOffset = 0;
	static col1_YOffset = 0;
	static col2_YOffset = 0;

	static expand = false;

	// ############################################################################# Logic

	/**
	 * @returns {Segment}
	 */
	static getSegment() {
		// @ts-ignore
		if (Modal.#segment[LEFT]) return Modal.#segment[LEFT];
		// @ts-ignore
		if (Modal.#segment[RIGHT]) return Modal.#segment[RIGHT];
	}
	/**
	 * @param {Segment} segment
	 * @param {"left" | "right"} side
	 */
	static register(segment, side) {
		if (segment && Modal.#segment[side]?.id !== segment?.id) {
			Modal.#segment[side] = segment;
		}
	}
	/**
	 * @param {Segment} segment
	 * @param {"left" | "right"} side
	 */
	static unregister(segment, side) {
		if (segment && Modal.#segment[side]?.id === segment?.id) {
			Modal.#segment[side] = null;
		}
	}

	static flush() {
		Modal.#segment = { left: null, right: null };

		Modal.expand = false;
		Modal.col0_Width = 0;
		Modal.col1_Width = 0;
		Modal.col2_Width = 0;

		Modal.col0_Origin = { x: Modal.p, y: Modal.p };
		Modal.col1_Origin = {
			x: Modal.p + Modal.gH1,
			y: Modal.p + Modal.textSizeHeading + Modal.gV1,
		};
		Modal.col2_Origin = {
			x: Modal.p + Modal.gH1 + Modal.gH2,
			y: Modal.p + Modal.textSizeHeading + Modal.gV1,
		};

		Modal.col0_YOffset = 0;
		Modal.col1_YOffset = 0;
		Modal.col2_YOffset = 0;

		Modal.expand = false;
	}

	// ############################################################################# Graphics
	static renderBackground() {
		let segment = Modal.getSegment();
		let { col0Width, col1Width, col2Width } =
			chartL.getColDimensions(segment);

		let w =
			textWidth(
				chartL
					.getAllCountryNames()
					.sort((a, b) => b.length - a.length)[0]
			) * 2;
		if (Modal.w !== w) Modal.w = w;

		if (Modal.expand) {
			if (Modal.w === w) w = w + 75;
		} else {
			if (Modal.w < w) w = Modal.w;
		}

		let p0 = 5,
			p1 = 0;

		once(() => {
			noStroke();
			fill("rgba(0,0,0,0.125)");
			rect(p0, p0, w, Modal.h, Modal.p / 4);
		});
		rect(p1, 0, w, Modal.h, Modal.p / 4);
	}

	static renderHeader() {
		let segment = Modal.getSegment();

		once(() => {
			once(() => {
				colorMode(RGB, 255, 255, 255, 1);

				Modal.col0_YOffset = Modal.col0_Origin.y;

				translate(Modal.p, Modal.col0_YOffset);
				textStyle(BOLD);
				fill("rgba(0,0,0,1)");
				textAlign(LEFT, TOP);
				textSize(Modal.textSizeHeading);
				text(segment.name, 0, 0);

				Modal.col0_YOffset =
					Modal.textSizeHeading - Modal.textSizeHeadingLabel - 1;

				translate(
					textWidth(segment.name) + Modal.p / 2,
					Modal.col0_YOffset
				);
				textStyle(BOLD);
				fill("rgba(0,0,0,0.75)");
				textAlign(LEFT, TOP);
				textSize(Modal.textSizeHeadingLabel);
				text(segment.code, 0, 0);
			});

			once(() => {
				Modal.col0_YOffset =
					Modal.p + Modal.textSizeSubHeading + Modal.gV1;

				translate(Modal.p, Modal.col0_YOffset);
				textAlign(LEFT, TOP);
				textStyle(BOLD);
				textSize(Modal.textSizeSubHeading);
				text(MODAL_COLUMN_A, 0, 0);
			});
		});
	}

	static renderBody() {
		Modal.col0_YOffset =
			Modal.p +
			Modal.textSizeSubHeading +
			Modal.gV1 +
			Modal.textSizeSubHeading +
			Modal.gV2;

		once(() => {
			translate(Modal.p, Modal.col0_YOffset);
			textAlign(LEFT, TOP);
			textSize(Modal.textSizeSubHeading);
			text(MODAL_ROW_A, 0, 0);
		});

		Modal.col0_YOffset += Modal.textSizeSubHeading + Modal.gV3;

		once(() => {
			translate(Modal.p, Modal.col0_YOffset);
			textAlign(LEFT, TOP);
			textSize(Modal.textSizeSubHeading);
			text(MODAL_ROW_B, 0, 0);
		});

		Modal.col0_YOffset += Modal.textSizeSubHeading + Modal.gV3;

		once(() => {
			translate(Modal.p, Modal.col0_YOffset);
			textAlign(LEFT, TOP);
			textSize(Modal.textSizeSubHeading);
			text(MODAL_ROW_C, 0, 0);
		});

		Modal.col0_YOffset += Modal.textSizeSubHeading + Modal.gV3;

		once(() => {
			translate(Modal.p, Modal.col0_YOffset);
			textAlign(LEFT, TOP);
			textSize(Modal.textSizeSubHeading);
			text(MODAL_ROW_D, 0, 0);
		});

		// ---------------------------------------------------------

		let segment = Modal.getSegment();
		if (!segment) return;

		let { col0Width, col1Width } = chartL.getColDimensions(segment);

		once(() => {
			translate(
				Modal.p * 2 + Modal.gH1 + col0Width,
				Modal.col1_Origin.y - 2
			);
			textAlign(LEFT, TOP);
			textStyle(BOLD);
			textSize(Modal.textSizeSubHeading);
			text(MODAL_COLUMN_B, 0, 0);
		});

		let perValues = segment.subArcs.map((s) => s.perValue);
		let yOffset =
			Modal.col1_Origin.y - 2 + Modal.textSizeSubHeading + Modal.gV2;

		// for (let i = 0; i < perValues.length; i++) {
		// 	once(() => {
		// 		translate(Modal.p * 2 + Modal.gH1 + col0Width, yOffset);
		// 		textAlign(LEFT, TOP);
		// 		textSize(Modal.textSizeSubHeading);
		// 		text(round(perValues[i], 2), 0, 0);
		// 	});

		// 	yOffset += Modal.textSizeSubHeading + Modal.gV3;
		// }

		once(() => {
			translate(Modal.p * 2 + Modal.gH1 + col0Width, yOffset);
			textAlign(LEFT, TOP);
			textSize(Modal.textSizeSubHeading);
			text(round(perValues[0], 2), 0, 0);
		});
		yOffset += Modal.textSizeSubHeading + Modal.gV3;

		once(() => {
			translate(Modal.p * 2 + Modal.gH1 + col0Width, yOffset);
			textAlign(LEFT, TOP);
			textSize(Modal.textSizeSubHeading);
			text(round(perValues[1], 2), 0, 0);
		});
		yOffset += Modal.textSizeSubHeading + Modal.gV3;

		once(() => {
			translate(Modal.p * 2 + Modal.gH1 + col0Width, yOffset);
			textAlign(LEFT, TOP);
			textSize(Modal.textSizeSubHeading);
			text(round(perValues[2], 2), 0, 0);
		});
		yOffset += Modal.textSizeSubHeading + Modal.gV3;

		once(() => {
			translate(Modal.p * 2 + Modal.gH1 + col0Width, yOffset);
			textAlign(LEFT, TOP);
			textSize(Modal.textSizeSubHeading);
			text(round(perValues[3], 2), 0, 0);
		});
		yOffset += Modal.textSizeSubHeading + Modal.gV3;

		once(() => {
			translate(
				Modal.p * 2 + Modal.gH1 + col0Width,
				yOffset - Modal.gV3 + Modal.gV2
			);
			textAlign(LEFT, TOP);
			textSize(Modal.textSizeSubHeading);
			text(round(segment.perTotalValue, 2), 0, 0);
		});

		// ---------------------------------------------------------

		if (Modal.expand) {
			once(() => {
				translate(
					Modal.p + col0Width + col1Width + Modal.gH2,
					Modal.col1_Origin.y - 3
				);
				textAlign(LEFT, TOP);
				textStyle(BOLD);
				textSize(Modal.textSizeSubHeading);
				text(MODAL_COLUMN_C, 0, 0);
			});

			let absValues = segment.subArcs.map((s) => s.absValue);
			let absTotalValue = absValues.reduce((acc, curr) => {
				return Type.isNumber(curr) ? acc + curr : 0;
			}, 0);
			yOffset =
				Modal.col1_Origin.y - 2 + Modal.textSizeSubHeading + Modal.gV2;

			// for (let i = 0; i < absValues.length; i++) {
			// 	once(() => {
			// 		translate(
			// 			Modal.p + col0Width + col1Width + Modal.gH2,
			// 			yOffset
			// 		);
			// 		textAlign(LEFT, TOP);
			// 		textSize(Modal.textSizeSubHeading);
			// 		text(absValues[i], 0, 0);
			// 	});

			// 	yOffset += Modal.textSizeSubHeading + Modal.gV3;
			// }

			once(() => {
				translate(Modal.p + col0Width + col1Width + Modal.gH2, yOffset);
				textAlign(LEFT, TOP);
				textSize(Modal.textSizeSubHeading);
				text(absValues[0] ? absValues[0] : "", 0, 0);
			});
			yOffset += Modal.textSizeSubHeading + Modal.gV3;

			once(() => {
				translate(Modal.p + col0Width + col1Width + Modal.gH2, yOffset);
				textAlign(LEFT, TOP);
				textSize(Modal.textSizeSubHeading);
				text(absValues[1] ? absValues[1] : "", 0, 0);
			});
			yOffset += Modal.textSizeSubHeading + Modal.gV3;

			once(() => {
				translate(Modal.p + col0Width + col1Width + Modal.gH2, yOffset);
				textAlign(LEFT, TOP);
				textSize(Modal.textSizeSubHeading);
				text(absValues[2] ? absValues[2] : "", 0, 0);
			});
			yOffset += Modal.textSizeSubHeading + Modal.gV3;

			once(() => {
				translate(Modal.p + col0Width + col1Width + Modal.gH2, yOffset);
				textAlign(LEFT, TOP);
				textSize(Modal.textSizeSubHeading);
				text(absValues[3] ? absValues[3] : "", 0, 0);
			});
			yOffset += Modal.textSizeSubHeading + Modal.gV3;

			once(() => {
				translate(
					Modal.p + col0Width + col1Width + Modal.gH2,
					yOffset - Modal.gV3 + Modal.gV2
				);
				textAlign(LEFT, TOP);
				textSize(Modal.textSizeSubHeading);
				text(absTotalValue, 0, 0);
			});
		}
	}

	static renderFooter() {
		Modal.col0_YOffset += Modal.textSizeSubHeading + Modal.gV4;

		once(() => {
			translate(Modal.p, Modal.col0_YOffset);
			textAlign(LEFT, TOP);
			textSize(Modal.textSizeFooter);
			text(MODAL_ROW_E, 0, 0);
		});
	}

	static render() {
		once(() => {
			if (!Modal.overflowX) translate(mouseX + 10, mouseY + 10);
			else translate(mouseX - Modal.width - 10, mouseY + 10);

			Modal.renderBackground();

			Modal.renderHeader();
			Modal.renderBody();
			Modal.renderFooter();
		});
	}

	static display() {
		let segment = Modal.getSegment();

		if (keyIsDown(SHIFT)) {
			if (!Modal.expand) Modal.expand = true;
		} else {
			if (Modal.expand) Modal.expand = false;
		}

		if (segment) {
			Modal.render();
		}
	}
}
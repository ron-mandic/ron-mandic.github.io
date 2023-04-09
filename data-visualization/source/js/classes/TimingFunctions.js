//@ts-check
"use strict";

class TimingFunctions {
	/**
	 *
	 * @param {number} t
	 * @returns {number}
	 */
	static linear(t) {
		return t;
	}
	/**
	 *
	 * @param {number} t
	 * @returns {number}
	 */
	static easeIn(t) {
		return t * t;
	}
	/**
	 *
	 * @param {number} t
	 * @returns {number}
	 */
	static easeInSine(t) {
		return 1 - Math.cos((t * Math.PI) / 2);
	}
	/**
	 *
	 * @param {number} t
	 * @returns {number}
	 */
	static easeInQuad(t) {
		return t * t;
	}
	/**
	 *
	 * @param {number} t
	 * @returns {number}
	 */
	static easeInCubic(t) {
		return t * t * t;
	}
	/**
	 *
	 * @param {number} t
	 * @returns {number}
	 */
	static easeInBack(t) {
		const c1 = 1.70158;
		const c3 = c1 + 1;
		return c3 * t * t * t - c1 * t * t;
	}
	/* static easeFastOutLinearIn(t) {
	    return t < 0.5 ? 2 * t : 1 - 2 * (t - 0.5);
    } */
	/**
	 *
	 * @param {number} t
	 * @returns {number}
	 */
	static easeOut(t) {
		return 1 - (1 - t) * (1 - t);
	}
	/**
	 *
	 * @param {number} t
	 * @returns {number}
	 */
	static easeOutSine(t) {
		return Math.sin((t * Math.PI) / 2);
	}
	/**
	 *
	 * @param {number} t
	 * @returns {number}
	 */
	static easeOutQuad(t) {
		return 1 - (1 - t) * (1 - t);
	}
	/**
	 *
	 * @param {number} t
	 * @returns {number}
	 */
	static easeOutCubic(t) {
		return 1 - Math.pow(1 - t, 3);
	}
	/**
	 *
	 * @param {number} t
	 * @returns {number}
	 */
	static easeOutBack(t) {
		const c1 = 1.70158;
		const c3 = c1 + 1;
		return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
	}
	/* static easeLinearOutSlowIn(t) {
	    return t < 0.5 ? 2 * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
    } */
	/**
	 *
	 * @param {number} t
	 * @returns {number}
	 */
	static easeInOutSine(t) {
		return -(Math.cos(Math.PI * t) - 1) / 2;
	}
	/**
	 *
	 * @param {number} t
	 * @returns {number}
	 */
	static easeInOutQuad(t) {
		if (t < 0.5) {
			return 2 * t * t;
		} else {
			return 1 - ((-2 * t + 2) * (-2 * t + 2)) / 2;
		}
	}
	/**
	 *
	 * @param {number} t
	 * @returns {number}
	 */
	static easeInOutCubic(t) {
		if (t < 0.5) {
			return 4 * t * t * t;
		} else {
			return 1 - ((-2 * t + 2) * (-2 * t + 2) * (-2 * t + 2)) / 2;
		}
	}
	/**
	 *
	 * @param {number} t
	 * @returns {number}
	 */
	static easeInOut(t) {
		if (t < 0.5) {
			return 2 * t * t;
		} else {
			return 1 - 2 * (1 - t) * (1 - t);
		}
	}
	/**
	 *
	 * @param {number} t
	 * @returns {number}
	 */
	static easeInOutBack(t) {
		const c1 = 1.70158;
		const c2 = c1 * 1.525;
		return t < 0.5
			? (Math.pow(2 * t, 2) * ((c2 + 1) * 2 * t - c2)) / 2
			: (Math.pow(2 * t - 2, 2) * ((c2 + 1) * (t * 2 - 2) + c2) + 2) / 2;
	}
	/**
	 *
	 * @param {number} t
	 * @returns {number}
	 */
	static easeFastOutSlowIn(t) {
		return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
	}
	/**
	 *
	 * @param {number} t
	 * @param {number} p
	 * @returns {number}
	 */
	static elastic(t, p = 0.3) {
		return (
			Math.pow(2, -10 * t) * Math.sin(((t - p / 4) * (2 * Math.PI)) / p) +
			1
		);
	}
	/**
	 *
	 * @param {number} t
	 * @returns {number}
	 */
	static bounce(t) {
		if (t < 1 / 2.75) {
			return 7.5625 * t * t;
		} else if (t < 2 / 2.75) {
			return 7.5625 * (t -= 1.5 / 2.75) * t + 0.75;
		} else if (t < 2.5 / 2.75) {
			return 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375;
		} else {
			return 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
		}
	}
	/*static cubicBezier(p0, p1, p2, p3) {
        return function (t) {
            const cx = 3 * (p1.x - p0.x);
            const bx = 3 * (p2.x - p1.x) - cx;
            const ax = p3.x - p0.x - cx - bx;

            const cy = 3 * (p1.y - p0.y);
            const by = 3 * (p2.y - p1.y) - cy;
            const ay = p3.y - p0.y - cy - by;

            const cube = t * t * t;
            const square = t * t;

            const x = ax * cube + bx * square + cx * t + p0.x;
            const y = ay * cube + by * square + cy * t + p0.y;

            return { x: x, y: y };
        };
    }*/
	/**
	 *
	 * @param {number} p1x
	 * @param {number} p1y
	 * @param {number} p2x
	 * @param {number} p2y
	 * @returns {(t: number) => number}
	 */
	static cubicBezier(p1x, p1y, p2x, p2y) {
		return function (t) {
			const cx = 3 * p1x;
			const bx = 3 * (p2x - p1x) - cx;
			const ax = 1 - cx - bx;

			const cy = 3 * p1y;
			const by = 3 * (p2y - p1y) - cy;
			const ay = 1 - cy - by;

			const cube = t * t * t;
			const square = t * t;

			const x = ax * cube + bx * square + cx * t;
			const y = ay * cube + by * square + cy * t;

			return y;
		};
	}
}

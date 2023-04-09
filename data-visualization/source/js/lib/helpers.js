//@ts-check
"use strict";

// ############################################################################# General

const Type = {
	/**
	 * @param {any} value
	 * @returns {boolean}
	 */
	isNumber: (value) => {
		return (
			(typeof value === "number" && !Number.isNaN(value)) ||
			/\d/.test(value)
		);
	},
	/**
	 * @param {any} value
	 * @returns {boolean}
	 */
	isObject: (value) => {
		return typeof value === "object" && value !== null;
	},
	/**
	 * @param {any} value
	 * @returns {boolean}
	 */
	isNull(value) {
		return typeof value === "object" && value === null && !value;
	},
	/**
	 * @param {any} value
	 * @returns {boolean}
	 */
	isUndefined(value) {
		return typeof value === "undefined" && value === undefined && !value;
	},
};

// ############################################################################# p5.js

/**
 * Executes a callback function and pushes to state of the
 * canvas that is later going to be flushed
 * @param {() => any} callback
 */
function once(callback) {
	push();
	callback();
	pop();
}

/**
 * @param {string} countryName
 * @param {string} year
 */
function populationOf(countryName, year) {
	let row = dataPopulation.findRow(countryName, COUNTRY);
	return row.getNum(year);
}

// ############################################################################# Maths
/**
 * Returns the absolute difference between two numbers a and b
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function diff(a, b) {
	return Math.abs(a - b);
}

/**
 * @param {number} cases Total number of cases
 * @param {number} population Total population of the country
 * @param {number} perHabitants Number of cases per habitant
 * @returns {number} Death rate
 */
function per(cases, population, perHabitants = PER_HABITANTS) {
	return (cases * perHabitants) / population;
}

/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function GCF(a, b) {
	if (b === 0) return a;
	return GCF(b, a % b);
}

/**
 * @param {number} x
 * @returns {number[]}
 */
function factors(x) {
	return Array.from(Array(x + 1), (_, i) => i).filter((i) => x % i === 0);
}

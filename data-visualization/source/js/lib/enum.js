//@ts-check
"use strict";

// ############################################################################# p5.js
/** @enum {number | string | ((...args: any[]) => any)} */ const Canvas = {
	WIDTH: 1600,
	HEIGHT: 1200,
	DOM_ID: "canvas",
	BACKGROUND_GRAY: "rgb(255,255,255)",
	/**
	 * @param {string} path
	 */
	load: (path) => {
		// @ts-ignore
		return loadTable(path, P5_TABLE_EXTENSION, P5_TABLE_HEADER);
	},
};

const AgeGroups = ["0-14Y", "15-24Y", "25-64Y", "65MORE"];

/** @enum {string} */
const AgeGroupColours = {
	[AGE_GROUP_0_14]: "#DC4E4E",
	[AGE_GROUP_15_24]: "#A43A3A",
	[AGE_GROUP_25_64]: "#6E2727",
	[AGE_GROUP_65_MORE]: "#371313",
};

/** @enum {string} */
const AgeGroupColourLighter = {
	[AGE_GROUP_0_14]: "#F4C5C5",
	[AGE_GROUP_15_24]: "#E1BEBE",
	[AGE_GROUP_25_64]: "#CFB8B8",
	[AGE_GROUP_65_MORE]: "#BDB1B1",
};

/** @enum {number} */
const Keys = {
	G: 71,
	R: 82,
	S: 83,
	PLUS: 187,
	MINUS: 189,
};

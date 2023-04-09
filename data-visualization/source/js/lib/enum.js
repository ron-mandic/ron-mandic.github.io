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
	[AGE_GROUP_0_14]: "#E88A8A",
	[AGE_GROUP_15_24]: "#C47D7D",
	[AGE_GROUP_25_64]: "#9F7171",
	[AGE_GROUP_65_MORE]: "#7B6464",
};

/** @enum {number} */
const Keys = {
	R: 82,
	S: 83,
	PLUS: 187,
	MINUS: 189,
};

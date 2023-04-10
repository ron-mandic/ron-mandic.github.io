//@ts-check
"use strict";

// ############################################################################# main.js
/** @type {p5.Renderer} */ let canvas;

// ############################################################################# p5.js
/** @type {p5.Table} */ let dataAbs = null;
/** @type {p5.Table} */ let dataRel = null;
/** @type {p5.Table} */ let dataPopulation = null;

// ############################################################################# p5.anims.js
//@ts-ignore
/** @type {p5.anims.AnimShapes} */ const Anim = animS || window.animS;

// ############################################################################# Custom
/** @type {Chart} */ let chartL;
/** @type {Chart} */ let chartR;

/** @type {p5.Font} */ let INTER_REGULAR = null;
/** @type {p5.Font} */ let INTER_MEDIUM = null;
/** @type {p5.Font} */ let INTER_BOLD = null;

// ############################################################################# Animations
// Slider
let y0 = Canvas.HEIGHT + 40 + 100;
let y = y0;
let yN = Canvas.HEIGHT - 125;

let f0 = 80;
let f = 0;
let fDuration = 60;
let fN = f0 + fDuration;

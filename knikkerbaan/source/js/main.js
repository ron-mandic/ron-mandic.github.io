// @ts-check
"use strict";

Matter.use("matter-wrap");

// Definitions ##########################################################
/** @typedef { import("../../@types/p5/index").Image } Image */
/** @typedef { import("../../@types/p5/index").SoundFile } SoundFile */
/** @typedef { import("../../@types/p5/index").Renderer } Renderer */
/** @typedef { BlockCore | Block | Ball | Chain | Magnet | Parts | Polygon | PolygonFromPoints | PolygonFromSVG | Stack } Item */

const CANVAS_BREAKPOINT = 690;

/** @enum {number} */
const Canvas = {
	WIDTH: 1280,
	HEIGHT: 720,
};
/** @enum {number} */
const Keys = {
	SPACE: 32,
	S: 83,
};
/** @enum {number} */
const Masks = {
	WORLD: 0x0001,
	CAR: 0x0002,
	AREA: 0x0004,
};
/** @enum {number} */
const SpaceMapping = {
	EMPTY: -1,
	SINGLE_JUMP: 0,
	CANNON_FIRE: 1,
	PLAYER_REWIND: 2,
	CAR_REWIND: 3,
};
/** @type {number} */ const CANVAS_DATA_CHUNK_SIZE = 4;

// Setup ##########################################################
console.clear();

// Setting up the project
const Engine = Matter.Engine,
	Runner = Matter.Runner,
	Body = Matter.Body;

// Initializations ###########################
/** @type {Renderer} */ let canvas;
/** @type {Matter.Engine} */ let engine;
/** @type {Matter.World} */ let world;
/** @type {Matter.Runner} */ let runner;
/** @type {Mouse} */ let mouse;

/** @type {MarbleRun} */ let marbleRun;
/** @type {Camera} */ let cam;

// Levels ###########################
/** @type {Item[]} */ let blocks = [];
/** @type {Item[]} */ let sensors = [];
/** @type {(() => void)[]} */ let screens;

// User ###########################
let userIsReady = false;

// Player ###########################
/** @type {Player} */ let player;
let playerHasBeenAssigned = false;
let playerIsMovingUpward = false;
let playerVelocityX = 0;
let playerIsInSlowMotion = false;
let playerHasNotLandedInBallPit = true;
const playerCurrentMapping = {
	press: SpaceMapping.EMPTY,
	hold: SpaceMapping.EMPTY,
};
/** @type {Matter.Vector} */ let playerPositionOriginal = null;
let playerHasMadeTheLooping = false;

// Assets ###########################
// png, jpg, ..
/** @type {Image} */ let imgPlayer;
/** @type {Image} */ let imgRoom;
/** @type {Image} */ let imgXylophone;
/** @type {Image} */ let imgBed;
/** @type {Image} */ let imgTowerDoor;
/** @type {Image} */ let imgTowerFg;
/** @type {Image} */ let imgTowerBg;
/** @type {Image} */ let imgButtonPressed;
/** @type {Image} */ let imgButtonReleased;
/** @type {Image} */ let imgCannonBase;
/** @type {Image} */ let imgCannon;
/** @type {Image} */ let imgBaseballGlove;
/** @type {Image} */ let imgFloor;
/** @type {Image} */ let imgPushbox;
/** @type {Image} */ let imgBallPitBg;
/** @type {Image} */ let imgBallPitFg;
/** @type {Image} */ let imgCannonActivated;
/** @type {Image} */ let imgLandingPad;
/** @type {Image} */ let imgJumpPad;
/** @type {Image} */ let imgElevator;
/** @type {Image} */ let imgRocket;
/** @type {Image} */ let imgColdWheels;
/** @type {Image} */ let imgFgBoxStar;
/** @type {Image} */ let imgFgBoxHeart;
/** @type {Image} */ let imgCarwheel;
/** @type {Image} */ let imgCarbody;
/** @type {Image} */ let imgFgCarbody;
/** @type {Image} */ let imgRamp;
/** @type {Image} */ let imgLoop1;
/** @type {Image} */ let imgLoop2;
/** @type {Image} */ let imgFgBaseball;
/** @type {Image} */ let imgStepstool;
/** @type {Image} */ let imgFgBaseballbat;
/** @type {Image} */ let imgFgSucculente;
/** @type {Image} */ let imgColdWheelsFast;
/** @type {Image} */ let imgWall;
/** @type {Image} */ let imgSkateboard;
/** @type {Image} */ let imgFgStepstool;
/** @type {Image} */ let imgRocketActivated;
/** @type {Image} */ let gifEndScene;
/** @type {Image} */ let imgPosterDraw;
/** @type {Image} */ let imgPosterAbc;

// gif
/** @type {Image} */ let gifElGato;
/** @type {Image} */ let gifRewind;
/** @type {Image} */ let gifRewindOverlay;
/** @type {Image} */ let gifCatLoading;

let assetCalc = null;
let assetTotal = null;

/** @type {SoundFile} */ let soundXylophoneA1;
/** @type {SoundFile} */ let soundXylophoneB1;
/** @type {SoundFile} */ let soundXylophoneC1;
/** @type {SoundFile} */ let soundXylophoneD1;
/** @type {SoundFile} */ let soundXylophoneE1;
/** @type {SoundFile} */ let soundXylophoneF1;
/** @type {SoundFile} */ let soundXylophoneG1;
/** @type {SoundFile} */ let soundXylophoneA2;
/** @type {SoundFile} */ let soundXylophoneB2;
/** @type {SoundFile} */ let soundXylophoneC2;
/** @type {SoundFile} */ let soundCat;
/** @type {SoundFile} */ let soundRewind;
/** @type {SoundFile} */ let soundButton;
/** @type {SoundFile} */ let soundElevator;
/** @type {SoundFile} */ let soundBaseballglove;
/** @type {SoundFile} */ let soundWoolball;
/** @type {SoundFile} */ let soundCanonshoot;
/** @type {SoundFile} */ let soundKapow;
/** @type {SoundFile} */ let soundAcceleration;
/** @type {SoundFile} */ let soundRocket;

// Custom event variables ###########################
let mouseIsDragged = false;
let spaceIsPressed = false;

// Items ###########################
// Cat
/** @type {Matter.Body} */ let cat;
// Xylophone
/** @type {Block} */ let xylophone;
// Cannon
/** @type {BlockCore} */ let cannon;
/** @type {Block} */ let cannonDoor;
let cannonAngle = 0.33;
let cannonIsReversing = false;
let cannonCanRotate = false;
let cannonDoorIsOpen = true;
let cannonHasBeenLoaded = false;
let cannonHasBeenFired = false;
/** @type {Block} */ let cannonElevator;
let cannonElevatorIsMoving = false;
const CANNON_ANGLE_MIN = 0.33;
const CANNON_ANGLE_MAX = -0.65;
// Glove
/** @type {PolygonFromSVG} */ let baseballGlove;
// Car
/** @type {Block} */ let carBody;
/** @type {number | null} */ let carBodyPositionX = null;
/** @type {Ball} */ let carWheel1;
/** @type {Ball} */ let carWheel2;
/** @type {BlockCore} */ let carConstraintSensor;
/** @type {BlockCore} */ let carPushSensor;
/** @type {number | null} */ let carProgressValue = null;
/** @type {Matter.Vector} */ let carBodyPositionOriginal = null;
let carHasBeenReleased = false;
let carHasToBeReset = false;
let carIsAtMaximumLoad = false;
// Loops
/** @type {PolygonFromSVG} */ let loopRight;
/** @type {PolygonFromSVG} */ let loopLeft;
/** @type {PolygonFromSVG} */ let loopRight2;
/** @type {PolygonFromSVG} */ let loopLeft2;
// Rocket
/** @type {PolygonFromSVG} */ let rocket;
// Surrounding
/** @type {Block} */ let floorBlock;
/** @type {Block} */ let wall;
/** @type {Block} */ let bed;
/** @type {Block} */ let towerLeft;
/** @type {Block} */ let towerRight;
/** @type {Block} */ let safetyBlock;
/** @type {Block} */ let pushBlock;
/** @type {Block} */ let rocketdoor;
// Rocket
let rocketflying = false;
let rocketoffset = 165;
/** @type {SoundFile} */ let soundSoundtrack;
let soundFlute;
/** @type {Colour} */ let constraintColor;
let showConstraints = false;
let gameended = false;
let count = 0;

let avgr = 0;
let avgg = 0;
let avgb = 0;
let avga = 0;

let canvascontent;

// ##################################################

function preload() {
	loadAssets();
}

function setup() {
	init();

	// mouse.mouse.pixelRatio = pixelDensity();

	marbleRun = new MarbleRun();
	cam = new Camera(player.body);

	player.initCollisions();

	screens = [screen01 /*, screen02 */];

	initScreens(screens);
	screenEvents();

	MarbleRun.stop(marbleRun);
}

function draw() {
	background(255, 255, 255);
	Engine.update(engine);

	Player.recordDataOf(player, !spaceIsPressed && player.isRecording);

	MarbleRun.Cycle.over(5600, () => {
		if (!playerHasBeenAssigned) {
			playerHasBeenAssigned = true;
			player.onSpacePress = MarbleRun.mapSpacePressTo(
				SpaceMapping.SINGLE_JUMP
			);
			player.onSpaceHold = MarbleRun.mapSpaceHoldTo(
				SpaceMapping.PLAYER_REWIND
			);
		}
	});

	once(drawCanvas);
	spacePressed();

	MarbleRun.Cycle.forNext(
		1500,
		playerIsInSlowMotion || playerHasNotLandedInBallPit,
		() => {
			if (playerIsInSlowMotion) {
				engine.timing.timeScale = 0.15;
				playerIsInSlowMotion = false;
			}
		},
		() => {
			engine.timing.timeScale = 1;

			if (carHasBeenReleased) {
				setTimeout(() => {
					playerHasNotLandedInBallPit = false;
					carHasBeenReleased = false;
				}, 3000);
			}
		}
	);

	MarbleRun.Cycle.forNext(
		500,
		cannonHasBeenFired,
		() => {
			if (cannonHasBeenFired) engine.timing.timeScale = 0.15;
		},
		() => {
			engine.timing.timeScale = 1;
			if (cannonHasBeenLoaded) cannonHasBeenFired = false;
		}
	);

	// When the car isn't wound up anymore and still isn't ready for reset
	if (!carBody.body.isStatic && !carHasToBeReset) {
		ifCarStandsStill(() => {
			setTimeout(() => {
				// player.onSpacePress = MarbleRun.mapSpacePressTo(SpaceMapping.EMPTY);
				player.onSpaceHold = MarbleRun.mapSpaceHoldTo(
					SpaceMapping.PLAYER_REWIND
				);
			}, 2000);
		});
	}

	// getCanvasContent();
	// if (player.body.position.x >= CANVAS_BREAKPOINT) marbleRun.stats();
}

// ##################################################

function keyPressed() {
	if (keyCode === Keys.SPACE) {
		if (userIsReady) {
			player.timer.start();
			player.onSpacePress();

			spaceIsPressed = true;
		} else {
			userIsReady = true;
			MarbleRun.resume(marbleRun);
		}
	}

	if (keyCode === Keys.S) {
		saveCanvas(canvas);
	}
}

function keyReleased() {
	if (player.timer.progress > Player.THRESHOLD_TIMER_PERCENT) {
		Matter.Body.setVelocity(player.body, { x: 0, y: engine.gravity.y });
	}

	carReleased();

	player.timer.reset();
	player.resetBooleans();

	soundRewind.stop();

	spaceIsPressed = false;
}

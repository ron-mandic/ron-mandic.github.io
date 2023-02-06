// @ts-check
"use strict";

/** @typedef {import("../../../@types/p5/index").Color} Color */
/** @typedef {{x: number; y: number; r: number; color: string | Color; image: Image; scale: number; [key: string]: any}} PlayerAttributes */
/** @typedef {{p: Matter.Vector; a: number; v: Matter.Vector}} Data */

class Player extends Ball {
  static THRESHOLD_TIMER_PERCENT = 5.044000000059605;
  static RECORDING_LENGTH_MAX = 3_800;
  static LABEL = "Wollknäuel";
  static AUTO_MOVE = 0.02;

  /**
   * ...
   * @param {Player} player
   * @param {boolean} trigger
   */
  static recordDataOf(player, trigger) {
    if (trigger) {
      const p = player.body.position;
      const a = player.body.angle;
      const v = player.body.velocity;

      player.recordedData.unshift({
        p: {
          x: p.x,
          y: p.y,
        },
        a,
        v: {
          x: v.x,
          y: v.y,
        },
      });

      if (player.recordedData.length > Player.RECORDING_LENGTH_MAX) {
        player.recordedData.pop();
      }
    }
  }

  // ##################################################

  /** @type {boolean} */ isOnGround;
  /** @type {boolean} */ spaceHasBeenPressed;
  /** @type {ProgressTimer} */ timer;

  /** @type {() => void} */ onSpacePress;
  /** @type {() => void} */ onSpaceHold;

  /** @type {Data[]} */ recordedData;

  isReversing;
  isRecording;
  hasRewindStarted;

  /**
   *
   * @param {Matter.World} world
   * @param {PlayerAttributes} attributes
   * @param {Matter.IBodyDefinition} options
   */
  constructor(world, attributes, options) {
    super(world, attributes, options);

    this.r = attributes.r;
    this.width = 2 * this.r;
    this.height = 2 * this.r;

    this.isReversing = false;
    this.hasRewindStarted = false;
    this.spaceHasBeenPressed = false;

    this.recordedData = [];
    this.recordedDataLength = this.recordedData.length;

    this.onSpacePress = MarbleRun.mapSpacePressTo(SpaceMapping.EMPTY);
    this.onSpaceHold = MarbleRun.mapSpaceHoldTo(SpaceMapping.EMPTY);

    this.timer = new ProgressTimer();

    this.i = 0;
    this.jumpCount = 0;

    this.isOnGround = false;
    this.isRecording = true;
  }

  // ##################################################
  initCollisions() {
    Matter.Events.on(engine, "collisionStart", function (event) {
      for (const pair of event.pairs) {
        if (
          (pair.bodyA.label === Player.LABEL && pair.bodyB.label === "floor") ||
          (pair.bodyB.label === Player.LABEL && pair.bodyA.label === "floor")
        ) {
          player.spaceHasBeenPressed = false;
          player.isOnGround = true;
        }

        if (
          (pair.bodyA.label === Player.LABEL && pair.bodyB.label === "bed") ||
          (pair.bodyB.label === Player.LABEL && pair.bodyA.label === "bed")
        ) {
          player.spaceHasBeenPressed = false;
          player.isOnGround = true;
        }

        if (
          (pair.bodyA.label === Player.LABEL &&
            pair.bodyB.label === "Hotwheels") ||
          (pair.bodyB.label === Player.LABEL &&
            pair.bodyA.label === "Hotwheels")
        ) {
          player.spaceHasBeenPressed = false;
          player.isOnGround = true;
        }

        if (
          (pair.bodyA.label === Player.LABEL &&
            pair.bodyB.label === "Hotwheels-Mid") ||
          (pair.bodyB.label === Player.LABEL &&
            pair.bodyA.label === "Hotwheels-Mid")
        ) {
          player.spaceHasBeenPressed = false;
          player.isOnGround = true;
        }

        if (
          (pair.bodyA.label === Player.LABEL && pair.bodyB.label === "Body") ||
          (pair.bodyB.label === Player.LABEL && pair.bodyA.label === "Body")
        ) {
          player.spaceHasBeenPressed = false;
          player.isOnGround = true;
        }

        if (
          (pair.bodyA.label === Player.LABEL && pair.bodyB.label === "Stack") ||
          (pair.bodyB.label === Player.LABEL && pair.bodyA.label === "Stack")
        ) {
          player.spaceHasBeenPressed = false;
          player.isOnGround = true;
        }

        if (
          (pair.bodyA.label === Player.LABEL &&
            pair.bodyB.label === "carwheel1") ||
          (pair.bodyB.label === Player.LABEL &&
            pair.bodyA.label === "carwheel1")
        ) {
          player.spaceHasBeenPressed = false;
          player.isOnGround = true;
        }

        if (
          (pair.bodyA.label === Player.LABEL &&
            pair.bodyB.label === "carwheel2") ||
          (pair.bodyB.label === Player.LABEL &&
            pair.bodyA.label === "carwheel2")
        ) {
          player.spaceHasBeenPressed = false;
          player.isOnGround = true;
        }

        if (
          (pair.bodyA.label === Player.LABEL && pair.bodyB.label === "ramp") ||
          (pair.bodyB.label === Player.LABEL && pair.bodyA.label === "ramp")
        ) {
          player.spaceHasBeenPressed = false;
          player.isOnGround = true;
        }

        if (
          (pair.bodyA.label === Player.LABEL && pair.bodyB.label === "ramp2") ||
          (pair.bodyB.label === Player.LABEL && pair.bodyA.label === "ramp2")
        ) {
          player.spaceHasBeenPressed = false;
          player.isOnGround = true;
        }

        if (
          (pair.bodyA.label === Player.LABEL &&
            pair.bodyB.label === "pushblock") ||
          (pair.bodyB.label === Player.LABEL &&
            pair.bodyA.label === "pushblock")
        ) {
          player.spaceHasBeenPressed = false;
          player.isOnGround = true;
        }

        if (
          (pair.bodyA.label === Player.LABEL &&
            pair.bodyB.label === "carconstraintsensor2") ||
          (pair.bodyB.label === Player.LABEL &&
            pair.bodyA.label === "carconstraintsensor2")
        ) {
          player.spaceHasBeenPressed = false;
          player.isOnGround = true;
        }

        if (
          (pair.bodyA.label === Player.LABEL &&
            pair.bodyB.label === "pushblock_starblock") ||
          (pair.bodyB.label === Player.LABEL &&
            pair.bodyA.label === "pushblock_starblock")
        ) {
          player.spaceHasBeenPressed = false;
          player.isOnGround = true;
        }

        if (
          (pair.bodyA.label === Player.LABEL &&
            pair.bodyB.label === "Circle Body") ||
          (pair.bodyB.label === Player.LABEL &&
            pair.bodyA.label === "Circle Body")
        ) {
          player.spaceHasBeenPressed = false;
          player.isOnGround = true;
        }

        if (
          (pair.bodyA.label === Player.LABEL &&
            pair.bodyB.label === "Rectangle Body") ||
          (pair.bodyB.label === Player.LABEL &&
            pair.bodyA.label === "Rectangle Body")
        ) {
          player.spaceHasBeenPressed = false;
          player.isOnGround = true;
        }

        if (
          (pair.bodyA.label === Player.LABEL && pair.bodyB.label) ||
          (pair.bodyB.label === Player.LABEL && pair.bodyA.label)
        ) {
          player.spaceHasBeenPressed = false;
          player.isOnGround = true;
        }
      }
    });

    Matter.Events.on(engine, "collisionEnd", function (event) {
      for (const pair of event.pairs) {
        ifBodiesArePairs(pair.bodyA, pair.bodyB, Player.LABEL, "floor", () => {
          // ...
          player.isOnGround = false;
        });
      }
    });
  }

  /**
   *
   * @param {boolean} bool
   * @returns {Player}
   */
  showBar(bool) {
    if (bool) {
      once(() => {
        if (!this.recordedData.length) {
          let offset = !(frameCount % 30) ? -5 : 5;

          if (this.i <= 1) this.i += 0.5;
          else this.i = 0;

          bar(player, color("white"), offset, this.i);
        } else {
          bar(player, color("white"));
        }
      });
    }

    return this;
  }

  /**
   *
   * @param {boolean} bool
   * @returns {Player}
   */
  showGlitch(bool) {
    push();
    tint(255, 127);
    if (bool) image(gifRewind, 0, 0, width, height);
    pop();
    push();
    tint(255, 235);
    if (bool) image(gifRewindOverlay, 0, 0, width, height);
    pop();
    return this;
  }

  /**
   *
   * @param {boolean} bool
   * @returns {Player}
   */
  showAngle(bool) {
    if (bool) {
      const { position: pos, angle } = this.body;
      once(() => {
        translate(pos.x, pos.y);
        rotate(angle);
        strokeWeight(2);
        stroke("white");
        line(0, 0, this.r, 0);
      });
    }
    return this;
  }

  /**
   *
   * @param {boolean} [bool]
   * @param {number} [velocity]
   */
  setAutoMove(bool = true, velocity = 0.02) {
    if (bool) {
      if (!mouseIsDragged && this.body.velocity.x < 0.02) {
        Matter.Body.setAngularVelocity(player.body, velocity);
      }
    }
    return this;
  }

  resetBooleans() {
    this.isReversing = false;
    this.hasRewindStarted = false;
  }
}

/**
 *
 * @param {Player} player
 */
function autoMove(player) {
  playerVelocityX = player.body.velocity.x;
  if (!playerIsMovingUpward) {
    if (playerVelocityX > 0.02)
      Matter.Body.setAngularVelocity(player.body, 0.02);
  } else {
    if (playerVelocityX > 0.02)
      Matter.Body.setAngularVelocity(player.body, -0.08);
  }
}

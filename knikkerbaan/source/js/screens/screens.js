// @ts-check
"use strict";

// Screens ##########################################################
/**
 * This function accepts an arbitrary number of functions in an array.
 * The argument `screens` contains those functions which in turn contain multiple
 * instances of the level objects that are to be pushed into the array `blocks` and
 * other following structures.
 *
 * @param {(() => void)[]} screens The respective screens that contain
 * all the modifications of the array blocks. Each screen represents the
 * entirety of the level and its level entities e.g. static bodies and moving
 * objects like balls.
 */
function initScreens(screens) {
  // Calling each screen is equal to filing the blocks array with new level objects
  for (let i = 0; i < screens.length; i++) screens[i]();
}

/**
 * `initMouse` creates a new instance of the custom `Mouse` class. The
 * function specifies all the events that the mouse should listen to when
 * interacting with the canvas.
 */
function initMouse() {
  mouse = new Mouse(engine, canvas, {
    stroke: color(random(0, 256), random(0, 256), random(0, 256)),
    strokeWeight: 3,
  });

  mouse.on("startdrag", (/** @type {any} */ _) => {
    mouseIsDragged = true;
  });

  mouse.on("mouseup", (/** @type {any} */ e) => {
    if (!mouseIsDragged) {
      // console.log(e.mouse.position.x, e.mouse.position.y);
    }
    mouseIsDragged = false;
  });
}

// #######################################
/**
 *
 * @param {Colour} blockColor
 */
function invisiblewalls(blockColor) {
  blocks.push(
    new Block(
      world,
      {
        x: 2000,
        y: 150,
        w: 40,
        h: 550,
        color: blockColor,
      },
      { isStatic: true, label: "canontowerwall" }
    )
  );

  blocks.push(
    new Block(
      world,
      {
        x: 3445,
        y: 150,
        w: 40,
        h: 550,
        color: blockColor,
      },
      { isStatic: true, label: "Coldwheelswall" }
    )
  );

  safetyBlock = new Block(
    world,
    {
      x: 8900,
      y: 400,
      w: 40,
      h: 900,
      color: blockColor,
    },
    {
      isStatic: true,
      label: "behindballpitwall",
    }
  );
  blocks.push(safetyBlock);

  rocketdoor = new Block(
    world,
    {
      x: 10050,
      y: 2400,
      w: 40,
      h: 900,
      color: blockColor,
    },
    {
      isStatic: true,
      label: "rocketdoor",
    }
  );
  blocks.push(rocketdoor);
}

// #######################################
function screen01() {
  let sensorColor = color(0, 255, 50, 0);
  let blockColor = color(255, 0, 255, 0);
  constraintColor = color(0, 0, 255, 0);

  invisiblewalls(blockColor);

  cat = Matter.Bodies.rectangle(30, 100, 150, 300, { isStatic: true });
  Matter.Composite.add(world, [cat]);

  blocks.push(
    new Block(
      world,
      {
        x: 100,
        y: 300,
        w: 220,
        h: 100,
        color: blockColor,
      },
      { isStatic: true, label: "spawnpointblock" }
    )
  );

  blocks.push(
    new Block(
      world,
      {
        x: 2750,
        y: 229,
        w: 120,
        h: 40,
        color: blockColor,
      },
      { isStatic: true, label: "safetyblockbaseballglove" }
    )
  );

  cannonElevator = new Block(
    world,
    {
      x: 2095,
      y: windowHeight + 240, //140
      w: 190,
      h: 380,
      image: imgElevator,
    },
    { isStatic: true, label: "elevator" }
  );
  blocks.push(cannonElevator);

  floorBlock = new Block(
    world,
    {
      x: windowWidth / 2,
      y: 700,
      w: windowWidth * 50,
      h: 40,
      color: blockColor,
    },
    { isStatic: true, label: "floor" }
  );
  blocks.push(floorBlock);

  wall = new Block(
    world,
    {
      x: -536,
      y: windowHeight / 2,
      w: 1000,
      h: windowHeight * 2,
      color: blockColor,
    },
    { isStatic: true, label: "wallbehindplayer" }
  );
  blocks.push(wall);

  bed = new PolygonFromSVG(
    world,
    {
      x: 410,
      y: 525,
      w: 685,
      h: 511,
      fromFile: "./public/images/bed.svg",
      color: sensorColor,
    },
    { isStatic: true, angle: 0, label: "bed" }
  );
  blocks.push(bed);

  sensors.push(
    new BlockCore(
      world,
      {
        x: 150,
        y: 150,
        w: 120,
        h: 250,
        color: sensorColor,
      },
      { isStatic: true, isSensor: true, label: "bedsensor" }
    )
  );

  xylophone = new Block(
    world,
    {
      x: 1090,
      y: 650,
      w: 530,
      h: 100,
      color: sensorColor,
    },
    { isStatic: true, angle: 0.07, label: "xylophone" }
  );
  blocks.push(xylophone);

  for (let i = 0; i < 10; i++) {
    sensors.push(
      new BlockCore(
        world,
        {
          x: 885 + i * 48,
          y: 550 + i * 4,
          w: 15,
          h: 40,
          color: sensorColor,
        },
        { isStatic: true, isSensor: true, label: "xylophonesensor" + i }
      )
    );
  }

  sensors.push(
    new BlockCore(
      world,
      {
        x: 1600,
        y: 650,
        w: 80,
        h: 60,
        color: sensorColor,
      },
      { isStatic: true, isSensor: true, label: "canondoorsensor" }
    )
  );

  towerLeft = new Block(
    world,
    {
      x: 2010,
      y: 460,
      w: 80,
      h: 300,
      color: color(255, 255, 255, 0),
    },
    { isStatic: true, labek: "lefttowerwall" }
  );
  blocks.push(towerLeft);

  towerRight = new Block(
    world,
    {
      x: 2160,
      y: 500,
      w: 80,
      h: 380,
      color: color(255, 255, 255, 0),
    },
    { isStatic: true, label: "righttowerwall" }
  );
  blocks.push(towerRight);

  cannon = new Block(
    world,
    {
      x: 2100,
      y: 220,
      w: 220,
      h: 70,
      image: imgCannon,
    },
    { isStatic: true, angle: cannonAngle, isSensor: true, label: "canon" }
  );
  // blocks.push(canon);

  sensors.push(
    new BlockCore(
      world,
      {
        x: 2090,
        y: 590,
        w: 100,
        h: 200,
        color: sensorColor,
      },
      { isStatic: true, isSensor: true, label: "elevatorsensor" }
    )
  );

  cannonDoor = new Block(
    world,
    {
      x: 2005,
      y: 648,
      w: 80,
      h: 107,
      color: color(255, 255, 255, 0),
      image: imgTowerDoor,
    },
    { isStatic: true, label: "canonDoor" }
  );
  blocks.push(cannonDoor);

  blocks.push(
    new PolygonFromSVG(
      world,
      {
        x: 3020,
        y: 410,
        w: 800,
        h: 494,
        fromFile: "./public/images/Hotwheels.svg",
        scale: 0.95,
        color: blockColor,
        image: imgColdWheels,
      },
      { isStatic: true, angle: 0, label: "Hotwheels" }
    )
  );

  blocks.push(
    new PolygonFromSVG(
      world,
      {
        x: 3250,
        y: 440,
        w: 438,
        h: 112,
        fromFile: "./public/images/Hotwheels_mid.svg",
        //scale: 0.95,
        color: blockColor,
      },
      { isStatic: true, angle: 0, label: "Hotwheels-Mid" }
    )
  );

  sensors.push(
    new BlockCore(
      world,
      {
        x: 2760,
        y: 50,
        w: 80,
        h: 494,
        color: sensorColor,
      },
      { isStatic: true, isSensor: true, label: "baseballglovesensor" }
    )
  );

  loopRight = new PolygonFromSVG(
    world,
    {
      x: 4500,
      y: 355,
      w: 494,
      h: 449,
      fromFile: "./public/images/Loop_right.svg",
      scale: 0.95,
      color: blockColor,
    },
    { isStatic: true, angle: 0, label: "loopRight" }
  );

  blocks.push(loopRight);

  loopLeft = new PolygonFromSVG(
    world,
    {
      x: 4250,
      y: 1345,
      w: 494,
      h: 449,
      fromFile: "./public/images/Loop_left.svg",
      scale: 0.95,
      color: blockColor,
    },
    { isStatic: true, angle: 0, label: "loopLeft" }
  );
  blocks.push(loopLeft);

  blocks.push(
    new PolygonFromSVG(
      world,
      {
        x: 3850,
        y: 600,
        w: 438,
        h: 112,
        fromFile: "./public/images/Landing_pad.svg",
        scale: 0.95,
        color: blockColor,
        image: imgLandingPad,
      },
      { isStatic: true, angle: 0, label: "landingPad" }
    )
  );

  sensors.push(
    new BlockCore(
      world,
      {
        x: 3900,
        y: 550,
        w: 80,
        h: 200,
        color: sensorColor,
      },
      { isStatic: true, isSensor: true, label: "speedboostloopingsensor" }
    )
  );

  sensors.push(
    new BlockCore(
      world,
      {
        x: 4360,
        y: 190,
        w: 80,
        h: 100,
        color: sensorColor,
      },
      { isStatic: true, isSensor: true, label: "loopingswitchsensor" }
    )
  );

  blocks.push(
    new PolygonFromSVG(
      world,
      {
        x: 4950,
        y: 577,
        w: 474,
        h: 299,
        fromFile: "./public/images/Jump_pad.svg",
        scale: 0.95,
        color: blockColor,
        image: imgJumpPad,
      },
      { isStatic: true, angle: 0, label: "jumpPad" }
    )
  );

  carBody = new Block(
    world,
    {
      x: 5300,
      y: 620,
      w: 175,
      h: 40,
      color: blockColor,
      // image: imgCarbody,
      collisionFilter: {
        category: Masks.CAR,
        mask: Masks.WORLD,
      },
    },
    {
      isStatic: false,
      angle: 0,
      collisionFilter: {
        category: Masks.CAR,
        mask: Masks.WORLD,
      },
      label: "carbody",
    }
  );
  blocks.push(carBody);

  carWheel1 = new Ball(
    world,
    {
      x: carBody.body.position.x - 135,
      y: carBody.body.position.y,
      r: 40,
      color: blockColor,
      image: imgCarwheel,
    },
    {
      isStatic: false,
      angle: 0,
      friction: 0.8,
      label: "carwheel1",
      collisionFilter: {
        category: Masks.CAR,
        mask: Masks.WORLD,
      },
    }
  );

  carWheel1.constrainTo(carBody, {
    pointA: { x: 0, y: 0 },
    pointB: { x: 0 - 100, y: 10 },
    length: 0,
    stiffness: 1,
    draw: showConstraints,
    color: constraintColor,
    width: 2,
  });

  blocks.push(carWheel1);

  carWheel2 = new Ball(
    world,
    {
      x: carBody.body.position.x + 135,
      y: carBody.body.position.y,
      r: 40,
      color: blockColor,
      image: imgCarwheel,
    },
    {
      isStatic: false,
      angle: 0,
      friction: 0.8,
      label: "carwheel2",
      collisionFilter: {
        category: Masks.CAR,
        mask: Masks.WORLD,
      },
    }
  );

  carWheel2.constrainTo(carBody, {
    pointA: { x: 0, y: 0 },
    pointB: { x: 0 + 100, y: 10 },
    length: 0,
    stiffness: 1,
    draw: showConstraints,
    color: constraintColor,
    width: 2,
  });

  blocks.push(carWheel2);

  baseballGlove = new PolygonFromSVG(
    world,
    {
      x: 2755,
      y: 134,
      w: 174,
      h: 183,
      fromFile: "./public/images/Baseballglove.svg",
      image: imgBaseballGlove,
    },
    {
      isStatic: false,
      angle: 0,
      label: "baseballGlove",
    }
  );
  blocks.push(baseballGlove);

  sensors.push(
    new BlockCore(
      world,
      {
        x: 3350,
        y: 580,
        w: 20,
        h: 120,
        color: sensorColor,
      },
      { isStatic: true, isSensor: true, label: "wheelshotmidspeedboostsensor" }
    )
  );

  sensors.push(
    new BlockCore(
      world,
      {
        x: 4750,
        y: 500,
        w: 20,
        h: 120,
        color: sensorColor,
      },
      { isStatic: true, isSensor: true, label: "jumppadspeedboostsensor" }
    )
  );

  carConstraintSensor = new BlockCore(
    world,
    {
      x: 5300,
      y: 600,
      w: 60,
      h: 120,
      color: sensorColor,
    },
    { isStatic: true, isSensor: true, label: "carconstraintsensor" }
  );
  sensors.push(carConstraintSensor);

  carPushSensor = new BlockCore(
    world,
    {
      x: 5550,
      y: 1600,
      w: 600,
      h: 160,
      color: sensorColor,
    },
    { isStatic: true, isSensor: true, label: "carpushsensor" }
  );
  sensors.push(carPushSensor);

  loopRight2 = new PolygonFromSVG(
    world,
    {
      x: 6800,
      y: 373,
      w: 494,
      h: 449,
      fromFile: "./public/images/Loop_right.svg",
      scale: 1.4,
      color: blockColor,
    },
    { isStatic: true, angle: 0, LABEL: "loopRight2" }
  );
  blocks.push(loopRight2);

  loopLeft2 = new PolygonFromSVG(
    world,
    {
      x: 6400,
      y: 1373,
      w: 494,
      h: 449,
      fromFile: "./public/images/Loop_left.svg",
      scale: 1.4,
      color: blockColor,
    },
    { isStatic: true, angle: 0, label: "loopLeft2" }
  );
  blocks.push(loopLeft2);

  sensors.push(
    new BlockCore(
      world,
      {
        x: 6600,
        y: 130,
        w: 110,
        h: 170,
        color: sensorColor,
      },
      { isStatic: true, isSensor: true, label: "loopingswitchsensor2" }
    )
  );

  blocks.push(
    new Block(
      world,
      {
        x: 7400,
        y: 730,
        w: 400,
        h: 200,
        color: blockColor,
        image: imgRamp,
      },
      { isStatic: true, angle: -0.25, label: "bookramp" }
    )
  );

  blocks.push(
    new Block(
      world,
      {
        x: 7900,
        y: 630,
        w: 10,
        h: 100,
        color: blockColor,
      },
      { isStatic: true, angle: 0, label: "ballpitwallleft" }
    )
  );

  sensors.push(
    new BlockCore(
      world,
      {
        x: 8100,
        y: 630,
        w: 400,
        h: 300,
        color: sensorColor,
      },
      { isStatic: true, isSensor: true, label: "carconstraintsensor2" }
    )
  );

  blocks.push(
    new Block(
      world,
      {
        x: 8300,
        y: 630,
        w: 10,
        h: 100,
        color: blockColor,
      },
      { isStatic: true, angle: 0, label: "ballpitwallright" }
    )
  );

  blocks.push(
    new Block(
      world,
      {
        x: 8700,
        y: 640,
        w: 180,
        h: 100,
        color: blockColor,
        image: imgStepstool,
      },
      { isStatic: true, angle: 0, label: "Body" }
    )
  );

  pushBlock = new Block(
    world,
    {
      x: 9700,
      y: 30,
      w: 100,
      h: 100,
      scale: 0.74,
      color: blockColor,
      image: imgPushbox,
    },
    {
      isStatic: false,
      angle: 0,
      friction: 0.01,
      airfriction: 0.1,
      mass: 1,
      label: "pushblock_starblock",
    }
  );
  blocks.push(pushBlock);

  blocks.push(
    new PolygonFromSVG(
      world,
      {
        x: 9290,
        y: 590,
        w: 180,
        h: 100,
        fromFile: "./public/images/Skateboard.svg",
        color: blockColor,
        image: imgSkateboard,
      },
      { isStatic: true, angle: 0, label: "ramp" }
    )
  );

  rocket = new PolygonFromSVG(
    world,
    {
      x: 10200,
      y: 465,
      w: 295,
      h: 504,
      fromFile: "./public/images/rocket.svg",
      scale: 1,
      color: blockColor,
    },
    { isStatic: true, label: "rocket" }
  );
  blocks.push(rocket);

  sensors.push(
    new BlockCore(
      world,
      {
        x: 10200,
        y: 420,
        w: 150,
        h: 150,
        color: sensorColor,
      },
      { isStatic: true, isSensor: true, label: "rocketlaunchsensor" }
    )
  );

  sensors.push(
    new BlockCore(
      world,
      {
        x: 6500,
        y: 620,
        w: 30,
        h: 150,
        color: sensorColor,
      },
      { isStatic: true, isSensor: true, label: "rampboostsensor" }
    )
  );

  blocks.push(
    new Stack(
      world,
      {
        x: 8050,
        y: 80,
        cols: 8,
        rows: 20,
        colGap: 5,
        rowGap: 5,
        color: color(random(0, 256), random(0, 256), random(0, 256)),
        /**
         *
         * @param {number} bx
         * @param {number} by
         * @returns {Matter.Body}
         */
        create: (bx, by) =>
          Matter.Bodies.circle(bx, by, 10, { restitution: 0.9, mass: 0.1 }),
      },
      {
        isStatic: true,
        collisionFilter: {
          category: Masks.CAR,
        },
        label: "ballpit",
      }
    )
  );

  sensors.push(
    new BlockCore(
      world,
      {
        x: 2475,
        y: 640,
        w: 500,
        h: 100,
        color: sensorColor,
      },
      { isStatic: true, isSensor: true, label: "cannonPit" }
    )
  );

  sensors.push(
    new BlockCore(
      world,
      {
        x: 7000,
        y: 620,
        w: 30,
        h: 150,
        color: sensorColor,
      },
      { isStatic: true, isSensor: true, label: "rampboostsensor2" }
    )
  );

  sensors.push(
    new BlockCore(
      world,
      {
        x: 8800,
        y: 100,
        w: 120,
        h: 2000,
        color: sensorColor,
      },
      {
        isStatic: true,
        isSensor: true,
        label: "safetyblocksensor",
      }
    )
  );

  sensors.push(
    new BlockCore(
      world,
      {
        x: 9925,
        y: 100,
        w: 200,
        h: 2000,
        color: sensorColor,
      },
      {
        isStatic: true,
        isSensor: true,
        label: "pushblocksensor",
      }
    )
  );

  sensors.push(
    new Block(
      world,
      {
        x: 3150,
        y: 200,
        w: 40,
        h: 400,
        color: sensorColor,
      },
      {
        isStatic: true,
        isSensor: true,
        label: "baseballglovedactivate",
      }
    )
  );
}

function screenEvents() {
  // check if Wollknäuel collided with sensors[0]
  Matter.Events.on(engine, "collisionStart", (event) => {
    let pairs = event.pairs;

    for (const pair of pairs) {
      // sensors[1].body.label: xylophonesensor0
      ifBodiesArePairs(
        pair.bodyA,
        pair.bodyB,
        Player.LABEL,
        sensors[1].body.label,
        () => {
          //console.log(`Collided with sensor 1: ${sensors[1].body.label}`);

          soundXylophoneA1.play();
          Body.setVelocity(player.body, { x: 0.5, y: 4 });
        }
      );

      // sensors[2].body.label: xylophonesensor1
      ifBodiesArePairs(
        pair.bodyA,
        pair.bodyB,
        Player.LABEL,
        sensors[2].body.label,
        () => {
          //console.log(`Collided with sensor 2: ${sensors[2].body.label}`);

          soundXylophoneB1.play();
          Body.setVelocity(player.body, { x: 0.5, y: 4 });
        }
      );

      // sensors[3].body.label: xylophonesensor2
      ifBodiesArePairs(
        pair.bodyA,
        pair.bodyB,
        Player.LABEL,
        sensors[3].body.label,
        () => {
          //console.log(`Collided with sensor 3: ${sensors[3].body.label}`);

          soundXylophoneC1.play();
          Body.setVelocity(player.body, { x: 0.5, y: 4 });
        }
      );

      // sensors[4].body.label: xylophonesensor3
      ifBodiesArePairs(
        pair.bodyA,
        pair.bodyB,
        Player.LABEL,
        sensors[4].body.label,
        () => {
          //console.log(`Collided with sensor 4: ${sensors[4].body.label}`);

          soundXylophoneD1.play();
          Body.setVelocity(player.body, { x: 0.5, y: 4 });
        }
      );

      // sensors[5].body.label: xylophonesensor4
      ifBodiesArePairs(
        pair.bodyA,
        pair.bodyB,
        Player.LABEL,
        sensors[5].body.label,
        () => {
          //console.log(`Collided with sensor 5: ${sensors[5].body.label}`);

          soundXylophoneE1.play();
          Body.setVelocity(player.body, { x: 0.5, y: 4 });
        }
      );

      // sensors[6].body.label: xylophonesensor5
      ifBodiesArePairs(
        pair.bodyA,
        pair.bodyB,
        Player.LABEL,
        sensors[6].body.label,
        () => {
          //console.log(`Collided with sensor 6: ${sensors[6].body.label}`);

          soundXylophoneF1.play();
          Body.setVelocity(player.body, { x: 0.5, y: 4 });
        }
      );

      // sensors[7].body.label: xylophonesensor6
      ifBodiesArePairs(
        pair.bodyA,
        pair.bodyB,
        Player.LABEL,
        sensors[7].body.label,
        () => {
          //console.log(`Collided with sensor 7: ${sensors[7].body.label}`);

          soundXylophoneG1.play();
          Body.setVelocity(player.body, { x: 0.5, y: 4 });
        }
      );

      // sensors[8].body.label: xylophonesensor7
      ifBodiesArePairs(
        pair.bodyA,
        pair.bodyB,
        Player.LABEL,
        sensors[8].body.label,
        () => {
          //console.log(`Collided with sensor 8: ${sensors[8].body.label}`);

          soundXylophoneA2.play();
          Body.setVelocity(player.body, { x: 0.5, y: 4 });
        }
      );

      // sensors[9].body.label: xylophonesensor8
      ifBodiesArePairs(
        pair.bodyA,
        pair.bodyB,
        Player.LABEL,
        sensors[9].body.label,
        () => {
          //console.log(`Collided with sensor 9: ${sensors[9].body.label}`);

          soundXylophoneB2.play();
          Body.setVelocity(player.body, { x: 0.5, y: 4 });
        }
      );

      // sensors[10].body.label: xylophonesensor9
      ifBodiesArePairs(
        pair.bodyA,
        pair.bodyB,
        Player.LABEL,
        sensors[10].body.label,
        () => {
          //console.log(`Collided with sensor 10: ${sensors[10].body.label}`);

          soundXylophoneC2.play();
          Body.setVelocity(player.body, { x: 0.5, y: 4 });
        }
      );

      // sensors[11].body.label: canondoorsensor
      ifBodiesArePairs(
        pair.bodyA,
        pair.bodyB,
        Player.LABEL,
        sensors[11].body.label,
        () => {
          //console.log(`Collided with sensor 11: ${sensors[11].body.label}`);

          soundButton.play();
          cannonDoorIsOpen = !cannonDoorIsOpen;
        }
      );

      // sensors[12].body.label: elevatorsensor
      ifBodiesArePairs(
        pair.bodyA,
        pair.bodyB,
        Player.LABEL,
        sensors[12].body.label,
        () => {
          //console.log(`Collided with sensor 12: ${sensors[12].body.label}`);

          cannonElevatorIsMoving = true;
          cannonCanRotate = true;
          setTimeout(function () {
            cannonDoorIsOpen = false;
            soundElevator.play();
          }, 1200);

          player.onSpacePress = MarbleRun.mapSpacePressTo(SpaceMapping.EMPTY);
          player.onSpaceHold = MarbleRun.mapSpaceHoldTo(SpaceMapping.EMPTY);

          //console.log(player.onSpacePress);
          //console.log(player.onSpaceHold);
        }
      );

      // sensors[13].body.label: baseballglovesensor
      ifBodiesArePairs(
        pair.bodyA,
        pair.bodyB,
        Player.LABEL,
        sensors[13].body.label,
        () => {
          //console.log(`Collided with sensor 13: ${sensors[13].body.label}`);

          resetCannon();
          soundBaseballglove.play();

          player.onSpacePress = MarbleRun.mapSpacePressTo(
            SpaceMapping.SINGLE_JUMP
          );
          player.onSpaceHold = MarbleRun.mapSpaceHoldTo(
            SpaceMapping.PLAYER_REWIND
          );

          //console.log(player.onSpacePress);
          //console.log(player.onSpaceHold);
        }
      );

      // sensors[14].body.label: speedboostloopingsensor
      ifBodiesArePairs(
        pair.bodyA,
        pair.bodyB,
        Player.LABEL,
        sensors[14].body.label,
        () => {
          //console.log(`Collided with sensor 14: ${sensors[14].body.label}`);

          soundAcceleration.play();
          Body.setVelocity(player.body, { x: 28, y: 0 });
        }
      );

      // sensors[15].body.label: loopingswitchsensor
      ifBodiesArePairs(
        pair.bodyA,
        pair.bodyB,
        Player.LABEL,
        sensors[15].body.label,
        () => {
          //console.log(`Collided with sensor 15: ${sensors[15].body.label}`);

          if (loopLeft.body.position.y >= 1080) {
            Body.setPosition(loopLeft.body, {
              x: loopLeft.body.position.x,
              y: 348,
            });
            Body.setPosition(loopRight.body, {
              x: loopRight.body.position.x,
              y: 1348,
            });
          } else {
            Body.setPosition(loopLeft.body, {
              x: loopLeft.body.position.x,
              y: 1348,
            });
            Body.setPosition(loopRight.body, {
              x: loopRight.body.position.x,
              y: 348,
            });
          }
        }
      );

      // sensors[16].body.label: wheelshotmidspeedboostsensor
      ifBodiesArePairs(
        pair.bodyA,
        pair.bodyB,
        Player.LABEL,
        sensors[16].body.label,
        () => {
          //console.log(`Collided with sensor 16: ${sensors[16].body.label}`);

          soundAcceleration.play();
          Body.setVelocity(player.body, { x: 10, y: 0 });
        }
      );

      // sensors[17].body.label: jumppadspeedboostsensor
      ifBodiesArePairs(
        pair.bodyA,
        pair.bodyB,
        Player.LABEL,
        sensors[17].body.label,
        () => {
          //console.log(`Collided with sensor 17: ${sensors[17].body.label}`);

          soundAcceleration.play();
          Body.setVelocity(player.body, { x: 25, y: 0 });
        }
      );

      // sensors[18].body.label: carconstraintsensor
      ifBodiesArePairs(
        pair.bodyA,
        pair.bodyB,
        Player.LABEL,
        sensors[18].body.label,
        () => {
          //console.log(`Collided with sensor 18: ${sensors[18].body.label}`);

          // Car Rewind ##################################################################
          Matter.Body.setStatic(carBody.body, true);
          carHasBeenReleased = false;
          player.isRecording = false;
          carBodyPositionOriginal = { ...carBody.body.position };
          //console.log(carBodyPositionOriginal);
          // Car Rewind (End) ##################################################################

          // player.onSpacePress = MarbleRun.mapSpacePressTo(SpaceMapping.EMPTY);
          player.onSpaceHold = MarbleRun.mapSpaceHoldTo(
            SpaceMapping.CAR_REWIND
          );

          player.constrainTo(carBody, {
            pointA: { x: 0, y: 0 },
            pointB: { x: -10, y: -50 },
            length: 0,
            stiffness: 1,
            draw: showConstraints,
            color: constraintColor,
            width: 2,
          });
          playerPositionOriginal = { ...player.body.position };
          //console.log(playerPositionOriginal);

          Body.setPosition(carConstraintSensor.body, {
            x: carConstraintSensor.body.position.x,
            y: 1600,
          });
          soundAcceleration.play();
          Body.setVelocity(carBody.body, { x: 20, y: 0 });
        }
      );

      // sensors[19].body.label: loopingswitchsensor2
      ifBodiesArePairs(
        pair.bodyA,
        pair.bodyB,
        Player.LABEL,
        sensors[19].body.label,
        () => {
          //console.log(`Collided with sensor 19: ${sensors[19].body.label}`);
        }
      );

      // sensors[20].body.label: loopingswitchsensor2
      ifBodiesArePairs(
        pair.bodyA,
        pair.bodyB,
        Player.LABEL,
        sensors[20].body.label,
        () => {
          //console.log(`Collided with sensor 20: ${sensors[20].body.label}`);

          if (loopLeft2.body.position.y >= 1080) {
            Body.setPosition(loopLeft2.body, {
              x: loopLeft2.body.position.x,
              y: 373,
            });
            Body.setPosition(loopRight2.body, {
              x: loopRight2.body.position.x,
              y: 1373,
            });
          } else {
            Body.setPosition(loopLeft2.body, {
              x: loopLeft2.body.position.x,
              y: 1373,
            });
            Body.setPosition(loopRight2.body, {
              x: loopRight2.body.position.x,
              y: 373,
            });
          }
        }
      );

      // sensors[21].body.label: carconstraintsensor2
      ifBodiesArePairs(
        pair.bodyA,
        pair.bodyB,
        Player.LABEL,
        sensors[21].body.label,
        () => {
          //console.log(`Collided with sensor 21: ${sensors[21].body.label}`);
          playerHasMadeTheLooping = true;

          player.constraints.forEach((constraint) => {
            Matter.World.remove(world, constraint);
          });
          soundKapow.play();

          // ...
          if (!playerIsInSlowMotion && carHasBeenReleased)
            playerIsInSlowMotion = true;

          Body.setVelocity(carBody.body, { x: 20, y: 0 });

          player.recordedData = [];

          if (playerHasMadeTheLooping) {
            player.onSpacePress = MarbleRun.mapSpacePressTo(
              SpaceMapping.SINGLE_JUMP
            );
            player.onSpaceHold = MarbleRun.mapSpaceHoldTo(
              SpaceMapping.PLAYER_REWIND
            );
          }
        }
      );
      ifBodiesArePairs(
        pair.bodyA,
        pair.bodyB,
        carBody.body.label,
        sensors[21].body.label,
        () => {
          //console.log("Hell yeah");
          if (playerCurrentMapping.press !== SpaceMapping.SINGLE_JUMP) {
            player.onSpacePress = MarbleRun.mapSpacePressTo(
              SpaceMapping.SINGLE_JUMP
            );
          }
        }
      );

      // sensors[22].body.label: rocketlaunchsensor
      ifBodiesArePairs(
        pair.bodyA,
        pair.bodyB,
        Player.LABEL,
        sensors[22].body.label,
        () => {
          //console.log(`Collided with sensor 22: ${sensors[22].body.label}`);

          player.recordedData = [];
          Body.setPosition(rocketdoor.body, {
            x: rocketdoor.body.position.x,
            y: 400,
          });
          rocketflying = true;
          soundRocket.play();
          //console.log("The End");
        }
      );

      // sensors[23].body.label: rampboostsensor
      ifBodiesArePairs(
        pair.bodyA,
        pair.bodyB,
        Player.LABEL,
        sensors[23].body.label,
        () => {
          //console.log(`Collided with sensor 23: ${sensors[23].body.label}`);

          soundAcceleration.play();

          player.recordedData = [];
          Body.setVelocity(carBody.body, { x: 90, y: 0 });

          playerIsMovingUpward = false;
        }
      );

      // TODO: Diese Stelle sorgt für einen Bug beim Jumpen des Players. Es löst einen "Flappy-Bird-Jump" aus (2/2)
      // if (
      //   pair.bodyA.label === Player.LABEL &&
      //   pair.bodyB === sensors[24].body
      // ) {
      //   //console.log("Collided with sensor 24");
      //   Body.setPosition(carpushsensor.body, {
      //     x: carpushsensor.body.position.x,
      //     y: 600,
      //   });
      //   playerpositioncar = [];
      //   windingup = false;
      // }

      // sensors[24].body.label: cannonPit
      ifBodiesArePairs(
        pair.bodyA,
        pair.bodyB,
        Player.LABEL,
        sensors[24].body.label,
        () => {
          //console.log(`Collided with sensor 24: ${sensors[24].body.label}`);

          if (!cannonHasBeenLoaded && !cannonHasBeenFired) {
            setTimeout(() => {
              cannonHasBeenLoaded = false;
            }, 1000);
          } else {
            // Due to drawCanvas, the player will be reset to the static destination
            cannonHasBeenLoaded = false;
            if (cannonHasBeenFired) cannonHasBeenFired = false;
          }
        }
      );

      // sensors[25].body.label: rampboostsensor2
      ifBodiesArePairs(
        pair.bodyA,
        pair.bodyB,
        Player.LABEL,
        sensors[25].body.label,
        () => {
          //console.log(`Collided with sensor 25: ${sensors[25].body.label}`);

          // for resetting player rewind after crossing ########################################
          player.recordedData = [];

          soundAcceleration.play();
          Body.setVelocity(carBody.body, { x: 40, y: 0 });

          playerIsMovingUpward = false;
        }
      );

      // sensors[26].body.label: safetyblocksensor
      ifBodiesArePairs(
        pair.bodyA,
        pair.bodyB,
        Player.LABEL,
        sensors[26].body.label,
        () => {
          //console.log(`Collided with sensor 26: ${sensors[26].body.label}`);

          Body.setPosition(safetyBlock.body, {
            x: safetyBlock.body.position.x,
            y: 4600,
          });
        }
      );

      // sensors[27].body.label: pushblocksensor
      ifBodiesArePairs(
        pair.bodyA,
        pair.bodyB,
        Player.LABEL,
        sensors[27].body.label,
        () => {
          //console.log(`Collided with sensor 27: ${sensors[27].body.label}`);

          if (
            pushBlock.body.position.x >= 9940 &&
            pushBlock.body.position.y >= 540
          ) {
            Body.setStatic(pushBlock.body, true);
          }
        }
      );

      if (
        pair.bodyA.label === Player.LABEL &&
        pair.bodyB === sensors[28].body
      ) {
        //console.log("Collided with sensor 28");
        baseballGlove.body.collisionFilter = {
          group: -1,
          category: 2,
          mask: 0,
        };
      }

      // AutoMove ###################################
      // blocks[9].body.label: "Hotwheels"
      ifBodiesArePairs(
        pair.bodyA,
        pair.bodyB,
        Player.LABEL,
        "Hotwheels",
        () => {
          //console.log(`Collided with block 9: ${blocks[9].body.label}`);

          playerIsMovingUpward = false;
        }
      );

      // blocks[10].body.label: "Hotwheels-Mid"
      ifBodiesArePairs(
        pair.bodyA,
        pair.bodyB,
        Player.LABEL,
        "Hotwheels-Mid",
        () => {
          //console.log(`Collided with block 10: ${blocks[10].body.label}`);

          playerIsMovingUpward = true;
        }
      );
    }
  });
}

function spacePressed() {
  if (keyIsDown(Keys.SPACE)) {
    player.timer.run();

    if (player.timer.progress > Player.THRESHOLD_TIMER_PERCENT) {
      if (!player.hasRewindStarted) {
        player.recordedDataLength = player.recordedData.length;
        player.hasRewindStarted = true;
      }

      if (marbleRun.hasBeenStarted) {
        player.onSpaceHold();

        if (playerCurrentMapping.hold === SpaceMapping.PLAYER_REWIND) {
          player
            .showGlitch(!!player.recordedData.length)
            .showBar(player.isReversing);
        } else if (playerCurrentMapping.hold === SpaceMapping.CAR_REWIND) {
          // ...
          carProgressValue = showProgress();
        }
      }

      if (!player.isReversing && marbleRun.hasBeenStarted) {
        player.isReversing = true;
        soundRewind.play();
      }
    }
  }
}

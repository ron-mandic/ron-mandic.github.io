// @ts-check
"use strict";

// Initializations ##########################################################
function init() {
  initCanvas();
  // initMouse();
  initPlayer();
}

/**
 * `initCanvas` is responsible for initializing the entire project including both
 * the canvas itself and additional properties relevant to p5 and matter.js.
 */
function initCanvas() {
  canvas = createCanvas(Canvas.WIDTH, Canvas.HEIGHT);
  canvas.parent("canvas");

  colorMode(RGB);
  rectMode(CENTER);
  ellipseMode(CENTER);
  angleMode(RADIANS);
  textAlign(LEFT, CENTER);

  engine = Engine.create();
  world = engine.world;

  runner = Runner.create();
  Runner.run(runner, engine);
}

// Player ##########################################################
/**
 * `initPlayer` creates a unique instance of the class `Ball` and stores
 * it in the `player` variable. It is going to be accessible to the world scope
 * as specified in the class definition of `Ball`.
 */
function initPlayer() {
  const wrap = {
    min: { x: 0, y: 0 },
    max: { x: width, y: height },
  };

  player = new Player(
    world,
    {
      x: 135,
      y: 135,
      r: 30,
      color: "red",
      image: imgPlayer,
      scale: 0.4,
    },
    {
      label: "Wollknäuel",
      isStatic: false,
      density: 0.001,
      restitution: 0.9,
      friction: 0.01,
      frictionAir: 0.009,
      angle: 0,
      // plugin: { wrap: wrap },
    }
  );
}

function getCanvasContent() {
  // Function will consume lots of memory
  // Only call for flex.

  let c = document.getElementById("defaultCanvas0");
  let ctx = c.getContext("2d");

  if (count > 5) {
    canvascontent = ctx.getImageData(
      width / 2 + 200,
      height / 2 + 400,
      width / 2 - 200,
      height / 2
    );

    canvascontent = canvascontent.data;

    const canvasfilter = [];
    for (let i = 0; i < canvascontent.length; i += CANVAS_DATA_CHUNK_SIZE) {
      const chunk = canvascontent.slice(i, i + CANVAS_DATA_CHUNK_SIZE);
      canvasfilter.push(chunk);
    }
    canvascontent = canvasfilter;

    canvascontent.forEach((element) => {
      avgr += element[0];
      avgg += element[1];
      avgb += element[2];
      avga += element[3];
    });

    avgr = avgr / canvascontent.length;
    avgg = avgg / canvascontent.length;
    avgb = avgb / canvascontent.length;
    avga = avga / canvascontent.length;

    document.body.style.backgroundColor = `rgba(${avgr},${avgg},${avgb},${avga})`;

    canvascontent = [];

    count = 0;
  }
  count++;
}

function loadAssets() {
  //Only for loading assets, no adding empty lines or comments
  // @ts-ignore
  assetCalc = -new Error().lineNumber;

  let playerImageSrc = "./public/images/Wollball.png";
  imgPlayer = loadImage(playerImageSrc);
  //loadingMessage(playerImageSrc);

  let gifelgato_Src = "./public/images/el_gato.gif";
  gifElGato = loadImage(gifelgato_Src);
  //loadingMessage(gifelgato_Src);

  let soundCat_Src = "./public/audio/cat_sound.wav";
  soundCat = loadSound(soundCat_Src);
  //loadingMessage(soundCat_Src);

  let soundXylophoneA1_Src = "./public/audio/instruments/A1.mp3";
  soundXylophoneA1 = loadSound(soundXylophoneA1_Src);
  //loadingMessage(soundXylophoneA1_Src);

  let soundXylophoneB1_Src = "./public/audio/instruments/B1.mp3";
  soundXylophoneB1 = loadSound(soundXylophoneB1_Src);
  //loadingMessage(soundXylophoneB1_Src);

  let soundXylophoneC1_Src = "./public/audio/instruments/C1.mp3";
  soundXylophoneC1 = loadSound(soundXylophoneC1_Src);
  //loadingMessage(soundXylophoneC1_Src);

  let soundXylophoneD1_Src = "./public/audio/instruments/D1.mp3";
  soundXylophoneD1 = loadSound(soundXylophoneD1_Src);
  //loadingMessage(soundXylophoneD1_Src);

  let soundXylophoneE1_Src = "./public/audio/instruments/E1.mp3";
  soundXylophoneE1 = loadSound(soundXylophoneE1_Src);
  //loadingMessage(soundXylophoneE1_Src);

  let soundXylophoneF1_Src = "./public/audio/instruments/F1.mp3";
  soundXylophoneF1 = loadSound(soundXylophoneF1_Src);
  //loadingMessage(soundXylophoneF1_Src);

  let soundXylophoneG1_Src = "./public/audio/instruments/G1.mp3";
  soundXylophoneG1 = loadSound(soundXylophoneG1_Src);
  //loadingMessage(soundXylophoneG1_Src);

  let soundXylophoneA2_Src = "./public/audio/instruments/A2.mp3";
  soundXylophoneA2 = loadSound(soundXylophoneA2_Src);
  //loadingMessage(soundXylophoneA2_Src);

  let soundXylophoneB2_Src = "./public/audio/instruments/B2.mp3";
  soundXylophoneB2 = loadSound(soundXylophoneB2_Src);
  //loadingMessage(soundXylophoneB2_Src);

  let soundXylophoneC2_Src = "./public/audio/instruments/C2.mp3";
  soundXylophoneC2 = loadSound(soundXylophoneC2_Src);
  //loadingMessage(soundXylophoneC2_Src);

  let imgRoom_Src = "./public/images/wallpaper.png";
  imgRoom = loadImage(imgRoom_Src);
  //loadingMessage(imgRoom_Src);

  let imgBed_Src = "./public/images/bed.png";
  imgBed = loadImage(imgBed_Src);
  //loadingMessage(imgBed_Src);

  let imgXylophone_Src = "./public/images/xylophone.png";
  imgXylophone = loadImage(imgXylophone_Src);
  //loadingMessage(imgXylophone_Src);

  let imgTowerDoor_Src = "./public/images/tower_door.png";
  imgTowerDoor = loadImage(imgTowerDoor_Src);
  //loadingMessage(imgTowerDoor_Src);

  let imgTowerFg_Src = "./public/images/tower_fg.png";
  imgTowerFg = loadImage(imgTowerFg_Src);
  //loadingMessage(imgTowerFg_Src);

  let imgTowerBg_Src = "./public/images/tower_bg.png";
  imgTowerBg = loadImage(imgTowerBg_Src);
  //loadingMessage(imgTowerBg_Src);

  let imgButtonPressed_Src = "./public/images/button_pressed.png";
  imgButtonPressed = loadImage(imgButtonPressed_Src);
  //loadingMessage(imgButtonPressed_Src);

  let imgButtonReleased_Src = "./public/images/button_unpressed.png";
  imgButtonReleased = loadImage(imgButtonReleased_Src);
  //loadingMessage(imgButtonReleased_Src);

  let imgCannonBase_Src = "./public/images/cannon_base.png";
  imgCannonBase = loadImage(imgCannonBase_Src);
  //loadingMessage(imgCannonBase_Src);

  let imgCannon_Src = "./public/images/cannon.png";
  imgCannon = loadImage(imgCannon_Src);
  //loadingMessage(imgCannon_Src);

  let imgBaseballGlove_Src = "./public/images/baseballglove.png";
  imgBaseballGlove = loadImage(imgBaseballGlove_Src);
  //loadingMessage(imgBaseballGlove_Src);

  let gifRewind_Src = "./public/images/rewind-min.gif";
  gifRewind = loadImage(gifRewind_Src);
  //loadingMessage(gifRewind_Src);

  let soundRewind_Src = "./public/audio/rewind.wav";
  soundRewind = loadSound(soundRewind_Src);
  //loadingMessage(soundRewind_Src);

  let imgElevator_Src = "./public/images/elevator.png";
  imgElevator = loadImage(imgElevator_Src);
  //loadingMessage(imgElevator_Src);

  let imgRocket_Src = "./public/images/rocket.png";
  imgRocket = loadImage(imgRocket_Src);
  //loadingMessage(imgRocket_Src);

  let soundButton_Src = "./public/audio/buttonactivate.wav";
  soundButton = loadSound(soundButton_Src);
  //loadingMessage(soundButton_Src);

  let soundElevator_Src = "./public/audio/elevatorsound.wav";
  soundElevator = loadSound(soundElevator_Src);
  //loadingMessage(soundElevator_Src);

  let soundBaseballglove_Src = "./public/audio/baseballglove.wav";
  soundBaseballglove = loadSound(soundBaseballglove_Src);
  //loadingMessage(soundBaseballglove_Src);

  let soundWoolball_Src = "./public/audio/woolball.wav";
  soundWoolball = loadSound(soundWoolball_Src);
  //loadingMessage(soundWoolball_Src);

  let soundCanonshoot_Src = "./public/audio/canonshoot.wav";
  soundCanonshoot = loadSound(soundCanonshoot_Src);
  //loadingMessage(soundCanonshoot_Src);

  let soundKapow_Src = "./public/audio/kapow.wav";
  soundKapow = loadSound(soundKapow_Src);
  //loadingMessage(soundKapow_Src);

  let soundAcceleration_Src = "./public/audio/acceleration.wav";
  soundAcceleration = loadSound(soundAcceleration_Src);
  //loadingMessage(soundAcceleration_Src);

  let soundRocket_Src = "./public/audio/rocket.wav";
  soundRocket = loadSound(soundRocket_Src);
  //loadingMessage(soundRocket_Src);

  let imgPushbox_src = "./public/images/pushablebox.png";
  imgPushbox = loadImage(imgPushbox_src);
  //loadingMessage(imgPushbox_src);

  let imgBallpitBg_src = "./public/images/ballpit_bg.png";
  imgBallPitBg = loadImage(imgBallpitBg_src);
  //loadingMessage(imgBallpitBg_src);

  let imgBallpitFg_src = "./public/images/ballpit_fg.png";
  imgBallPitFg = loadImage(imgBallpitFg_src);
  //loadingMessage(imgBallpitFg_src);

  let gifRewindOverlay_src = "./public/images/rewind_overlay.gif";
  gifRewindOverlay = loadImage(gifRewindOverlay_src);
  //loadingMessage(gifRewindOverlay_src);

  let imgcoldWheels_src = "./public/images/coldwheels.png";
  imgColdWheels = loadImage(imgcoldWheels_src);
  //loadingMessage(imgcoldWheels_src);

  let imgCannonActivated_src = "./public/images/cannon_activated.png";
  imgCannonActivated = loadImage(imgCannonActivated_src);
  //loadingMessage(imgCannonActivated_src);

  let imgLandingPad_src = "./public/images/landingpad.png";
  imgLandingPad = loadImage(imgLandingPad_src);
  //loadingMessage(imgLandingPad_src);

  let imgJumpPad_src = "./public/images/jumppad.png";
  imgJumpPad = loadImage(imgJumpPad_src);
  //loadingMessage(imgJumpPad_src);

  let soundSoundtrack_src = "./public/audio/soundtrack.wav";
  soundSoundtrack = loadSound(soundSoundtrack_src);
  //loadingMessage(soundSoundtrack_src);

  let imgFgBoxStar_src = "./public/images/fg_boxstar.png";
  imgFgBoxStar = loadImage(imgFgBoxStar_src);
  //loadingMessage(imgFgBoxStar_src);

  let imgFgBoxHeart_src = "./public/images/fg_boxheart.png";
  imgFgBoxHeart = loadImage(imgFgBoxHeart_src);
  //loadingMessage(imgFgBoxHeart_src);

  let imgCarwheel_src = "./public/images/carwheel.png";
  imgCarwheel = loadImage(imgCarwheel_src);
  //loadingMessage(imgCarwheel_src);

  let imgCarbody_src = "./public/images/carbody.png";
  imgCarbody = loadImage(imgCarbody_src);
  //loadingMessage(imgCarbody_src);

  let imgFgCarbody_src = "./public/images/fg_carbody.png";
  imgFgCarbody = loadImage(imgFgCarbody_src);
  //loadingMessage(imgFgCarbody_src);

  let imgRamp_src = "./public/images/ramp.png";
  imgRamp = loadImage(imgRamp_src);
  //loadingMessage(imgRamp_src);

  let imgLoop1_src = "./public/images/loop1.png";
  imgLoop1 = loadImage(imgLoop1_src);
  //loadingMessage(imgLoop1_src);

  let imgLoop2_src = "./public/images/loop2.png";
  imgLoop2 = loadImage(imgLoop2_src);
  //loadingMessage(imgLoop2_src);

  let imgFgBaseball_src = "./public/images/fg_baseball.png";
  imgFgBaseball = loadImage(imgFgBaseball_src);
  //loadingMessage(imgFgBaseball_src);

  let imgStepstool_src = "./public/images/stepstool.png";
  imgStepstool = loadImage(imgStepstool_src);
  //loadingMessage(imgStepstool_src);

  let imgFgBaseballbat_src = "./public/images/fg_baseballbat.png";
  imgFgBaseballbat = loadImage(imgFgBaseballbat_src);
  //loadingMessage(imgFgBaseballbat_src);

  let imgFgSucculente_src = "./public/images/fg_succulente.png";
  imgFgSucculente = loadImage(imgFgSucculente_src);
  //loadingMessage(imgFgSucculente_src);

  let imgColdWheelsFast_src = "./public/images/coldwheelsfast.png";
  imgColdWheelsFast = loadImage(imgColdWheelsFast_src);
  //loadingMessage(imgColdWheelsFast_src);

  let imgWall_src = "./public/images/wall.png";
  imgWall = loadImage(imgWall_src);
  //loadingMessage(imgWall_src);

  let imgFloor_src = "./public/images/floor.png";
  imgFloor = loadImage(imgFloor_src);
  //loadingMessage(imgFloor_src);

  let imgSkateboard_src = "./public/images/Skateboard.png";
  imgSkateboard = loadImage(imgSkateboard_src);
  //loadingMessage(imgSkateboard_src);

  let imgFgStepstool_src = "./public/images/fg_stepstool.png";
  imgFgStepstool = loadImage(imgFgStepstool_src);
  //loadingMessage(imgFgStepstool_src);

  let imgRocketActivated_src = "./public/images/RocketActivated.png";
  imgRocketActivated = loadImage(imgRocketActivated_src);
  //loadingMessage(imgRocketActivated_src);

  let gifEndScene_src = "./public/images/EndScene.gif";
  gifEndScene = loadImage(gifEndScene_src);
  //loadingMessage(gifEndScene_src);

  let imgPosterDraw_src = "./public/images/posterdraw.png";
  imgPosterDraw = loadImage(imgPosterDraw_src);
  //loadingMessage(imgPosterDraw_src);

  let imgPosterAbc_src = "./public/images/posterabc.png";
  imgPosterAbc = loadImage(imgPosterAbc_src);
  //loadingMessage(imgPosterAbc_src);

  let gifCatLoading_src = "./public/images/catload.gif";
  gifCatLoading = loadImage(gifCatLoading_src);
  //loadingMessage(gifCatLoading_src);

  assetCalc += new Error().lineNumber;
  assetTotal = (assetCalc - 2) / 4;
  /* console.log(
    `%c\n-------------------------\nTotal assets loaded: ${assetTotal}`,
    "color: #7289DA; font-weight: bold;"
  ); */
}

function drawCanvas() {
  cam.swivelBehind(() => player.body.position.x <= CANVAS_BREAKPOINT);

  drawLevel();
}

function adjustCar() {
  push();
  imageMode(CENTER);
  translate(carBody.body.position.x, carBody.body.position.y);
  rotate(carBody.body.angle);
  image(imgFgCarbody, 0, -20, 357, 111);
  pop();
}

function drawLevel() {
  sensors.forEach((sensor) => sensor.draw());
  for (let i = -1; i <= 15; i++) {
    image(imgFloor, i * 2560, 675, 2560, 50);
  }
  image(imgTowerBg, 1950, 285, 289, 428);
  image(imgBallPitBg, 7893, 575, 415, 127);
  image(imgBed, -25, 220, 747, 474);

  blocks.forEach((block) => block.draw());

  if (rocketflying) {
    if (rocket.body.position.y >= -1000) {
      Body.setPosition(rocket.body, {
        x: rocket.body.position.x,
        y: rocket.body.position.y - 4,
      });
      rocketoffset = rocket.body.position.y - 300;
    } else {
      gameended = true;
      rocketflying = false;
    }
  }

  image(imgWall, -1180, 0, 1165, 720);

  image(gifElGato, -55, 30, 470, 264);
  push();
  rotate(0.01);
  image(imgXylophone, 810, 540, 550, 151);
  pop();

  rotateCannon();
  loadCannon();
  setCannonButton();

  autoMove(player);

  player.draw();
  cannon.draw();

  adjustCar();

  image(imgTowerFg, 1950, 285, 289, 428);
  image(imgCannonBase, 2020, 215, 128, 106);

  push();
  translate(3270, 555);
  rotate(-0.26);
  image(imgColdWheelsFast, 0, 0, 132, 85);
  pop();

  push();
  translate(3840, 490);
  rotate(0.1);
  image(imgColdWheelsFast, 0, 0, 132, 85);
  pop();

  image(imgColdWheelsFast, 4700, 500, 132, 85);

  image(imgLoop1, 4035, 60, 656, 655);
  image(imgLoop2, 6100, -40, 980, 950);
  image(imgBallPitFg, 7893, 588, 415, 114);
  image(imgRocket, 10030, rocketoffset, 339, 531);

  once(() => {
    // TODO: Hier kommen die Images rein, die im Vordergrund für den Parallax genutzt werden
    translate(cam.shiftX * 0.5, 0);
    image(imgFgBoxStar, 280, 520, 234, 235);
    image(imgFgBoxHeart, 150, 600, 194, 195);
    image(imgFgSucculente, 1300, 360, 360, 396);
    image(imgFgBaseballbat, 3200, 640, 827, 130);
    image(imgFgBaseball, 4400, 575, 174, 170);
    image(imgFgStepstool, 8200, 540, 435, 236);
    image(imgFgBoxStar, 10000, 570, 208, 210);
    image(imgFgSucculente, 10200, 380, 360, 396);
    image(imgFgBaseballbat, 13000, 640, 827, 130);
    image(imgFgBaseball, 14000, 575, 174, 170);
  });

  if (gameended) {
    image(gifEndScene, 9780, 0, 1320, 720);
    setTimeout(() => {
      image(gifCatLoading, 9780, 0, 1320, 720);
    }, 1000);
  }

  // mouse.draw();
}

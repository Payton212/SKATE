const dEasy = document.querySelector(
  'input[name = "difficulty"][value = "easy"]'
);
const dMedium = document.querySelector(
  'input[name = "difficulty"][value = "medium"]'
);
const dHard = document.querySelector(
  'input[name = "difficulty"][value = "hard"]'
);
const obstacles = document.querySelectorAll('input[name="Obstacle"]');

const CFlatGround = document.querySelector(
  'input[name = "Obstacle"][value = "Flatground"]'
);
const CLedge = document.querySelector(
  'input[name = "Obstacle"][value = "Ledge"]'
);
const CStairs = document.querySelector(
  'input[name = "Obstacle"][value = "Stairs"]'
);
const CEuro = document.querySelector(
  'input[name = "Obstacle"][value = "Euro"]'
);
const CFlatbar = document.querySelector(
  'input[name = "Obstacle"][value = "Flatbar"]'
);
const CDownrail = document.querySelector(
  'input[name = "Obstacle"][value = "Downrail"]'
);
const CHubba = document.querySelector(
  'input[name = "Obstacle"][value = "Hubba"]'
);
const CMannypad = document.querySelector(
  'input[name = "Obstacle"][value = "Mannypad"]'
);
const CMiniramp = document.querySelector(
  'input[name = "Obstacle"][value = "Miniramp"]'
);
const gt = document.getElementById("generate-trick");
const nt = document.getElementById("namedTrick");
const pst = document.getElementById("stance");
const pd = document.getElementById("direction");
const pr = document.getElementById("rotation");
const pKH = document.getElementById("K/H");
const ps = document.getElementById("shuv");
const pO = document.getElementById("obstacle");

const completedTricks = [];
const possibleTricks = {
  easy: {
    P1:  {stances: "regular",directions: "frontside",flips: "none",bodyRotations: "180",shuvRotations: "none"},// front 180
    P2:  {stances: "fakie", directions: "frontside", flips: "none", bodyRotations: "180", shuvRotations: "none"},// fakie front 180
    P3:  {stances: "regular", directions: "backside", flips: "none", bodyRotations: "180", shuvRotations: "none"},// back 180
    P4:  {stances: "fakie", directions: "backside", flips: "none", bodyRotations: "180", shuvRotations: "none"},// fakie back 180
    P5:  {stances: "regular", directions: "backside", flips: "none", bodyRotations: "none", shuvRotations: "180"},// pop shuv
    P6:  {stances: "fakie", directions: "backside", flips: "none", bodyRotations: "none", shuvRotations: "180"},// fakie pop shuv
    P7:  {stances: "regular", directions: "frontside", flips: "none", bodyRotations: "none", shuvRotations: "180"},// front shuv
    P8:  {stances: "fakie", directions: "frontside", flips: "none", bodyRotations: "none", shuvRotations: "180"},// fakie front shuv
    P9:  {stances: "regular", directions: "none", flips: "kickflip", bodyRotations: "none", shuvRotations: "none"},// kickflip
    P10: {stances: "regular", directions: "none", flips: "heelflip", bodyRotations: "none", shuvRotations: "none",},// heelflip
    P11: {stances: "fakie", directions: "none", flips: "kickflip", bodyRotations: "none", shuvRotations: "none" },// fakie kickflip
    P12: {stances: "fakie", directions: "none", flips: "heelflip", bodyRotations: "none", shuvRotations: "none"},// fakie heelflip
  },
  medium: { // impossible tricks
    P1:  {stances: "regular",directions: "frontside",flips: "none",bodyRotations: "180",shuvRotations: "none"},// front 180
    P2:  {stances: "fakie", directions: "frontside", flips: "none", bodyRotations: "180", shuvRotations: "none"},// fakie front 180
    P3:  {stances: "regular", directions: "backside", flips: "none", bodyRotations: "180", shuvRotations: "none"},// back 180
    P4:  {stances: "fakie", directions: "backside", flips: "none", bodyRotations: "180", shuvRotations: "none"},// fakie back 180
    P5:  {stances: "regular", directions: "backside", flips: "none", bodyRotations: "none", shuvRotations: "180"},// pop shuv
    P6:  {stances: "fakie", directions: "backside", flips: "none", bodyRotations: "none", shuvRotations: "180"},// fakie pop shuv
    P7:  {stances: "regular", directions: "frontside", flips: "none", bodyRotations: "none", shuvRotations: "180"},// front shuv
    P8:  {stances: "fakie", directions: "frontside", flips: "none", bodyRotations: "none", shuvRotations: "180"},// fakie front shuv
    P9:  {stances: "regular", directions: "none", flips: "kickflip", bodyRotations: "none", shuvRotations: "none"},// kickflip
    P10: {stances: "regular", directions: "none", flips: "heelflip", bodyRotations: "none", shuvRotations: "none",},// heelflip
    P11: {stances: "fakie", directions: "none", flips: "kickflip", bodyRotations: "none", shuvRotations: "none" },// fakie kickflip
    P12: {stances: "fakie", directions: "none", flips: "heelflip", bodyRotations: "none", shuvRotations: "none"},// fakie heelflip
    P13: {stances: "regular",directions: "frontside",flips: "kickflip",bodyRotations: "180",shuvRotations: "none"},// front 180 kickflip
    P14: {stances: "fakie", directions: "frontside", flips: "kickflip", bodyRotations: "180", shuvRotations: "none"},// fakie front 180 kickflip
    P15: {stances: "regular", directions: "backside", flips: "kickflip", bodyRotations: "180", shuvRotations: "none"},// back 180 kickflip
    P16: {stances: "fakie", directions: "backside", flips: "kickflip", bodyRotations: "180", shuvRotations: "none"},// fakie back 180 kickflip
    P17: {stances: "regular", directions: "backside", flips: "kickflip", bodyRotations: "none", shuvRotations: "180"},// pop shuv kickflip
    P18: {stances: "fakie", directions: "backside", flips: "kickflip", bodyRotations: "none", shuvRotations: "180"},// fakie pop shuv kickflip
    P19: {stances: "regular", directions: "frontside", flips: "kickflip", bodyRotations: "none", shuvRotations: "180"},// front shuv kickflip
    P20: {stances: "fakie", directions: "frontside", flips: "kickflip", bodyRotations: "none", shuvRotations: "180" }, // fakie front 180 kickflip
    P21: {stances: "regular",directions: "frontside",flips: "heelflip",bodyRotations: "180",shuvRotations: "none"},// front 180 heelflip
    P22: {stances: "fakie", directions: "frontside", flips: "heelflip", bodyRotations: "180", shuvRotations: "none"},// fakie front 180 heelflip
    P23: {stances: "regular", directions: "backside", flips: "heelflip", bodyRotations: "180", shuvRotations: "none"},// back 180 heelflip
    P24: {stances: "fakie", directions: "backside", flips: "heelflip", bodyRotations: "180", shuvRotations: "none"},// fakie back 180 heelflip
    P25: {stances: "regular", directions: "backside", flips: "heelflip", bodyRotations: "none", shuvRotations: "180"},// pop shuv heelflip
    P26: {stances: "fakie", directions: "backside", flips: "heelflip", bodyRotations: "none", shuvRotations: "180"},// fakie pop shuv heelflip
    P27: {stances: "regular", directions: "frontside", flips: "heelflip", bodyRotations: "none", shuvRotations: "180"},// front shuv heelflip
    P28: {stances: "fakie", directions: "frontside", flips: "heelflip", bodyRotations: "none", shuvRotations: "180" }, // fakie front 180 heelflip
    P29: {stances: "regular",directions: "frontside",flips: "none",bodyRotations: "180",shuvRotations: "180"},// front 180 front shuv
    P30: {stances: "fakie", directions: "frontside", flips: "none", bodyRotations: "180", shuvRotations: "180"},// fakie front 180 front shuv
    P31: {stances: "regular", directions: "backside", flips: "none", bodyRotations: "180", shuvRotations: "180"},// back 180 back shuv
    P32: {stances: "fakie", directions: "backside", flips: "none", bodyRotations: "180", shuvRotations: "180"},// fakie back 180 back shuv
  }
};
const FlatGround = {
  easy: {
    stances: ["regular", "fakie"],
    directions: ["frontside", "backside", "none"],
    flips: ["kickflip", "heelflip", "none"],
    bodyRotations: ["180", "none"],
    shuvRotations: ["180", "none"],
  },
  medium: {
    stances: ["regular", "fakie"],
    directions: ["frontside", "backside", "none"],
    flips: ["kickflip", "heelflip", "none"],
    bodyRotations: ["180", "none"],
    shuvRotations: ["180", "none"],
  },
  hard: {
    stances: ["regular", "fakie", "nollie", "switch"],
    directions: ["frontside", "backside", "none"],
    flips: ["kickflip", "heelflip", "none"],
    bodyRotations: ["360", "180", "none"],
    shuvRotations: ["360", "180", "none"],
  },
};
Ledge = {
  easy: {
    stances: "regular",
    directions: "frontside",
    tricks: ["50-50", "5-0", "nose grind", "smith",],
  },
  medium: {
    tricks: FlatGround.easy + Ledge.easy,
  }
};

const trickMapper = {
  // stance_direction_rotation_shuv_flip
  regular_frontside_180_none_none: "front 180",
  regular_frontside_none_180_none: "front shuv",
  regular_backside_180_none_none: "back 180",
  regular_backside_none_180_none: "pop shuv",
  fakie_frontside_180_none_none: "frontside half cab",
  fakie_frontside_none_180_none: "fakie front shuv",
  fakie_backside_180_none_none: "half cab",
  fakie_backside_none_180_none: "fakie pop shuv",
  fakie_none_none_none_kickflip: "fakie kickflip",
  regular_none_none_none_kickflip: "kickflip",
  fakie_none_none_none_heelflip: "fakie heelflip",
  regular_none_none_none_heelflip: "heelflip",
  regular_frontside_180_none_kickflip: "frontside flip",
  fakie_frontside_180_none_kickflip: "fakie frontside flip",
  regular_backside_180_none_kickflip: "backside flip",
  fakie_backside_180_none_kickflip: "half cab flip",
  regular_frontside_180_none_heelflip: "frontside heel",
  fakie_frontside_180_none_heelflip: "fakie front heel",
  fakie_backside_180_none_heelflip: "half cab heel",
  regular_backside_180_none_heelflip: "backside heelflip",
  regular_backside_none_180_kickflip: "varial flip",
  regular_backside_none_180_heelflip: "inward heel",
  regular_frontside_none_180_kickflip: "hard flip",
  regular_frontside_none_180_heelflip: "varial heel",
  fakie_backside_none_180_kickflip: "fakie varial flip",
  fakie_backside_none_180_heelflip: "fakie inward heel",
  fakie_frontside_none_180_kickflip: "fakie hard flip",
  fakie_frontside_none_180_heelflip: "fakie varial heel",
  regular_backside_180_180_none: "big spin",
  regular_frontside_180_180_none: "frontside big spin",
  fakie_backside_180_180_none: "fakie big spin",
  fakie_frontside_180_180_none: "fakie frontside big spin",
};
obstacles.forEach((obstacle) => {
  if (obstacle.checked) {
    selectedObstacle = obstacle.value;
  }
});

gt.addEventListener("click", function (event) {
  event.preventDefault();
  if (dEasy.checked &&
    CFlatGround.checked &&
    !CLedge.checked &&
    !CStairs.checked &&
    !CEuro.checked &&
    !CFlatbar.checked &&
    !CDownrail.checked &&
    !CHubba.checked &&
    !CMannypad.checked &&
    !CMiniramp.checked) {
    let flatgroundTrick = newFlatGroundTrick(FlatGround.easy);
    completedTricks.push(flatgroundTrick);
    console.log(newFlatGroundTrick.easy);
    namedTrick =
      trickMapper[`${flatgroundTrick.stances}_${flatgroundTrick.directions}_${flatgroundTrick.bodyRotations}_${flatgroundTrick.shuvRotations}_${flatgroundTrick.flips}`];

    nt.textContent = namedTrick;
    pst.textContent = flatgroundTrick.stances;
    pd.textContent = flatgroundTrick.directions;
    pr.textContent = flatgroundTrick.bodyRotations;
    ps.textContent = flatgroundTrick.shuvRotations;
    pKH.textContent = flatgroundTrick.flips;
    pO.textContent = selectedObstacle;
  } else if (dMedium.checked &&
    CFlatGround.checked &&
    !CLedge.checked &&
    !CStairs.checked &&
    !CEuro.checked &&
    !CFlatbar.checked &&
    !CDownrail.checked &&
    !CHubba.checked &&
    !CMannypad.checked &&
    !CMiniramp.checked) {
    let flatgroundTrick = newFlatGroundTrick(FlatGround.medium);
    completedTricks.push(flatgroundTrick);
    console.log(newFlatGroundTrick.easy);
    namedTrick =
      trickMapper[
        `${flatgroundTrick.stances}_${flatgroundTrick.directions}_${flatgroundTrick.bodyRotations}_${flatgroundTrick.shuvRotations}_${flatgroundTrick.flips}`
      ];

    nt.textContent = namedTrick;
    pst.textContent = flatgroundTrick.stances;
    pd.textContent = flatgroundTrick.directions;
    pr.textContent = flatgroundTrick.bodyRotations;
    ps.textContent = flatgroundTrick.shuvRotations;
    pKH.textContent = flatgroundTrick.flips;
    pO.textContent = selectedObstacle;
    }
});

function newFlatGroundTrick(config) {
  if (dEasy.checked && completedTricks.length < 12) {
    let randomTrick;
    do {
      randomTrick = generateTrick(config);
    } while (checkPossibleTrick(randomTrick, possibleTricks.easy));
    return randomTrick;

  } else if (dMedium.checked && completedTricks.length < 34) {
    let randomTrick;
    do {
      randomTrick = generateTrick(config);
    } while (checkPossibleTrick(randomTrick, possibleTricks.medium));
    return randomTrick;
  } else {
    console.log("all easy tricks generated");
  }
}

function gRandom(config) {
  return config[Math.floor(Math.random() * config.length)];
}

function generateTrick(config) {
    randomStance = gRandom(config.stances);
    randomDirection = gRandom(config.directions);
    randomBodyRotation = gRandom(config.bodyRotations);
    randomFlip = gRandom(config.flips);
    randomShuvRotation = gRandom(config.shuvRotations);

    return {
      stances: randomStance,
      directions: randomDirection,
      flips: randomFlip,
      bodyRotations: randomBodyRotation,
      shuvRotations: randomShuvRotation,
    }
}
function checkPossibleTrick(randomTrick, possibleTricks) {
  // Check if the generated trick matches any of the possible tricks
  for (const key in possibleTricks) {
    const possibleTrick = possibleTricks[key];

    // Check if the random trick matches a possible trick
    if (
      randomTrick.stances === possibleTrick.stances &&
      randomTrick.directions === possibleTrick.directions &&
      randomTrick.flips === possibleTrick.flips &&
      randomTrick.bodyRotations === possibleTrick.bodyRotations &&
      randomTrick.shuvRotations === possibleTrick.shuvRotations
    ) {
      // If it matches a possible trick, check against completed tricks
      for (const completedTrick of completedTricks) {
        if (
          randomTrick.stances === completedTrick.stances &&
          randomTrick.directions === completedTrick.directions &&
          randomTrick.flips === completedTrick.flips &&
          randomTrick.bodyRotations === completedTrick.bodyRotations &&
          randomTrick.shuvRotations === completedTrick.shuvRotations
        ) {
          return true; // The trick is possible (already completed)
        }
      }
      return false; // The trick is possible (not completed)
    }
  }
  return true; // The trick is impossible (does not match any possible tricks)
}

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
    P32: {stances: "fakie", directions: "backside", flips: "none", bodyRotations: "180", shuvRotations: "180" },// fakie back 180 back shuv
    P33: {stances: "fakie", directions: "backside", flips: "none", bodyRotations: "360", shuvRotations: "none" }, //fakie full cab
    P34: {stances: "fakie", directions: "frontside", flips: "none", bodyRotations: "360", shuvRotations: "none" },// fakie front 360
    P35: {stances: "regular", directions: "backside", flips: "none", bodyRotations: "360", shuvRotations: "none" },// back 360
    P36: {stances: "regular", directions: "frontside", flips: "none", bodyRotations: "360", shuvRotations: "none" },// front 360
    P37: {stances: "fakie", directions: "backside", flips: "none", bodyRotations: "none", shuvRotations: "360" }, //fakie 3 shuv
    P38: {stances: "fakie", directions: "frontside", flips: "none", bodyRotations: "none", shuvRotations: "360" },// fakie front 3 shuv
    P39: {stances: "regular", directions: "backside", flips: "none", bodyRotations: "none", shuvRotations: "360" },// back 360 shuv
    P40: {stances: "regular", directions: "frontside", flips: "none", bodyRotations: "none", shuvRotations: "360" },// front 360 shuv
    P41: {stances: "regular", directions: "backside", flips: "kickflip", bodyRotations: "none", shuvRotations: "360" },// tre flip
    P42: {stances: "fakie", directions: "backside", flips: "kickflip", bodyRotations: "none", shuvRotations: "360"}, // fakie tre flip
  },
  hard: {
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
    P32: {stances: "fakie", directions: "backside", flips: "none", bodyRotations: "180", shuvRotations: "180" },// fakie back 180 back shuv
    P33: {stances: "fakie", directions: "backside", flips: "none", bodyRotations: "360", shuvRotations: "none" }, //fakie full cab
    P34: {stances: "fakie", directions: "frontside", flips: "none", bodyRotations: "360", shuvRotations: "none" },// fakie front 360
    P35: {stances: "regular", directions: "backside", flips: "none", bodyRotations: "360", shuvRotations: "none" },// back 360
    P36: {stances: "regular", directions: "frontside", flips: "none", bodyRotations: "360", shuvRotations: "none" },// front 360
    P37: {stances: "fakie", directions: "backside", flips: "none", bodyRotations: "none", shuvRotations: "360" }, //fakie 3 shuv
    P38: {stances: "fakie", directions: "frontside", flips: "none", bodyRotations: "none", shuvRotations: "360" },// fakie front 3 shuv
    P39: {stances: "regular", directions: "backside", flips: "none", bodyRotations: "none", shuvRotations: "360" },// back 360 shuv
    P40: {stances: "regular", directions: "frontside", flips: "none", bodyRotations: "none", shuvRotations: "360" },// front 360 shuv
    P41: {stances: "regular", directions: "backside", flips: "kickflip", bodyRotations: "none", shuvRotations: "360" },// tre flip
    P42: {stances: "fakie", directions: "backside", flips: "kickflip", bodyRotations: "none", shuvRotations: "360" }, // fakie tre flip
    P43: {stances: "switch", directions: "frontside",flips: "none",bodyRotations: "180",shuvRotations: "none"},// switch front 180
    P44: {stances: "nollie", directions: "frontside", flips: "none", bodyRotations: "180", shuvRotations: "none"},// nollie front 180
    P45: {stances: "switch", directions: "backside", flips: "none", bodyRotations: "180", shuvRotations: "none"},// switch back 180
    P46: {stances: "nollie", directions: "backside", flips: "none", bodyRotations: "180", shuvRotations: "none"},// nollie back 180
    P47: {stances: "switch", directions: "backside", flips: "none", bodyRotations: "none", shuvRotations: "180"},// switch pop shuv
    P48: {stances: "nollie", directions: "backside", flips: "none", bodyRotations: "none", shuvRotations: "180"},// nollie pop shuv
    P49: {stances: "switch", directions: "frontside", flips: "none", bodyRotations: "none", shuvRotations: "180"},// switch front shuv
    P50: {stances: "nollie", directions: "frontside", flips: "none", bodyRotations: "none", shuvRotations: "180"},// nollie front shuv
    P51: {stances: "switch", directions: "none", flips: "kickflip", bodyRotations: "none", shuvRotations: "none"},// switch kickflip
    P52: {stances: "switch", directions: "none", flips: "heelflip", bodyRotations: "none", shuvRotations: "none",},// switch heelflip
    P53: {stances: "nollie", directions: "none", flips: "kickflip", bodyRotations: "none", shuvRotations: "none" },// nollie kickflip
    P54: {stances: "nollie", directions: "none", flips: "heelflip", bodyRotations: "none", shuvRotations: "none"},// nollie heelflip
    P55: {stances: "switch", directions: "frontside",flips: "kickflip",bodyRotations: "180",shuvRotations: "none"},// switch front 180 kickflip
    P56: {stances: "nollie", directions: "frontside", flips: "kickflip", bodyRotations: "180", shuvRotations: "none"},// nollie front 180 kickflip
    P57: {stances: "switch", directions: "backside", flips: "kickflip", bodyRotations: "180", shuvRotations: "none"},// switch back 180 kickflip
    P58: {stances: "nollie", directions: "backside", flips: "kickflip", bodyRotations: "180", shuvRotations: "none"},// nollie back 180 kickflip
    P59: {stances: "switch", directions: "backside", flips: "kickflip", bodyRotations: "none", shuvRotations: "180"},// switch pop shuv kickflip
    P60: {stances: "nollie", directions: "backside", flips: "kickflip", bodyRotations: "none", shuvRotations: "180"},// nollie pop shuv kickflip
    P61: {stances: "switch", directions: "frontside", flips: "kickflip", bodyRotations: "none", shuvRotations: "180"},// switch front shuv kickflip
    P62: {stances: "nollie", directions: "frontside", flips: "kickflip", bodyRotations: "none", shuvRotations: "180" }, // nollie front 180 kickflip
    P63: {stances: "switch", directions: "frontside",flips: "heelflip",bodyRotations: "180",shuvRotations: "none"},// switch front 180 heelflip
    P64: {stances: "nollie", directions: "frontside", flips: "heelflip", bodyRotations: "180", shuvRotations: "none"},// nollie front 180 heelflip
    P65: {stances: "switch", directions: "backside", flips: "heelflip", bodyRotations: "180", shuvRotations: "none"},// switch back 180 heelflip
    P66: {stances: "nollie", directions: "backside", flips: "heelflip", bodyRotations: "180", shuvRotations: "none"},// nollie back 180 heelflip
    P67: {stances: "switch", directions: "backside", flips: "heelflip", bodyRotations: "none", shuvRotations: "180"},// switch pop shuv heelflip
    P68: {stances: "nollie", directions: "backside", flips: "heelflip", bodyRotations: "none", shuvRotations: "180"},// nollie pop shuv heelflip
    P69: {stances: "switch", directions: "frontside", flips: "heelflip", bodyRotations: "none", shuvRotations: "180"},// switch front shuv heelflip
    P70: {stances: "nollie", directions: "frontside", flips: "heelflip", bodyRotations: "none", shuvRotations: "180" }, // nollie front 180 heelflip
    P80: {stances: "switch", directions: "frontside",flips: "none",bodyRotations: "180",shuvRotations: "180"},// switch front 180 front shuv
    P81: {stances: "nollie", directions: "frontside", flips: "none", bodyRotations: "180", shuvRotations: "180"},// nollie front 180 front shuv
    P82: {stances: "switch", directions: "backside", flips: "none", bodyRotations: "180", shuvRotations: "180"},// switch back 180 back shuv
    P83: {stances: "nollie", directions: "backside", flips: "none", bodyRotations: "180", shuvRotations: "180" },// nollie back 180 back shuv
    P83: {stances: "nollie", directions: "backside", flips: "none", bodyRotations: "360", shuvRotations: "none" }, //nollie full cab
    P85: {stances: "nollie", directions: "frontside", flips: "none", bodyRotations: "360", shuvRotations: "none" },// nollie front 360
    P86: {stances: "switch", directions: "backside", flips: "none", bodyRotations: "360", shuvRotations: "none" },// switch back 360
    P87: {stances: "switch", directions: "frontside", flips: "none", bodyRotations: "360", shuvRotations: "none" },// switch front 360
    P88: {stances: "nollie", directions: "backside", flips: "none", bodyRotations: "none", shuvRotations: "360" }, //nollie 3 shuv
    P89: {stances: "nollie", directions: "frontside", flips: "none", bodyRotations: "none", shuvRotations: "360" },// nollie front 3 shuv
    P90: {stances: "switch", directions: "backside", flips: "none", bodyRotations: "none", shuvRotations: "360" },// switch back 360 shuv
    P91: {stances: "switch", directions: "frontside", flips: "none", bodyRotations: "none", shuvRotations: "360" },// switch front 360 shuv
    P92: {stances: "switch", directions: "backside", flips: "kickflip", bodyRotations: "none", shuvRotations: "360" },// switch tre flip
    P93: {stances: "nollie", directions: "backside", flips: "kickflip", bodyRotations: "none", shuvRotations: "360" }, // nollie tre flip
    P94: {stances: "switch", directions: "frontside", flips: "heelflip", bodyRotations: "none", shuvRotations: "360" },// switch lazerflip
    P95: {stances: "nollie", directions: "frontside", flips: "heelflip", bodyRotations: "none", shuvRotations: "360" }, // nollie lazerflip
    P96: {stances: "regular", directions: "frontside", flips: "heelflip", bodyRotations: "none", shuvRotations: "360" },// lazerflip
    P97: {stances: "fakie", directions: "frontside", flips: "heelflip", bodyRotations: "none", shuvRotations: "360" }, // fakie lazerflip
    P98: {stances: "switch", directions: "backside", flips: "kickflip", bodyRotations: "180", shuvRotations: "180" },// switch bigflip
    P99: {stances: "nollie", directions: "backside", flips: "kickflip", bodyRotations: "180", shuvRotations: "180" }, // nollie bigflip
    P100: {stances: "regular", directions: "backside", flips: "kickflip", bodyRotations: "180", shuvRotations: "180" },// big flip
    P101: {stances: "fakie", directions: "backside", flips: "kickflip", bodyRotations: "180", shuvRotations: "180" },// fakie big flip
    P102: {stances: "switch", directions: "frontside", flips: "heelflip", bodyRotations: "180", shuvRotations: "180" },// switch big heel
    P103: {stances: "nollie", directions: "frontside", flips: "heelflip", bodyRotations: "180", shuvRotations: "180" }, // nollie big heel
    P104: {stances: "regular", directions: "frontside", flips: "heelflip", bodyRotations: "180", shuvRotations: "180" },// big  heel
    P105: {stances: "fakie", directions: "frontside", flips: "heelflip", bodyRotations: "180", shuvRotations: "180" },// fakie big  heel
    P106: {stances: "switch", directions: "frontside", flips: "heelflip", bodyRotations: "360", shuvRotations: "none" },// switch front 360 heelflip
    P107: {stances: "nollie", directions: "frontside", flips: "heelflip", bodyRotations: "360", shuvRotations: "none" }, // nollie front 360 heelflip
    P108: {stances: "regular", directions: "frontside", flips: "heelflip", bodyRotations: "360", shuvRotations: "none" },// switch front 360 heelflip
    P109: {stances: "fakie", directions: "frontside", flips: "heelflip", bodyRotations: "360", shuvRotations: "none" }, // nollie front 360 heelflip
    P110: {stances: "switch", directions: "frontside", flips: "kickflip", bodyRotations: "360", shuvRotations: "none" },// switch front 360 kickflip
    P111: {stances: "nollie", directions: "frontside", flips: "kickflip", bodyRotations: "360", shuvRotations: "none" }, // nollie front 360 kickflip
    P112: {stances: "regular", directions: "frontside", flips: "kickflip", bodyRotations: "360", shuvRotations: "none" },// switch front 360 kickflip
    P113: {stances: "fakie", directions: "frontside", flips: "kickflip", bodyRotations: "360", shuvRotations: "none" }, // nollie front 360 kickflip
    P114: {stances: "switch", directions: "backside", flips: "heelflip", bodyRotations: "360", shuvRotations: "none" },// switch back 360 heelflip
    P115: {stances: "nollie", directions: "backside", flips: "heelflip", bodyRotations: "360", shuvRotations: "none" }, // nollie back 360 heelflip
    P116: {stances: "regular", directions: "backside", flips: "heelflip", bodyRotations: "360", shuvRotations: "none" },// switch back 360 heelflip
    P117: {stances: "fakie", directions: "backside", flips: "heelflip", bodyRotations: "360", shuvRotations: "none" }, // nollie back 360 heelflip
    P118: {stances: "switch", directions: "backside", flips: "kickflip", bodyRotations: "360", shuvRotations: "none" },// switch back 360 kickflip
    P119: {stances: "nollie", directions: "backside", flips: "kickflip", bodyRotations: "360", shuvRotations: "none" }, // nollie back 360 kickflip
    P120: {stances: "regular", directions: "backside", flips: "kickflip", bodyRotations: "360", shuvRotations: "none" },// switch back 360 kickflip
    P121: {stances: "fakie", directions: "backside", flips: "kickflip", bodyRotations: "360", shuvRotations: "none" }, // nollie back 360 kickflip
  },
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
    bodyRotations: ["180","360", "none"],
    shuvRotations: ["180","360", "none"],
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
  fakie_backside_360_none_none: "full cab",
  regular_frontside_360_none_none: "front 360",
  fakie_frontside_360_none_none: "fakie front 360",
  regular_backside_360_none_none: "back 360",
  fakie_backside_none_360_none: "fakie 3 shuv",
  regular_backside_none_360_none: "3 shuv",
  fakie_frontside_none_360_none: "fakie front 3 shuv",
  regular_frontside_none_360_none: "front 3 shuv",
  regular_backside_none_360_kickflip: "tre flip",
  fakie_backside_none_360_kickflip: "fakie tre flip",
  switch_frontside_180_none_none: "switch front 180",
  switch_frontside_none_180_none: "switch front shuv",
  switch_backside_180_none_none: "switch back 180",
  switch_backside_none_180_none: "switch pop shuv",
  nollie_frontside_180_none_none: "nollie front 180",
  nollie_frontside_none_180_none: "fakie front shuv",
  nollie_backside_180_none_none: "nollie back 180",
  nollie_backside_none_180_none: "nollie pop shuv",
  nollie_none_none_none_kickflip: "nollie kickflip",
  switch_none_none_none_kickflip: "switch kickflip",
  nollie_none_none_none_heelflip: "nollie heelflip",
  switch_none_none_none_heelflip: "switch heelflip",
  switch_frontside_180_none_kickflip: "switch frontside flip",
  nollie_frontside_180_none_kickflip: "nollie frontside flip",
  switch_backside_180_none_kickflip: "switch backside flip",
  nollie_backside_180_none_kickflip: "half cab flip",
  switch_frontside_180_none_heelflip: "switch frontside heel",
  nollie_frontside_180_none_heelflip: "nollie front heel",
  nollie_backside_180_none_heelflip: "half cab heel",
  switch_backside_180_none_heelflip: "switch backside heelflip",
  switch_backside_none_180_kickflip: "switch varial flip",
  switch_backside_none_180_heelflip: "switch inward heel",
  switch_frontside_none_180_kickflip: "switch hard flip",
  switch_frontside_none_180_heelflip: "switch varial heel",
  nollie_backside_none_180_kickflip: "nollie varial flip",
  nollie_backside_none_180_heelflip: "nollie inward heel",
  nollie_frontside_none_180_kickflip: "nollie hard flip",
  nollie_frontside_none_180_heelflip: "nollie varial heel",
  switch_backside_180_180_none: "switch big spin",
  switch_frontside_180_180_none: "switch frontside big spin",
  nollie_backside_180_180_none: "nollie big spin",
  nollie_frontside_180_180_none: "nollie frontside big spin",
  nollie_backside_360_none_none: "full cab",
  switch_frontside_360_none_none: "switch front 360",
  nollie_frontside_360_none_none: "nollie front 360",
  switch_backside_360_none_none: "switch back 360",
  nollie_backside_none_360_none: "nollie 3 shuv",
  switch_backside_none_360_none: "switch 3 shuv",
  nollie_frontside_none_360_none: "nollie front 3 shuv",
  switch_frontside_none_360_none: "switch front 3 shuv",
  switch_backside_none_360_kickflip: "switch tre flip",
  nollie_backside_none_360_kickflip: "nollie tre flip",
  switch_frontside_none_360_heelflip: "switch lazerflip",
  nollie_frontside_none_360_heelflip: "nollie lazerflip",
  regular_frontside_none_360_heelflip: "lazerflip",
  fakie_frontside_none_360_heelflip: "fakie lazerflip",
  switch_frontside_360_none_kickflip: "switch front 360 kickflip",
  nollie_frontside_360_none_kickflip: "nollie front 360 kickflip",
  regular_frontside_360_none_kickflip: "switch front 360 kickflip",
  fakie_frontside_360_none_kickflip: "fakie front 360 kickflip",
  switch_backside_360_none_kickflip: "switch back 360 kickflip",
  nollie_backside_360_none_kickflip: "nollie back 360 kickflip",
  regular_backside_360_none_kickflip: "switch back 360 kickflip",
  fakie_backside_360_none_kickflip: "full cab flip",
  switch_frontside_360_none_heelflip: "switch front 360 heelflip",
  nollie_frontside_360_none_heelflip: "nollie front 360 heelflip",
  regular_frontside_360_none_heelflip: "front 360 heelflip",
  fakie_frontside_360_none_heelflip: "fakie front 360 heelflip",
  switch_backside_360_none_heelflip: "switch back 360 heelflip",
  nollie_backside_360_none_heelflip: "nollie back 360 heelflip",
  regular_backside_360_none_heelflip: "back 360 heelflip",
  fakie_backside_360_none_heelflip: "full cab heel",
  switch_backside_180_180_kickflip: "switch big flip",
  switch_frontside_180_180_heelflip: "switch big heel",
  nollie_backside_180_180_kickflip: "nollie big flip",
  nollie_frontside_180_180_heelflip: "nollie big heel",
  regular_backside_180_180_kickflip: "big flip",
  regular_frontside_180_180_heelflip: "big heel",
  fakie_backside_180_180_kickflip: "fakie big flip",
  fakie_frontside_180_180_heelflip: "fakie big heel",
};
obstacles.forEach((obstacle) => {
  if (obstacle.checked) {
    selectedObstacle = obstacle.value;
  }
});

gt.addEventListener("click", function (event) {
  event.preventDefault();
  if (
    dEasy.checked &&
    CFlatGround.checked &&
    !CLedge.checked &&
    !CStairs.checked &&
    !CEuro.checked &&
    !CFlatbar.checked &&
    !CDownrail.checked &&
    !CHubba.checked &&
    !CMannypad.checked &&
    !CMiniramp.checked
  ) {
    let flatgroundTrick = newFlatGroundTrick(FlatGround.easy);
    if (flatgroundTrick) completedTricks.push(flatgroundTrick);
    console.log(completedTricks);
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
  } else if (
    dMedium.checked &&
    CFlatGround.checked &&
    !CLedge.checked &&
    !CStairs.checked &&
    !CEuro.checked &&
    !CFlatbar.checked &&
    !CDownrail.checked &&
    !CHubba.checked &&
    !CMannypad.checked &&
    !CMiniramp.checked
  ) {
    let flatgroundTrick = newFlatGroundTrick(FlatGround.medium);
    if (flatgroundTrick) completedTricks.push(flatgroundTrick);
    console.log(completedTricks);
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
  } else if (
    dHard.checked &&
    CFlatGround.checked &&
    !CLedge.checked &&
    !CStairs.checked &&
    !CEuro.checked &&
    !CFlatbar.checked &&
    !CDownrail.checked &&
    !CHubba.checked &&
    !CMannypad.checked &&
    !CMiniramp.checked
  ) {
    let flatgroundTrick = newFlatGroundTrick(FlatGround.hard);
    if (flatgroundTrick) completedTricks.push(flatgroundTrick);
    console.log(completedTricks);
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
  if (dEasy.checked && completedTricks.length >= 12) {
    console.log("all easy tricks generated");
  } else if (dMedium.checked && completedTricks.length >= 42) {
    console.log("all medium tricks generated");
  } else if (dHard.check && completedTricks.length >= 111) { 
    console.log("all hard tricks generated");
  } else if (dEasy.checked){
       let randomTrick;
       do {
         randomTrick = generateTrick(config);
       } while (checkPossibleTrick(randomTrick, possibleTricks.easy));
       return randomTrick;
  } else if (dMedium.checked) {
    let randomTrick;
    do {
      randomTrick = generateTrick(config);
    } while (checkPossibleTrick(randomTrick, possibleTricks.medium));
    return randomTrick;
  } else if (dHard.checked) {
    let randomTrick;
    do {
      randomTrick = generateTrick(config);
    } while (checkPossibleTrick(randomTrick, possibleTricks.hard));
    return randomTrick;
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

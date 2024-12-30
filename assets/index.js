const dEasy = document.querySelector(
  'input[name = "difficulty"][value = "easy"]'
);
const dMedium = document.querySelector(
  'input[name = "difficulty"][value = "medium"]'
);
const dHard = document.querySelector(
  'input[name = "difficulty"][value = "hard"]'
);
const gt = document.getElementById("generate-trick");
const nt = document.getElementById("namedTrick");
const pst = document.getElementById("stance");
const pd = document.getElementById("direction");
const pr = document.getElementById("rotation");
const pKH = document.getElementById("K/H");
const ps = document.getElementById("shuv");


const Stance = {
  Regular: 'Regular',
  Fakie: 'Fakie',
  Nollie: 'Nollie',
  Switch: 'Switch',
};
const Direction = {
  Frontside:'Frontside',
  Backside: 'Backside',
  None: 'None',
};
const Flip = {
  Kickflip: 'Kickflip',
  Heelflip: 'Heelflip',
  Ollie: 'Ollie',
  None: 'None',
};
const BodyRotation = {
  180: '180',
  360: '360',
  0:'none',
};
const ShuvRotation = {
  180: "180",
  360: "360",
  0: "none",
};
const ListOfTricks = {
  name: "ollie",
  config: {
    stance: Stance.Regular,
    direction: Direction.None,
    shuvRotation: 0,
    bodyRotation: 0,
    flip: Flip.Ollie,
  },
  name: "pop shuv",
  config: {
    stance: Stance.Regular,
    direction: Direction.Backside,
    shuvRotation: 180,
    bodyRotation: 0,
    flip: Flip.None,
  },
  name: "front shuv",
  config: {
    stance: Stance.Regular,
    direction: Direction.Frontside,
    shuvRotation: 180,
    bodyRotation: 0,
    flip: Flip.None,
  },
  name: "back 180",
  config: {
    stance: Stance.Regular,
    directon: Direction.Backside,
    shuvRotation: 0,
    bodyRotation: 180,
    flip: Flip.Ollie,
  },
  name: "front 180",
  config: {
    stance: Stance.Regular,
    directon: Direction.Frontside,
    shuvRotation: 0,
    bodyRotation: 180,
    flip: flip.Ollie,
  },
  name: "kickflip",
  config: {
    stance: Stance.Regular,
    direction: Direction.None,
    shuvRotation: 0,
    bodyRotation: 0,
    flip: Flip.Kickflip,
  },
  name: "heelflip",
  config: {
    stance: Stance.Regular,
    direction: Direction.None,
    shuvRotation: 0,
    bodyRotation: 0,
    flip: Flip.Heelflip,
  },
};



gt.addEventListener("click", function (event) {
  event.preventDefault();
  console.log('click');
});
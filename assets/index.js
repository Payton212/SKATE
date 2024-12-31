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
  None: 'None',
};
const BodyRotation = {
  180: '180',
  360: '360',
  0:'none',
};
const ShuvRotation = {
  180: '180',
  360: '360',
  0: 'none',
};
const Difficulty = {
  EASY: 'easy',
  MEDIUM: 'medium',
  HARD: 'hard',
};
const Obstacles = {
  FlatGround: 'flat ground',
  Stairs: 'stairs',
  Euro: 'euro',
  FlatBar: 'flat bar',
  DownRail: 'down rail',
  Hubba: 'hubba',
  MannyPad: 'manny pad',
  MiniRamp: 'mini ramp',
};
const ListOfTricks = [
  {
    name: "ollie",
    config: {
      stance: Stance.Regular,
      direction: Direction.None,
      shuvRotation: 0,
      bodyRotation: 0,
      flip: Flip.None,
    },
    obstacles: [Obstacles.FlatGround, Obstacles.Stairs, Obstacles.Euro],
    difficulty: Difficulty.EASY,
  },
  {
    name: "pop shuv",
    config: {
      stance: Stance.Regular,
      direction: Direction.Backside,
      shuvRotation: 180,
      bodyRotation: 0,
      flip: Flip.None,
    },
    obstacles: [Obstacles.FlatGround, Obstacles.Stairs, Obstacles.Euro],
    difficulty: Difficulty.EASY,
  },
  {
    name: "front shuv",
    config: {
      stance: Stance.Regular,
      direction: Direction.Frontside,
      shuvRotation: 180,
      bodyRotation: 0,
      flip: Flip.None,
    },
    obstacles: [Obstacles.FlatGround, Obstacles.Stairs, Obstacles.Euro],
    difficulty: Difficulty.EASY,
  },
  {
    name: "back 180",
    config: {
      stance: Stance.Regular,
      directon: Direction.Backside,
      shuvRotation: 0,
      bodyRotation: 180,
      flip: Flip.None,
    },
    obstacles: [Obstacles.FlatGround, Obstacles.Stairs, Obstacles.Euro],
    difficulty: Difficulty.EASY,
  },
  {
    name: "front 180",
    config: {
      stance: Stance.Regular,
      directon: Direction.Frontside,
      shuvRotation: 0,
      bodyRotation: 180,
      flip: Flip.None,
    },
    obstacles: [Obstacles.FlatGround, Obstacles.Stairs, Obstacles.Euro],
    difficulty: Difficulty.EASY,
  },
  {
    name: "kickflip",
    config: {
      stance: Stance.Regular,
      direction: Direction.None,
      shuvRotation: 0,
      bodyRotation: 0,
      flip: Flip.Kickflip,
    },
    obstacles: [Obstacles.FlatGround, Obstacles.Stairs, Obstacles.Euro],
    difficulty: Difficulty.EASY,
  },
  {
    name: "heelflip",
    config: {
      stance: Stance.Regular,
      direction: Direction.None,
      shuvRotation: 0,
      bodyRotation: 0,
      flip: Flip.Heelflip,
    },
    obstacles: [Obstacles.FlatGround, Obstacles.Stairs, Obstacles.Euro],
    difficulty: Difficulty.EASY,
  },
  {
    name: "fakie ollie",
    config: {
      stance: Stance.Fakie,
      direction: Direction.None,
      shuvRotation: 0,
      bodyRotation: 0,
      flip: Flip.None,
    },
    obstacles: [Obstacles.FlatGround, Obstacles.Stairs, Obstacles.Euro],
    difficulty: Difficulty.EASY,
  },
  {
    name: "fakie pop shuv",
    config: {
      stance: Stance.Fakie,
      direction: Direction.Backside,
      shuvRotation: 180,
      bodyRotation: 0,
      flip: Flip.None,
    },
    obstacles: [Obstacles.FlatGround, Obstacles.Stairs, Obstacles.Euro],
    difficulty: Difficulty.EASY,
  },
  {
    name: "fakie front shuv",
    config: {
      stance: Stance.Fakie,
      direction: Direction.Frontside,
      shuvRotation: 180,
      bodyRotation: 0,
      flip: Flip.None,
    },
    obstacles: [Obstacles.FlatGround, Obstacles.Stairs, Obstacles.Euro],
    difficulty: Difficulty.EASY,
  },
  {
    name: "fakie back 180",
    config: {
      stance: Stance.Fakie,
      directon: Direction.Backside,
      shuvRotation: 0,
      bodyRotation: 180,
      flip: Flip.None,
    },
    obstacles: [Obstacles.FlatGround, Obstacles.Stairs, Obstacles.Euro],
    difficulty: Difficulty.EASY,
  },
  {
    name: "fakie front 180",
    config: {
      stance: Stance.Fakie,
      directon: Direction.Frontside,
      shuvRotation: 0,
      bodyRotation: 180,
      flip: Flip.None,
    },
    obstacles: [Obstacles.FlatGround, Obstacles.Stairs, Obstacles.Euro],
    difficulty: Difficulty.EASY,
  },
  {
    name: "fakie kickflip",
    config: {
      stance: Stance.Fakie,
      direction: Direction.None,
      shuvRotation: 0,
      bodyRotation: 0,
      flip: Flip.Kickflip,
    },
    obstacles: [Obstacles.FlatGround, Obstacles.Stairs, Obstacles.Euro],
    difficulty: Difficulty.EASY,
  },
  {
    name: "fakie heelflip",
    config: {
      stance: Stance.Fakie,
      direction: Direction.None,
      shuvRotation: 0,
      bodyRotation: 0,
      flip: Flip.Heelflip,
    },
    obstacles: [Obstacles.FlatGround, Obstacles.Stairs, Obstacles.Euro],
    difficulty: Difficulty.EASY,
  },
  {
    name: "nollie",
    config: {
      stance: Stance.Nollie,
      direction: Direction.None,
      shuvRotation: 0,
      bodyRotation: 0,
      flip: Flip.None,
    },
    obstacles: [Obstacles.FlatGround, Obstacles.Stairs, Obstacles.Euro],
    difficulty: Difficulty.MEDIUM,
  },
  {
    name: "nollie pop shuv",
    config: {
      stance: Stance.Nollie,
      direction: Direction.Backside,
      shuvRotation: 180,
      bodyRotation: 0,
      flip: Flip.None,
    },
    obstacles: [Obstacles.FlatGround, Obstacles.Stairs, Obstacles.Euro],
    difficulty: Difficulty.MEDIUM,
  },
  {
    name: "nollie front shuv",
    config: {
      stance: Stance.Nollie,
      direction: Direction.Frontside,
      shuvRotation: 180,
      bodyRotation: 0,
      flip: Flip.None,
    },
    obstacles: [Obstacles.FlatGround, Obstacles.Stairs, Obstacles.Euro],
    difficulty: Difficulty.MEDIUM,
  },
  {
    name: "nollie back 180",
    config: {
      stance: Stance.Nollie,
      directon: Direction.Backside,
      shuvRotation: 0,
      bodyRotation: 180,
      flip: Flip.None,
    },
    obstacles: [Obstacles.FlatGround, Obstacles.Stairs, Obstacles.Euro],
    difficulty: Difficulty.MEDIUM,
  },
  {
    name: "nollie front 180",
    config: {
      stance: Stance.Nollie,
      directon: Direction.Frontside,
      shuvRotation: 0,
      bodyRotation: 180,
      flip: Flip.None,
    },
    obstacles: [Obstacles.FlatGround, Obstacles.Stairs, Obstacles.Euro],
    difficulty: Difficulty.MEDIUM,
  },
  {
    name: "nollie kickflip",
    config: {
      stance: Stance.Nollie,
      direction: Direction.None,
      shuvRotation: 0,
      bodyRotation: 0,
      flip: Flip.Kickflip,
    },
    obstacles: [Obstacles.FlatGround, Obstacles.Stairs, Obstacles.Euro],
    difficulty: Difficulty.MEDIUM,
  },
  {
    name: "nollie heelflip",
    config: {
      stance: Stance.Nollie,
      direction: Direction.None,
      shuvRotation: 0,
      bodyRotation: 0,
      flip: Flip.Heelflip,
    },
    obstacles: [Obstacles.FlatGround, Obstacles.Stairs, Obstacles.Euro],
    difficulty: Difficulty.MEDIUM,
  },
  {
    name: "switch ollie",
    config: {
      stance: Stance.Switch,
      direction: Direction.None,
      shuvRotation: 0,
      bodyRotation: 0,
      flip: Flip.None,
    },
    obstacles: [Obstacles.FlatGround, Obstacles.Stairs, Obstacles.Euro],
    difficulty: Difficulty.MEDIUM,
  },
  {
    name: "switch pop shuv",
    config: {
      stance: Stance.Switch,
      direction: Direction.Backside,
      shuvRotation: 180,
      bodyRotation: 0,
      flip: Flip.None,
    },
    obstacles: [Obstacles.FlatGround, Obstacles.Stairs, Obstacles.Euro],
    difficulty: Difficulty.MEDIUM,
  },
  {
    name: "switch front shuv",
    config: {
      stance: Stance.Switch,
      direction: Direction.Frontside,
      shuvRotation: 180,
      bodyRotation: 0,
      flip: Flip.None,
    },
    obstacles: [Obstacles.FlatGround, Obstacles.Stairs, Obstacles.Euro],
    difficulty: Difficulty.MEDIUM,
  },
  {
    name: "switch back 180",
    config: {
      stance: Stance.Switch,
      directon: Direction.Backside,
      shuvRotation: 0,
      bodyRotation: 180,
      flip: Flip.None,
    },
    obstacles: [Obstacles.FlatGround, Obstacles.Stairs, Obstacles.Euro],
    difficulty: Difficulty.MEDIUM,
  },
  {
    name: "switch front 180",
    config: {
      stance: Stance.Switch,
      directon: Direction.Frontside,
      shuvRotation: 0,
      bodyRotation: 180,
      flip: Flip.None,
    },
    obstacles: [Obstacles.FlatGround, Obstacles.Stairs, Obstacles.Euro],
    difficulty: Difficulty.MEDIUM,
  },
  {
    name: "switch kickflip",
    config: {
      stance: Stance.Switch,
      direction: Direction.None,
      shuvRotation: 0,
      bodyRotation: 0,
      flip: Flip.Kickflip,
    },
    obstacles: [Obstacles.FlatGround, Obstacles.Stairs, Obstacles.Euro],
    difficulty: Difficulty.MEDIUM,
  },
  {
    name: "switch heelflip",
    config: {
      stance: Stance.Switch,
      direction: Direction.None,
      shuvRotation: 0,
      bodyRotation: 0,
      flip: Flip.Heelflip,
    },
    obstacles: [Obstacles.FlatGround, Obstacles.Stairs, Obstacles.Euro],
    difficulty: Difficulty.MEDIUM,
  },
];



gt.addEventListener("click", function (event) {
  event.preventDefault();
  console.log('click');
});
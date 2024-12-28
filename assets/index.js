const dEasy = document.querySelector('input[name = "difficulty"][value = "easy"]');
const dMedium = document.querySelector('input[name = "difficulty"][value = "medium"]');
const dHard = document.querySelector('input[name = "difficulty"][value = "hard"]');
const gt = document.getElementById("generate-trick");
const nt = document.getElementById('namedTrick');
const pst = document.getElementById('stance');
const pd = document.getElementById('direction');
const pr = document.getElementById('rotation');
const pKH = document.getElementById('K/H');
const ps = document.getElementById('shuv');


skateConfig = {
    easy:{
        stances:['regular', 'fakie'],
        directions:['frontside','backside'],
        flips:['kickflip','heelflip','none','none'],
        rotations:['180','none'],
        shuvs:['180','none'],
    },
    medium:{},
    hard:{},
}
const trickMapper = {
    'regular_frontside_180_none_none':'front 180',
    'regular_frontside_none_180_none':'front shuv',
    'regular_backside_180_none_none':'back 180',
    'regular_backside_none_180_none': 'pop shuv',
    'fakie_frontside_180_none_none':'frontside half cab',
    'fakie_frontside_none_180_none':'fakie front shuv',
    'fakie_backside_180_none_none':'half cab',
    'fakie_backside_none_180_none': 'fakie pop shuv',
    'fakie_none_none_none_kickflip':'fakie kickflip',
    'regular_none_none_none_kickflip':'kickflip',
    'fakie_none_none_none_heelflip':'fakie heelflip',
    'regular_none_none_none_heelflip':'heelflip'
    }
let completedTricks = [];
let namedTrick;


gt.addEventListener("click", function (event) {
  event.preventDefault();
  if (dEasy.checked === true) {
    
    let newTrick = easy(skateConfig);
    console.log(completedTricks)

    namedTrick = trickMapper[`${newTrick.stance}_${newTrick.direction}_${newTrick.rotation}_${newTrick.shuv}_${newTrick.flip}`];
    
    nt.textContent = namedTrick;
    pst.textContent = newTrick.stance;
    pd.textContent = newTrick.direction;
    pr.textContent = newTrick.rotation;
    ps.textContent = newTrick.shuv;
    pKH.textContent = newTrick.flip

  } else if (dMedium.checked === true) {
    medium();
  } else {
    hard();
  }
});

function easy(skateConfig) {
  if(completedTricks.length === 12){
    return `all tricks generated`
  }
    return generateUniqueSkateConfig(skateConfig.easy);
}

function medium() {}

function hard() {}

function gRandom(skateConfig) {
  return skateConfig[Math.floor(Math.random() * skateConfig.length)];
}

function generateUniqueSkateConfig(config){
    let randomConfig;
    do{
        randomConfig = randomGenerator(config);
    }while(checkIfTrickHasBeenDone(randomConfig));

    return randomConfig;
}

function randomGenerator(config){
    randomStance = gRandom(config.stances);
    randomDirection = gRandom(config.directions);
    randomRotation = gRandom(config.rotations);
    randomFlip = gRandom(config.flips);
    // Determine shuv based on rotation
    if (randomFlip !== 'none') {
      randomShuvs = 'none'
      randomRotation = 'none'
      randomDirection = 'none';
    } else if (randomFlip === 'none' && randomRotation === 'none'){
        randomShuvs = '180';
    }else if(randomFlip === 'none' && randomRotation === '180'){
        randomShuvs = 'none';
    }
    completedTricks.push ({
        stance: randomStance,
        direction: randomDirection,
        rotation: randomRotation,
        shuv: randomShuvs,
        flip: randomFlip,
      });
    return {
        stance: randomStance,
        direction: randomDirection,
        rotation: randomRotation,
        shuv: randomShuvs,
        flip: randomFlip,
      };
}

function checkIfTrickHasBeenDone(randomConfig){
    (completedTricks.some(trick => 
        trick.flip === randomConfig.randomFlip &&
        trick.stance === randomConfig.randomStance && 
        trick.direction === randomConfig.randomDirection &&  
        trick.rotation === randomConfig.randomRotation &&
        trick.shuv === randomConfig.randomShuvs
      ));
   
}
/*

    */ 
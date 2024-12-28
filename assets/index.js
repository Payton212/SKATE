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

let completedTricks = [];
let namedTrick;


gt.addEventListener("click", function (event) {
  event.preventDefault();
  if (dEasy.checked === true) {
    
    let newTrick = easy(skateConfig);
    trickMapper = {
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
  }else 
  do {
    randomStance = gRandom(skateConfig.easy.stances);
    randomDirection = gRandom(skateConfig.easy.directions);
    randomRotation = gRandom(skateConfig.easy.rotations);
    randomFlip = gRandom(skateConfig.easy.flips);
   // randomShuvs = gRandom(skateConfig.easy.shuvs)
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
   }while (completedTricks.some(trick => 
    trick.flip === randomFlip &&
    trick.stance === randomStance && 
    trick.direction === randomDirection &&  
    trick.rotation === randomRotation &&
    trick.shuv === randomShuvs
  ));

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

function medium() {}

function hard() {}

function gRandom(skateConfig) {
  return skateConfig[Math.floor(Math.random() * skateConfig.length)];
}



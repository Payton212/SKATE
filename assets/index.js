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
    medium:{
        stances:['regular','fakie'],
        directions:['frontside','backside'],
        flips:['kickflip','heelflip','none'],
        rotations:['180','none'],
        shuvs:['180','none']
    },
    hard:{},
}
const trickMapper = {
    // stance_direction_rotation_shuv_flip
    'regular_frontside_180_none_none':'front 180',
    'regular_frontside_none_180_none':'front shuv',
    'regular_backside_180_none_none' :'back 180',
    'regular_backside_none_180_none' :'pop shuv',
    'fakie_frontside_180_none_none'  :'frontside half cab',
    'fakie_frontside_none_180_none'  :'fakie front shuv',
    'fakie_backside_180_none_none'   :'half cab',
    'fakie_backside_none_180_none'   :'fakie pop shuv',
    'fakie_none_none_none_kickflip'  :'fakie kickflip',
    'regular_none_none_none_kickflip':'kickflip',
    'fakie_none_none_none_heelflip'  :'fakie heelflip',
    'regular_none_none_none_heelflip':'heelflip',
    'regular_frontside_180_none_kickflip':'frontside flip',
    'fakie_frontside_180_none_kickflip':'fakie frontside flip',
    'regular_backside_180_none_kickflip':'backside flip',
    'fakie_backside_180_none_kickflip':'half cab flip',
    'regular_frontside_180_none_heelflip':'frontside heel',
    'fakie_frontside_180_none_heelflip':'fakie front heel',
    'fakie_backside_180_none_heelflip':'half cab heel',
    'regular_backside_180_none_heelflip':'backside heelflip',
    'regular_backside_none_180_kickflip':'varial flip',
    'regular_backside_none_180_heelflip':'inward heel',
    'regular_frontside_none_180_kickflip':'hard flip',
    'regular_frontside_none_180_heelflip':'varial heel',
    'fakie_backside_none_180_kickflip':'fakie varial flip',
    'fakie_backside_none_180_heelflip':'fakie inward heel',
    'fakie_frontside_none_180_kickflip':'fakie hard flip',
    'fakie_frontside_none_180_heelflip':'fakie varial heel',
    'regular_backside_180_180_none':'big spin',
    'regular_frontside_180_180_none':'frontside big spin',
    'fakie_backside_180_180_none':'fakie big spin',
    'fakie_frontside_180_180_none':'fakie frontside big spin',

    }
let completedTricks = [];
let namedTrick;


gt.addEventListener("click", function (event) {
  event.preventDefault();
  if (dEasy.checked === true) {
    
    let {stance, direction, rotation, shuv, flip} = easy(skateConfig);

    

    namedTrick = trickMapper[`${stance}_${direction}_${rotation}_${shuv}_${flip}`];
    
    nt.textContent = namedTrick;
    pst.textContent = stance;
    pd.textContent = direction;
    pr.textContent = rotation;
    ps.textContent = shuv;
    pKH.textContent = flip

  } else if (dMedium.checked === true) {
   let {stance, direction, rotation, shuv, flip} = medium(skateConfig);
   console.log(completedTricks);

   namedTrick = trickMapper[`${stance}_${direction}_${rotation}_${shuv}_${flip}`];
console.log(namedTrick);
    nt.textContent = namedTrick;
    pst.textContent = stance;
    pd.textContent = direction;
    pr.textContent = rotation;
    ps.textContent = shuv;
    pKH.textContent = flip
  
  completedTricks.push ({
    stance: randomStance,
    direction: randomDirection,
    rotation: randomRotation,
    shuv: randomShuvs,
    flip: randomFlip,
  });
}else {
    hard();
  }
});

function easy(skateConfig) {
  if(completedTricks.length >= 12){
    return `all tricks generated`
  }
    return easyGenerateUniqueSkateConfig(skateConfig.easy);
}

function medium(skateConfig) {
    if(completedTricks.length >= 32){
        return `all tricks generated`
      }
    return mediumGenerateUniqueSkateConfig(skateConfig.medium);
}

function hard() {}

function gRandom(skateConfig) {
  return skateConfig[Math.floor(Math.random() * skateConfig.length)];
}

function easyGenerateUniqueSkateConfig(config){
    let randomConfig;
    do{
        randomConfig = easyRandomGenerator(config);
    }while(checkIfTrickHasBeenDone(randomConfig));

    return randomConfig;
}

function easyRandomGenerator(config){
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
function mediumGenerateUniqueSkateConfig(config){
    let randomConfig;
    do{
        randomConfig = mediumRandomGenerator(config);
    }while(checkIfTrickHasBeenDone(randomConfig));

    return randomConfig;
}

function mediumRandomGenerator(config){
    randomStance = gRandom(config.stances);
    randomDirection = gRandom(config.directions);
    randomRotation = gRandom(config.rotations);
    randomFlip = gRandom(config.flips);
    randomShuvs = gRandom(config.shuvs);
    // Determine shuv based on rotation
    
    if(randomShuvs === 'none' && randomRotation === 'none'){
        randomDirection = 'none';
        randomFlip != 'none';
    } if(randomShuvs !== 'none' && randomRotation !== 'none'){
        randomFlip = 'none';
    }
    
    return {
        stance: randomStance,
        direction: randomDirection,
        rotation: randomRotation,
        shuv: randomShuvs,
        flip: randomFlip,
      };
      
}

function checkIfTrickHasBeenDone(randomConfig){
   return (completedTricks.some(trick => 
        (trick.flip === randomConfig.randomFlip &&
        trick.stance === randomConfig.randomStance && 
        trick.direction === randomConfig.randomDirection &&  
        trick.rotation === randomConfig.randomRotation &&
        trick.shuv === randomConfig.randomShuvs) &&
        (trick.stance === 'regular' &&
        trick.direction === 'none'&&
        trick.flip === 'none' &&
        trick.rotation === 'none'&&
        trick.shuv === 'none') &&
        (trick.stance === 'fakie' &&
        trick.direction === 'none'&&
        trick.flip === 'none' &&
        trick.rotation === 'none'&&
        trick.shuv === 'none')
     ));
     
}

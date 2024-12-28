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
    console.log(completedTricks);
    if(newTrick.stance === 'regular' && newTrick.direction === 'frontside' && newTrick.rotation === '180' && newTrick.shuv === 'none' && newTrick.flip === 'none'){
         namedTrick = 'front 180';
    }else if(newTrick.stance === 'regular' && newTrick.direction === 'frontside' && newTrick.rotation === 'none' && newTrick.shuv === '180' && newTrick.flip === 'none'){
        namedTrick = 'front shuv';    
    }else if(newTrick.stance === 'regular' && newTrick.direction === 'backside' && newTrick.rotation === '180' && newTrick.shuv === 'none' && newTrick.flip === 'none'){
        namedTrick = 'back 180';
    }else if(newTrick.stance === 'regular' && newTrick.direction === 'backside' && newTrick.rotation === 'none' && newTrick.shuv === '180' && newTrick.flip === 'none'){
        namedTrick = 'back shuv';
    }else if(newTrick.stance === 'fakie' && newTrick.direction === 'frontside' && newTrick.rotation === '180' && newTrick.shuv === 'none' && newTrick.flip === 'none'){
        namedTrick = 'frontside half cab';
    }else if(newTrick.stance === 'fakie' && newTrick.direction === 'frontside' && newTrick.rotation === 'none' && newTrick.shuv === '180' && newTrick.flip === 'none'){
        namedTrick = 'fakie front shuv';
    }else if(newTrick.stance === 'fakie' && newTrick.direction === 'backside' && newTrick.rotation === '180' && newTrick.shuv === 'none' && newTrick.flip === 'none'){
        namedTrick = 'half cab';
    }else if(newTrick.stance === 'fakie' && newTrick.direction === 'backside' && newTrick.rotation === 'none' && newTrick.shuv === '180' && newTrick.flip === 'none'){
        namedTrick = 'fakie back shuv';
    }else if(newTrick.stance === 'fakie' && newTrick.direction === 'none' && newTrick.rotation === 'none' && newTrick.shuv === 'none' && newTrick.flip === 'kickflip'){
        namedTrick = 'fakie kickflip';
    }else if(newTrick.stance === 'fakie' && newTrick.direction === 'none' && newTrick.rotation === 'none' && newTrick.shuv === 'none' && newTrick.flip === 'heelflip'){
        namedTrick = 'fakie heelflip';
    }else if(newTrick.stance === 'regular' && newTrick.direction === 'none' && newTrick.rotation === 'none' && newTrick.shuv === 'none' && newTrick.flip === 'kickflip'){
        namedTrick = 'kickflip';
    }else if(newTrick.stance === 'regular' && newTrick.direction === 'none' && newTrick.rotation === 'none' && newTrick.shuv === 'none' && newTrick.flip === 'heelflip'){
        namedTrick = 'heelflip';
    } 

    
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



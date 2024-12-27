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

let stances = ["regular", "switch", "fakie", "nollie"];
let directions = ["frontside", "backside", "none"];
let flips = ["kickflip", "heelflip", "none"];
let rotations = ["180", "360", "none"];
let shuvs = ["180", "360", "none"];
let completedTricks = [];
let namedTrick;

window.onload = function () {
  dEasy.checked = true;
};

gt.addEventListener("click", function (event) {
  event.preventDefault();
  if (dEasy.checked === true) {
    let newTrick = easy();
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

function easy() {
  let stances = ["regular", "fakie"];
  let directions = ["frontside", "backside"];
  let rotations = ["180", "none"];
  let flips = ['kickflip', 'heelflip', 'none'];
  let shuvs = ['180','none'];
  if(completedTricks.length === 12){
    return `all tricks generated`
  }else 
  do {
    randomStance = gRandomStance(stances);
    randomDirection = gRandomDirection(directions);
    randomRotation = gRandomRotations(rotations);
    randomFlip = gRandomFlip(flips);
    randomShuvs = gRandomShuvs(shuvs)
    // Determine shuv based on rotation
    if (randomFlip !== 'none') {
      randomShuvs = 'none'
      randomRotation = 'none'
      randomDirection = 'none';
    } else if (randomFlip === 'none' && randomRotation === 'none'){
        randomShuvs = '180';
    }else if(randomFlip === 'none' && randomRotation === '180'){
        randomShuvs = 'none'
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

function gRandomStance(stances) {
  return stances[Math.floor(Math.random() * stances.length)];
}
function gRandomDirection(directions) {
  return directions[Math.floor(Math.random() * directions.length)];
}
function gRandomRotations(rotations) {
  return rotations[Math.floor(Math.random() * rotations.length)];
}
function gRandomShuvs(shuvs) {
  return shuvs[Math.floor(Math.random() * shuvs.length)];
}
function gRandomFlip(flips){
  return flips[Math.floor(Math.random() * flips.length)];
}


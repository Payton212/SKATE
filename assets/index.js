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
    if(newTrick.stance === 'regular' && newTrick.direction === 'frontside' && newTrick.rotation === '180' && newTrick.shuv === 'none'){
         namedTrick = 'front 180';
    }else if(newTrick.stance === 'regular' && newTrick.direction === 'frontside' && newTrick.rotation === 'none' && newTrick.shuv === '180'){
        namedTrick = 'front shuv';    
    }else if(newTrick.stance === 'regular' && newTrick.direction === 'backside' && newTrick.rotation === '180' && newTrick.shuv === 'none'){
        namedTrick = 'back 180';
    }else if(newTrick.stance === 'regular' && newTrick.direction === 'backside' && newTrick.rotation === 'none' && newTrick.shuv === '180'){
        namedTrick = 'back shuv';
    }else if(newTrick.stance === 'fakie' && newTrick.direction === 'frontside' && newTrick.rotation === '180' && newTrick.shuv === 'none'){
        namedTrick = 'frontside half cab';
    }else if(newTrick.stance === 'fakie' && newTrick.direction === 'frontside' && newTrick.rotation === 'none' && newTrick.shuv === '180'){
        namedTrick = 'fakie front shuv';
    }else if(newTrick.stance === 'fakie' && newTrick.direction === 'backside' && newTrick.rotation === '180' && newTrick.shuv === 'none'){
        namedTrick = 'half cab';
    }else if(newTrick.stance === 'fakie' && newTrick.direction === 'backside' && newTrick.rotation === 'none' && newTrick.shuv === '180'){
        namedTrick = 'fakie back shuv';
    }
    nt.textContent = namedTrick;
    pst.textContent = newTrick.stance;
    pd.textContent = newTrick.direction;
    pr.textContent = newTrick.rotation;
    ps.textContent = newTrick.shuv;


    
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

  if(completedTricks.length === 8){
    return `all tricks generated`
  }else 
  do {
    randomStance = gRandomStance(stances);
    randomDirection = gRandomDirection(directions);
    randomRotation = gRandomRotations(rotations);
    
    // Determine shuv based on rotation
    if (randomRotation === "180") {
      randomShuvs = "none";
    } else {
      randomShuvs = "180";
    }

  } while (completedTricks.some(trick => 
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
    });
    return {
        stance: randomStance,
        direction: randomDirection,
        rotation: randomRotation,
        shuv: randomShuvs,
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


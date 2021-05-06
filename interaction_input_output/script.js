// define variables
let aPressed = false;
let cPressed = false;
let ePressed = false;
let fPressed = false;
let gPressed = false;
let hPressed = false;
let iPressed = false;
let jPressed = false;
let kPressed = false;
let mPressed = false;
let pPressed = false;
let oPressed = false;
let tPressed = false;
let wPressed = false;
let zPressed = false;
let capsPressed = false;
let result = document.querySelector('#result');
let enterStart = document.querySelector('#pressEnter');
let line = document.querySelector('#line');
    line.style.setProperty('--translate', 0);
    line.style.setProperty('--scale', 1);
let character = document.querySelector('#character');
    character.style.setProperty('--translate', 0);
    character.style.setProperty('--scale', 1);
    character.style.setProperty('--rotate', 0);
let characterInner = document.querySelector('.character-inner')
let characterName = document.querySelector('#charactername');
var pet = document.createElement("div");
    pet.classList.add("pet");
    document.querySelector("#character").append(pet);
var petEyeL = document.createElement("div");
    petEyeL.classList.add("pet-lefteye");
    document.querySelector(".pet").append(petEyeL);
var petEyeR = document.createElement("div");
    petEyeR.classList.add("pet-righteye");
    document.querySelector(".pet").append(petEyeR);
var handLeft = document.createElement("div");
      handLeft.classList.add("handLeft");
      document.querySelector(".character-inner").append(handLeft);
var handRight = document.createElement("div");
      handRight.classList.add("handRight");
      document.querySelector(".character-inner").append(handRight);  
let bgm = document.querySelector('#bgm');
let inner = character.querySelector('.character-inner');
let animationA = document.querySelector('.character-inner');
let jennieG = document.querySelector('.jennie');
let jennieInfo = document.querySelector('.hoverjen');
let gridContainer = document.querySelector('#grid-container');
let keyboardPad = document.querySelector('.keyboard-pad');



// create or insert tags in html
function capFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function generateName(){
  var name1 = ["lynn","janine","alice","amy","blythe","vicky","cathy","christine","deanna","murphy","jennie","serena","maya","peki","thomas","selina","sherrie","ivy","you Jin","zi"];
  var name = capFirst(name1[getRandomInt(0, name1.length + 1)]);
  return name;
}

// random color generator
function generateRandomColor(){
    var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
}

// random name generator

// addEventListner
document.addEventListener("keydown", function(event){
  console.log(event);
  console.log("what did we just press: ");
  console.log(event.key);
  //      (` = opacity 0%)
  if (event.key == "`"){
    character.style.opacity = "0%";
    line.style.opacity = "0%";
    pet.style.opacity = "0%";
    result.innerText = "[`]: opacity 0%";
    document.querySelector(".beforeOne").classList.remove("available");
    document.querySelector(".beforeOne").classList.add("selected");
  }    
  //      (1 = opacity 10%)
  if (event.key == "1"){
    character.style.opacity = "10%";
    line.style.opacity = "10%";
    pet.style.opacity = "10%";
    result.innerText = "[1]: opacity 10%";
    document.querySelector(".one").classList.remove("available");
    document.querySelector(".one").classList.add("selected");
  }  
  //      (2 = opacity 20%)
  if (event.key == "2"){
    character.style.opacity = "20%";
    line.style.opacity = "20%";
    pet.style.opacity = "20%";
    result.innerText = "[2]: opacity 20%";
    document.querySelector(".two").classList.remove("available");
    document.querySelector(".two").classList.add("selected");
  }  
  //      (3 = opacity 30%)
  if (event.key == "3"){
    character.style.opacity = "30%";
    line.style.opacity = "30%";
    pet.style.opacity = "30%";
    result.innerText = "[3]: opacity 30%";
    document.querySelector(".three").classList.remove("available");
    document.querySelector(".three").classList.add("selected");
  }  
  //      (4 = opacity 40%)
  if (event.key == "4"){
    character.style.opacity = "40%";
    line.style.opacity = "40%";
    pet.style.opacity = "40%";
    result.innerText = "[4]: opacity 40%";
    document.querySelector(".four").classList.remove("available");
    document.querySelector(".four").classList.add("selected");
  }  
  //      (5 = opacity 50%)
  if (event.key == "5"){
    character.style.opacity = "50%";
    line.style.opacity = "50%";
    pet.style.opacity = "50%";
    result.innerText = "[5]: opacity 50%";
    document.querySelector(".five").classList.remove("available");
    document.querySelector(".five").classList.add("selected");
  }      
  //      (6 = opacity 60%)
  if (event.key == "6"){
    character.style.opacity = "60%";
    line.style.opacity = "60%";
    pet.style.opacity = "60%";
    result.innerText = "[6]: opacity 60%";
    document.querySelector(".six").classList.remove("available");
    document.querySelector(".six").classList.add("selected");
  }  
  //      (7 = opacity 70%)
  if (event.key == "7"){
    character.style.opacity = "70%";
    line.style.opacity = "70%";
    pet.style.opacity = "70%";
    result.innerText = "[7]: opacity 70%";
    document.querySelector(".seven").classList.remove("available");
    document.querySelector(".seven").classList.add("selected");
  }  
  //      (8 = opacity 80%)
  if (event.key == "8"){
    character.style.opacity = "80%";
    line.style.opacity = "80%";
    pet.style.opacity = "80%";
    result.innerText = "[8]: opacity 80%";
    document.querySelector(".eight").classList.remove("available");
    document.querySelector(".eight").classList.add("selected");
  }  
  //      (9 = opacity 90%)
  if (event.key == "9"){
    character.style.opacity = "90%";
    line.style.opacity = "90%";
    pet.style.opacity = "90%";
    result.innerText = "[9]: opacity 90%";
    document.querySelector(".nine").classList.remove("available");
    document.querySelector(".nine").classList.add("selected");
  }  
  //      (0 = opacity 100%)
  if (event.key == "0"){
    character.style.opacity = "100%";
    line.style.opacity = "100%";
    pet.style.opacity = "100%";
    result.innerText = "[0]: opacity 100%";
    document.querySelector(".zero").classList.remove("available");
    document.querySelector(".zero").classList.add("selected");
  }   


  /* alphabet */

  //     (a = animation infinite loop)
  if (event.key == "a"){
    if (aPressed) {
      // runs on the second time f is pressed
    animationA.classList.remove('animationA');
    character.style.marginLeft = "0px";
    result.innerText = "[a]: alignment-center";
    aPressed = false;
    } else {
      // runs on the first time f is pressed
    animationA.classList.add('animationA');
    character.style.marginLeft = "-400px";
    result.innerText = "[a]: alignment-left";
    aPressed = true;
    document.querySelector(".a").classList.remove("available");
    document.querySelector(".a").classList.add("selected");
    }
  }     
  //     (b = background change)
  if (event.key == "b"){
    document.body.style.backgroundColor = generateRandomColor();
    result.innerText = "[b]: background color change";
    document.querySelector(".b").classList.remove("available");
    document.querySelector(".b").classList.add("selected");
  }
  //      (c = color change)
  if (event.key == "c"){
    let characterColorChange = characterInner.style.backgroundColor = generateRandomColor();
    characterColorChange;
    characterName.style.color = characterColorChange;
    result.innerText = "[c]: color change";
    document.querySelector(".c").classList.remove("available");
    document.querySelector(".c").classList.add("selected");
    }

  // d = drop shapdw
  if (event.key == "d"){
    if (ePressed) {
      // runs on the second time
    characterInner.style["boxShadow"] = "none";
    result.innerText = "[d]: drop shadow OFF";
    ePressed = false;
    } else {
      // runs on the first time
    characterInner.style["boxShadow"] = "18px 11px 15px #121212";
    result.innerText = "[d]: drop shadow ON";
    ePressed = true;
    document.querySelector(".d").classList.remove("available");
    document.querySelector(".d").classList.add("selected");
    }
  }  
  //     (e = edge change)
  if (event.key == "e"){
    
    if (ePressed) {
      // runs on the second time
    characterInner.style.borderRadius = "50%";
    handLeft.style.left = "-28px";
    handRight.style.right = "-33px";
    result.innerText = "[e]: edge change OFF";
    ePressed = false;
    } else {
      // runs on the first time
    characterInner.style.borderRadius = "0%";
    handLeft.style.left = "-28px";
    handRight.style.right = "-35px";
    result.innerText = "[e]: edge change ON";
    ePressed = true;
    document.querySelector(".e").classList.remove("available");
    document.querySelector(".e").classList.add("selected");
    }
  }  
  //     (f = font change)
  if (event.key == "f"){
    if (fPressed) {
      // runs on the second time f is pressed
      characterName.style.fontFamily = "fixedsys";
      result.innerText = "[f]: font change OFF";
      fPressed = false;
    } else {
      // runs on the first time f is pressed
      characterName.style.fontFamily = "futura";
      result.innerText = "[f]: font change to <Futura>";
      fPressed = true;
      document.querySelector(".f").classList.remove("available");
      document.querySelector(".f").classList.add("selected");
    }
  };  
  //     (g = grid)
  if (event.key == "g"){
    if (gPressed) {
      gridContainer.style.display = "none";
      result.innerText = "[g]: grid OFF";
      gPressed = false;
    } else {
      // runs on the first time
    gridContainer.style.display = "block";
    result.innerText = "[g]: grid ON";
    gPressed = true;
    document.querySelector(".g").classList.remove("available");
      document.querySelector(".g").classList.add("selected");
    }
  }
  //     (h = hand generator)
  if (event.key == "h"){
    if (hPressed) {
      handLeft.style.display = "none";
      handRight.style.display = "none";
      result.innerText = "[h]: hands generator OFF";
      hPressed = false;
    } else {
      // runs on the first time
      handLeft.style.display = "inline-flex";
      handRight.style.display = "inline-flex";
      result.innerText = "[h]: hands generator ON";
      hPressed = true;
      document.querySelector(".h").classList.remove("available");
      document.querySelector(".h").classList.add("selected");
    }
  }  
  //     (i = inner glow)
  if (event.key == "i"){
    if (iPressed) {
      characterInner.style["boxShadow"] = "none";
      result.innerText = "[i]: inner glow OFF";
      iPressed = false;
    } else {
    characterInner.style["boxShadow"] = "inset 0 0 30px #FFD76B";
    result.innerText = "[i]: inner glow ON";
    iPressed = true;
    document.querySelector(".i").classList.remove("available");
    document.querySelector(".i").classList.add("selected");
    }
  }  
  //     (j = Jennie)
  if (event.key == "j"){
    if (jPressed) {
      jennieG.style.display = "none";
      result.innerText = "[j]: Jennie disappeared";
      jPressed = false;
    } else {
      // runs on the first time
      jennieG.style.display = "inline";
      
      jennieG.addEventListener("mouseover", function(event){
        console.log(event);
        console.log("Mouse over!");
        jennieInfo.style.width = "300px";
        jennieInfo.style.height = "100px";
        jennieInfo.style.margin = "-120px 0 0 0";
        jennieInfo.style.padding = "20px 20px 20px 20px";
        jennieInfo.style.lineHeight = "1.2em";
        jennieInfo.style.textAlign = "left";
        jennieInfo.innerText = "English Name: Jennie\nKorean Name: Min Heong Hong\nInstagram: @minjenniehong\nE-mail: hongm433@newschool.edu";
      });
      jennieG.addEventListener("mouseleave", function(event){
        console.log(event);
        console.log("Mouse leave!");
        jennieInfo.innerText = "hover me!"
        jennieInfo.style.width = "140px";
        jennieInfo.style.height = "30px";
        jennieInfo.style.margin = "0 0 0 0";
        jennieInfo.style.padding = "7px 0 0 0";
        jennieInfo.style.lineHeight = "none";
        jennieInfo.style.textAlign = "center";
      });
      result.innerText = "[j]: Jennie appeared";
      jPressed = true;
      document.querySelector(".j").classList.remove("available");
      document.querySelector(".j").classList.add("selected");
    }
  };
  //     (k = keyframe)
  if (event.key == "k"){
    if (kPressed) {
      // runs on the second time f is pressed
    animationA.classList.remove('animationA');
    result.innerText = "[a]: keyframe infinite loop OFF";
    kPressed = false;
    } else {
      // runs on the first time f is pressed
    animationA.classList.add('animationA');
    animationA.style.position = "absolute";
    result.innerText = "[k]: keyframe infinite loop ON";
    kPressed = true;
    document.querySelector(".k").classList.remove("available");
    document.querySelector(".k").classList.add("selected");
    }
  }       
  //      (l = line color change)
  if (event.key == "l"){
    line.style.backgroundColor = generateRandomColor();
    result.innerText = "[l]: line color change";
    document.querySelector(".l").classList.remove("available");
    document.querySelector(".l").classList.add("selected");
  }
  //     (m = music on/off)
  if (event.key == "m"){
    if (mPressed) {
      // runs on the second time
      bgm.pause();
      mPressed = false;
      result.innerText = "[m]: music OFF";
    } else {
      // runs on the first time
      bgm.play();
      mPressed = true;
      result.innerText = "[m]: music ON";
      document.querySelector(".m").classList.remove("available");
      document.querySelector(".m").classList.add("selected");
    }
  }    
  //      (n = name change)
  if (event.key == "n"){
    characterName.innerText = generateName();
    result.innerText = "[n]: name change";
    document.querySelector(".n").classList.remove("available");
    document.querySelector(".n").classList.add("selected");
  }
  //     (o = outline )
  if (event.key == "o"){
    if (oPressed) {
      keyboardPad.style.outline = "none";
      result.innerText = "[o]: outline OFF";
      oPressed = false;
    } else {
    keyboardPad.style.outline = "dashed red";
    result.innerText = "[o]: outline ON";
    oPressed = true;
    document.querySelector(".o").classList.remove("available");
    document.querySelector(".o").classList.add("selected");
  }}  
  //     (p = pet generator)
  if (event.key == "p"){
    if (pPressed) {
      pet.style.display = "none";
      result.innerText = "[p]: pet generator OFF";
      pPressed = false;
    } else {
      // runs on the first time
      pet.style.display = "inline-flex";
      result.innerText = "[p]: pet generator ON";
      pPressed = true;
      document.querySelector(".p").classList.remove("available");
      document.querySelector(".p").classList.add("selected");
    }
  }      
  //      (r = rotate the character )
  if (event.key === 'r') {
    const rotate = Number(character.style.getPropertyValue('--rotate'));
    character.style.setProperty('--rotate', rotate + 45);
    result.innerText = "[r]: rotate the character";
    document.querySelector(".r").classList.remove("available");
    document.querySelector(".r").classList.add("selected");
  }  
  //      (s = stroke color change)
  if (event.key == "s"){
    let strokeChange = characterInner.style.borderColor = generateRandomColor();
    strokeChange;
    handLeft.style.backgroundColor = strokeChange;
    handRight.style.backgroundColor = strokeChange;
    result.innerText = "[s]: stroke color change";
    document.querySelector(".s").classList.remove("available");
    document.querySelector(".s").classList.add("selected");
  }
  //     (t = thickness change)
  if (event.key == "t"){
      if (tPressed) {
      characterInner.style.borderWidth = "3px";
      handLeft.style.height = "3px";
      handRight.style.height = "3px";
      handRight.style.right = "-33px";
      result.innerText = "[t]: thickness-original";
      tPressed = false;
    } else {
      // runs on the first time
      characterInner.style.borderWidth = "6px";
      handLeft.style.height = "6px";
      handRight.style.height = "6px";
      handRight.style.right = "-37px";
      result.innerText = "[t]: thickness-bold";
      tPressed = true;
    }  
    document.querySelector(".t").classList.remove("available");
    document.querySelector(".t").classList.add("selected");
  } 
  //     (w = width change)
  if (event.key == "w"){
    if (wPressed) {
      character.style.width = "150px";
      result.innerText = "[w]: width change OFF";
      wPressed = false;
    } else {
      // runs on the first time
      character.style.width = "250px";
      character.style.textAlign = "center";
      result.innerText = "[w]: width change ON";
      wPressed = true;
      document.querySelector(".w").classList.remove("available");
      document.querySelector(".w").classList.add("selected");
    }
  }  
  //     (z = z-index)
  if (event.key == "z"){
    if (zPressed) {
      character.style.zIndex = "999"
      line.style.zIndex = "99"
      result.innerText = "[z]: z-index forward";
      zPressed = false;
    } else {
      // runs on the first time
      character.style.zIndex = "98"
      line.style.zIndex = "99"
      result.innerText = "[z]: z-index backward";
      zPressed = true;
      document.querySelector(".z").classList.remove("available");
      document.querySelector(".z").classList.add("selected");
    }
  }        
  


  /* glyphs */

  //      (- = scale down) 
  if (event.key === '-') {
    const scale = Number(character.style.getPropertyValue('--scale'));
    character.style.setProperty('--scale', Math.max(scale - 0.1, 0));
    result.innerText = "[-]: reduce size";
    document.querySelector(".dash").classList.remove("available");
    document.querySelector(".dash").classList.add("selected");
  }
  //      (=/+ = scale up)
  if (event.key === '=') {
    const scale = Number(character.style.getPropertyValue('--scale'));
    character.style.setProperty('--scale', scale + 0.1);
    result.innerText = "[+]: increase size";
    document.querySelector(".plus").classList.remove("available");
    document.querySelector(".plus").classList.add("selected");
  }
  //      (left arrow = move left)
  if (event.key === 'ArrowLeft') {
    const translate = Number(character.style.getPropertyValue('--translate'));
    character.style.setProperty('--translate', translate - 5);
    pet.style.setProperty('--translate', 0);
    result.innerText = "[Left arrow]: move left";
    document.querySelector(".arrowL").classList.remove("available");
    document.querySelector(".arrowL").classList.add("selected");
  }
  //      (right arrow = move right)
  if (event.key === 'ArrowRight') {
    const translate = Number(character.style.getPropertyValue('--translate'));
    character.style.setProperty('--translate', translate + 5);
    pet.style.setProperty('--translate', 0);
    result.innerText = "[Right arrow]: move right";
    document.querySelector(".arrowR").classList.remove("available");
    document.querySelector(".arrowR").classList.add("selected");
  }
  //      (up arrow = move backward)
  if (event.key === 'ArrowUp') {
    const scaleLine = Number(line.style.getPropertyValue('--scale'));
    const translateLine = Number(line.style.getPropertyValue('--translate'));
    const scale = Number(character.style.getPropertyValue('--scale'));
    line.style.setProperty('--scale', Math.max(scaleLine - 0.3, 1));
    line.style.setProperty('--translate', translateLine - 1);
    character.style.setProperty('--scale', Math.max(scale - 0.2, 0));
    result.innerText = "[Up arrow]: move backward";
    document.querySelector(".arrowU").classList.remove("available");
    document.querySelector(".arrowU").classList.add("selected");
  }  
  //      (down arrow = move forward)
  if (event.key === 'ArrowDown') {
    const scaleLine = Number(line.style.getPropertyValue('--scale'));
    const translateLine = Number(line.style.getPropertyValue('--translate'));
    const scale = Number(character.style.getPropertyValue('--scale'));
    line.style.setProperty('--scale', scaleLine + 0.3);
    line.style.setProperty('--translate', translateLine + 1);
    character.style.setProperty('--scale', scale + 0.3);
    result.innerText = "[Down arrow]: move forward";
    document.querySelector(".arrowD").classList.remove("available");
    document.querySelector(".arrowD").classList.add("selected");
  }  

  //      (spacebar = jump)
  if (event.code === 'Space') {
    inner.classList.add('jumping');
    inner.addEventListener('animationend', () => {
      inner.classList.remove('jumping');
    }, { once: true });
    result.innerText = "[Spacebar]: jumping";
    document.querySelector(".spacebar").classList.remove("available");
    document.querySelector(".spacebar").classList.add("selected");
  }

  //      (enter = reset position)
  if (event.code === 'Enter'){
    result.innerText = "[Enter]: Reset position";
    character.style.setProperty('--translate', 0);
    document.querySelector(".enter").classList.remove("available");
    document.querySelector(".enter").classList.add("selected");
  }

  //      (capslock = alert)
  if (event.code === 'CapsLock'){
      document.querySelector(".capslock").style.backgroundColor = "red";
      alert('You just turned on [Caps Lock]. Please turn it off to resume.');
    } 

  //      (backspace = default)
  if (event.key == "Backspace"){
    // html
    jennieG.style.display = "none";
    keyboardPad.style.outline = "none";
    document.body.style.backgroundColor = "#FFD76B";
    gridContainer.style.display = "none";
    // character name
    characterName.innerText = "CSS";
    character.style.marginLeft = "0px";
    characterName.style.color = "black";
    characterName.style.fontFamily = "Fixedsys Excelsior 3.01";
    // character
    characterInner.style.backgroundColor = "white";
    characterInner.style["boxShadow"] = "none";
    characterInner.style.borderColor = "black";
    character.style.width = "150px";
    character.style.setProperty('--translate', 0);
    character.style.setProperty('--scale', 1);
    character.style.setProperty('--rotate', 0);
    characterInner.style.borderRadius = "50%";
    characterInner.style["boxShadow"] = "none";
    handLeft.style.display = "none";
    handRight.style.display = "none";
    // pet
    pet.style.display = "none";
    // line
    line.style.backgroundColor = "black";
    line.style.setProperty('--scale', 1);
    line.style.setProperty('--translate', 0);
    character.style.zIndex = "999"
      line.style.zIndex = "99"
    // others
    animationA.classList.remove('animationA');
    bgm.pause();
    inner.classList.remove('jumping');
    myCursor.style.display = "none";
    // result
    result.innerText = "[Backspace]: default";
    result.style.height = "30px";
    document.querySelector(".backspace").classList.remove("available");
    document.querySelector(".backspace").classList.add("selected");
    
  }  
});

document.addEventListener("keyup", function(event){
  if (event.code === 'CapsLock'){
    document.querySelector(".capslock").style.backgroundColor = "rgb(0, 0, 0, 0.6)";
  } 
});




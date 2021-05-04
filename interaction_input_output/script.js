// define variables
let aPressed = false;
let cPressed = false;
let ePressed = false;
let fPressed = false;
let hPressed = false;
let mPressed = false;
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
let myCursor = document.querySelector('#cursor');



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
  //    (enter = start)
  if (event.key == "Enter"){
    enterStart.style.display = "none";
    line.style.display = "block";
    character.style.display = "inline-flex";
    result.style.display = "block";
    document.querySelector('.title').style.display = "none";
    document.body.style.backgroundColor = "white";
  }
  //      (` = opacity 0%)
  if (event.key == "`"){
    document.body.style.opacity = "0%";
    result.innerText = "[`]: opacity 0%";
  }    
  //      (1 = opacity 10%)
  if (event.key == "1"){
    document.body.style.opacity = "10%";
    result.innerText = "[1]: opacity 10%";
  }  
  //      (2 = opacity 20%)
  if (event.key == "2"){
    document.body.style.opacity = "20%";
    result.innerText = "[2]: opacity 20%";
  }  
  //      (3 = opacity 30%)
  if (event.key == "3"){
    document.body.style.opacity = "30%";
    result.innerText = "[3]: opacity 30%";
  }  
  //      (4 = opacity 40%)
  if (event.key == "4"){
    document.body.style.opacity = "40%";
    result.innerText = "[4]: opacity 40%";
  }  
  //      (5 = opacity 50%)
  if (event.key == "5"){
    document.body.style.opacity = "50%";
    result.innerText = "[5]: opacity 50%";
  }      
  //      (6 = opacity 60%)
  if (event.key == "6"){
    document.body.style.opacity = "60%";
    result.innerText = "[6]: opacity 60%";
  }  
  //      (7 = opacity 70%)
  if (event.key == "7"){
    document.body.style.opacity = "70%";
    result.innerText = "[7]: opacity 70%";
  }  
  //      (8 = opacity 80%)
  if (event.key == "8"){
    document.body.style.opacity = "80%";
    result.innerText = "[8]: opacity 80%";
  }  
  //      (9 = opacity 90%)
  if (event.key == "9"){
    document.body.style.opacity = "90%";
    result.innerText = "[9]: opacity 90%";
  }  
  //      (0 = opacity 100%)
  if (event.key == "0"){
    document.body.style.opacity = "100%";
    result.innerText = "[0]: opacity 100%";
  }   


  /* alphabet */

  //     (a = animation infinite loop)
  if (event.key == "a"){
    if (aPressed) {
      // runs on the second time f is pressed
    animationA.classList.remove('animationA');
    result.innerText = "[a]: animation infinite loop OFF";
    aPressed = false;
    } else {
      // runs on the first time f is pressed
    animationA.classList.add('animationA');
    animationA.style.position = "absolute";
    result.innerText = "[a]: animation infinite loop ON";
    aPressed = true;
    }
  }     
  //     (b = background change)
  if (event.key == "b"){
    document.body.style.backgroundColor = generateRandomColor();
    result.innerText = "[b]: background color change";
  }
  //      (c = cursor change)
  if (event.key == "c"){
    if (cPressed) {
      // runs on the second time
    myCursor.style.display = "none";
    result.innerText = "[c]: cursor change OFF";
    cPressed = false;
    } else {
      // runs on the first time
    myCursor.style.display = "inline-flex";
    myCursor.style.position = "absolute";
    window.addEventListener("mousemove", function(event){
    myCursor.style.top = (event.pageY + 20) + "px";
    myCursor.style.left = (event.pageX + 20)+ "px";
    });
    result.innerText = "[c]: cursor change ON";
    cPressed = true;
    }
  }
  // d = default (see the last row)
  //     (e = edge change)
  if (event.key == "e"){
    
    if (ePressed) {
      // runs on the second time
    characterInner.style.borderRadius = "50%";
    result.innerText = "[e]: edge change";
    ePressed = false;
    } else {
      // runs on the first time
    characterInner.style.borderRadius = "0%";
    result.innerText = "[e]: edge change";
    ePressed = true;
    }
  }  
  //     (f = font change)
  if (event.key == "f"){
    if (fPressed) {
      // runs on the second time f is pressed
      characterName.style.fontFamily = "fixedsys excelsior 3.01";
      result.innerText = "[f]: font family change";
      fPressed = false;
    } else {
      // runs on the first time f is pressed
      characterName.style.fontFamily = "futura";
      result.innerText = "[f]: font family change";
      fPressed = true;
    }
  };  
  //     (g = )
  if (event.key == "g"){

    result.innerText = "[g]:";
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
    }
  }  
  //     (i = inner color change)
  if (event.key == "i"){
    let characterColorChange = characterInner.style.backgroundColor = generateRandomColor();
    characterColorChange;
    characterName.style.color = characterColorChange;
    result.innerText = "[i]: inner colors change";
  }  
  //     (j = )
  if (event.key == "j"){

    result.innerText = "[j]: Jennie's favorite";
  }
  //     (k = )
  if (event.key == "k"){

    result.innerText = "[k]:";
  }       
  //      (l = line color change)
  if (event.key == "l"){
    line.style.backgroundColor = generateRandomColor();
    result.innerText = "[l]: line color change";
  }
  //     (m = )
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
    }
  }    
  //      (n = name change)
  if (event.key == "n"){
    characterName.innerText = generateName();
    result.innerText = "[n]: name change";
  }
  //     (o = )
  if (event.key == "o"){

    result.innerText = "[o]:";
  }  
  //     (p = pet generator)
  if (event.key == "p"){
    pet.style.display = "inline-flex";
    result.innerText = "[p]: pet generator";
  }     
  //     (q = question)
  if (event.key == "q"){

    result.innerText = "[q]: question";
  }     
  //      (r = rotate the character )
  if (event.key === 'r') {
    const rotate = Number(character.style.getPropertyValue('--rotate'));
    character.style.setProperty('--rotate', rotate + 45);
    result.innerText = "[r]: rotate the character";
  }  
  //      (s = stroke color change)
  if (event.key == "s"){
    let strokeChange = characterInner.style.borderColor = generateRandomColor();
    strokeChange;
    result.innerText = "[s]: stroke color change";
  }
  //     (t = )
  if (event.key == "t"){

    result.innerText = "[t]:";
  }  
  //     (u = )
  if (event.key == "u"){

    result.innerText = "[u]:";
  }  
  //     (v = )
  if (event.key == "v"){

    result.innerText = "[v]:";
  }   
  //     (w = )
  if (event.key == "w"){

    result.innerText = "[w]:";
  }  
  //     (x = )
  if (event.key == "x"){

    result.innerText = "[x]:";
  }  
  //     (y = )
  if (event.key == "y"){

    result.innerText = "[y]:";
  }  
  //     (z = )
  if (event.key == "z"){

    result.innerText = "[z]:";
  }        
  
  /* glyphs */
  //     (, = )
  if (event.key == ","){

    result.innerText = "[,]:";
  }  
  //     (. = )
  if (event.key == "."){

    result.innerText = "[.]:";
  }
  //     (/ = )
  if (event.key == "/"){

    result.innerText = "[/]:";
  }  
  //     (; = )
  if (event.key == ";"){

    result.innerText = "[;]:";
  }
  //     (' = )
  if (event.key == "'"){

    result.innerText = "[']:";
  }  
  //     ([ = )
  if (event.key == "["){

    result.innerText = "[[]:";
  }  
  //     (] = )
  if (event.key == "]"){

    result.innerText = "[]]:";
  }             
  //      (- = scale down) 
  if (event.key === '-') {
    const scale = Number(character.style.getPropertyValue('--scale'));
    character.style.setProperty('--scale', Math.max(scale - 0.1, 0));
    result.innerText = "[-]: reduce size";
  }
  //      (=/+ = scale up)
  if (event.key === '=') {
    const scale = Number(character.style.getPropertyValue('--scale'));
    character.style.setProperty('--scale', scale + 0.1);
    result.innerText = "[+]: increase size";
  }
  //      (left arrow = move left)
  if (event.key === 'ArrowLeft') {
    const translate = Number(character.style.getPropertyValue('--translate'));
    character.style.setProperty('--translate', translate - 5);
    pet.style.setProperty('--translate', 0);
    result.innerText = "[Left arrow]: move left";
  }
  //      (right arrow = move right)
  if (event.key === 'ArrowRight') {
    const translate = Number(character.style.getPropertyValue('--translate'));
    character.style.setProperty('--translate', translate + 5);
    pet.style.setProperty('--translate', 0);
    result.innerText = "[Right arrow]: move right";
  }
  //      (up arrow = move backward)
  if (event.key === 'ArrowUp') {
    const scaleLine = Number(line.style.getPropertyValue('--scale'));
    const translateLine = Number(line.style.getPropertyValue('--translate'));
    const scale = Number(character.style.getPropertyValue('--scale'));
    line.style.setProperty('--scale', Math.max(scaleLine - 0.3, 1));
    line.style.setProperty('--translate', translateLine - 1);
    character.style.setProperty('--scale', Math.max(scale - 0.2, 0));
    result.innerText = "[Down arrow]: move backward";
  }  
  //      (down arrow = move forward)
  if (event.key === 'ArrowDown') {
    const scaleLine = Number(line.style.getPropertyValue('--scale'));
    const translateLine = Number(line.style.getPropertyValue('--translate'));
    const scale = Number(character.style.getPropertyValue('--scale'));
    line.style.setProperty('--scale', scaleLine + 0.3);
    line.style.setProperty('--translate', translateLine + 1);
    character.style.setProperty('--scale', scale + 0.3);
    result.innerText = "[Up arrow]: move forward";
  }  
  //      (backspace = turn on/off light (toggle))
  if (event.key === 'Backspace') {
    document.body.classList.toggle("disappear");
    result.innerText = "[Backspace]: turn on/off the light";
  }

  //      (spacebar = jump)
  if (event.code === 'Space') {
    inner.classList.add('jumping');
    inner.addEventListener('animationend', () => {
      inner.classList.remove('jumping');
    }, { once: true });
    result.innerText = "[Spacebar]: jumping";
  }


  //      (d = default)
  if (event.key == "d"){
    // html
    document.body.style.backgroundColor = "white";
    // character name
    characterName.innerText = "Jennie";
    characterName.style.color = "black";
    characterName.style.fontFamily = "Fixedsys Excelsior 3.01";
    // character
    character.style.backgroundColor = "white";
    character.style.borderColor = "black";
    character.style.setProperty('--translate', 0);
    character.style.setProperty('--scale', 1);
    character.style.setProperty('--rotate', 0);
    characterInner.style.borderRadius = "50%";
    handLeft.style.display = "none";
    handRight.style.display = "none";
    // line
    line.style.backgroundColor = "black";
    line.style.setProperty('--scale', 1);
    line.style.setProperty('--translate', 0);
    // others
    animationA.classList.remove('animationA');
    bgm.pause();
    inner.classList.remove('jumping');
    myCursor.style.display = "none";
    // result
    result.innerText = "[d]: default";
    
  }  
})






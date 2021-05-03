// define variables

let result = document.querySelector('#result');
let enterStart = document.querySelector('#pressEnter');
let line = document.querySelector('#line');
let character = document.querySelector('#character');
  character.style.setProperty('--translate', 0);
  character.style.setProperty('--scale', 1);
  character.style.setProperty('--rotate', 0);
let characterName = document.querySelector('#charactername');
let ten = 10;

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
  //     (b = background change)
  if (event.key == "b"){
    document.body.style.backgroundColor = generateRandomColor();
    result.innerText = "[b]: background change";
  }
  //      (c = character color change)
  if (event.key == "c"){
    let characterColorChange = character.style.backgroundColor = generateRandomColor();
    characterColorChange;
    characterName.style.color = characterColorChange;
    result.innerText = "[c]: character and name color change";
  }

  //      (l = line color change)
  if (event.key == "l"){
    line.style.backgroundColor = generateRandomColor();
    result.innerText = "[l]: line color change";
  }
  //      (n = name change)
  if (event.key == "n"){
    characterName.innerText = generateName();
    result.innerText = "[n]: name change";
  }
  //      (r = rotate the character )
  if (event.key === 'r') {
    const rotate = Number(character.style.getPropertyValue('--rotate'));
    character.style.setProperty('--rotate', rotate + 45);
    result.innerText = "[r]: rotate the character";
  }  
  //      (s = stroke color change)
  if (event.key == "s"){
    character.style.borderColor = generateRandomColor();
    result.innerText = "[s]: stroke color change";
  }
  //      (left arrow = move left)
  if (event.key === 'ArrowLeft') {
    const translate = Number(character.style.getPropertyValue('--translate'));
    character.style.setProperty('--translate', translate - 5);
    result.innerText = "[left arrow]: move left";
  }
  //      (right arrow = move right)
  if (event.key === 'ArrowRight') {
    const translate = Number(character.style.getPropertyValue('--translate'));
    character.style.setProperty('--translate', translate + 5);
    result.innerText = "[right arrow]: move right";
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


  //      (d = default)
  if (event.key == "d"){
    characterName.innerText = "Jennie";
    line.style.backgroundColor = "black";
    characterName.style.color = "black";
    character.style.backgroundColor = "white";
    character.style.borderColor = "black";
    document.body.style.backgroundColor = "white";
    character.style.setProperty('--translate', 0);
    character.style.setProperty('--scale', 0);
    result.innerText = "[d]: default";
  }  
})






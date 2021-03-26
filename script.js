/* pop-up box for introduction */
alert('Hello, welcome to Core 2 Interaction.');

/* dark mode */
function darkMode() {
  var body = document.body;
  body.classList.toggle("darkmode");
  
  /* button- darkmode -> lightmode */
  var button = document.getElementById("button");
  if(button.innerHTML == "Dark Mode") {
    button.innerHTML = "Light Mode";
    alert('Hello, welcome to dark Core 2 Interaction.');
  } else {
    button.innerHTML = "Dark Mode"
    alert('Hello, welcome back to light Core 2 Interaction.');
  }
}
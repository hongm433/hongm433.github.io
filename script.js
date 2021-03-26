/* pop-up box for introduction */
alert('Hello, welcome to Core 2 Interaction.');

/* dark mode */
function darkMode() {
  var body = document.body;
  /* make Dark Mode button work */
  body.classList.toggle("darkmode");
  
  /* button- darkmode -> lightmode vice versa*/
  var button = document.getElementById("button");
  if(button.innerHTML == "Dark Mode") {
    /* change the button name when I am in Dark Mode */
    button.innerHTML = "Light Mode";
    /* alert when I click Dark Mode button */
    alert('Hello, welcome to dark Core 2 Interaction.');
  } else {
    button.innerHTML = "Dark Mode"
    /* alert when I click Light Mode button when I want to go back */
    alert('Hello, welcome back to light Core 2 Interaction.');
  }
}
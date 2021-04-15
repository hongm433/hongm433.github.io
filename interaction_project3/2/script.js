// load the airtable library, call it "Airtable";
var Airtable = require("airtable");

// use airtable library, connect to our base using API key
var base = new Airtable({apiKey: 'keypCzPwGQ1MNfwGP'}).base('applYB2UaWCn7ypjy');

//get our collection base, select all the records
//specify function that will recieve the data
base("tarot_cards").select({}).eachPage(gotPageOfCards, gotAllCards);

// an empty array to hold our data
var cards = [];

// callback function that receives our data
function gotPageOfCards(records, fetchNextPage) {
  console.log("gotPageOfCards()");
// add the records from this page to our array
cards.push(...records);
// request more pages
fetchNextPage();
}

// call back function that is called when all pages are loaded
function gotAllCards(err) {
  console.log("gotAllCards()");

// report an error, you'd want to do something better than this in production
 if (err) {
   console.log("error loading data");
   console.error(err);
   return;
 }

// call functions to log and show the books
 consoleLogCards();
 showCards();
}

// just loop through the books and console.log them
function consoleLogCards() {
  console.log("consoleLogCards()");
  cards.forEach((card) => {
    console.log("Card:", card);
  });
}

// look through our airtable data, create elements
function showCards() {
  console.log("showCards()");

//sort the cards
const sortedCards = cards.sort((a, b) => {
   if (a.fields.number < b.fields.number) {
       return -1;
   } else if (a.fields.number > b.fields.number) {
       return 1;
   } else {
   return 0;
 };
});

sortedCards.forEach((card) => {

    // ** creating a new div container
    // ** this is where our cards go on
    var cardContainer = document.createElement("div");
    cardContainer.classList.add("card-container");
    document.querySelector(".container").append(cardContainer);

    // ** add image to our Container
    var cardImage = document.createElement("img");
    cardImage.classList.add("card-image");
    cardImage.src = card.fields.cover_image[0].url;
    cardContainer.append(cardImage);

    // ** add event listner
    // ** when user clicks on container
    // ** image will appear or disappear

    // cardContainer.addEventListener("click", function(){
    //   // ** toggle = light switch
    //   cardImage.classList.toggle("active");

    // ** get filter from airtable
    // ** loop through the array and add each filter as
    // ** a class to the container
    var cardDeck = card.fields.name_of_deck;
      cardDeck.forEach(function(name_of_deck) {
      cardContainer.classList.add(name_of_deck);
    });

    // ** add event listener to our filter
    // ** to add an active class to our card

    // ** 1
    var filterRider = document.querySelector('.rider-waite_tarot_deck');
    filterRider.addEventListener("click", function(){
      if (cardContainer.classList.contains("rider-waite_tarot_deck")) {
        cardContainer.style.display = "inline-flex";
      } else {
        cardContainer.style.display = "none";
      }
    });

    // ** 2
    var filterMarseilles = document.querySelector('.tarot_of_marseilles');
    filterMarseilles.addEventListener("click", function(){
      if (cardContainer.classList.contains("tarot_of_marseilles")) {
        cardContainer.style.display = "inline-flex";
      } else {
        cardContainer.style.display = "none";
      }
    });

    // ** 3
    var filterMinor = document.querySelector('.minor_arcana');
    filterMinor.addEventListener("click", function() {
      if (cardContainer.classList.contains("minor_arcana")) {
        cardContainer.style.display = "inline-flex";
      } else {
        cardContainer.style.display = "none";
      }
    });

    // ** 4
    var filterRussian = document.querySelector('.russian_tiertarock');
    filterRussian.addEventListener("click", function() {
      if (cardContainer.classList.contains("russian_tiertarock")) {
        cardContainer.style.display = "inline-flex";
      } else {
        cardContainer.style.display = "none";
      }
    });

    // ** 5
    var filterBavarian = document.querySelector('.bavarian_tarock');
    filterBavarian.addEventListener("click", function() {
      if (cardContainer.classList.contains("bavarian_tarock")) {
        cardContainer.style.display = "inline-flex";
      } else {
        cardContainer.style.display = "none";
      }
    });

    // ** 6
    var filterIndustrie = document.querySelector('.industrie_und_gluck');
    filterIndustrie.addEventListener("click", function() {
      if (cardContainer.classList.contains("industrie_und_gluck")) {
        cardContainer.style.display = "inline-flex";
      } else {
        cardContainer.style.display = "none";
      }
    });

    // ** 7
    var filterNouveau = document.querySelector('.tarot_nouveau');
    filterNouveau.addEventListener("click", function() {
      if (cardContainer.classList.contains("tarot_nouveau")) {
        cardContainer.style.display = "inline-flex";
      } else {
        cardContainer.style.display = "none";
      }
    });

    // ** Reset
    var filterReset = document.querySelector('.js-reset');
    filterReset.addEventListener("click", function(){
      cardContainer.style.display = "inline-flex";
    })

    // ** highlight
    var ind = document.getElementsByClassName("ind");

    function handleClick(event) {
      console.log(event.target);
      console.log(event.target.classList);

      if (event.target.classList[1] === "clicked") {
        event.target.classList.remove("clicked");
      } else {
        for (var i = 0; i < ind.length; i++) {
          ind[i].classList.remove("clicked");
        }
        event.target.classList.add("clicked");
      }
    }
    function inIt() {
      for (var i = 0; i < ind.length; i++) {
        ind[i].addEventListener("click", handleClick);
      }
    }
    inIt();


    // ** click -> selected
    // var selectedCard = document.querySelector('.card-container');
    //     selectedCard.onclick = function() {
    //     selectedCard.style.opacity = .3;
    // }
    document.querySelectorAll('.card-container').forEach(card => {
      card.addEventListener('click', event => {
        cardContainer.onclick = function() {
        cardContainer.style.opacity = .5;
      }
      })
    })
  })
};
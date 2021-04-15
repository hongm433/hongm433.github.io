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

    // ** create Shopping Cart
    var cart = document.createElement("aside");
    cart.classList.add("cart");
    cardContainer.append(cart);

    var cartItem = document.createElement("div");
    cartItem.classList.add("cart-items");
    cart.append(cartItem);

    // ** select cards
    activateCart();

    function activateCart() {
      let cart = [];

      function CartItem({ element, original }) {
        this.element = element;
        this.original = original;
      }

      CartItem.prototype.remove = function() {
        this.element.removr();
        this.original.style.display = '';
        cart = cart.filter((item) => item !== this);
      };

      const nextButton = document.createElement('button');
      nextButton.className = 'cart-button cart-proceed';
      nextButton.append('Next');
      nextButton.addEventListener('click', clearCart);

      document.getElementsByClassName('card-image').querySelectorAll('.cart-container').forEach((container) => { container.addEventListener('click', addToCart(container));
    });

    function addToCart(selection) {
      return function(event) {
        if (cart.length < 3) {
          const imageClone = event.target.cloneNode(true);

          const imageContainer = document.createElement('div');
          imageContainer.className = 'image-container';
          imageContainer.appendChild(imageClone);

          const removeButtonn = document.createElement('button');
          removeButtonn.className = 'cart-button cart-item-remove';
          removeButtonn.textContent = 'Remove';

          const cartItemEl = document.createElement('div');
          cartItemEl.className = 'cart-item';
          cartItemEl.append(imageContainer, removeButton);

          const cartItem = new CartItem({
            element: cartItemEl,
            original: selection
          });
          cart.push(cartItem);

          removeButton.addEventListener('click', () => {
            cartItem.remove();
            if (document.body.contains(nextButton)) {
              nextButton.remove();
            }
          });

          selection.style.display = 'none';

          document.getElementById('cart-items').appendChild(cartItem.element);

          if (cart.length === 3) {
            document.getElementById('cart').appendChild(nextButton);
          }
        }
      }
    }

    function clearCart() {
      cart.forEach((cartItem) => cartItem.remove());
      nextButton.remove();
      }
    }
      if (parent) {
        parent.appendChild(fragment);
        return parent;
      } else {
        return fragment;
      };

      
    // ** click -> selected
    // var selectedCard = document.querySelector('.card-image');

    //     selectedCard.onclick = function() {
    //     // selectedCard[i].style.opacity = .6;
    //     alert('hi');
    // }


    // if (document,readyState == 'loading') {
    //   document.addEventListener('DOMcontentLoaded', ready)
    // } else {
    //   ready()
    // }

    // function ready() {}



    /* add */

    // var addToCartButtons = document.getElementsByClassName('card-image')
    // for (var i = 0; i < removeCartItemButtons.length; i++) {
    //   var button = addToCartButtons[i]
    //   button.addEventListener('click', addToCartClicked)
    // }

    // function addToCartClicked(event) {
    //   var button = event.target
    //   var shopItem = button.parentElement
    //   var imageSrc = shopItem.getElementsByClassName('card-image')[0].src
    //   addItemToCart(imageSrc)
    // }

    // function addItemToCart(imageSrc) {
    //   var cartRow = document.createElement('div')
    //   var cartItems = document.getElementsByClassName('cart')[0]
    //   var cartRowContents = `
    //   <div class="cart">
    //   <h2 class="mycard">My cards</h2>
    //   <div class="buttons">
    //     <div class="1 buttonind">
    //       <button class="button1" type="button">remove</button>
    //     </div>
    //     <div class="2 buttonind">
    //       <button class="button1" type="button">remove</button>
    //     </div>
    //     <div class="3 buttonind">
    //       <button class="button1" type="button">remove</button>
    //     </div>
    //   </div>
    // </div>
    //   `
    //   cartRow.innerHTML = cartRowContents
    //   cartItems.append(cartRow)
    // }

    // document.getElementsByClassName('card-image').onclick = addItemToCart;
    // var cardAdd = document.createElement("img");
    // cardAdd.classList.add("card-add");
    // cardAdd.src = "images/add.png"
    // cardContainer.append(cardAdd);


    // cardContainer.addEventListener('mouseenter', ()=> cardContainer.img = cardAdd);
    // cardContainer.addEventListener('mouseleave', ()=> cardContainer.img = cardAdd);


    // function // onclick function // 
    // const selectedCards = [];
    // const selectedCards = [];
    // document.getElementsByClassName('card-image')[0].onclick = function() {

    // };
    
  })
};
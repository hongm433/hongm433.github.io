
/* recipe 1 */
// make DIV tag
var div1 = document.createElement("div");
div1.classList.add("recipe1", "recipe", "section");

var maindiv = document.getElementsByClassName('recipes')[0];
maindiv.appendChild(div1);

// insert image
var img1 = document.createElement("img");
img1.classList.add("recipe-img");
img1.src = "https://sjnfzdfjrjgl1655541.cdn.ntruss.com/goods/3/2019/07/156_tmp_483b4b1bfca8c851ddea5f338f83fa928451view.jpg";

div1.appendChild(img1);

// insert title
var title1 = document.createElement("h2");
title1.classList.add("recipe-title")
title1.innerText = "Spanish Garlic Shrimp";

div1.appendChild(title1);


/* recipe 2 */
// make DIV tag
var div2 = document.createElement("div");
div2.classList.add("recipe2", "recipe", "section");

maindiv.appendChild(div2);

//insert image
var img2 = document.createElement("img");
img2.classList.add("recipe-img");
img2.src = "https://feelgoodfoodie.net/wp-content/uploads/2016/10/Detox-Kale-Smoothie-5.jpg";

div2.appendChild(img2);

// insert title
var title2 = document.createElement("h2");
title2.classList.add("recipe-title")
title2.innerText = "Kale Juice Cleanse";

div2.appendChild(title2);


/* recipe 3 */
// make DIV tag
var div3 = document.createElement("div");
div3.classList.add("recipe3", "recipe", "section");

maindiv.appendChild(div3);

//insert image
var img3 = document.createElement("img");
img3.classList.add("recipe-img");
img3.src = "https://dinnerthendessert.com/wp-content/uploads/2016/04/Ultimate-Meat-Lasagna-3-1.jpg";

div3.appendChild(img3);

// insert title
var title3 = document.createElement("h2");
title3.classList.add("recipe-title")
title3.innerText = "Lasagna";

div3.appendChild(title3);


/* addEventListener -> recipe */


// recipe 1

// make P tag for ingredient title
var ingredient1 = document.createElement("p");
ingredient1.classList.add("ingredient-title")
div1.appendChild(ingredient1);
ingredient1.style.display = "none";
// make P tag for ingredients
var p1 = document.createElement("p");
p1.classList.add("ingredients")
div1.appendChild(p1);
p1.style.display = "none";
// make P tag for direction title
var direction1 = document.createElement("p");
direction1.classList.add("direction-title")
div1.appendChild(direction1);
direction1.style.display = "none";
// make P tag for direction
var p1d = document.createElement("p");
p1d.classList.add("directions")
div1.appendChild(p1d);
p1d.style.display = "none";

//insert texts
ingredient1.innerText = "Ingredients";
function gambas(garlic, shrimp, oliveoil, pepperoncini){
p1.innerText = garlic + " cloves garlic / " + shrimp+ " pound frozen large shrimp / " + oliveoil + " cup extra-virgin olive oil / " + pepperoncini +" pieces of dried pepperoncini / a little bit of salt";
}
gambas (4, 20, 1/4, 5);
direction1.innerText = "Directions";
p1d.innerText = "1. Slice garlic thinly. \r\n2. Pour extra-virgin olive oil in a skillet\r\n3. Put garlic and shrimp oil in the skillet, and add some salt and pepperoncini\r\n4. When every ingredient is cooked, enjoy your Gambas with bread."
// click event
div1.addEventListener('click', function(){
  img1.style.width = "100px";
  img1.style.height = "100px";
  p1.style.display = "block";
  ingredient1.style.display = "block";
  direction1.style.display = "block";
  p1d.style.display = "block";
})



// recipe 2

// make P tag for ingredient title
var ingredient2 = document.createElement("p");
ingredient2.classList.add("ingredient-title")
div2.appendChild(ingredient2);
ingredient2.style.display = "none";
// make P tag for ingredients
var p2 = document.createElement("p");
p2.classList.add("ingredients")
div2.appendChild(p2);
p2.style.display = "none";
// make P tag for direction title
var direction2 = document.createElement("p");
direction2.classList.add("direction-title")
div2.appendChild(direction2);
direction2.style.display = "none";
// make P tag for direction
var p2d = document.createElement("p");
p2d.classList.add("directions")
div2.appendChild(p2d);
p2d.style.display = "none";

//insert texts
ingredient2.innerText = "Ingredients";
function kalejuice(kale, greengrape, pineapple, coconutwater){
p2.innerText = kale + "leaf of kale / " + greengrape+ " green grapes / " + pineapple + " piece of pineapple / " + coconutwater +" ml of coconut water";
}
kalejuice (3, 5, 1/2, 250);
direction2.innerText = "Directions";
p2d.innerText = "1. Add coconut water to your blender. \r\n2. Wash kale and green grapes, and add them with pineapple to the blender. \r\n3. Blend away! Enjoy your juice!"
// click event
div2.addEventListener('click', function(){
  img2.style.width = "100px";
  img2.style.height = "100px";
  p2.style.display = "block";
  ingredient2.style.display = "block";
  direction2.style.display = "block";
  p2d.style.display = "block";
})



// recipe 3

// make P tag for ingredient title
var ingredient3 = document.createElement("p");
ingredient3.classList.add("ingredient-title")
div3.appendChild(ingredient3);
ingredient3.style.display = "none";
// make P tag for ingredients
var p3 = document.createElement("p");
p3.classList.add("ingredients")
div3.appendChild(p3);
p3.style.display = "none";
// make P tag for direction title
var direction3 = document.createElement("p");
direction3.classList.add("direction-title")
div3.appendChild(direction3);
direction3.style.display = "none";
// make P tag for direction
var p3d = document.createElement("p");
p3d.classList.add("directions")
div3.appendChild(p3d);
p3d.style.display = "none";

//insert texts
ingredient3.innerText = "Ingredients";
function lasagna(lagu, eggplant, cheese){
p3.innerText = lagu + "cup of lagu sauce / " + eggplant+ " eggplants / " + cheese + "g of mozzarella cheese / ";
}
lasagna (1, 2, 500);
direction3.innerText = "Directions";
p3d.innerText = "1. On the oven pan, layer eggplant, lagu sauce, and cheese in order. \r\n2. Repeat it three times. \r\n3. Put it in the oven and bake it for 10 minutes. If cheese does not melt, bake it more."
// click event
div3.addEventListener('click', function(){
  img3.style.width = "100px";
  img3.style.height = "100px";
  p3.style.display = "block";
  ingredient3.style.display = "block";
  direction3.style.display = "block";
  p3d.style.display = "block";
})




//scroll

new fullpage('#full-page', {
  licenseKey: ''
});
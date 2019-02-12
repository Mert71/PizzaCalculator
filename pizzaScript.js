
var pizzaName = document.getElementById('pizzaName');
var pizzaImage = document.getElementById('pizzaImage');
var pizzaPrice = document.getElementById('pizzaPrice');
var totalPrice = 0;
var totalPriceWithSlicing = 0;
var selectedPizza = null;
var selectedTopping = null;
var selectedSlicing = null;
var slicingAlreadySelected = false;
var selectedSize = null;
var sizeinUse = false;
var toppingIsSelected = false;


var currency = "$";

var pizzas = [
  {
    Name:'Margharita',
    Price: 8.50,
    selected: false,
  },
  {
   Name:"Kebab",
   Price: 8.50,
   selected: false,

 },
 {
   Name:"Funghi",
   Price: 11.50,
   selected: false,

 },
 {
   Name:"Pollo",
   Price: 10,
   selected: false,
 }
];

var toppings = [
  {
    Name:'Extra cheese',
    Price: 1.5,
    selected: false,

  },
  {
   Name:"Extra chicken",
   Price: 2,
   selected: false,

 },
 {
   Name:"BBQ sauce",
   Price: 0.75,
   selected: false,

 },
 {
   Name:"Olives",
   Price: 0.5,
   selected: false,

 }
];

 var size = [
   {
     Name:'Normal',
     Factor: 1,
     selected: false,

   },
   {
    Name:"Medium",
    Factor: 1.5,
    selected: false,

  },
  {
    Name:"Large",
    Factor: 2,
    selected: false,

  },
  {
    Name:"King",
    Factor: 3,
    selected: false,

  }
];

var slicing = [
  {
    Name:'Unsliced',
    Price: 0,
    selected: false,

  },
  {
   Name:"Two Slice",
   Price: 0.5,
   selected: false,

 },
 {
   Name:"Four Slice",
   Price: 0.75,
   selected: false,

 },
 {
   Name:"Six Slice",
   Price: 1,
   selected: false,

 }
];

//Pizzalist ophalen
var pizzalist = document.getElementById('pizzaNameList');

for (var i = 0; i < pizzas.length; i++) {
        // Create the list item:
        var item = document.createElement('li');

        // Set its contents:
        item.appendChild(document.createTextNode(pizzas[i].Name));

        // Add it to the list:
        pizzalist.appendChild(item);

        //add id to the pizza'switch
        item.setAttribute("id" , "p" + i)
    }


    //get all pizza's by // ID
    var pmar = document.getElementById('p0');
    var pkeb = document.getElementById('p1');
    var pfun = document.getElementById('p2');
    var ppol = document.getElementById('p3');

//Topping ophalen
var toppinglist = document.getElementById('toppingNameList');

for (var i = 0; i < toppings.length; i++) {
        // Create the list item:
        var item = document.createElement('li');

        // Set its contents:
        item.appendChild(document.createTextNode(toppings[i].Name));

        //add id to the topping
        item.setAttribute("id" , "t" + i);
        item.onclick = function(){ pickTopping( "t" + i); }

        // Add it to the list:
        toppinglist.appendChild(item);

    }


          //get all toppings by id
          var tche = document.getElementById('t0');
          var tchi = document.getElementById('t1');
          var tbbq = document.getElementById('t2');
          var toli = document.getElementById('t3');


  //size ophalen
  var sizelist = document.getElementById('sizeNameList');

  for (var i = 0; i < size.length; i++) {
            // Create the list item:
            var item = document.createElement('li');

            // Set its contents:
            item.appendChild(document.createTextNode(size[i].Name));

            // Add it to the list:
            sizelist.appendChild(item);

            //add id to the topping
            item.setAttribute("id" , "s" + i)
        }
            //get all toppings by id
            var snor = document.getElementById('s0');
            var smed = document.getElementById('s1');
            var slar = document.getElementById('s2');
            var skin = document.getElementById('s3');

    //slicing ophalen
      var slicinglist = document.getElementById('slicingNameList');

          for (var i = 0; i < slicing.length; i++) {
                      // Create the list item:
          var item = document.createElement('li');

                // Set its contents:
                      item.appendChild(document.createTextNode(slicing[i].Name));

          // Add it to the list:
              slicinglist.appendChild(item);

            //add id to the topping
            item.setAttribute("id" , "sl" + i)
                  }
            //get all toppings by id
          var slun = document.getElementById('sl0');
          var sltwo = document.getElementById('sl1');
          var slfou = document.getElementById('sl2');
          var slsix = document.getElementById('sl3');


//PIZZA ONCLICK START!!!!!!!!!!!!!!!!!!!!!!!!!!!//

// Margherita onclick
function margharitaClick() {
  pizzaName.innerHTML = "Pizza Margharita";
  pizzaImage.src = "img/marg.png";
  selectedPizza = pizzas[0];
  totalPrice = selectedPizza.Price;
  pizzaPrice.innerHTML = currency + totalPrice;
}

    pmar.onclick = function(){
      margharitaClick();
    }

//Kebab onclick
function kebabClick(){
  pizzaName.innerHTML = "Pizza Kebab";
  pizzaImage.src = "img/kebab.png";
  selectedPizza = pizzas[1];
  totalPrice = selectedPizza.Price;
  pizzaPrice.innerHTML = currency + totalPrice;
}

    pkeb.onclick = function(){
      kebabClick();
    }

//funghi onclick
function funghiClick(){
    pizzaName.innerHTML = "Pizza Funghi";
    pizzaImage.src = "img/funghi.png";
    selectedPizza = pizzas[2];
    totalPrice = selectedPizza.Price;
    pizzaPrice.innerHTML = currency + totalPrice;
  }

        pfun.onclick=function(){
          funghiClick();
        }

  //pollo onclick
  function polloClick(){
    pizzaName.innerHTML = "Pizza Pollo";
    selectedPizza = pizzas[3];
    totalPrice = selectedPizza.Price;
    pizzaPrice.innerHTML = currency + totalPrice;
  }

      ppol.onclick = function(){
        polloClick();
      }


  //START OF TOPPING FUNCTIONS.

function pickTopping(toppingNumber) {
  console.log("Clicked topping: " . toppingNumber);
}

//Cheeseclick
  function cheeseClick(){
    selectedTopping = toppings[0];
    totalPrice = totalPrice + selectedTopping.Price;
    pizzaPrice.innerHTML = currency + totalPrice
    toppingIsSelected = true;
  }

      tche.onclick = function (){
        cheeseClick();
      }

//Chicken click
  function chickenClick(){
    selectedTopping = toppings[1];
    totalPrice = totalPrice + selectedTopping.Price;
    pizzaPrice.innerHTML = currency + totalPrice
  }

      tchi.onclick = function (){
        chickenClick();
      }

  //BBQ click
  function bbqClick(){
    selectedTopping = toppings[2];
    totalPrice = totalPrice + selectedTopping.Price;
    pizzaPrice.innerHTML = currency + totalPrice
  }

      tbbq.onclick = function (){
        bbqClick();
      }

  //Olive olive click
  function oliveClick(){
    selectedTopping = toppings[3];
    totalPrice = totalPrice + selectedTopping.Price;
    pizzaPrice.innerHTML = currency + totalPrice
  }

      toli.onclick = function (){
        oliveClick();
      }


//SIZE PIZZA FUNCTIONS //
//normalsizeClick click
function normalsizeClick(){
  selectedSize = size[0];
  if (toppingIsSelected == false) {
    totalPrice = selectedPizza.Price * selectedSize.Factor;
  } else {
    totalPrice = selectedPizza.Price * selectedSize.Factor + selectedTopping.Price;
  }  pizzaPrice.innerHTML = currency + totalPrice;

}

    snor.onclick = function (){
      normalsizeClick();
    }


function mediumsizeClick(){
  selectedSize = size[1];
  if (toppingIsSelected == false) {
    totalPrice = selectedPizza.Price * selectedSize.Factor;
  } else {
    totalPrice = selectedPizza.Price * selectedSize.Factor + selectedTopping.Price;
  }
  pizzaPrice.innerHTML = currency + totalPrice;
}

    smed.onclick = function (){
      mediumsizeClick();
    }


function largesizeClick(){
      selectedSize = size[2];
      if (toppingIsSelected == false) {
        totalPrice = selectedPizza.Price * selectedSize.Factor;
      } else {
        totalPrice = selectedPizza.Price * selectedSize.Factor + selectedTopping.Price;
      }      pizzaPrice.innerHTML = currency + totalPrice;
    }

      slar.onclick = function (){
          largesizeClick();
        }

  function kingsizeClick(){
              selectedSize = size[3];
              if (toppingIsSelected == false) {
                totalPrice = selectedPizza.Price * selectedSize.Factor;
              } else {
                totalPrice = selectedPizza.Price * selectedSize.Factor + selectedTopping.Price;
              }      pizzaPrice.innerHTML = currency + totalPrice;
            }

              skin.onclick = function (){
                  kingsizeClick();
                }

//START SLICINGS!!!!!!!!!

function unslicedClick(){
  selectedSlicing = slicing[0];
  if (slicingAlreadySelected == false) {
    totalPriceWithSlicing = 0;
    totalPriceWithSlicing = totalPrice + selectedSlicing.Price;
    slicingAlreadySelected = true;
    pizzaPrice.innerHTML = currency + totalPriceWithSlicing
  } else {
    totalPriceWithSlicing = 0;
    pizzaPrice.innerHTML = currency + totalPrice
    slicingAlreadySelected = false;

  }
}
    slun.onclick = function (){
      unslicedClick();
    }


    function twoslicedClick(){
      selectedSlicing = slicing[1];
      if (slicingAlreadySelected == false) {
        totalPriceWithSlicing = 0;
        totalPriceWithSlicing = totalPrice + selectedSlicing.Price;
        slicingAlreadySelected = true;
        pizzaPrice.innerHTML = currency + totalPriceWithSlicing
      } else {
        totalPriceWithSlicing = 0;
        pizzaPrice.innerHTML = currency + totalPrice
        slicingAlreadySelected = false;

      }
    }
        sltwo.onclick = function (){
          twoslicedClick();
        }

    function fourslicedClick(){
          selectedSlicing = slicing[2];
          if (slicingAlreadySelected == false) {
            totalPriceWithSlicing = 0;
            totalPriceWithSlicing = totalPrice + selectedSlicing.Price;
            slicingAlreadySelected = true;
            pizzaPrice.innerHTML = currency + totalPriceWithSlicing
          } else {
            totalPriceWithSlicing = 0;
            pizzaPrice.innerHTML = currency + totalPrice
            slicingAlreadySelected = false;
          }
        }
            slfou.onclick = function (){
              fourslicedClick();
            }

         function sixslicedClick(){
                  selectedSlicing = slicing[3];
                  if (slicingAlreadySelected == false) {
                    totalPriceWithSlicing = 0;
                    totalPriceWithSlicing = totalPrice + selectedSlicing.Price;
                    slicingAlreadySelected = true;
                    pizzaPrice.innerHTML = currency + totalPriceWithSlicing
                  } else {
                    totalPriceWithSlicing = 0;
                    pizzaPrice.innerHTML = currency + totalPrice
                    slicingAlreadySelected = false;
                  }
                }
                    slsix.onclick = function (){
                      sixslicedClick();
                    }

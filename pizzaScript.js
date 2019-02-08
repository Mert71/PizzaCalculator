
var pizzaName = document.getElementById('pizzaName');
var pizzaImage = document.getElementById('pizzaImage');
var pizzaPrice = document.getElementById('pizzaPrice');
var totalPrice = 0;
var selectedPizza = null;
var selectedTopping = null;
var selectedSize = null;
var sizeinUse = false;

var currency = "$";

var pizzas = [
  {
    Name:'Margharita',
    Price: 8.50
  },
  {
   Name:"Kebab",
   Price: 8.50
 },
 {
   Name:"Funghi",
   Price: 11.50
 },
 {
   Name:"Pollo",
   Price: 10
 }

];

var toppings = [
  {
    Name:'Extra cheese',
    Price: 1.5
  },
  {
   Name:"Extra chicken",
   Price: 2
 },
 {
   Name:"BBQ sauce",
   Price: 0.75
 },
 {
   Name:"Olives",
   Price: 0.5
 }
];

 var size = [
   {
     Name:'Normal',
     Factor: 1
   },
   {
    Name:"Medium",
    Factor: 1.5
  },
  {
    Name:"Large",
    Factor: 2
  },
  {
    Name:"King",
    Factor: 5
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

        // Add it to the list:
        toppinglist.appendChild(item);

        //add id to the topping
        item.setAttribute("id" , "t" + i)
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

//Cheeseclick
  function cheeseClick(){
    selectedTopping = toppings[0];
    totalPrice = totalPrice + selectedTopping.Price;
    pizzaPrice.innerHTML = currency + totalPrice
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
  totalPrice = selectedTopping.Price + (selectedPizza.Price * selectedSize.Factor);
  pizzaPrice.innerHTML = currency + totalPrice;

}

    snor.onclick = function (){
      normalsizeClick();
    }

var toppingIsSelected = false;
function mediumsizeClick(){
  selectedSize = size[1];
  if (toppingIsSelected = true) {
    totalPrice = selectedPizza.Price * selectedSize.Factor + selectedTopping.Price;
  } else {
    totalPrice = selectedPizza.Price * selectedSize.Factor;
  }
  pizzaPrice.innerHTML = currency + totalPrice;
}

    smed.onclick = function (){
      mediumsizeClick();
    }


function largesizeClick(){
      selectedSize = size[2];
      totalPrice = selectedTopping.Price + (selectedPizza.Price * selectedSize.Factor);
      pizzaPrice.innerHTML = currency + totalPrice;
    }

      slar.onclick = function (){
          largesizeClick();
        }

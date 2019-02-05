var pizzaPrice = '$0'

var pizzas = [
  {
    name:'Margharita',
    image:"foto",
    prijs:'$8.00'
  },
  {
   name:"Kebab",
   image:'31',
   Prijs:"$8.50"
 },
 {
   name:"Funghi",
   image:'31',
   Prijs:"$11.50"
 },
 {
   name:"Pollo",
   image:31,
   Prijs:"$10.00"
 }

];

var toppings = [
  {
    name:'Extra cheese',
    prijs:'$1.50'
  },
  {
   name:"Extra chicken",
   Prijs:"$2.00"
 },
 {
   name:"BBQ sauce",
   Prijs:"$0.75"
 },
 {
   name:"Olives",
   Prijs:"$0.50"
 }

];

var pizzalist = document.getElementById('pizzaNameList');

for (var i = 0; i < pizzas.length; i++) {
        // Create the list item:
        var item = document.createElement('li');

        // Set its contents:
        item.appendChild(document.createTextNode(pizzas[i].name));

        // Add it to the list:
        pizzalist.appendChild(item);
    }


var toppinglist = document.getElementById('toppingNameList');

for (var i = 0; i < toppings.length; i++) {
        // Create the list item:
        var item = document.createElement('li');

        // Set its contents:
        item.appendChild(document.createTextNode(toppings[i].name));

        // Add it to the list:
        toppinglist.appendChild(item);
    }

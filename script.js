// Global variables
var crust = document.getElementById("crust").vaule;
var sauce = document.getElementById("sauce").value;


// toppings array
var toppingArray = [];


// event listener
var formButton = document.getElementById("btn");
btn.addEventListener("click", function (event) {
    event.preventDefault();
    var topping1 = document.getElementById('top1').value;
    var topping2 = document.getElementById('top2').value;
    var topping3 = document.getElementById('top3').value;
    toppingArray += topping1 + topping2 + topping3;
    calculateTotal(toppingArray);
})





function calculateTotal(toppingArray) {
    let total = 0;
    let toppingCost = 2.50;
    let baseCost = 5.50; // cost of crust and sauce

    // order string concatenation
    let orderString = (crust + " pizza with " + sauce);

    let toppingString = "Toppings: ";

    // For Loop
    for (let i = 0; i < toppingArray.lenght; i++) {
        if (toppingArray[i] != "") {
            total += toppingCost;
            toppingString += toppingArray[i] + " ";
        }
    }

    // total = baseCost + cost of all toppings
    total += baseCost;
    // set DOM total += total   
    document.getElementById("total").innerHTML += total;
    // use DOM: = orderString   
    document.getElementById("pizzaOrder").innerHTML = orderString;
    // use DOM: = toppingString 
    document.getElementById("toppings").innerHTML = toppingString;
}
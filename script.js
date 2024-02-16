// Global variables
var crust = document.getElementById("crust");
var sauce = document.getElementById("sauce");
// toppings array
let toppingArray = [];


// event listener
let formButton = document.getElementById("btn");
formButton.addEventListener("click", function getInfo(event) {
    event.preventDefault();
    let topping1 = document.getElementById('top1').value;
    let topping2 = document.getElementById('top2').value;
    let topping3 = document.getElementById('top3').value;
    toppingArray.push(topping1, topping2, topping3);
    calculateTotal(toppingArray);
})






function calculateTotal(toppingArray) {
    let total = 0;
    let toppingCost = 2.50;
    let baseCost = 5.50; // cost of crust and sauce

    // order string concatenation
    let orderString = crust.value + " Pizza with " + sauce.value;
    let toppingString = "Toppings: ";

    // For Loop
    for (let i = 0; i < toppingArray.length; i++) {
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

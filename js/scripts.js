//Backend Logic:
function Pizza(size, crust, veggies) {
    this.size = size,
        this.crust = crust,
        this.veggies = veggies,
        this.price = 0
}

Pizza.prototype.pizzaSelections = function () {
    if (this.size === 1) {
        this.price += 10
    } else if (this.size === 2) {
        this.price += 20
    } else if (this.size === 3) {
        this.price += 30
    } else {
        this.price += 0
    }
    if (this.crust === 1) {
        this.price += 1
    } else if (this.crust === 2) {
        this.price += 2
    } else if (this.crust === 3) {
        this.price += 3
    } else {
        this.price += 0
    }
    for (var i = 0; i < this.veggies.length; i++) {
        this.price += 2;
    };

    console.log(this.price);
    return this.price;
}


//Front end logic:
$(document).ready(function () {
    $("form#formInput").submit(function (event) {
        event.preventDefault();
        var pizzaSize = parseInt($("input:radio[name=size]:checked").val());
        var pizzaCrust = parseInt($("input:radio[name=crust]:checked").val());
        var vegArray = [];

        $("input:checkbox[name=veggies]:checked").map(function () {
            var veggies = parseInt($("input:checkbox[name=veggies]:checked").val());
            vegArray.push(veggies);
        });

        var pizza = new Pizza(pizzaSize, pizzaCrust, vegArray);
        pizza.pizzaSelections();


        $("#pizzaCost").text("Your pizza will cost $" + pizza.price + "!");

    });
});
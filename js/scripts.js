//Backend Logic:
function Pizza(size, veggies) {
    this.size = size,
        this.veggies = veggies,
        this.price = 0
}

Pizza.prototype.addAnswer = function () {
    if (this.size === 1) {
        this.price += 10
    } else if (this.size === 2) {
        this.price += 20
    } else {
        this.price += 30
    }
    if (this.veggie === 1) {
        this.price += 2
    } else if (this.veggie === 2) {
        this.price += 2
    } else if (this.veggie === 3) {
        this.price += 2
    } else if (this.veggie === 4) {
        this.price += 2
    } else if (this.veggie === 5) {
        this.price += 2
    } else {
        this.price += 2
    }

}

var pizza = new Pizza();


//Front end logic:
$(document).ready(function () {
    $("form#formInput").submit(function (event) {
        event.preventDefault();
        var inputSize = parseInt($("input:radio[name=size]:checked").val());
        var inputVeggies = parseInt($("input:radio[name=veggies]:checked").val());
        var pizza = new Pizza(inputSize, inputVeggies);
        pizza.addAnswer();
        console.log(pizza.price);

        $("#output").html("Your pizza will cost $" + pizza.price);

    });
});
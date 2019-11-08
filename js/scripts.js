//Backend Logic:
function Pizza(size, veggies) {
    this.movie = size,
        this.veggies = veggies,
        this.price = 0
}

Pizza.prototype.addAnswer = function () {
    if (this.size === 20) {
        this.price += 30
    } else if (this.size === 16) {
        this.price += 20
    } else if (this.size === 12) {
        this.price += 10
    }
    return this.price;

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
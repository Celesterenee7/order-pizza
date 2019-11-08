//Backend Logic Goes Here:


function Pizza(size, toppings) {
    this.size = size;
    this.toppings = toppings;
    this.price = 0;
}

Pizza.prototype.getPrice = function() {
    this.toppings.forEach(function(topping) {
        this.price =+
    })
}
//Back-end Logic Goes Here:

function Pizza(size, toppings) {
    this.size = size;
    this.toppings = toppings;
    this.price = 0;
}

Pizza.prototype.getPrice = function () {
    this.toppings.forEach(function (toppings) {
        this.price += 2;
        if (this.size === 20) {
            this.price += 30;
        } else if (this.size === 16) {
            this.price += 20;
        } else if (this.size === 12) {
            this.price += 10;
        }
        console.log(this.price);

        return this.price;
    })
}
//Back-end Logic Goes Here:

function Pizza(size, veggies) {
    this.size = size,
        this.veggies = veggies,
        this.price = 0
}

Pizza.prototype.getPrice = function () {
    if (this.size === 20) {
        this.price += 30;
    } else if (this.size === 16) {
        this.price += 20;
    } else if (this.size === 12) {
        this.price += 10;
    }

    return this.price;
}

var Pizza = new Pizza();

//Front-end Logic Goes Here:

$(document).ready(function () {
    $("form#pizza-pizza").submit(function (event) {
        event.preventDefault();
        var sizeInput = parseInt($("input:radio[name=size]:checked").val());
        var veggiesInput = parseInt($("input:radio[name=veggies]:checked").val());
        var pizza  = new Ticket (inputMovie, inputAge, inputTime);
        pizza.getPrice();
        console.log(pizza.Price);

        $("#output").text(pizza.Price);

    });
});

//-------------- jQuery Dom Magic Goes Here ------------------
// $(document).ready(function () {
//     $("form#formInput").submit(function (event) {
//         event.preventDefault();
//         var inputMovie = parseInt($("input:radio[name=option1]:checked").val());
//         var inputAge = parseInt($("input:radio[name=option2]:checked").val());
//         var ticket = new Ticket(inputMovie, inputAge, inputTime);
//         ticket.addAnswer();
//         console.log(ticket.price);

//         $("#output").html("Your ticket will cost $" + ticket.price + "! So much money!");

//     });
// });
//Back-end Logic Goes Here:

function Pizza(size, veggies) {
    this.size = size;
    this.veggies = veggies;
    this.price = 0;
}

Pizza.prototype.getPrice = function () {
    this.veggies.forEach(function (veggie) {
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

//Front-end Logic Goes Here:

$(document).ready(function () {
    $("form#formInput").submit(function (e) {
        e.preventDefault;
        let veggiesRequests = $("input:radio[name=pizzaVeggies]:checked").val();
        let vegArray = [];
        let sizeRequest = $("#inout:radio[name=pizzaSize]:checked").val()
        veggiesRequests.forEach(function (vegRequest) {
            vegArray.push(vegRequest.val());
        });
        let myPizza = new Pizza(sizeRequest, vegArray);
        let price = myPizza.getPrice();
    })


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
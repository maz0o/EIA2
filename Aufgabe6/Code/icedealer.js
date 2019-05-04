/*
Aufgabe: <Aufgabe 4 - Icedealer>
Name: <Marco Zaretzke>
Matrikel: <260535>
Datum: <21.04.2019>
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe4;
(function (Aufgabe4) {
    // Shopping Cart //
    let cart = [];
    //Load DOM first //
    document.addEventListener("DOMContentLoaded", init);
    function init(_event) {
        console.log("Init");
        let fieldsets = document.getElementsByTagName("fieldset");
        for (let i = 0; i < fieldsets.length; i++) {
            let fieldset = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
        }
        // update shopping Cart //
        function updateCart() {
            let order = document.getElementById("bestellung");
            let price = 0;
            order.innerHTML = "";
            for (let i = 0; i < cart.length; i++) {
                order.innerHTML += cart[i].name + " " + cart[i].price + "<br>";
                price += cart[i].price;
            }
            order.innerHTML += "Gesamtpreis: " + price + "€";
        }
        // Checks for changes //
        function handleChange(_event) {
            console.log(cart);
            let target = _event.target;
            if (target.name == "Checkbox") {
                if (cart.length == 0) {
                    console.log("First entry");
                    cart.push({ name: target.getAttribute("itemName"), price: Number(target.getAttribute("price")), amount: 1 });
                    console.log(cart);
                }
                else {
                    for (let i = 0; i < cart.length; i++) {
                        if (cart[i].name == target.getAttribute("itemName")) {
                            console.log("bla");
                            cart.splice(i, 1);
                            updateCart();
                            return;
                        }
                    }
                    cart.push({ name: target.getAttribute("itemName"), price: Number(target.getAttribute("price")), amount: 1 });
                }
            }
            // Selectbox //
            if (target.name == "Selectbox") {
                let select = document.getElementById("Selectbox");
                cart.push({ name: select.options[select.selectedIndex].getAttribute("itemName"), price: Number(target.getAttribute("price")), amount: 1 });
                updateCart();
            }
            // Ice cream stepper //
            if (target.name == "Stepper") {
                if ((Number(target.value) * Number(target.getAttribute("price")) > 0)) {
                    for (let i = 0; i < cart.length; i++) {
                        if (cart[i].name == target.getAttribute("itemName")) {
                            cart[i].price = Number(target.value) * Number(target.getAttribute("price"));
                            updateCart();
                            return;
                        }
                    }
                    cart.push({ name: target.getAttribute("itemName"), price: Number(target.getAttribute("price")), amount: Number(target.value) });
                }
                else {
                    for (let i = 0; i < cart.length; i++) {
                        if (cart[i].name == target.getAttribute("itemName")) {
                            cart.splice(i, 1);
                            break;
                        }
                    }
                }
            }
            updateCart();
        }
    }
})(Aufgabe4 || (Aufgabe4 = {}));
//# sourceMappingURL=icedealer.js.map
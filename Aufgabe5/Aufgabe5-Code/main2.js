/*
Aufgabe: <Aufgabe 4 - Icedealer reloaded>
Name: <Marco Zaretzke>
Matrikel: <260535>
Datum: <27.04.2019>
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe5;
(function (Aufgabe5) {
    // Shopping Cart //
    let cart = [];
    //Load DOM first //
    document.addEventListener("DOMContentLoaded", init);
    function init(_event) {
        createFieldset();
        console.log("Init");
        let fieldsets = document.getElementsByTagName("fieldset");
        for (let i = 0; i < fieldsets.length; i++) {
            let fieldset = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
        }
    }
    // update shopping Cart //
    function updateCart() {
        let order = document.getElementById("bestellung");
        let price = 0;
        order.innerHTML = "";
        for (let i = 0; i < cart.length; i++) {
            console.log("hallo");
            order.innerHTML += cart[i].name + " " + cart[i].price + "<br>";
            price += cart[i].price;
        }
        order.innerHTML += "Gesamtpreis: " + price + "€";
    }
    // Checks for changes //
    function handleChange(_event) {
        console.log(cart);
        let target = _event.target;
        if (target.getAttribute("inputtype") == "checkbox") {
            if (cart.length == 0) {
                console.log("First entry");
                cart.push({ name: target.getAttribute("itemname"), price: Number(target.getAttribute("price")), amount: 1 });
                console.log(cart);
            }
            else {
                for (let i = 0; i < cart.length; i++) {
                    if (cart[i].name == target.getAttribute("itemname")) {
                        cart.splice(i, 1);
                        updateCart();
                        return;
                    }
                }
                cart.push({ name: target.getAttribute("itemname"), price: Number(target.getAttribute("price")), amount: 1 });
            }
        }
        // Selectbox //
        if (target.name == "select") {
            let select = document.getElementById("select");
            if (cart.length == 0) {
                console.log("First entry");
                cart.push({ name: target.getAttribute("itemname"), price: Number(target.getAttribute("price")), amount: 1 });
                console.log(cart);
            }
            else {
                console.log(target.getAttribute("itemname"));
                if (select.options[select.selectedIndex].getAttribute("itemname") == "cup") {
                    for (let i = 0; i < cart.length; i++) {
                        if (cart[i].name == "cone") {
                            cart.splice(i, 1);
                            cart.push({ name: select.options[select.selectedIndex].getAttribute("itemname"), price: Number(target.getAttribute("price")), amount: 1 });
                            updateCart();
                            return;
                        }
                    }
                }
                if (select.options[select.selectedIndex].getAttribute("itemname") == "cone") {
                    for (let i = 0; i < cart.length; i++) {
                        if (cart[i].name == "cup") {
                            cart.splice(i, 1);
                            cart.push({ name: select.options[select.selectedIndex].getAttribute("itemname"), price: Number(target.getAttribute("price")), amount: 1 });
                            updateCart();
                            return;
                        }
                    }
                }
                cart.push({ name: select.options[select.selectedIndex].getAttribute("itemname"), price: Number(select.options[select.selectedIndex].getAttribute("price")), amount: 1 });
                updateCart();
            }
        }
        // Ice cream stepper //
        if (target.getAttribute("inputtype") == "stepper") {
            if ((Number(target.value) * Number(target.getAttribute("price")) > 0)) {
                for (let i = 0; i < cart.length; i++) {
                    if (cart[i].name == target.getAttribute("itemname")) {
                        cart[i].price = Number(target.value) * Number(target.getAttribute("price"));
                        cart[i].amount = Number(target.value);
                        updateCart();
                        return;
                    }
                }
                cart.push({ name: target.getAttribute("itemname"), price: Number(target.getAttribute("price")), amount: Number(target.value) });
            }
            else {
                for (let i = 0; i < cart.length; i++) {
                    if (cart[i].name == target.getAttribute("itemname")) {
                        cart.splice(i, 1);
                        break;
                    }
                }
            }
        }
        updateCart();
    }
    /* function writeHTML(): void {
     
     } */
    // Creating HTML Elements
    function createFieldset() {
        for (let key in Aufgabe5.icePicker) {
            let value = Aufgabe5.icePicker[key];
            let fieldset = document.createElement("fieldset");
            fieldset.setAttribute("class", "flex-item");
            document.getElementById("container").appendChild(fieldset);
            if (key == "stepper") {
                fieldset.innerHTML += "<h2> Pick your tasty flavor </h2>";
                for (let i = 0; i < value.length; i++) {
                    let span = document.createElement("span");
                    span.innerHTML = `<input type="number" inputtype="stepper"name="${value[i].name}" step="1" min="0" max="10" value="0" price="` + value[i].price + `" itemname="` + value[i].name + `" />${value[i].name}`;
                    fieldset.appendChild(span);
                }
            }
            document.getElementById("container").appendChild(fieldset);
            if (key == "checkbox") {
                fieldset.innerHTML += "<h2> Pick your goodies! </h2>";
                for (let i = 0; i < value.length; i++) {
                    let span = document.createElement("span");
                    span.innerHTML = `<input type="checkbox" inputtype="checkbox" name="${value[i].name}" value="0" price="` + value[i].price + `"itemname="` + value[i].name + `" />${value[i].name}`;
                    fieldset.appendChild(span);
                }
            }
            document.getElementById("container").insertBefore(fieldset, document.getElementById("adress"));
            if (key == "select") {
                fieldset.innerHTML += "<h2> Classy Cup or crispy Cone?</h2>";
                let span = document.createElement("span");
                span.innerHTML = `<select name="select" id="select" />`;
                fieldset.appendChild(span);
                let opt = document.createElement("option");
                opt.innerHTML += "Choose";
                document.getElementById("select").appendChild(opt);
                for (let i = 0; i < value.length; i++) {
                    let opt = document.createElement("option");
                    opt.setAttribute("price", value[i].price.toString());
                    opt.setAttribute("itemname", value[i].name);
                    opt.innerHTML = value[i].name;
                    document.getElementById("select").appendChild(opt);
                }
            }
        }
    }
})(Aufgabe5 || (Aufgabe5 = {}));
//# sourceMappingURL=main2.js.map
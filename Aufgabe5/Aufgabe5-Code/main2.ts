/*
Aufgabe: <Aufgabe 4 - Icedealer reloaded>
Name: <Marco Zaretzke>
Matrikel: <260535>
Datum: <27.04.2019>
	
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace Aufgabe5 {

    interface IceCream {
        name: string;
        price: number;
    }

    // Shopping Cart //
    let cart: IceCream[] = [];

    //Load DOM first //
    document.addEventListener("DOMContentLoaded", init);

    function init(_event: Event): void {
        createFieldset();
        console.log("Init");
        let fieldsets: HTMLCollectionOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");

        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
        }
    }
    // update shopping Cart //
    function updateCart(): void {

        let order: HTMLDivElement = <HTMLDivElement>document.getElementById("bestellung");
        let price: number = 0;
        order.innerHTML = "";
        for (let i: number = 0; i < cart.length; i++) {
            order.innerHTML += cart[i].name + " " + cart[i].price + "<br>";
            price += cart[i].price;
        }
        order.innerHTML += "Gesamtpreis: " + price + "€";
    }

    // Checks for changes //
    function handleChange(_event: Event): void {
        console.log(cart);
        let target: HTMLInputElement = <HTMLInputElement>_event.target;

        if (target.name == "Checkbox") {
            if (cart.length == 0) {
                console.log("First entry");
                cart.push({ name: target.getAttribute("itemName"), price: Number(target.getAttribute("price")) });
                console.log(cart);
            }
            else {
                for (let i: number = 0; i < cart.length; i++) {
                    if (cart[i].name == target.getAttribute("itemName")) {
                        console.log("bla");
                        cart.splice(i, 1);
                        updateCart();
                        return;
                    }
                }
                cart.push({ name: target.getAttribute("itemName"), price: Number(target.getAttribute("price")) });
            }
        }
        // Selectbox //
        if (target.name == "select") {
            let select: HTMLSelectElement = <HTMLSelectElement>document.getElementById("select");

            cart.push({ name: select.options[select.selectedIndex].getAttribute("itemName"), price: Number(select.options[select.selectedIndex].getAttribute("price")) });
            updateCart();
        }
        // Ice cream stepper //
        if (target.name == "Stepper") {
            if ((Number(target.value) * Number(target.getAttribute("price")) > 0)) {
                for (let i: number = 0; i < cart.length; i++) {
                    if (cart[i].name == target.getAttribute("itemName")) {
                        cart[i].price = Number(target.value) * Number(target.getAttribute("price"));
                        updateCart();
                        return;
                    }
                }
                cart.push({ name: target.getAttribute("itemName"), price: Number(target.getAttribute("price")) });
            }
            else {
                for (let i: number = 0; i < cart.length; i++) {
                    if (cart[i].name == target.getAttribute("itemName")) {
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
    function createFieldset(): void {
        for (let key in icePicker) {
            

            let value: IceCream[] = icePicker[key];
            let fieldset: HTMLFieldSetElement = document.createElement("fieldset");
            fieldset.setAttribute("class", "flex-item");
            document.getElementById("container").appendChild(fieldset);
            if (key == "stepper") {
                fieldset.innerHTML += "<h2> Pick your tasty flavor </h2>";
                for (let i: number = 0; i < value.length; i++) {
                    let span: HTMLSpanElement = document.createElement("span");
                    span.innerHTML = `<input type="number" name="Stepper" step="1" min="0" max="10" value="0" price="` + value[i].price + `" itemName="` + value[i].name + `" />${value[i].name}`;

                    fieldset.appendChild(span);

                }
            }
            document.getElementById("container").appendChild(fieldset);
            if (key == "checkbox") {
                fieldset.innerHTML += "<h2> Pick your goodies! </h2>";
                for (let i: number = 0; i < value.length; i++) {
                    let span: HTMLSpanElement = document.createElement("span");
                    span.innerHTML = `<input type="checkbox" name="Checkbox" value="0" price="` + value[i].price + `"itemName="` + value[i].name + `" />${value[i].name}`;
                    fieldset.appendChild(span);
                }
            }
            document.getElementById("container").insertBefore(fieldset, document.getElementById("adress"));
            if (key == "select") {
                fieldset.innerHTML += "<h2> Classy Cup or crispy Cone?</h2>";
                let span: HTMLSpanElement = document.createElement("span");
                span.innerHTML = `<select name="select" id="select" />`;
                fieldset.appendChild(span);
                let opt: HTMLOptionElement = document.createElement("option");
                opt.innerHTML += "Choose";
                document.getElementById("select").appendChild(opt);
                for (let i: number = 0; i < value.length; i++) {
                    let opt: HTMLOptionElement = document.createElement("option");
                    opt.setAttribute("price", value[i].price.toString());
                    opt.setAttribute("itemName", value[i].name);
                    opt.innerHTML = value[i].name;
                    document.getElementById("select").appendChild(opt);

                }


                console.log(key);
                for (let i: number = 0; i < value.length; i++)
                    // und die einzelnen Datensätze darin angezeigt
                    console.log(value[i]);
            }
        }
    }
}
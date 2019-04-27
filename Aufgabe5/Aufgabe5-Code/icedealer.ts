/*
Aufgabe: <Aufgabe 4 - Icedealer>
Name: <Marco Zaretzke>
Matrikel: <260535>
Datum: <21.04.2019>
	
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace Aufgabe4 {

    interface IceCream {
        name: string;
        price: number;
    }

    // Shopping Cart //
    let cart: IceCream[] = [];

    //Load DOM first //
    document.addEventListener("DOMContentLoaded", init);

    function init(_event: Event): void {
        console.log("Init");
        let fieldsets: HTMLCollectionOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");

        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
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
                    cart.push({ name: target.getAttribute("itemName"), price: Number(target.value) });
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
                    cart.push({ name: target.getAttribute("itemName"), price: Number(target.value) });
                }
            }

            // Selectbox //
            if (target.name == "Selectbox") {
                let select: HTMLSelectElement = <HTMLSelectElement>document.getElementById("Selectbox");
                cart.push({ name: select.options[select.selectedIndex].getAttribute("itemName"), price: Number(target.value) });

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
    }
}
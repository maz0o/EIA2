namespace Aufgabe3 {
    interface Card {
        value: string;
        color: string;
    }

    /*Card Array*/

    let deck: Card[] = [
        { value: "7", color: "Karo" }, { value: "8", color: "Karo" }, { value: "9", color: "Karo" }, { value: "10", color: "Karo" }, { value: "Bube", color: "Karo" }, { value: "Dame", color: "Karo" }, { value: "Koenig", color: "Karo" }, { value: "As", color: "Karo" },
        { value: "7", color: "Pik" }, { value: "8", color: "Pik" }, { value: "9", color: "Pik" }, { value: "10", color: "Pik" }, { value: "Bube", color: "Pik" }, { value: "Dame", color: "Pik" }, { value: "Koenig", color: "Pik" }, { value: "As", color: "Pik" },
        { value: "7", color: "Kreuz" }, { value: "8", color: "Kreuz" }, { value: "9", color: "Kreuz" }, { value: "10", color: "Kreuz" }, { value: "Bube", color: "Kreuz" }, { value: "Dame", color: "Kreuz" }, { value: "Koenig", color: "Kreuz" }, { value: "As", color: "Kreuz" },
        { value: "7", color: "Herz" }, { value: "8", color: "Herz" }, { value: "9", color: "Herz" }, { value: "10", color: "Herz" }, { value: "Bube", color: "Herz" }, { value: "Dame", color: "Herz" }, { value: "Koenig", color: "Herz" }, { value: "As", color: "Herz" }
    ];

    let hand: Card[] = [];


    document.addEventListener("keydown", checkKey);

    function checkKey(_event: KeyboardEvent): void {
        if (_event.key == " ") {
            addToHand();
        }
    }



    function sortHand(): void {
        console.log("hallo");
        hand.sort(compareValue);
        hand.sort(compareColor);
        displayCard();
    }


    function compareValue(_a: Card, _b: Card): number {
        if (_a.value < _b.value) {
            return -1;
        }
        if (_a.value > _b.value) {
            return 1;
        }
        return 0;
    }

    function compareColor(_a: Card, _b: Card): number {
        if (_a.color < _b.color) {
            return -1;
        }
        if (_a.color > _b.color) {
            return 1;
        }
        return 0;
    }


    let stack: Card = { value: null, color: null };

    document.addEventListener("DOMContentLoaded", init);

    function addToHand(): void {
        if (deck.length > 0) {
            let temp: number = Math.floor(Math.random() * deck.length);
            hand.push(deck[temp]);
            console.log(hand);
            deck.splice(temp, 1);
            let deckElement: HTMLDivElement = <HTMLDivElement>document.getElementById("deck");
            deckElement.innerHTML = deck.length.toString();
            deckElement.innerHTML += " cards left";
            displayCard();
        }
        else { console.log("No cards left to draw...somebody's not counting...."); }
    }

    function init(): void {
        document.getElementById("deck").addEventListener("click", addToHand);
        document.getElementById("sortBtn").addEventListener("click", sortHand);
        /*document.addEventListener(spaceAddToHand);*/
        document.getElementById("Handkarten").addEventListener("click", playCard);
        let notify: string = prompt("How many cards would you like?");
        let numberOfCards: number = parseInt(notify);
        if (Number.isNaN(numberOfCards) || numberOfCards < 1 || numberOfCards > deck.length) {
            init();
        }
        else {
            for (let i: number = 0; i < numberOfCards; i++) {
                addToHand();
            }
        }

        /*blablablaevent,*/

    }


    function displayCard(): void {
        let div: HTMLDivElement = <HTMLDivElement>document.getElementById("Handkarten");
        while (div.firstChild) {
            div.removeChild(div.firstChild);
        }
        for (let i: number = 0; i < hand.length; i++) {

            let card: HTMLDivElement = document.createElement("div");
            card.innerHTML = hand[i].color;
            card.innerHTML += " ";
            card.innerHTML += hand[i].value;
            card.setAttribute("id", i.toString());
            document.getElementById("Handkarten").appendChild(card);
            card.classList.add("kartenform");
            switch (hand[i].color) {
                case "Karo": card.classList.add("roteKarte"); break;
                case "Pik": card.classList.add("schwarzeKarte"); break;
                case "Kreuz": card.classList.add("schwarzeKarte"); break;
                case "Herz": card.classList.add("roteKarte"); break;
            }
        }
    }

    /*    function spaceAddToHand(_event:KeyboardEvent):void{
        
        }*/

    function playCard(_event: Event): void {
        let div: HTMLDivElement = <HTMLDivElement>_event.target;
        if (div.getAttribute("id") != "Handkarten") {
            console.log(stack);
            stack = hand[parseInt(div.getAttribute("id"))];
            console.log(stack);
            hand.splice(parseInt(div.getAttribute("id")), 1);
            console.log(hand);
            displayCard();

            if (document.getElementById("stack").firstChild) {
                console.log(document.getElementById("stack"));
                document.getElementById("stack").removeChild(document.getElementById("stack").firstChild);
            }
            let card: HTMLDivElement = document.createElement("div");
            card.innerHTML = stack.color;
            card.innerHTML += " ";
            card.innerHTML += stack.value;
            document.getElementById("stack").appendChild(card);
            card.classList.add("kartenform");
            switch (stack.color) {
                case "Karo": card.classList.add("roteKarte"); break;
                case "Pik": card.classList.add("schwarzeKarte"); break;
                case "Kreuz": card.classList.add("schwarzeKarte"); break;
                case "Herz": card.classList.add("roteKarte"); break;
            }




        }

        /*    stack.innerHTML = (parseInt(div.getAttribute("id")),);
        stack: HTMLDivElement = <HTMLDivElement> document.createElement("div")
        console.log(document.getElementById("stack"));
        stack.innerHTML(div.getAttribute("id"))*/
    }


}


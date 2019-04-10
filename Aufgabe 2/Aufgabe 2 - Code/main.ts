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

let deckTop: Card[] = [];

function addToHand(): void {
    let temp: number = Math.floor(Math.random() * deck.length);
    hand.push(deck[temp]);
    console.log(hand);
    deck.splice(temp, 1);
    let deckElement : HTMLDivElement =<HTMLDivElement> document.getElementById("deck");
    deckElement.innerHTML = deck.length.toString();
    deckElement.innerHTML += " Karten übrig";
}

document.addEventListener("DOMContentLoaded", init)
function init(): void {
    let notify: string = prompt("How many cards would you like?");
    let numberOfCards: number = parseInt(notify);
    if (Number.isNaN(numberOfCards) || numberOfCards < 1 || numberOfCards > deck.length) {
        init();
    }
    else {
        for (let i: number = 0; i < numberOfCards; i++) {
            addToHand();
        }
        displayCard();
    }

}


function displayCard(): void {
    for (let i: number = 0; i < hand.length; i++) {

        let card: HTMLDivElement = document.createElement("div");
        card.innerHTML = hand[i].color;
        card.innerHTML += " ";
        card.innerHTML += hand[i].value;
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
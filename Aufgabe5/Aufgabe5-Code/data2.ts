namespace Aufgabe5 {


    export interface IceCream {
        name: string;
        price: number;
    }

    export let icePicker: { [key: string]: IceCream[] } = {
        "select": [{ name: "cone", price: 0.20 }, { name: "cup", price: 0.20 }],
        "stepper": [{ name: "Matcha", price: 1.5 }, { name: "Thunder", price: 1.5 }, { name: "Melon", price: 1.5 }, { name: "Fudge", price: 1.5 }, { name: "Granny´s Apple Pie", price: 1.5 }, { name: "Cinnamon Heaven", price: 1.5 }],
        "checkbox": [{ name: "Smarties", price: 0.20 }, { name: "Cottoncandy", price: 0.80 }, { name: "Brownies", price: 1 }, { name: "Cookie Dough", price: 1.2 }, { name: "Caramel", price: 0.6 }, { name: "Sprinkles", price: 0.30 }, { name: "Peanut Butter Cups", price: 1.5 }, { name: "Chocolate Pretzels", price: 0.8 }]
    };

}


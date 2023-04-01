"use strict"

// let a = {
//     "text" : 'Hello',
//     "color" : "red",
//     "bold" : true,
//     "show": function () {
//         console.log(this.color);
//     },
// }

// let b = {
//     "fontSize" : '24px',
//     __proto__ : a
// }

// let c = {
//     "fontFamily" : 'Verdana',
//     __proto__ : b
// }

// console.log(c);
// console.log(c.bold);
// console.log(c.hasOwnProperty("bold"));



class Auto {

    constructor (brend, model, age, mileage, price, statusAuto) {
        this.brend = brend
        this.model = model
        this.age = age
        this.mileage = mileage
        this.price = price
        this.statusAuto = statusAuto
    }

}


let Audi = new Auto("Audi", "RS7", 2014, 34000, 500, "Available");
let Porsche = new Auto("Porsche", "Panamera", 2016, 74000, 700, "Busy");
let BMW = new Auto("BMW", "525d", 2012, 125000, 300, "Available");
// Audi.statusAuto = "Available";

const list__auto = document.querySelector(".list__auto")

const item__brend = document.querySelector(".item__brend")
const item__model = document.querySelector(".item__model")
const item__year = document.querySelector(".item__year")
const item__mileage = document.querySelector(".item__mileage")
const item__price = document.querySelector(".item__price")
const item__status = document.querySelector(".item__status")
const span__status1 = document.querySelector(".span__status1");

const item__brend2 = document.querySelector(".item__brend2")
const item__model2 = document.querySelector(".item__model2")
const item__year2 = document.querySelector(".item__year2")
const item__mileage2 = document.querySelector(".item__mileage2")
const item__price2 = document.querySelector(".item__price2")
const item__status2 = document.querySelector(".item__status2")
const span__status2 = document.querySelector(".span__status2");

const item__brend3 = document.querySelector(".item__brend3")
const item__model3 = document.querySelector(".item__model3")
const item__year3 = document.querySelector(".item__year3")
const item__mileage3 = document.querySelector(".item__mileage3")
const item__price3 = document.querySelector(".item__price3")
const item__status3 = document.querySelector(".item__status3")
const span__status3 = document.querySelector(".span__status3");


function showAutoOne() {
    if (Audi.statusAuto === "Available") {
        span__status1.style.background = "greenyellow";
        item__status.textContent = "Вільна "
        console.log("працює Available");
    } else if (Audi.statusAuto === "Busy") {
        span__status1.style.background = "red";
        item__status.textContent = "Зайнята "
        console.log("працює Busy");
    }
    item__brend.textContent = "Марка : " + Audi.brend;
    item__model.textContent = "Модель : " + Audi.model;
    item__year.textContent = "Рік випуску : " + Audi.age;
    item__mileage.textContent = "Пробіг : " + Audi.mileage + " км";
    item__price.textContent = "Ціна за добу : " + Audi.price + " $";
}
showAutoOne(Audi);

function showAutoTwo() {
    if (Porsche.statusAuto === "Available") {
        span__status2.style.background = "greenyellow";
        item__status2.textContent = "Вільна "
        console.log("працює Available");
    } else if (Porsche.statusAuto === "Busy") {
        span__status2.style.background = "red";
        item__status2.textContent = "Зайнята "
        console.log("працює Busy");
    }
    item__brend2.textContent = "Марка : " + Porsche.brend;
    item__model2.textContent = "Модель : " + Porsche.model;
    item__year2.textContent = "Рік випуску : " + Porsche.age;
    item__mileage2.textContent = "Пробіг : " + Porsche.mileage + " км";
    item__price2.textContent = "Ціна за добу : " + Porsche.price + " $";
}
showAutoTwo(Porsche);

function showAutoThree() {
    if (BMW.statusAuto === "Available") {
        span__status3.style.background = "greenyellow";
        item__status3.textContent = "Вільна "
        console.log("працює Available");
    } else if (BMW.statusAuto === "Busy") {
        span__status3.style.background = "red";
        item__status3.textContent = "Зайнята "
        console.log("працює Busy");
    }
    item__brend3.textContent = "Марка : " + BMW.brend;
    item__model3.textContent = "Модель : " + BMW.model;
    item__year3.textContent = "Рік випуску : " + BMW.age;
    item__mileage3.textContent = "Пробіг : " + BMW.mileage + " км";
    item__price3.textContent = "Ціна за добу : " + BMW.price + " $";
}
showAutoThree(BMW);




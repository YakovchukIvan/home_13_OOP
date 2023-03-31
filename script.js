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


let Porsche = new Auto("Porsche", "Panamera", "2016", "74000", "700$", "Busy");
console.log(Porsche);
Porsche.price = 650;
console.log(Porsche);

let BMW = new Auto("BMW", "525d", "2012", "125000", "300$", "Available");
console.log(BMW);
BMW.statusAuto = "Busy";
console.log(BMW);

console.clear()
// .list__auto
// .item__img_2
// .item__brend
// .item__model
// .item__year
// .item__mileage
// .mileage__change
// .btn__mileage
// .item__price
// .price__change
// .btn__price
// .item__status
// .button__status
// .span__status2

const list__auto = document.querySelector(".list__auto")

const item__brend = document.querySelector(".item__brend")
// let available = `<span class="span__status1"></span>`;
// console.log(available);

let Audi = new Auto("Audi", "RS7", 2014, 34000, 500, "Available");
Audi.statusAuto = "Busy";

let statusAuto = "";

function showBrend() {
    if (Audi.statusAuto === "Available") {
        statusAuto = `<span class="span__status1"></span>`;
        console.log(statusAuto);
    } else if (Audi.statusAuto === "Busy") {
        statusAuto = `<span class="span__status2"></span>`;
        console.log(statusAuto);
    }



    list__auto.insertAdjacentHTML("beforeend", 
     `
     <li>Марка: ${Audi.brend}</li>
     <li>Модель : ${Audi.model}</li>
     <li>Рік випуску : ${Audi.age}</li>
     <li>Пробіг: ${Audi.mileage}</li>
     <li>Ціна за добу : ${Audi.price}$</li>
    <li>Статус : ${statusAuto}</li>
     `
    )
}
showBrend();

    //  <li>Статус : ${available}</li>





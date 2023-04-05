"use strict"

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
const list__auto2 = document.querySelector(".list__auto2")
const list__auto3 = document.querySelector(".list__auto3")
let count = 0; // для роботи кнопки з стасусом вільно і зайнята

// Перше авто
const item__brend = document.querySelector(".item__brend")
const item__model = document.querySelector(".item__model")
const item__year = document.querySelector(".item__year")
const item__mileage = document.querySelector(".item__mileage")
const item__price = document.querySelector(".item__price")
const item__status = document.querySelector(".item__status")
const span__status1 = document.querySelector(".span__status1");

const mileage__input = document.querySelector(".mileage__input")
const btn__mileage = document.querySelector(".btn__mileage")
const price__input = document.querySelector(".price__input")
const btn__price = document.querySelector(".btn__price")
const list__status = document.querySelector(".list__status")
const btn__status = document.querySelector(".btn__status")


// Друге авто
const item__brend2 = document.querySelector(".item__brend2")
const item__model2 = document.querySelector(".item__model2")
const item__year2 = document.querySelector(".item__year2")
const item__mileage2 = document.querySelector(".item__mileage2")
const item__price2 = document.querySelector(".item__price2")
const item__status2 = document.querySelector(".item__status2")
const span__status2 = document.querySelector(".span__status2");

const mileage__input2 = document.querySelector(".mileage__input2")
const btn__mileage2 = document.querySelector(".btn__mileage2")
const price__input2 = document.querySelector(".price__input2")
const btn__price2 = document.querySelector(".btn__price2")
const list__status2 = document.querySelector(".list__status2")
const btn__status2 = document.querySelector(".btn__status2")

// Третє авто
const item__brend3 = document.querySelector(".item__brend3")
const item__model3 = document.querySelector(".item__model3")
const item__year3 = document.querySelector(".item__year3")
const item__mileage3 = document.querySelector(".item__mileage3")
const item__price3 = document.querySelector(".item__price3")
const item__status3 = document.querySelector(".item__status3")
const span__status3 = document.querySelector(".span__status3")

const mileage__input3 = document.querySelector(".mileage__input3")
const btn__mileage3 = document.querySelector(".btn__mileage3")
const price__input3 = document.querySelector(".price__input3")
const btn__price3 = document.querySelector(".btn__price3")
const list__status3 = document.querySelector(".list__status3")
const btn__status3 = document.querySelector(".btn__status3")


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

    list__auto.addEventListener("click", () => {
        if (mileage__input.value) {
            Audi.mileage += parseInt(mileage__input.value);
            console.log(typeof Audi.mileage);// для перевірки
            console.log(Audi.mileage);// для перевірки
            showAutoOne() // запускаємо ще раз функцію, щоб перезаписати знову значення
            mileage__input.value = "" // чистимо в кінці input
        }
        if (price__input.value) {
            Audi.price += parseInt(price__input.value);
            console.log(typeof Audi.price);// для перевірки
            console.log(Audi.price);// для перевірки
            showAutoOne() // запускаємо ще раз функцію, щоб перезаписати знову значення
            price__input.value = "" // чистимо в кінці input
        }
    })
    list__status.addEventListener("click", () => {
        if(btn__status) {
        // console.log(count); // для перевірки
        if (count % 2 == 1) {
            count++;
            span__status1.style.background = "greenyellow";
            item__status.textContent = "Вільна "
        } else {
            count++;
            span__status1.style.background = "red";
            item__status.textContent = "Зайнята "
        }
        }
    })

}
showAutoOne(Audi);


function showAutoTwo() {
    if (Porsche.statusAuto === "Available") {
        span__status2.style.background = "greenyellow";
        item__status2.textContent = "Вільна "
        // console.log("працює Available");
    } else if (Porsche.statusAuto === "Busy") {
        span__status2.style.background = "red";
        item__status2.textContent = "Зайнята "
        // console.log("працює Busy");
    }
    item__brend2.textContent = "Марка : " + Porsche.brend;
    item__model2.textContent = "Модель : " + Porsche.model;
    item__year2.textContent = "Рік випуску : " + Porsche.age;
    item__mileage2.textContent = "Пробіг : " + Porsche.mileage + " км";
    item__price2.textContent = "Ціна за добу : " + Porsche.price + " $";
    
    list__auto2.addEventListener("click", () => {
        if (mileage__input2.value) {
            Porsche.mileage += parseInt(mileage__input2.value);
            console.log(typeof Porsche.mileage);// для перевірки
            console.log(Porsche.mileage);// для перевірки
            showAutoTwo() // запускаємо ще раз функцію, щоб перезаписати знову значення
            mileage__input2.value = "" // чистимо в кінці input
        }
        if (price__input2.value) {
            Porsche.price += parseInt(price__input2.value);
            console.log(typeof Porsche.price);// для перевірки
            console.log(Porsche.price);// для перевірки
            showAutoTwo() // запускаємо ще раз функцію, щоб перезаписати знову значення
            price__input2.value = "" // чистимо в кінці input
        }
    })
    list__status2.addEventListener("click", () => {
        if(btn__status2) {
        // console.log(count); // для перевірки
        if (count % 2 == 1) {
            count++;
            span__status2.style.background = "greenyellow";
            item__status2.textContent = "Вільна "
        } else {
            count++;
            span__status2.style.background = "red";
            item__status2.textContent = "Зайнята "
        }
        }
    })
}
showAutoTwo(Porsche);

function showAutoThree() {
    if (BMW.statusAuto === "Available") {
        span__status3.style.background = "greenyellow";
        item__status3.textContent = "Вільна "
        // console.log("працює Available");
    } else if (BMW.statusAuto === "Busy") {
        span__status3.style.background = "red";
        item__status3.textContent = "Зайнята "
        // console.log("працює Busy");
    }
    item__brend3.textContent = "Марка : " + BMW.brend;
    item__model3.textContent = "Модель : " + BMW.model;
    item__year3.textContent = "Рік випуску : " + BMW.age;
    item__mileage3.textContent = "Пробіг : " + BMW.mileage + " км";
    item__price3.textContent = "Ціна за добу : " + BMW.price + " $";

        list__auto3.addEventListener("click", () => {
        if (mileage__input3.value) {
            BMW.mileage += parseInt(mileage__input3.value);
            console.log(typeof BMW.mileage);// для перевірки
            console.log(BMW.mileage);// для перевірки
            showAutoThree() // запускаємо ще раз функцію, щоб перезаписати знову значення
            mileage__input3.value = "" // чистимо в кінці input
        }
        if (price__input3.value) {
            BMW.price += parseInt(price__input3.value);
            console.log(typeof BMW.price);// для перевірки
            console.log(BMW.price);// для перевірки
            showAutoThree() // запускаємо ще раз функцію, щоб перезаписати знову значення
            price__input3.value = "" // чистимо в кінці input
        }
    })
    list__status3.addEventListener("click", () => {
        if(btn__status3) {
        // console.log(count); // для перевірки
        if (count % 2 == 1) {
            count++;
            span__status3.style.background = "greenyellow";
            item__status3.textContent = "Вільна "
        } else {
            count++;
            span__status3.style.background = "red";
            item__status3.textContent = "Зайнята "
        }
        }
    })
}
showAutoThree(BMW);




let goods = [
    {
        title: "Пианино",
        price: 3000,
        count: 25
    },
    {
        title: "Гитара",
        price: 1200,
        count: 40
    },
    {
        title: "Барабаны",
        price: 2700,
        count: 12
    },
    {
        title: "Флейта",
        price: 900,
        count: 50
    },
    {
        title: "Арфа",
        price: 3400,
        count: 5
    }
];

function generateTable(arr) {
    let table = document.createElement("table");
    let firstElemLen = Object.keys(arr[0]).length;
    let Row = table.insertRow();
    for (let j = 0; j < firstElemLen; j++) {
        let Cell = Row.insertCell();
        Cell.innerHTML = Object.keys(arr[0])[j].toUpperCase();
    }
    for (let i = 0; i < arr.length; i++) {
        let Row = table.insertRow();
        for (let j = 0; j < firstElemLen; j++) {
            let Cell = Row.insertCell();
            Cell.innerHTML = Object.values(arr[i])[j];
        }
    }
    table.addEventListener("click", sortTable.bind(table, arr));
    document.getElementById("for_table").append(table);

}
generateTable(goods);

//1. Написать функцию, которая будет осуществлять сортировку таблицы из предыдущего дз
// по значениям столбца при нажатии на название этого столбца.

function sortTable(arr, event) {
    let table = document.getElementsByTagName("table")[0];
    let clickTable = event.target.innerHTML.toLowerCase();
    table.remove();
    console.log(clickTable, arr);
    let sortArr = arr.sort((a, b) => {
        if (a[clickTable] > b[clickTable]) {
            return 1;
        }
        if (a[clickTable] < b[clickTable]) {
            return -1;
        }
        return 0;
    });
    console.log(sortArr);
    generateTable(sortArr);
    return sortArr;
}

// 2. Написать функцию генерации поля n x n (значение n - аргумент функции),
// в ячейки рандомно спрятать несколько призов.
//Пользователю дается 3 попытки найти их - по нажатию на ячейку либо открывается приз (иконка, изменения цвета и тд),
// либо иконка, сообщающая, что приза нет. Количество оставшихся попыток выводим рядом с игровым полем.*/
function generatePrize(n) {
    let gameTable = document.createElement("div");
    gameTable.classList.add("gameTable");
    gameTable.style.width = (250 * n) + "px";
    gameTable.style.height = (250 * n) + "px";


    let attempt = document.createElement("div");
    let counter = 3;
    attempt.style.width = (150 * n) + "px";
    attempt.textContent = `Попыток осталось: ${counter}`;

    let counterPresent = 0;

    let arr = [];
    for (let i = 0; i < (Math.floor((n * n) / 7)); i++) {
        arr[i] = Math.floor(Math.random() * (n * n))
    }

    for (let i = 1; i <= (n * n); i++) {
        let box = document.createElement("p");
        box.classList.add("box");
        if (arr.includes(i)) {
            box.classList.add("priseBox");
        } else {
            box.classList.add("emptyBox")
        }
        box.addEventListener("click", boxOpen);

        function boxOpen() {
            if (counter > 0) {
                if (this.classList.contains("priseBox")) {
                    box.classList.add("win");
                    counterPresent++;
                } else {
                    box.classList.add("loss");
                }
                counter--;
                attempt.textContent = `Осталось попыток: ${counter}`;
            }
            if (counter === 0) {
                attempt.textContent = `Ваши попытки закончились. Вы выиграли ${counterPresent} приз`;
            }
        }
        gameTable.append(box);
    }

    document.body.append(gameTable);
    document.body.append(attempt);
}

generatePrize(3);



// 3.Дан чекбокс и поле для ввода текста, если чекбокс отмечен галочкой,
// то поле должно быть доступным для ввода данных,
// в противном случае, поле остается заблокированным.
let form = document.forms.lesson;
console.log(form);
let checkbox = form.elements.checkbox;
console.log(checkbox);
let text = form.elements.text;
console.log(text);

checkbox.addEventListener("click", clickOnElem);

function clickOnElem() {
    if (checkbox.checked) {
        text.disabled = false;

    } else {
        text.disabled = true;
    }
}
// 4. Дана форма и два поля: логин и пароль. Длина логина от 4 до 10 символов, пароля от 6.
// Реализовать обработку следующих событий:
// 4.1 Фокус на элементе - подсказка рядом с input красного цвета.
let login = form.elements.login;
let pwd = form.elements.pwd;

login.addEventListener("focus", focusOnElem);
pwd.addEventListener("focus", focusOnElem);

function focusOnElem() {
    console.log("фокус на элементе");
    this.nextElementSibling.classList.add("error");
}

// 4.2 Фокус ушел с элемента: если данные введены верно посказка становится зеленой,
// в противном случае остается красной.
login.addEventListener("blur", focusOutLogin);
pwd.addEventListener("blur", focusOutPwd);

function focusOutLogin() {
    if(this.value.length < 4 || this.value.length > 10) {
        this.nextElementSibling.classList.add("error");
    } else {
        this.nextElementSibling.classList.remove("error");
        this.nextElementSibling.classList.add("success");
    }
}
function focusOutPwd() {
    if(this.value.length < 6) {
        this.nextElementSibling.classList.add("error");
    } else {
        this.nextElementSibling.classList.remove("error");
        this.nextElementSibling.classList.add("success");
    }
}

//4.3 Отправка формы - вывести значение каждого input в консоль

form.addEventListener("submit", getForm);
function getForm(event) {
    event.preventDefault();
    console.log("отправка формы");
 //   console.log(this.elements.login.value);
//    console.log(this.elements.pwd.value);
 //   console.log(this.elements.color.value);
    let formData = new FormData(this);
    console.log(formData.getAll("lang[]"));
    console.log(formData.get("login"));
    console.log(formData.get("pwd"));
    console.log(formData.get("color"));
    console.log(formData.get("text"));
}

//4.4 Очистка полей формы (reset) - все введенные пользователем данные стираются, все подсказки становятся красного цвета.
let span = document.getElementsByClassName("info-block");
form.addEventListener("reset", outForm);
function outForm(event) {
    event.preventDefault();
    login.value = null;
    pwd.value = null;
    this.nextElementSibling.classList.add("error");
    this.nextElementSibling.classList.remove("success");
    for (elem of span) {
        elem.classList.add("error");
        elem.classList.remove("success");
    }
}











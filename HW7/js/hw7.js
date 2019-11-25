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











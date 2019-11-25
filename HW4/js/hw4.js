//1. Допустим, пользователь вводит названия городов через пробел. Вы их присваиваете переменной.
//Переставьте названия так, чтобы они были упорядочены по алфавиту.

let cities = prompt("","");
console.log(cities);
let arr = cities.split(" ");
console.log(arr.sort());

//2. Найти все вхождения подстроки в строку. Строку и подстроку вводит пользователь.
let sentence = prompt("Введите предложение", "Show must go on");
let substring = prompt("Введите подстроку", "o");
console.log(sentence);
console.log(substring);

for (let i = 0; i < sentence.length; i++) {
    let str = sentence[i];
    //console.log(str);
    if(str === substring) {
        console.log(i);
    }
};

//3.Написать функцию, которая проверяет, является ли строка палиндромом (использовать стандартные методы)!
// Палиндром — это слово или фраза, которые одинаково читаются по буквам или по словам как слева направо, так и справа налево.

palindrome = str => {
    str = str.toLowerCase();
    console.log(str);
    let tr = str.split('').reverse().join('');
    console.log(tr);
    if (str === tr) {
        console.log("yes");
    } else {
        console.log("no");
    }
};

palindrome("nna");

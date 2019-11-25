// 1. Дано натуральное число N. Вычислите сумму его цифр, используя рекурсию (строки, массивы и циклы использовать запрещено).
function summ(num){
    if(num <= 0) {
        return ("Ненатуральное число");
    } else if(num <= 10) {
        return num;
    }
    if(num > 10) {
        return (num % 10) + Math.floor(summ(num / 10));
    }
}
console.log(summ(1252));
// 2. Напишите функцию range, принимающую три аргумента, два обязательных: начало и конец диапазона,
// третий аргумент - необязательный (если он не задан, шаг равен единице) – шаг для построения массива.
// Функция возвращает массив, который содержит все числа из него, включая начальное и конечное.
// Например, вызов функции range(1, 10, 2) должен будет вернуть [1, 3, 5, 7, 9].
function rangeArr(start, end, step) {
    let arr = [];
    for (let i = 0; start <= end; i++) {
        start += step;
        arr[i] = start;
    }
    return arr;
}
console.log(rangeArr(1,10,3));

// 3. Напишите функцию, которая в зависимости от переданного в нее целочисленного аргумента count,
// будет возвращать слово «день» в нужной форме («12 дней», но «22 дня» и тд).
function count(num1) {
    let res = num1 % 10;
    if (num1 % 100 >= 11 && num1 % 100 <= 14) {
        return (num1 + " дней");
    } else if (res === 1) {
        return (num1 + " день");
    } else if (res === 2 || res === 3 || res === 4) {
        return (num1 + " дня");
    } else if (res !== 1 || res !== 2 || res !== 3 || res !== 4){
        return (num1 + " дней");
    }
}
console.log(count(1014));
// 5. Сгенерировать 5 массивов из случайных чисел (самостоятельно посмотреть про рандом).
// Вывести массивы и сумму их элементов на экран.
// Найти массив с максимальной суммой элементов. Вывести его на экран еще раз.
// Генерация массива и подсчет суммы - разные функции

function getRandom(max) {
     return Math.floor(Math.random() * Math.floor(max));
}
let arr1 = [getRandom(9),getRandom(5),getRandom(2),getRandom(0)];
let arr2 = [getRandom(0),getRandom(4),getRandom(1),getRandom(3)];
let arr3 = [getRandom(2),getRandom(9),getRandom(4),getRandom(6)];
let arr4 = [getRandom(1),getRandom(3),getRandom(4),getRandom(6)];
let arr5 = [getRandom(6),getRandom(0),getRandom(4),getRandom(4)];

console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);
console.log(arr5);

let a1 = 0;
let a2 = 0;
let a3 = 0;
let a4 = 0;
let a5 = 0;

for (let q = 0; q < 4; q++) {
    a1 += arr1[q];
    a2 += arr2[q];
    a3 += arr3[q];
    a4 += arr4[q];
    a5 += arr5[q];

}
console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);
console.log(a5);
console.log(Math.max(a1, a2, a3, a4, a5));

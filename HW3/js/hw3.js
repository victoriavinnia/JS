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
let arr = [];
let summ2 = 0;
function getRandom(length, min, max) {
    for (let i = 0; i<length; i++) {
        arr[i] = Math.floor(Math.random()*(max-min + 1) + min);
    }
    console.log(arr);
    return arr;
}
getRandom(4, 0,10);
getRandom(4, 3,5);
getRandom(4, 2,10);
getRandom(4, 0,8);
getRandom(4, 5,9);

function summ1(arr) {
    for (let q = 0; q >= arr.length; q++) {
        summ2 += arr[q];
        return summ2;
    }

}


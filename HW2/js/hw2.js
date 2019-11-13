// 1.Дан массив целых чисел. Числа не отсортированы и могут повторяться. Необходимо найти в данном массиве такие два числа M и N, чтобы их сумма была равна 7.
// Например, 3 + 4 = 7 или 0 + 7 = 7 или -2 + 9 = 7 и тд. Д
// Для решения достаточно найти хотя бы одну подходящую пару чисел M и N.
let num = [-2, 7, 0, 2, 5, 4, 0];
let i = 0;
for (i = 0; i <= num.length; i ++) {
    let k = num[i];
    for (let j = 0; j <= num.length; j++) {
        let n = num[j];
        if (k + n === 7) {
            console.log(k);
            console.log(n);
        }
    }
}
// 2.Вывести через console.log все числа от 1 до 100, с двумя исключениями.
// Для чисел, нацело делящихся на 3, она должна выводить ‘Three’, а для чисел, делящихся на 5 (но не на 3) – ‘Five’.
// Измените код так, чтобы она выводила «ThreeFive» для всех чисел, которые делятся и на 3 и на 5.
for (let i = 0; i <= 100; i ++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
        console.log("ThreeFive");
    } else if (i % 3 === 0) {
        console.log("Three");
    } else if (i % 5 === 0) {
        console.log("Five");
    } else if (i % 1 === 0) {
        console.log(i);
    }
}
// 3.Задать количество тарелок и количество моющего средства.
// Моющее средство расходуется из расчета 0,5 на одну тарелку. В цикле выводить сколько моющего средства осталось после мытья каждой тарелки
// В конце вывести, сколько тарелок осталось, когда моющее средство закончилось или наоборот.
let plate = 15; //количество тарелок
let soap = 6; //количество моющего средства
for (let i = 1; i <= plate; i ++) {
    let q = plate - i;
    console.log(q);
    soap = soap - 0.5;
    console.log(soap);
    if (soap === 0) {
        console.log("Моющее средство закончилось");
        break;
    }
    if (plate === 0) {
        console.log("Тарелки закончились");
        break;
    }
}

// 4.Создайте 2 массива равной длины, выведите массивы на экран.
// Посчитайте среднее арифметическое элементов каждого массива и сообщите, для какого из массивов это значение
// оказалось больше (либо сообщите, что их средние арифметические равны).
let num1 = [3, 1, 0, 9];
let num2 = [2, 7, 2, 10];
let summ1 = 0;
let summ2 = 0;
console.log(num1);
console.log(num2);
for (let i = 0; i < num1.length; i++) {
    summ1 += num1[i];
}
console.log(summ1);
let Ar = summ1 / num1.length;
console.log(Ar);

for (let j = 0; j < num2.length; j++) {
    summ2 += num2[j];
}
console.log(summ2);
let Ar2 = summ2 / num2.length;
console.log(Ar2);
if (Ar === Ar2) {
    console.log("Равно");
} else if (Ar >Ar2) {
    console.log("Массив1 больше");
} else if (Ar2 >Ar) {
    console.log("Массив2 больше");
}
// 5.1 Пользователь вводит число, создать массив заданного размера, вывести элементы массива в обратном порядке
let num3 = prompt("Enter length", "3");
let a = [];
let b = [];
for (let i = 0; i <= num3; i ++) {
    a.push(i);
}
console.log(a);
b = a.reverse();
console.log(b);
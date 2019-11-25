let goods = {
    piano: {
        title: "Пианино",
        price: 3000,
        count: 25
    },
    guitar: {
        title: "Гитара",
        price: 1200,
        count: 40
    },
    drum: {
        title: "Барабаны",
        price: 2700,
        count: 12
    },
    flute: {
        title: "Флейта",
        price: 900,
        count: 50
    },
    harp: {
        title: "Арфа",
        price: 3400,
        count: 5
    }
};

//1.Написать функцию со следующими аргументами: объект, from (значение от), to (значение до).
// Функция должна вернуть объект с товарами, цены которых лежат в диапазоне от значения from до значения to.
// Пример вызова функции getGoods(goods, 2000, 3000); в данном случае функция должна вернуть все товары,
// у которых цена в диапазоне от 2000 до 3000. Для проверки функции используйте объект! goods из файла forHw.js.
function getGoods(obj, from, to) {
    let arr = [];
    for(let item in obj) {
        if (obj[item].price >= from && obj[item].price <= to) {
            arr.push(obj[item].title);
        }
    }
    return arr;
};

let aprice = getGoods(goods, 2000, 3000);
console.log(aprice);
//2. Написать функцию addToCart(obj, title, countToCart) {} , где obj - объект, title - название товара,
// count - количество товара, которое нужно добавить в корзину. Функция ищет товар с указанным названием,
// если количество позволяет, то уменьшает количество товара на countToCart, если не позволяет,
// то выводит информацию об этом в консоль и завершает работу.
// Для проверки функции используйте объект! goods из файла forHw.js.

function addToCart(obj, title, countToCart) {
    for (let i in obj) {
        if (obj[i].title == title) {
            if (obj[i].count >= countToCart) {
                obj[i].count = obj[i].count - countToCart;
                return `Товар ${obj[i].title} в корзине ${countToCart} шт., осталось ${obj[i].count}`;
            } else {
                return `Не хватает товара: ${obj[i].title} ${countToCart - obj[i].count} шт. `;
            }
        }
}
}
console.log(addToCart(goods,"Гитара", 41));

//3. Напишите функцию, которая отсортирует массив объектов books по значению свойства title.
// Массив в файле forHw.js.
// Функцию сортировки разберите самостоятельно (не получится, разбер на занятии).
let books = [
    { author: 'Толстой', title: 'Война и мир'},
    { author: 'Гончаров', title: 'Обломов'},
    { author: 'Лермонтов', title: 'Герой Нашего Времени'}
];
function sortTitle(a, b) {
    if (a.title < b.title) {
        return -1;
    }
    if (a.title > b.title) {
        return 1;
    }
    return 0;
}
books.sort(sortTitle);
console.log(books.sort(sortTitle));


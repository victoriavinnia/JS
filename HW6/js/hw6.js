let articles = [
    {
        id: 1,
        title: "JS",
        text: "Статья про JS",
        author: "Александр"
    },
    {
        id: 2,
        title: "PHP",
        text: "Статья про PHP",
        author: "Виталий"
    },
    {
        id: 3,
        title: "Базы Данных",
        text: "Статья про Базы Данных",
        author: "Евгения"
    },
    {
        id: 4,
        title: "HTML",
        text: "Статья про HTML",
        author: "Виталий"
    }
];

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

// примеры вызова функции:
//generateTable(articles); // генерация таблицы со статьями
//generateTable(goods); // генерация таблицы с товарами
/*
function generateTable (array) {
    let newTable = document.createElement("table");
    let caption = newTable.createCaption();
    caption.innerText = "Заголовок таблицы";

    for (let y = 0; y < array.length; y++) {
        let arrayNames = Object.getOwnPropertyNames(array[y]);
        let arrayValues = Object.values(array[y]);
    //    console.log(arrayNames);
    //    console.log(arrayValues);
        let newRow = newTable.insertRow(y);
        console.log(newRow);

        for(let x = 0; x < arrayValues.length; x++) {
            if (y === 0) {
                let cell = newRow.insertCell(x);
                cell.innerText = arrayNames[x].toUpperCase();
                console.log(cell);
            }else {
                let cell = newRow.insertCell(x);
                cell.innerText = arrayValues[x];
                console.log(cell);
            }

        }

    }

  document.body.append(newTable);


}
generateTable(goods);
generateTable(articles); // не выводит 1 объект
*/
function generateTable(arr) {
    let table = document.createElement("table");
    table.setAttribute("border", "1px solid black");
    let firstElementLen = Object.keys(arr[0]).length;
    let Row = table.insertRow();
    for (let j = 0; j < firstElementLen; j++) {
        let Cell = Row.insertCell();
        Cell.innerHTML = Object.keys(arr[0])[j].toUpperCase();
    }
    for (let i = 0; i < arr.length; i++) {
        let Row = table.insertRow();
        for (let j = 0; j < firstElementLen; j++) {
            let Cell = Row.insertCell();
            Cell.innerHTML = Object.values(arr[i])[j];
        }
    }
    document.body.append(table);
}
generateTable(articles);
generateTable(goods);

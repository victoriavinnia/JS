let canvas = document.getElementsByTagName("canvas")[0];

canvas.width = 900;
canvas.height = 600;

let ctx = canvas.getContext("2d");
ctx.fillStyle = "coral";
ctx.fillRect(0, 0, 900, 600);

let tiger = {
    img: 'tiger.png',
    x: 22,
    y: 15,
    width: 128,
    height: 128
};

let rabbit1 = {
    img: 'rabbit.png',
    x: 250,
    y: 300,
    width: 128,
    height: 128
};
let rabbit2 = {
    img: 'rabbit.png',
    x: 600,
    y: 100,
    width: 128,
    height: 128
};

function drawImg(obj) {
    let img = new Image();
    img.src = 'img/' + obj.img;
    img.onload = () => {
        ctx.drawImage(img, obj.x, obj.y, obj.width, obj.height);
    }
}

drawImg(tiger);
drawImg(rabbit1);
drawImg(rabbit2);


function move(obj, event) {
    // this
    console.log(event.code);
    if (event.code === "KeyD") {
        console.log("перемещение вправо");
        clearImg(obj);
        eating(obj, rabbit1);
        eating(obj, rabbit2);
        obj.x += 2;
        drawImg(obj);
    } else if (event.code === "KeyA") {
        console.log("перемещение влево");
        clearImg(obj);
        eating(obj, rabbit1);
        eating(obj, rabbit2);
        obj.x -= 2;
        drawImg(obj);
    } else if (event.code === "KeyW") {
        console.log("перемещение вверх");
        clearImg(obj);
        eating(obj, rabbit1);
        eating(obj, rabbit2);
        obj.y -= 2;
        drawImg(obj);

    } else if (event.code === "KeyS") {
        console.log("перемещение вниз");
        clearImg(obj);
        eating(obj, rabbit1);
        eating(obj, rabbit2);
        obj.y += 2;
        drawImg(obj);
    }
}

drawImg(tiger);
document.addEventListener("keydown", move.bind(document, tiger));

function clearImg(obj) {
    ctx.fillRect(obj.x, obj.y, obj.width, obj.height)
}

function eating(obj, prey) {
    if ((obj.x + 128) === prey.x && (obj.y + 128) >= prey.y) {
        ctx.fillRect(prey.x, prey.y, prey.width, prey.height);
        makeCounter(obj, prey);
    }
}


function makeCounter(obj, prey) {
    let count = 0;
    let div = document.createElement('div');
    div.classList.add("div");
    let p = document.createElement("p");
    p.innerText = `Съедено ${count} кроликов`;
    div.append(p);
    document.body.append(div);
    if ((obj.x + 128) === prey.x && (obj.y + 128) >= prey.y) {
        return function () {
            return count++
        };
    }
}

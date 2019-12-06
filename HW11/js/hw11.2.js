// самолет москва - нью-йорк
// время в полете 10 часов
// когда (дата и время) самолет
// прилетит в нью-йорк (по местному времени),
// если из Москвы он вылетает
// в 22:15 28 декабря 2019 года

let moscowTime = moment("2019-12-28 22:15").tz("Europe/Moscow");
let nyTime = moscowTime.add(10, 'hours');
let nyTime1 = moscowTime.clone().tz("America/New_York");
console.log('Прилет в Нью-Йорк: ' + nyTime1.format("YYYY MMMM DD HH:mm"));





//People의 인터페이스를 매개변수로 받고, 반환타입은 없는 함수//
function peopleinfo(people) {
    console.log('name: ' + people.name + ', age: ' + people.age);
}
var seopeople = {
    name: 'seo',
    age: 26
};
peopleinfo(seopeople);
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    //Optional//
    if (config.color) {
        console.log('color adjust...');
        newSquare.color = config.color;
    }
    if (config.width) {
        console.log('width adjust...');
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: "black" });
//let mySquare = createSquare({color:"black", width:20});
console.log('mySquare color: ' + mySquare.color);
console.log('mySquare area: ' + mySquare.area);
var p1 = { x: 10, y: 20 };
var square = {}; //Square로 Type Assertions//
square.color = 'RED';
square.penWidth = 5.0;
square.sideLength = 10;
console.log(square.color + ',' + square.penWidth + ',' + square.sideLength);

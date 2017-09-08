/*Interface(normal)*/
interface People{
    name:string;
    age:number;
}

//People의 인터페이스를 매개변수로 받고, 반환타입은 없는 함수//
function peopleinfo(people:People) : void{
    console.log('name: ' + people.name + ', age: ' + people.age);
}

var seopeople = {
    name: 'seo',
    age : 26
}

peopleinfo(seopeople);

/*Interface(optional -> '?' 이 붙어서 선언되면 기존 인터페이스 원칙처럼 모든 프로퍼티가 다 없어도 선택적으로 가능.)*/
interface SquareConfig{
    color? : string;
    width? : number;
}

function createSquare(config:SquareConfig) : {color:string; area:number}{
    let newSquare = {color:"white", area:100};

    //Optional//
    if(config.color){
        console.log('color adjust...');
        newSquare.color = config.color;
    }

    if(config.width){
        console.log('width adjust...');
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({color:"black"});
//let mySquare = createSquare({color:"black", width:20});

console.log('mySquare color: ' + mySquare.color);
console.log('mySquare area: ' + mySquare.area);

/*Readonly properties interface*/
interface Point{
    readonly x: number;
    readonly y: number;
}

let p1 : Point = {x:10, y:20};
//p1.x = 5; //수정불가//

/*Interface Extended (인터페이스 재사용)*/
interface Shape{
    color : string;
}

interface PenStroke{
    penWidth : number;
}

interface Square extends Shape, PenStroke{
    sideLength : number;
}

let square = <Square>{}; //Square로 Type Assertions//
square.color = 'RED';
square.penWidth = 5.0;
square.sideLength = 10;

console.log(square.color + ',' + square.penWidth + ',' + square.sideLength);
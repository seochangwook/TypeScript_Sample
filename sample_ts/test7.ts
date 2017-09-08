/* class (일반 자바문법처럼 쉽게 OOP를 구현가능) */
class Animal{
    //멤버변수(default:public)//
    name:string;
    
    //생성자//
    constructor(name:string){
        this.name = name;
    }

    //메소드//
    public move(distanceInMeters:number = 0){
        console.log(this.name + ' moved ' + distanceInMeters + 'm');
    }
}

class Snake extends Animal{
    snakeage:number;

    //멤버변수는 상속//
    constructor(name:string, snakeage:number){
        super(name);
        this.snakeage = snakeage;
    }

    //메소드 오버라이드//
    public move(distanceInMeters = 5){
        console.log('snake is ' + this.snakeage);
        super.move(distanceInMeters);
    }
}

var myAnimal = new Snake('snake', 20);
myAnimal.move();
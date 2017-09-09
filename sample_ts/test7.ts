/* class (일반 자바문법처럼 쉽게 OOP를 구현가능) */
class Animal{
    //멤버변수(default:public)//
    name:string;
    
    //생성자//
    public constructor(name:string){
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
    public constructor(name:string, snakeage:number){
        super(name);
        this.snakeage = snakeage;
    }

    //메소드 오버라이드//
    public move(distanceInMeters = 5){
        console.log('snake is ' + this.snakeage);
        super.move(distanceInMeters);
    }
}

class Horse extends Animal{
    public constructor(name:string){
        super(name);
    }

    public move(distanceInMeters:number){
        super.move(distanceInMeters);
    }
}

var myAnimal = new Snake('snake', 20);
myAnimal.move();
var myHorse = new Horse('zebra');
myHorse.move(5);

/* Getter/Setter */
let passcode = 'secret passcode';

class Employee{
    private _fullName : string;
    private _age : number;

    //private로 되어있는 멤버변수는 반환자로 반환(캡슐화)//
    get getFullName() : string{
        return this._fullName;
    }

    get getAge() : number{
        return this._age;
    }

    set setFullName(newName : string){
        //유효성 검사//
        if(passcode && passcode == 'secret passcode'){
            this._fullName = newName;
        } else{
            console.log('Error: Unauthorized update of employee');
        }
    }

    set setAge(newAge : number){
        if(passcode && passcode == 'secret passcode'){
            this._age = newAge;
        } else{
            console.log('Error: Unauthorized update of employee');
        }
    }

    public getMessage() : void{
        console.log('getter/setter test [' + this._fullName + ',' + this._age + ']');
    }
}

let employee = new Employee();

//setting//
employee.setFullName = 'seochangwook';
employee.setAge = 26;

var fullname = employee.getFullName;
var age = employee.getAge;

console.log('employee info: [' + fullname + ',' + age + ']');
employee.getMessage();

/* static Properties */
class Grid{
    static origin = {x : 0, y : 0}; //static멤버는 클래스명으로 참조//
    public scale : number;

    calculateDistanceFromOrigin(point: {x : number, y : number}){
        let xDist = (point.x - Grid.origin.x);
        let yDist = (point.y - Grid.origin.y);

        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }

    constructor(input_scale : number){
        this.scale = input_scale;
    }
}

let grid1 = new Grid(1.0);
let grid2 = new Grid(6.0);

console.log(grid1.calculateDistanceFromOrigin({x:10, y:10}));
console.log(grid2.calculateDistanceFromOrigin({x:10, y:10}));

/* abstract class */
abstract class Department{
    constructor (public name : string){
        console.log('Department name: ' + this.name);
    }

    printName() : void{
        console.log('Department name: ' + this.name);
    }

    abstract printMeeting() : void; //abstract이 붙었기에 구현하는 클래스 쪽에서 바디를 구현//
}

class AccountingDepartment extends Department{
    //추상클래스를 상속받게 되면 반드시 추상메소드의 바디를 구현//
    constructor(){
        super('Accounting and Auditing');
    }

    public printMeeting() : void{
        console.log('The Accounting Department meets each Monday at 10am');
    }

    public generateReports() : void{
        console.log('Generating accunting reports...');
    }
}

let department = new AccountingDepartment();
//department = new Department(); //추상클래스는 객체를 만들지 못한다.//

department.printMeeting();
department.printName();
department.generateReports();
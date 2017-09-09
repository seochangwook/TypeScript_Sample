var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/* class (일반 자바문법처럼 쉽게 OOP를 구현가능) */
var Animal = /** @class */ (function () {
    //생성자//
    function Animal(name) {
        this.name = name;
    }
    //메소드//
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log(this.name + ' moved ' + distanceInMeters + 'm');
    };
    return Animal;
}());
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    //멤버변수는 상속//
    function Snake(name, snakeage) {
        var _this = _super.call(this, name) || this;
        _this.snakeage = snakeage;
        return _this;
    }
    //메소드 오버라이드//
    Snake.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 5; }
        console.log('snake is ' + this.snakeage);
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Snake;
}(Animal));
var Horse = /** @class */ (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        return _super.call(this, name) || this;
    }
    Horse.prototype.move = function (distanceInMeters) {
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Horse;
}(Animal));
var myAnimal = new Snake('snake', 20);
myAnimal.move();
var myHorse = new Horse('zebra');
myHorse.move(5);
/* Getter/Setter */
var passcode = 'secret passcode';
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Object.defineProperty(Employee.prototype, "getFullName", {
        //private로 되어있는 멤버변수는 반환자로 반환(캡슐화)//
        get: function () {
            return this._fullName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "getAge", {
        get: function () {
            return this._age;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "setFullName", {
        set: function (newName) {
            //유효성 검사//
            if (passcode && passcode == 'secret passcode') {
                this._fullName = newName;
            }
            else {
                console.log('Error: Unauthorized update of employee');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "setAge", {
        set: function (newAge) {
            if (passcode && passcode == 'secret passcode') {
                this._age = newAge;
            }
            else {
                console.log('Error: Unauthorized update of employee');
            }
        },
        enumerable: true,
        configurable: true
    });
    Employee.prototype.getMessage = function () {
        console.log('getter/setter test [' + this._fullName + ',' + this._age + ']');
    };
    return Employee;
}());
var employee = new Employee();
//setting//
employee.setFullName = 'seochangwook';
employee.setAge = 26;
var fullname = employee.getFullName;
var age = employee.getAge;
console.log('employee info: [' + fullname + ',' + age + ']');
employee.getMessage();
/* static Properties */
var Grid = /** @class */ (function () {
    function Grid(input_scale) {
        this.scale = input_scale;
    }
    Grid.prototype.calculateDistanceFromOrigin = function (point) {
        var xDist = (point.x - Grid.origin.x);
        var yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    };
    Grid.origin = { x: 0, y: 0 }; //static멤버는 클래스명으로 참조//
    return Grid;
}());
var grid1 = new Grid(1.0);
var grid2 = new Grid(6.0);
console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));
/* abstract class */
var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
        console.log('Department name: ' + this.name);
    }
    Department.prototype.printName = function () {
        console.log('Department name: ' + this.name);
    };
    return Department;
}());
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    //추상클래스를 상속받게 되면 반드시 추상메소드의 바디를 구현//
    function AccountingDepartment() {
        return _super.call(this, 'Accounting and Auditing') || this;
    }
    AccountingDepartment.prototype.printMeeting = function () {
        console.log('The Accounting Department meets each Monday at 10am');
    };
    AccountingDepartment.prototype.generateReports = function () {
        console.log('Generating accunting reports...');
    };
    return AccountingDepartment;
}(Department));
var department = new AccountingDepartment();
//department = new Department(); //추상클래스는 객체를 만들지 못한다.//
department.printMeeting();
department.printName();
department.generateReports();

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
var myAnimal = new Snake('snake', 20);
myAnimal.move();

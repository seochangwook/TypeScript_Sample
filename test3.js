/* OOP 코드 */
/* TypeScript는 자바스크립트 기반에서 객체지향 코딩을 효율적이게 할 수 있는 방식 */
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    Greeter.prototype.printfunc = function () {
        console.log('class printfunc() call');
    };
    return Greeter;
}());
var greeter = new Greeter('seo');
console.log('message: ' + greeter.greet());
greeter.printfunc();

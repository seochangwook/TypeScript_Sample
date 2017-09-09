/* Generic */
//제네릭 함수에는 함수이름에 <T>가 따라온다.//
function genericFunc(argument) {
    var arrayOfT = [];
    arrayOfT.push(argument);
    return arrayOfT;
}
var arrayFromString = genericFunc('beep');
console.log(arrayFromString[0]);
console.log(typeof arrayFromString[0]);
var arrayFromNumber = genericFunc(26);
console.log(arrayFromNumber[0]);
console.log(typeof arrayFromNumber[0]);
/* Generic class */
var GenericClass = /** @class */ (function () {
    function GenericClass() {
    }
    Object.defineProperty(GenericClass.prototype, "setValue1", {
        set: function (inputvalue1) {
            console.log('input type: ' + typeof inputvalue1);
            this.value1 = inputvalue1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GenericClass.prototype, "setValue2", {
        set: function (inputvalue2) {
            console.log('input type: ' + typeof inputvalue2);
            this.value2 = inputvalue2;
        },
        enumerable: true,
        configurable: true
    });
    GenericClass.prototype.message = function () {
        console.log('print: ' + this.value1 + ',' + this.value2);
    };
    return GenericClass;
}());
//제네릭을 이용하면 클래스 생성 시 원하는 타입으로 효율적으로 변형할 수 있다.//
var myGenericclass = new GenericClass();
myGenericclass.setValue1 = 26;
myGenericclass.setValue2 = 10;
myGenericclass.message();
var myGenericclass2 = new GenericClass();
myGenericclass2.setValue1 = 'seo';
myGenericclass2.setValue2 = 'jjang';
myGenericclass2.message();

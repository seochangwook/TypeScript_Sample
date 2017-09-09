/* Generic */
//제네릭 함수에는 함수이름에 <T>가 따라온다.//
function genericFunc<T>(argument : T) : T[]{
    var arrayOfT : T[] = [];
    arrayOfT.push(argument);

    return arrayOfT;
}

var arrayFromString = genericFunc<string>('beep');
console.log(arrayFromString[0]);
console.log(typeof arrayFromString[0]);

var arrayFromNumber = genericFunc<number>(26);
console.log(arrayFromNumber[0]);
console.log(typeof arrayFromNumber[0]);

/* Generic class */
class GenericClass<T>{
    value1 : T;
    value2 : T;

    set setValue1(inputvalue1 : T){
        console.log('input type: ' + typeof inputvalue1);
        this.value1 = inputvalue1;
    }

    set setValue2(inputvalue2 : T){
        console.log('input type: ' + typeof inputvalue2);
        this.value2 = inputvalue2;
    }

    message() : void{
        console.log('print: ' + this.value1 + ',' + this.value2);
    }
}

//제네릭을 이용하면 클래스 생성 시 원하는 타입으로 효율적으로 변형할 수 있다.//
let myGenericclass = new GenericClass<number>();
myGenericclass.setValue1 = 26;
myGenericclass.setValue2 = 10;

myGenericclass.message();

let myGenericclass2 = new GenericClass<string>();
myGenericclass2.setValue1 = 'seo';
myGenericclass2.setValue2 = 'jjang';

myGenericclass2.message();
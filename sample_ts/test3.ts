/* OOP 코드 */
/* TypeScript는 자바스크립트 기반에서 객체지향 코딩을 효율적이게 할 수 있는 방식 */
class Greeter{
    greeting:string;

    constructor(message:string){
        this.greeting = message;
    }
    
    greet(){
        return "Hello, " + this.greeting;
    }

    printfunc(){
        console.log('class printfunc() call');
    }
}

var greeter = new Greeter('seo'); //객체생성//

console.log('message: ' + greeter.greet());
greeter.printfunc();
var arrowfunctest = (name:string) => name + ' jjang';
console.log('arrow name: ' + arrowfunctest('seo'));
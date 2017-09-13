/* Module */
//큰 앱을 개발하는데 있어 중요 개념 / 전역 스코프 분리 / 캡슐화 / 재사용성 / 의존성 관리
class HelloModule{
    constructor(){
        console.log('class new');
    }

    public message(name:string){
        console.log('message name: ' + name);
    }
}

export = HelloModule;
define("test9_export", ["require", "exports"], function (require, exports) {
    "use strict";
    /* Module */
    //큰 앱을 개발하는데 있어 중요 개념 / 전역 스코프 분리 / 캡슐화 / 재사용성 / 의존성 관리
    var HelloModule = /** @class */ (function () {
        function HelloModule() {
            console.log('class new');
        }
        HelloModule.prototype.message = function (name) {
            console.log('message name: ' + name);
        };
        return HelloModule;
    }());
    return HelloModule;
});
define("test9_import", ["require", "exports", "test9_export"], function (require, exports, HelloModule) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    console.log('hhhhh');
    var exportclass = new HelloModule();
    exportclass.message('seo');
});

define("test9_export", ["require", "exports"], function (require, exports) {
    "use strict";
    /* Module */
    //큰 앱을 개발하는데 있어 중요 개념 / 전역 스코프 분리 / 캡슐화 / 재사용성 / 의존성 관리
    var printMessage = function () {
        console.log('print module');
    };
    return printMessage;
});
define("test9_import", ["require", "exports", "test9_export"], function (require, exports, printmessage) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    printmessage();
});

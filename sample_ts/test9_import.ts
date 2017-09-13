/* Module */
import printmessage = require('./test9_export'); //모듈을 불러온다.//

console.log('hhhhh');
let exportclass = new printmessage();

exportclass.message('seo');
/* Tuple */
var x;
x = ['seo', 26];
//x = [10, 'seo']; //error//
console.log('tuple print: ' + x[0].length + ',' + x[1]);
//enum//
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
;
var color_name = Color[2];
console.log(color_name);
//Any type : 데이터 타입을 미리 알 수 없을 때 사용//
var anyvalue;
anyvalue = 10;
console.log('anyvalue(num): ' + anyvalue);
anyvalue = 'seo';
console.log('anyvalue(string): ' + anyvalue);
//Void type : any의 반대개념으로 어떤 타입도 가질 수 없을 경우//
function voidtest() {
    console.log('void function message...');
    //return '10';
}
voidtest();
//Null and Undefined//
var nullvalue = null;
var undefinevalue = undefined;
console.log('nullvalue: ' + nullvalue);
console.log('undefined value: ' + undefinevalue);
//Type Assertions//
var original_value = 'seochangwook';
var ori_str_value_length = original_value.length;
console.log('str size: ' + ori_str_value_length);

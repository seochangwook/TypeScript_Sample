var var1:number;
var var2:boolean;
var var3:string;

var1 = 7;
var2 = true;
var3 = 'seo';

console.log('var1: ' + var1 + ', var2: ' + var2 + ', var3: ' + var3);

//배열//
var list:number[] = [1,2,3];
var list:Array<number> = [1,2,3];

for(var i=0; i<list.length; i++){
    console.log('list number['+i+'] : ' + list[i]);
}
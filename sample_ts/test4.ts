//인터페이스//
function printLabel(labelledObj:{label:string, size:number}){
    console.log(labelledObj.label + ',' + labelledObj.size);
}

var myObj = {label:'10', size:20};
printLabel(myObj);
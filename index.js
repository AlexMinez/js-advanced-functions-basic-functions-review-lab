function saturdayFun(x = 'roller-skate'){
   return `This Saturday, I want to ${x}!`;
}
let mondayWork = function( x = 'go to the office' ){
return `This Monday, I will ${x}.`
}


function wrapAdjective(a='*'){
   return function (x = 'special'){
      return `You are ${a}${x}${a}!`
   }

}

const Calculator = {
 a: 1,
 b: 3,
 add: function (a, b){
    return a + b;
 },subtract: function(a, b){
    return a - b;
 },multiply: function(a, b){
    return a * b;
 },divide: function(a, b){
    return a / b;
 }
}
function actionApplyer(start, arr) {
  for(let i=0; i<arr.length;i++){
     start=arr[i](start);
  }return start
}
   
   
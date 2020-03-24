/** 
 * 1. Identify the base case
 * 2. Identify the recursive case
 * 3. Get closer and closer and * return when needed. usually you have 2 returns
 * 
 * 
 * 
*/

/*

(function inception(count){
  if(count == 0) return count;
  return inception(count-1);
})(100);

let counter = 0;
(function inception2(){
  console.log(counter);
  if(counter > 3 ) return "done";
    counter++;
    return inception2;
  
})();
*/
/*
(function findFactorialRescurise(number){
  if(number == 1 ) return 1;
  return number * findFactorialRescurise(number-1);
})();
*/
/*
(function findFactoriaItertive(number){
  var factorial = 1;
  for(var n = number; n >= 2; n--){
      factorial  *= n;    
  }
  return factorial;
})(100);
*/

(function fibonacciRescurise(n){
  if(n < 2 )return n;
    return fibonacciRescurise(n-1) + fibonacciRescurise(n-2);

})(4);


/*
(function fibonacciIterative(n){
let result = 0;
let pre = 1;
let prepre = 0;
for(let i = 1; i <= n; i++){
    prepre = pre;
    pre = result;
   result = pre + prepre
}
return result;
})(8);
*/

(function fibonacciIterative2(n){
  let arr = [0, 1];
  for(let i = 2; i <= n; i++){
      arr[i] = arr[i-1] + arr[i-2];
  }
console.log("result is : "+ arr[n]);
})(1000);


;

function reverseStringRecursive (str) {
  
  if (str === "") {
    return "";
  } else {
    return reverseStringRecursive(str.substr(1)) + str.charAt(0);
  }
}
reverseStringRecursive('yoyo master');

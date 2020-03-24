function addTo80(n){
  console.log("Long time !!!");
  return n + 80;
}

function  memorizedAddTo80(){
  let cache = {};
  return function (n){
    if(n in cache){
      return cache[n];
    }else{
      cache[n]= addTo80(n);
    }
    return cache[n];
  }
}

const memoized = memorizedAddTo80();
 console.log(memoized(80));
 console.log(memoized(80));

let countR = 0;
 function fibSeq (n){
   if(n == 0){
       return 0;
   }else if (n == 1 || n == 2){
     return 1;
   }else{
     countR ++;
      return fibSeq(n-1) + fibSeq(n-2);
   }

 }
fibSeq(100);
 console.log("number of calculation is " + countR);

let count = 0;
 function fibSeqMemorized(){
   let cache = {0: 0, 1 : 1};
   return function fib(n){
      if(n < 2){
        return cache[n];
      }else{
        if(n in cache){
            return cache[n];
        }else{
          count++;
          cache[n] = fib(n-1) + fib(n-2);
          return  cache[n];
        }
      }
      
   }
 
 }

 const fibonacci = fibSeqMemorized();
 console.log(fibonacci(100));
 console.log("number of calculation is " + count);
// What is the Big O of the below function? (Hint, you may want to go line by line)
(function funChallenge(input) {
  let a = 10;
  a = 50 + 3;

  for (let i = 0; i < input.length; i++) {
    //anotherFunction();
    let stranger = true;
    a++;
  }
  return a;
})([1,2,3,4,5]);



// What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunChallenge(input) {
  let a = 5; // O(1)
  let b = 10; // 1
  let c = 50; //1
  for (let i = 0; i < input; i++) { //n 
    let x = i + 1; // n
    let y = i + 2;//n
    let z = i + 3;//n

  }
  for (let j = 0; j < input; j++) {//n
    let p = j * 2;//n
    let q = j * 2;//n
  }
  let whoAmI = "I don't know"; //1
}

// total = > O(4 + 7n) => simplifying to O(n) 

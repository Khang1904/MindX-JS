const numls = [];
const even = [];
let evenSum = 0;
const odd = [];
let oddSum = 0;
let numIn = parseInt(prompt("Choose a number. We'll find numbers which are higner than this one."))
const highNum = []

for (let i = 0; i < 5; i++){
    numls[i] = i;
    if (numls[i] % 2 == 0){
        even.push(numls[i]);
        evenSum += numls[i];
    }else{
        odd.push(numls[i]);
        oddSum += numls[i]
    }
    if (numls[i] > numIn){
        highNum.push(numls[i])
    }
    
}

console.log("List: " + numls);
console.log("Even: " + even);
console.log("Odd: " + odd);
console.log("Sum of even: " + evenSum);
console.log("Sum of odd: " + oddSum);
console.log("Numbers higher than " + numIn + ": " + highNum);
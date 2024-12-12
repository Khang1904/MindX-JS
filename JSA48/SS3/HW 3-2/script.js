let triNum = parseInt(prompt("Enter a number"))
let toPrint = ""

for (let i = 1; i <= triNum;i++){
    for (let x = 1; x <= i; i++){
        toPrint += x
    } 
    console.log(toPrint)
}
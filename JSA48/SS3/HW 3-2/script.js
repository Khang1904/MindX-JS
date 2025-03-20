let n = parseInt(prompt("Enter a number"))
let toPrint = ""

for (let i = 1; i <= n; i++){
    let x = 1 // Changed variable name to avoid redeclaration
    while (toPrint.length < n) { // Corrected the usage of length property
        toPrint += String(x)
        console.log(toPrint)
        x++
    }
}
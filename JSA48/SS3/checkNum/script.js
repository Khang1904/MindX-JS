while (true){
    let n = parseInt(prompt("Enter a number"))
    if (n < 0){
        document.write("Please reenter <br/>")
    }
    else if (n == 0){
        document.write("n = 0 <br/>")
        break
    }   
    else{
        document.write("n > 0 <br/>")
        break
    }
}
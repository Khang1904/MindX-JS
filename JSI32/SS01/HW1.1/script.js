const testcases = [
    [true, true, true, true, true],
    [false, false, false, false, false],
    [true, false, true, false, true],
    [],
    [true],
    [false]
]

document.getElementById("run").addEventListener("click", () => {
    const testcase = parseInt(document.getElementById("testcase").value);
    const countTrue = testcases[testcase].reduce((accumulator, currentValue) => {
        if (currentValue) {
            return accumulator + 1;
        }
        return accumulator;
    }, 0);
    document.getElementById("result").innerText = countTrue;
});


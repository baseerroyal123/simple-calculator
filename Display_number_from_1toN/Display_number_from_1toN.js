function printNumbers() {
    let n = Number(document.getElementById("num").value);
    let output = "";
        for (let i = 1; i <= n; i++) {
                output += i + " ";
        }

    document.getElementById("result").innerHTML = output;
}

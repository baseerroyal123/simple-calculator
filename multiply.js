function submit(){
    let user = Number(document.getElementById("user").value);
    let table = "";
    for(let i = 1; i <= 10; i++){
        table += user + " x " + i + " = " + (user * i) + "<br>";
    }
    document.getElementById("result").innerHTML = "Result: " + table;
}
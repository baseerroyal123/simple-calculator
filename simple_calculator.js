function Calculator(){
    let num1 = Number(document.getElementById("num1").value);
    let operator = document.getElementById("operator").value;
    let num2 = Number(document.getElementById("num2").value);
    if(operator === "+"){
        document.getElementById("result").innerHTML = 
        "Result: " + (num1 + num2); 
    }else if(operator === "-"){
        document.getElementById("result").innerHTML = 
        "Result: " + (num1 - num2);
    }else if(operator === "*"){
        document.getElementById("result").innerHTML = 
        "Result: " + (num1 * num2);
    }else if(operator === "/"){
        if(num2 === 0){
            alert("Not divided by zero");
            return;
        }
        document.getElementById("result").innerHTML = 
        "Result: " + (num1 / num2);
    }else if(operator === "%"){
        document.getElementById("result").innerHTML = 
        "Result: " + (num1 % num2);
    }
}
function equals(){
    Calculator();
}

function add(){
    let operator = document.getElementById("operator").value = "+";
}



function subtract(){
    let operator = document.getElementById("operator").value = "-";
}

function multiply(){
    let operator = document.getElementById("operator").value = "*";
}

function divide(){
    let operator = document.getElementById("operator").value = "/";
}

function modulus(){
    let operator = document.getElementById("operator").value = "%";
}

function Submit(){
    let user = Number(document.getElementById("user").value);
    let age = "";
    if(user <= 12){
        age = "You are child";
    }else if(user >= 13 && user <= 19){
        age = "You are teenager";
    }else if(user >= 20 && user <= 59){
        age = "You are adult";
    }else if(user >= 60){
        age = "You are senior citizen";
    }
    document.getElementById("result").innerHTML = 
    "Result: " + age;
}
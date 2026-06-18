function Enter(){
    let user = Number(document.getElementById("user").value);
    let grade = "";
    if(user <= 100 && user >= 90){
        grade = "A";
    }else if(user <= 89 && user >= 80){
        grade = "B";
    }else if(user <= 79 && user >= 70){
        grade = "C";
    }else if(user <= 69 && user >= 60){
        grade = "D";
    }else if(user <= 59 && user >= 50){
        grade = "E";
    }else if(user <= 49){
        grade = "F";
    }
    document.getElementById("Grade").innerHTML =
    "Your Grade is: " + grade; 
}
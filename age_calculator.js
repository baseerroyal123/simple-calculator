function Submit(){
    let BirthDate =  Number(document.getElementById("BirthDate").value);
    let today = new Date();
    let Age = today.getFullYear() - BirthDate;
    document.getElementById("result").innerHTML = 
    "Result: " + "Your age is: " + Age + " years";
    
}
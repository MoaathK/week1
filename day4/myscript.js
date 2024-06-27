
function myfunction(x ,y){
   
    let z = x + y
    window.alert(z);

    
}

function toCelsius(fahrenheit) {
    let temp = (5/9) * (fahrenheit-32);
    window.alert(temp);
}
function toFahrenheit(celsius){
    let temp = (celsius *5/9) +32
    window.alert(temp)
    
}


function newWork(){
    return document.getElementById("demo").innerHTML = "Paragraph changed.";
     
}

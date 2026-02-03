
function ConvertTemperature(){
    let scale = prompt("Please enter C or F"); 


    let temp = prompt("temp");
    
    
    
    if (scale == "F" ) {
        let C = (temp - 32) * 5/9;
        
        document.getElementById("results").innerHTML =
        `The conversion of: --- ${temp} fahrenheit are ${C} Celsius`;
    }else{
        
        let F = (temp * 9/5) + 32;
            document.getElementById("results").innerHTML =
           `The conversion of: --- ${temp} Celsius are ${F} fahrenheit`;  

    }
    

}




   


   
   
  
  
   
  


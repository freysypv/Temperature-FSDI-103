let temp;

function CelsiustoFahrenheit() {
  temp = prompt("temp");

  let C = (temp * 9/5) + 32;

  document.getElementById("results").innerHTML =
    ` ${temp} C are ${C} F`;
}

function FahrenheittoCelsius() {

  temp = prompt("temp");

    let F = (temp - 32) * 5/9 ; 

    document.getElementById("results").innerHTML =
      `${temp} F are ${F} C`;
  
}

function GenerateTable() {
  //console.log("We are here");
  //console.log(temp);

  let F;
  let C;

 

  C = (temp - 32) * 5 / 9;

 

  let table = document.getElementById("tbody");

  for (let i = 1; i <= 10; i++) {
    
    temp = Number(temp) + 10;
    F = (temp * 9/ 5 )+ 32;
    console.log(temp,F);
   
    console.log(temp);
    

    let tableRow = document.createElement("tr");
    tableRow.textContent +=
       temp + " C " + "are" + F + " F " ;
    table.appendChild(tableRow);

    //console.clear()
    
  }

  
}

 function Table(){
   
    let c;
    let f;
     c = (temp - 32) * 5 / 9;

    for(let c = 0; c <=100; c +=10){
         f = (c*9/5) + 32; 
        
        

         
        document.getElementById("temps").innerHTML +=`            <tr>
                <td>${c}</td>
                <td>${f}</td>             </tr>
        `;
    
      }
  }


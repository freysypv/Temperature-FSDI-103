function convertstemperature(){
console.log("")
let Celsius = prompt("Celsius");
let Fahrenheit = (Celsius * 9/5) + 32;
document.getElementById("results").innerHTML =
`The conversion of: --- ${Celsius} celsius are ${Fahrenheit} fahrenheit`;
}
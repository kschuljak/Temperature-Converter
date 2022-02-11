// Temperature Converter - JS

function convertTemp() {
  
  //fetches user selected input unit
  let inputUnitSelected = document.getElementById('inputUnit').value;
  
  //fetches user selected output unit
  let outputUnitSelected = document.getElementById('outputUnit').value;
  
  //fetches user entered temperature
  let x = document.getElementById('inputTemp').value;
  
  //selects correct conversion based on input unit and output unit
  if (inputUnitSelected == "Kelvin"  &&  outputUnitSelected == "Celsius") {
    convertedOutputTemp = (x - 273.15);
  } else if (inputUnitSelected == "Kelvin" && outputUnitSelected == "Fahrenheit") {
    convertedOutputTemp = (1.8 * (x - 273) + 32);
  } else if (inputUnitSelected == "Celsius" && outputUnitSelected == "Fahrenheit") {
    convertedOutputTemp = (1.8 * (x) + 32);
  } else if (inputUnitSelected == "Celsius" && outputUnitSelected == "Kelvin") {
    convertedOutputTemp = (x + 273.15);
  } else if (inputUnitSelected == "Fahrenheit" && outputUnitSelected == "Celsius") {
    convertedOutputTemp = ((x - 32)/1.8);
  } else if (inputUnitSelected == "Fahrenheit" && outputUnitSelected == "Kelvin") {
    convertedOutputTemp = (5/9 * (x - 32) + 273.15);
  } else {
    convertedOutputTemp = "please double check conversion options"
  }
  return convertedOutputTemp;
} //end of convertTemp function

//button event - prompts conversion to execute and display
function displayTemp(convertTemp) {
  const placeholder = document.getElementById('placeholder');
  placeholder.innerHTML = convertTemp;
}
const button = document.getElementById('btn');
button.onclick = function() {
  let result = convertTemp();
  displayTemp(result);
}


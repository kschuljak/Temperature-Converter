# Temperature Converter
 
 on codepen at https://codepen.io/kaschul/pen/rNYmEBO

- converts between Celsius, Fahrenheit, and Kelvin
- displays converted temperature rounded to two decimal places and with appropriate unit
- displays error when no number is entered to convert
- if both conversion options are the same (ex, Celsius to Celsius) the number entered is the number displayed

![tempconverter1](https://user-images.githubusercontent.com/47723396/183964499-2a4b10fc-eb01-48ec-b06e-86b1f249a3ea.JPG)

# Examples

![tempexamples](https://user-images.githubusercontent.com/47723396/184039667-921c9a4f-8c67-4e8a-befe-72c9182a62e2.png)

```js
function roundTwoDecimals(x) {
  let rounded = Number((Math.abs(x) * 100).toPrecision(15));
  return Math.round(rounded) / 100 * Math.sign(x);
}

const convertTemp = (x, inputUnitSelected, outputUnitSelected) => {
   // error handling if entered value is not a number
   if (isNaN(x)) {
      convertedOutputTemp = "please enter a number";
      return;
   // selects correct conversion based on entered values, and assigns the correct unit to display on result
   } else  if (inputUnitSelected == "Kelvin"  &&  outputUnitSelected == "Celsius") {
      convertedOutputTemp = (x - 273.15);
      unit = "&deg;C";
   } else if (inputUnitSelected == "Kelvin" && outputUnitSelected == "Fahrenheit") {
      convertedOutputTemp = (1.8 * (x - 273) + 32);
      unit = "&deg;F";
   // ... (etc - code omitted for example) ...
   } else if (inputUnitSelected == outputUnitSelected) {
      // if input and output unit are the same, return entered number with appropriate unit
      convertedOutputTemp = x;
      if (outputUnitSelected == "Fahrenheit") {
         unit = "&deg;F";
      } else if (outputUnitSelected == "Kelvin") {
         unit = "K";
      } else if (outputUnitSelected == "Celsius") {
         unit = "&deg;C";
      }
   } else {
      convertedOutputTemp = "please double check conversion options";
      return;
   }
   let answer = roundTwoDecimals(convertedOutputTemp);
   return answer + '  ' + unit;
}
```

import { convertCentiToFeet, convertFeetToCenti } from './feet-cm-converter.js';

const conversionHeading = document.getElementById('conversion-heading');
const convertForm = document.getElementById('convert-form');
const convertbtn = document.getElementById('convert-button');
const showConvert = document.getElementById('show-convert');
const numberInput = document.getElementById('number-input');
const changeLabel = document.getElementById('change');
const convertDropdown = document.getElementById('convert-dropdown');
const changeOuptut = document.getElementById('change-output');

function iWantFirstLetterCapital(str){
  return str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
}

const arrStr = ["Foot", "Centimeter"]

convertDropdown.addEventListener("change", (e) => {
  changeLabel.innerHTML = "";
  switch(e.target.value){
    case "centimeter":
      update(convertDropdown.value, arrStr[0], false);
      break;
    case "foot":
      update(convertDropdown.value, arrStr[1], false);
      break;
    default:
      update(convertDropdown.value, "", true);
      break;
  }
});

function update(value, str, flag){
  numberInput.value = "";
  showConvert.innerHTML = "";
  if(value !== "select"){
    changeLabel.innerHTML = iWantFirstLetterCapital(value);
    changeOuptut.innerText = str + ":";
    conversionHeading.innerText = `${changeLabel.innerText} to ${str}:`;
  } else {
    changeOuptut.innerText = "";
    conversionHeading.innerText = "Aryan's Conversion Calculator";
  }
  convertForm.hidden = flag;
}

function centimeterValue(){
  const value = numberInput.value;
  const cm = convertCentiToFeet(parseInt(value));
  showConvert.innerHTML = cm;
}

function footValue(){
  const value = numberInput.value;
  const foot = convertFeetToCenti(parseInt(value));
  showConvert.innerHTML = foot;
}

convertbtn.addEventListener("click", (e) => {
  e.preventDefault();
  if(convertDropdown.value === "centimeter"){
    centimeterValue();
  }
  else if(convertDropdown.value === "foot") {
    footValue();
  }
})

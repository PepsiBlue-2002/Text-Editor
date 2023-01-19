//Italics
function Italics() {
  let input4 = document.getElementById('input4').value;
  let italicize = input4.italics();
  document.getElementById('output4').innerHTML = italicize;
};


//Bold
//'<b>' <---- May have to use for browser compatibility since bold() is deprecated but I'm chillin.
//'<b>' + '' + '</b>';   update: it worked for now; leaving it
function bold() {
  let input5 = document.getElementById('input5').value;
  let bolded = input5.bold();
  document.getElementById('output5').innerHTML = bolded;
};


//Strikethrough
function Strike() {
  let input6 = document.getElementById('input6').value;
  let strikeout = input6.strike();
  document.getElementById('output6').innerHTML = strikeout;
};


//Underline
// Couldn't get toUnderline() to work possibly due to the compatibility issues so used classic ol' HTML.
function toUnderline() {
  let input7 = document.getElementById('input7').value;
  let output7 = document.getElementById('output7');
  output7.innerHTML = '<u>' + input7 + '</u>';
};


//Superscript
function Superscript() {
  let input8 = document.getElementById('input8').value;
  let output8 = document.getElementById('output8');
  output8.innerHTML = '<sup>' + input8 + '</sup>';
};
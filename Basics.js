//Italics
function Italics() {
  var input4 = document.getElementById('input4').value;
  var italicize = input4.italics();
  document.getElementById('output4').innerHTML = italicize;
};


//Bold
//'<b>' <---- May have to use for browser compatibility since bold() is deprecated but I'm chillin.
//'<b>' + '' + '</b>';
function bold() {
  var input5 = document.getElementById('input5').value;
  var bolded = input5.bold();
  document.getElementById('output5').innerHTML = bolded;
};


//Strikethrough
function Strike() {
  var input6 = document.getElementById('input6').value;
  var strikeout = input6.strike();
  document.getElementById('output6').innerHTML = strikeout;
};



/*
//Underline
function toUnderline(text) {
  return '<u>' + text + '</u>';
}

let input = 'This is some text';
let output = toUnderline(input);
console.log(output);  // Output: '<u>This is some text</u>'
*/
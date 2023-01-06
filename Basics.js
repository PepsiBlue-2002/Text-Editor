function Italics() {
  // Get the value of the input
  var input4 = document.getElementById('input4').value;

  // Reverse the input using the split, reverse, and join methods
  var italicize = input4.italics();

  // Update the output div with the reversed text
  document.getElementById('output4').innerHTML = italicize;
}


/*
//Bold
function toBold(text) {
    return '<b>' + text + '</b>';
}

let input = 'This is some text';
let output = toBold(input);
console.log(output);  // Output: '<b>This is some text</b>'  
*/
/*
//Strikethrough
function toStrikethrough(text) {
  return '<s>' + text + '</s>';
}

let input = 'This is some text';
let output = toStrikethrough(input);
console.log(output);  // Output: '<s>This is some text</s>'


//Underline
function toUnderline(text) {
  return '<u>' + text + '</u>';
}

let input = 'This is some text';
let output = toUnderline(input);
console.log(output);  // Output: '<u>This is some text</u>'
*/
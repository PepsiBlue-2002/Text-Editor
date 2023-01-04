

//Italics
function toItalics(text) {
    return '<i>' + text + '</i>';
  }
  
  let input = 'This is some text';
  let output = toItalics(input);
  console.log(output);  // Output: '<i>This is some text</i>'



//Bold
function toBold(text) {
    return '<b>' + text + '</b>';
}

let input = 'This is some text';
let output = toBold(input);
console.log(output);  // Output: '<b>This is some text</b>'  


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

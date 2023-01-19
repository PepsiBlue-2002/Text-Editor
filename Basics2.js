//Reverse
function reverseInput() {

    let input = document.getElementById('input1').value;

    let reversed = input.split('').reverse().join('');

    document.getElementById('output1').innerHTML = reversed;
};

//Caps-Lock
function allCaps() {

    let input = document.getElementById('input2').value;

    let caps = input.toUpperCase();

    document.getElementById('output2').innerHTML = caps;
};

//Lower-case
function lowerCase() {

    let input = document.getElementById('input3').value;

    let nocaps = input.toLowerCase();

    document.getElementById('output3').innerHTML = nocaps;
};

//Superscript
function Subscript() {
    let input = document.getElementById('input15').value;

    let output = document.getElementById('output15');

    output.innerHTML = '<sub>' + input + '</sub>';
};

//toggel-case
function toggleCase() {
    let input = document.getElementById("input16").value;
    let output = input.split('').map(function(char) {
      return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
    }).join('');
    document.getElementById("output16").innerHTML = output;
  }
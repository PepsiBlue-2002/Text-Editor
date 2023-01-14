//Reverse
function reverseInput() {

    var input = document.getElementById('input1').value;

    var reversed = input.split('').reverse().join('');

    document.getElementById('output1').innerHTML = reversed;
};

//Caps-Lock
function allCaps() {

    var input = document.getElementById('input2').value;

    var caps = input.toUpperCase();

    document.getElementById('output2').innerHTML = caps;
};

//Lower-case
function lowerCase() {

    var input = document.getElementById('input3').value;

    var nocaps = input.toLowerCase();

    document.getElementById('output3').innerHTML = nocaps;
};
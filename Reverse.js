function reverseInput() {
    // Get the value of the input
    var input = document.getElementById('input1').value;

    // Reverse the input using the split, reverse, and join methods
    var reversed = input.split('').reverse().join('');

    // Update the output div with the reversed text
    document.getElementById('output1').innerHTML = reversed;
  }
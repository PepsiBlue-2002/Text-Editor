function lowerCase() {
    // Get the value of the input
    var input = document.getElementById('input3').value;

    // Reverse the input using the split, reverse, and join methods
    var nocaps = input.toLowerCase();

    // Update the output div with the reversed text
    document.getElementById('output3').innerHTML = nocaps;
  }
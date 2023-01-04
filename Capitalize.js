function allCaps() {
    // Get the value of the input
    var input = document.getElementById('input2').value;

    // Reverse the input using the split, reverse, and join methods
    var caps = input.toUpperCase();

    // Update the output div with the reversed text
    document.getElementById('output2').innerHTML = caps;
  }
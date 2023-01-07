/*<body>
  <form onsubmit="return showOutput()">
    <input type="text" id="inputBox">
    <button type="submit">Submit</button>
  </form>
  <div class="output" id="output"></div>
*/

    function showOutput() {
      // Get the value of the input box
      const input = document.getElementById("inputBox").value;
      // Set the value of the output element to the input value
      document.getElementById("output").innerHTML = input;
      // Prevent the form from refreshing the page
      return false;
    }
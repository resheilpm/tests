// Vulnerable code
const userInput = '<script>alert("XSS attack!")</script>';
document.getElementById("output").innerHTML = userInput;

// Third vulnerability
var AWS_TOKEN = "XX648ssse";


if (5 === 5) {
  // Some code here
}

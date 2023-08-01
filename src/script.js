// Vulnerable code
const userInput = '<script>alert("XSS attack!")</script>';
document.getElementById("output").innerHTML = userInput;

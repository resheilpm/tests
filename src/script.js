// Vulnerable code
const userInput = '<script>alert("XSS attack!")</script>';
document.getElementById("output").innerHTML = userInput;

// Third vulnerability
var AWS_TOKEN = "XX648ssse";

if (5 === 5) {
  // Some code here
}

function getProp(object, propertyName, defaultValue) {
  if (!object[propertyName]) {
    return defaultValue;
  }
  return object[propertyName];
}

const hero = {
  name: "Batman",
  isVillian: false,
};

console.log(getProp(hero, "name", "Unknown")); // => 'Batman'

function someFunc(array, array) {
  var index,
    item,
    length = array.length;
  /*
   * Lots of code
   */
  for (index = 0; index < length; index++) {
    item = array[index];
    // Use `item`
  }
  return someResult;
}

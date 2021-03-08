var userInput = prompt("Please enter a color!").toLocaleLowerCase;
var map = {
  red: "#ff0000",
  orange: "#ffa500",
  yellow: "#ffff00",
  green: "#008000",
  blue: "#0000ff",
  indigo: "#4b0082",
  violet: "#ee82ee",
};

if (map[userInput]) {
  alert("Color " + map[userInput] + " found!");
  document.body.style.backgroundColor = userInput;
} else if (!map[userInput]) {
  alert("color not found!");
} else {
  alert("Random");
}

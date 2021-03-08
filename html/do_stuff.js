// Create a cat object with a makeNoise method and a noise property with a value of “Meou!”
// The makeNoise method should console log “Meou!!”
// Call the makeNoise method and make sure it console logs the expected string
// Overwrite the makeNoise implementation and make it console log “Meow Meow!” instead
// Call the makeNoise method and make sure it console logs the expected string
var cat = {
  makeNoise: function () {
    console.log("Meou!!");
  },
  noise: "Meou!!",
};

cat.makeNoise = console.log("Mewo Mewo!");

cat.makeNoise;

/*
document.getElementsByTagName(tagName) returns a list (array) of HTML elements that match the tagName.

E.g document.getElementsByTagName("p") returns a list of all <p> elements
*/

// Use document.getElementsByTagName to get all the <h1> elements on the page and store them in a h1Elements variable

// YOUR CODE GOES HERE
h1Elements = document.getElementsByTagName("h1").innerHTML;

// h1Elements is an array. Change the content of the 2nd h1 to "It was dynamically created with JS"
console.log(h1Elements);
document.h1Elements[1].innerHTML = "It was dynamically created with JS";

// YOUR CODE GOES HERE

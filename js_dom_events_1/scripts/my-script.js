/*
When the button#counter_btn is clicked, display how many times it has been clicked in the span#click_count
*/
// YOUR CODE GOES HERE
document.querySelector("#counter_btn").addEventListener("click", counter);

let clicks = 0;
function counter() {
  clicks++;
  document.getElementById("#click_count").innerHTML = clicks;
}

document.querySelector("#reset_btn").addEventListener("click", resetCounter);

function resetcounter() {
  clicks = 0;
  document.getElementById("#counter_btn").innerHTML = clicks;
}

/*
When the button#reset_btn is clicked, reset the button click counter to 0
*/

// YOUR CODE GOES HERE

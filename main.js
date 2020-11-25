// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", function() {
  const hearts = document.getElementsByClassName("like-glyph")
  // get a collection of hearts
  // add an event listener to each heart
  for (const heart of hearts){
    heart.addEventListener("click", () => {
      // make a server call
      mimicServerCall() // return a promise
      .then(() => {
        // when successful, change the heart
        // if it is empty, make it full, add new class
        // else if its full, make it empty
        heart.innerHTML = FULL_HEART
      })
      // promises have the .then()
      // 1st .then take the response, jsonify it
      // 2nd .then take the jsonified response, do something with it
    })
  }
});


//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

// mimicServerCall utilize just like fetch
function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

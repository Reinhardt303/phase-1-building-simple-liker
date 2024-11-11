// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const articleHearts = document.querySelectorAll(".like-glyph");

addHidden()

function likeCallback(e) {
  const heart = e.target;
  mimicServerCall()
    .then(function(serverMessage){
      alert(serverMessage);
      heart.classList.add("activated-heart")
      if (heart.innerText === FULL_HEART){
        heart.innerText = EMPTY_HEART
      }
      else {
        heart.innerText = FULL_HEART;
      }
    })
    .catch(function () {
      document.querySelector('#modal').removeAttribute("class");
      setTimeout(addHidden, 3000)
    });  
}

function addHidden()  {
  document.querySelector('#modal').classList.add("hidden")
}

for (const glyph of articleHearts) {
  glyph.addEventListener("click", likeCallback);
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

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

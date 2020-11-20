// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

var main = document.getElementsByClassName('container')[0];

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
window.onload = function () {
  // modal.classList.add('active')

}

// When the user clicks on <span> (x), close the modal
span.onclick = async function () {
  main.classList.add('unblurry')
  await fadeout();
  
}

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.classList.remove('active')
//     main.classList.remove('blurry')
//     modal.classList.add('inactive')
//   }
// }

async function fadeout() {
  await new Promise((resolve, _) => {
    modal.classList.add('vanish')
    setTimeout(() => modal.classList.remove('active'), 1000) 
  })
}


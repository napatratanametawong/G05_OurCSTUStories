//Homepage
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
//slider member
let items = document.querySelectorAll('.card-slider .card-item');
let next = document.getElementById('right');
let prev = document.getElementById('left');
    
let active = 3;
function loadShow(){
    let stt = 0;
    items[active].style.transform = `none`;
    items[active].style.zIndex = 1;
    items[active].style.filter = 'none';
    items[active].style.opacity = 1;
    for(var i = active + 1; i < items.length; i++){
    stt++;
    items[i].style.transform = `translateX(${120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(-1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
    stt = 0;
    for(var i = active - 1; i >= 0; i--){
        stt++;
        items[i].style.transform = `translateX(${-120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
}
loadShow();
next.onclick = function(){
    active = active + 1 < items.length ? active + 1 : active;
    loadShow();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : active;
    loadShow();
}

//form guest book
//validate data input in guest book
  // Function validate fullname
  function validateName() {
    const fullnameInput = document.getElementById("fullname");
    const names = fullnameInput.value.trim().split(" ");
    const errorElement = document.getElementById("fullnameError");
  
    if (names.length !== 2) {
      errorElement.textContent = "Please enter only first and last name, separated by spaces."; //Show a message when the user enters invalid information.
      return false;
    } 
    else {
      errorElement.textContent = ""; // Clear the error message when valid
    }
    return true;
}
document.getElementById("fullname").addEventListener("input", validateName); // Event listeners for input name





//Journey








//Future
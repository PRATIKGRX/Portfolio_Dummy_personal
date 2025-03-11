const navBar = document.getElementById("navBar");
const heroSec = document.getElementById("heroSec");
window.addEventListener("scroll",function (){
    if(window.scrollY >= heroSec.offsetHeight){
        navBar.classList.add("fixedPosition");
        navBar.classList.remove("absolute");
    }
    else{
        navBar.classList.remove("fixedPosition");
        navBar.classList.add("absolute");
    }
});
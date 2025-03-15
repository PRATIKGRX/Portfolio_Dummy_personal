const navBar = document.getElementById("navBar");
const heroSec = document.getElementById("heroSec");
window.addEventListener("scroll",function (){
    if(window.scrollY >= heroSec.offsetHeight){
        navBar.classList.add("fixedPosition");
        navBar.classList.remove("absolute");
        navBar.classList.remove("nav-bar");
        navBar.classList.add("scroll-icons");
    }
    else{
        navBar.classList.remove("fixedPosition");
        navBar.classList.remove("scroll-icons");
        navBar.classList.add("absolute");
        navBar.classList.add("nav-bar");
    }
});

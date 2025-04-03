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
function showBar(){
    document.getElementById("btn").style.display = "none";
    const sideBar = document.getElementById("sideBarContainer");
    sideBar.classList.remove("hidden");
    document.getElementById("close").style.display = "block";
}
function closeBtn(){
    document.getElementById("close").style.display = "none";
    const sideBar = document.getElementById("sideBarContainer");
    sideBar.classList.add("hidden");
    document.getElementById("btn").style.display = "block";

}
const dropDownBtn = document.getElementById("dropdown-btn");
const dropDown = document.getElementById("dropdown");
const dropDownCancel = document.getElementById("dropdown-cancel");
dropDownBtn.addEventListener('click',()=>{
    dropDown.classList.remove("hidden");
    document.body.style.overflow = "hidden";
});
dropDownCancel.addEventListener('click',()=>{
    dropDown.classList.add("hidden");
    document.body.style.overflow = "auto";
});
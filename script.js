/*----------------------------VARIABLES----------------------------*/
let navbar = document.getElementById("navbar");
let sticky = navbar.offsetTop;


/*-------------------------EVENT LISTENERS-------------------------*/
window.addEventListener("scroll", toggleStickyNavbar);


/*--------------------------PROGRAM FLOW--------------------------*/



/*----------------------------FUNCTIONS----------------------------*/
function toggleStickyNavbar(){
    if (window.pageYOffset >= sticky){
        navbar.classList.add("sticky");
    } else{
        navbar.classList.remove("sticky");
    }
}

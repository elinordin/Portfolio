/*----------------------------VARIABLES----------------------------*/
let bigGap = 72;
let navbar = document.getElementById("navbar");
let navbarPosition = navbar.offsetTop;
let skillsPosition = document.getElementById("skills").offsetTop;
let hardSkills = Array.from(document.getElementsByClassName("hard-progress-bar"));
let softSkills = Array.from(document.getElementsByClassName("soft-progress-bar"));


/*-------------------------EVENT LISTENERS-------------------------*/
window.addEventListener("scroll", toggleStickyNavbar);
window.addEventListener("scroll", animateProgress)


/*--------------------------PROGRAM FLOW--------------------------*/



/*----------------------------FUNCTIONS----------------------------*/
function toggleStickyNavbar(){
    if (window.pageYOffset >= navbarPosition){
        navbar.classList.add("sticky");
    } else{
        navbar.classList.remove("sticky");
    }
}

function animateProgress(){
    if (window.pageYOffset >= skillsPosition - (bigGap * 2)){
        hardSkills.forEach(hardSkill => {
            hardSkill.style.display = "inline-block";
            hardSkill.style.animation = "slideInLeft 1.5s";
        });
        softSkills.forEach(softSkill => {
            softSkill.style.display = "inline-block";
            softSkill.style.animation = "slideInRight 1.5s";
        });
    }
}

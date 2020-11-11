/*----------------------------VARIABLES----------------------------*/
const body = document.querySelector("body");
let bigGap = 72;

const navbar = document.getElementById("navbar");
let navbarPosition = navbar.offsetTop;

let skillsPosition = document.getElementById("skills").offsetTop;
const hardSkills = Array.from(document.getElementsByClassName("hard-progress-bar"));
const softSkills = Array.from(document.getElementsByClassName("soft-progress-bar"));

const linkedInIcons = Array.from(document.getElementsByClassName("fa-linkedin-in"));
const gitHubIcons = Array.from(document.getElementsByClassName("fa-github"));
const mailIcons = Array.from(document.getElementsByClassName("fa-envelope"));

const projects = Array.from(document.getElementsByClassName("project"));
const readMores = Array.from(document.getElementsByClassName("readMore"));
let hoveredProject;
let unHoveredProject;
let clickedProject;
let clickedReadMore;

const popupTemplate = document.getElementById("popup-template").content;
let templateCopy = document.importNode(popupTemplate, true);
let numberInArray;



/*-------------------------EVENT LISTENERS-------------------------*/
window.addEventListener("scroll", toggleStickyNavbar);
window.addEventListener("scroll", animateProgress)


if (window.innerHeight < window.innerWidth){ //If landscape-view
    makeIconsBigger();
    projects.forEach(project => {
        project.addEventListener("mouseenter", function(e){
            hoveredProject = e.target;
            displayProjectInfo(hoveredProject);
        });
        project.addEventListener("mouseleave", function(e){
            unHoveredProject = e.target;
            hideProjectInfo(unHoveredProject);
        })
    })
} else if (window.innerHeight > window.innerWidth){ //If portrait-view
    makeIconsSmaller();
    projects.forEach(project => {
        project.addEventListener("click", function(e){
            clickedProject = e.target;
            console.log(clickedProject);
            displayProjectPopup(clickedProject);
        })
    })
}

readMores.forEach(readMore => {
    readMore.addEventListener("click", function(e){
        clickedReadMore = e.target;
        displayProjectPopup(clickedReadMore);
    })
});





/*--------------------------PROGRAM FLOW--------------------------*/
import projectArray from "/projectdata.js";
console.log(projectArray);

particlesJS.load('particles-js', 'particles.json', function() {
    console.log('callback - particles.js loaded');
  });


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

function displayProjectInfo(hoveredProject){
    hoveredProject.firstElementChild.style.visibility = "visible";
    hoveredProject.firstElementChild.style.animation = "fadeInProjectInfo 1s";
}

function hideProjectInfo(unHoveredProject){
    unHoveredProject.firstElementChild.style.animation = "none";
    unHoveredProject.firstElementChild.style.visibility = "hidden";
}

function makeIconsBigger(){
    linkedInIcons.forEach(icon => {
        icon.classList.add("fa-2x");
    });
    gitHubIcons.forEach(icon => {
        icon.classList.add("fa-2x");
    });
    mailIcons.forEach(icon => {
        icon.classList.add("fa-2x");
    });
}

function makeIconsSmaller(){
    linkedInIcons.forEach(icon => {
        icon.classList.remove("fa-2x");
    });
    gitHubIcons.forEach(icon => {
        icon.classList.remove("fa-2x");
    });
    mailIcons.forEach(icon => {
        icon.classList.remove("fa-2x");
    });
}

function displayProjectPopup(clickedProject){
    getNumberInArrayOfClickedProject(clickedProject);

    if (numberInArray === 0 || numberInArray === 1 || numberInArray === 2){
        templateCopy.querySelector(".project-title").textContent = projectArray[numberInArray].projectTitle;
        templateCopy.querySelector(".brief").textContent = projectArray[numberInArray].brief;
        templateCopy.querySelector(".goals").textContent = projectArray[numberInArray].goals;
        templateCopy.querySelector(".role").textContent = projectArray[numberInArray].role;
        templateCopy.querySelector(".challanges").textContent = projectArray[numberInArray].challanges;
        templateCopy.querySelector(".solution").textContent = projectArray[numberInArray].solution;
        templateCopy.querySelector(".learning1").textContent = projectArray[numberInArray].learning1;
        templateCopy.querySelector(".learning2").textContent = projectArray[numberInArray].learning2;
        templateCopy.querySelector(".learning3").textContent = projectArray[numberInArray].learning3;
        templateCopy.querySelector(".learning4").textContent = projectArray[numberInArray].learning4;
        templateCopy.querySelector(".learning5").textContent = projectArray[numberInArray].learning5;
        templateCopy.querySelector(".link").href = projectArray[numberInArray].link;
        body.appendChild(templateCopy);
    } else {
        displayProjectInfo(clickedProject);
    }
}

function getNumberInArrayOfClickedProject(clickedProject){
    if (clickedProject.id === "personal" || clickedProject.id === "personal-read-more"){
        numberInArray = 0;
    } else if (clickedProject.id === "snake" || clickedProject.id ==="snake-read-more"){
        numberInArray = 1;
    } else if (clickedProject.id === "rota" || clickedProject.id==="rota-read-more"){
        numberInArray = 2;
    } else {
        numberInArray = null;
    }
    return numberInArray;
}
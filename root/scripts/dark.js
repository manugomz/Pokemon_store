/*------------------------------------Dark mode--------------------------------------------------- */
const darkButton = document.getElementById('dark-button');
const textLists = document.querySelectorAll('.to-dark');
const textLinks = document.querySelectorAll('.to-dark-link');
const colorBack = document.body;

if(sessionStorage.darkMode === 'on'){
    darkModeToggle();
}

darkButton.addEventListener("click",()=>{
    if (sessionStorage.darkMode === "on") {
        sessionStorage.darkMode = "off";
    } else {
        sessionStorage.darkMode = "on";
    }
    darkModeToggle();
});

function darkModeToggle () {
    colorBack.classList.toggle('dark-mode-bg');
    textLists.forEach(text =>{
        text.classList.toggle('dark-mode-txt');
    })
    textLinks.forEach(text =>{
        text.classList.toggle('dark-mode-link');
    })
}

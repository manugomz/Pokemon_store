/*-------------------------------------------------Dark mode----------------------------------------------------------------- */
const darkButton = document.getElementById('dark-button');
const textLists = document.querySelectorAll('.to-dark');
const textLinks = document.querySelectorAll('.to-dark-link');
const colorBack = document.body;

//console.log(textLists);

darkButton.addEventListener("click",()=>{
    if (sessionStorage.darkMode === "off") {
        sessionStorage.darkMode = "on";
    } else {
        sessionStorage.darkMode = "off";
    }
    darkModeToggle()
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

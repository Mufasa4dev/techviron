let tooglebars = document.querySelector("#bars");
let menujs = document.querySelector(".menu_div");


tooglebars.addEventListener("click", showhide)
function showhide() {
    menujs.classList.toggle('showmenu');
    
}
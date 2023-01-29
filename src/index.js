
import { createHtmlElement, mainContent } from "./add-to-content";
import { renderNav } from "./navbar";
import { renderFooter } from "./footer";
import { renderHome } from "./home";
import { renderMenu } from "./menu";
import { renderAbout } from "./about";


//const $content = document.getElementById("content");

const para = document.createElement('p');
function home() {
    mainContent.innerHTML = "";
    renderNav();
    renderHome();
    renderFooter();

}

function menu() {
    mainContent.innerHTML = "";
    renderNav();
    renderMenu();
    renderFooter();
}

function about() {
    mainContent.innerHTML = "";
    renderNav();
    renderAbout();
    renderFooter();
}

home();

document.addEventListener("click", (e) => {
    const target = e.target.innerText;

    if(target === "HOME") home();
    if (target === "MENU" || target === "SEE OUR MENU") menu();
    if ( target === "ABOUT") about();
});

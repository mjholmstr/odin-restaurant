
import { createHtmlElement, mainContent } from "./add-to-content";
import { renderNav } from "./navbar";
import { renderFooter } from "./footer";
import { renderHome } from "./home";
import { renderMenu } from "./menu";


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

menu();

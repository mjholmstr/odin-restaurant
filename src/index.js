
import { createHtmlElement, mainContent } from "./add-to-content";
import { renderNav } from "./navbar";
import { renderFooter } from "./footer";


//const $content = document.getElementById("content");

const para = document.createElement('p');
function home() {
    mainContent.innerHTML = "";
    renderNav();
    renderFooter();

}

home();

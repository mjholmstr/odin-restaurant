
import { createHtmlElement, mainContent } from "./add-to-content";
import { renderNav } from "./navbar";


//const $content = document.getElementById("content");

const para = document.createElement('p');
function home() {
    mainContent.innerHTML = "";
    renderNav();

}

home();

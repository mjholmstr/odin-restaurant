import { NoEmitOnErrorsPlugin } from "webpack";
import { createHtmlElement } from "./add-to-content";
import { renderNav } from "./navbar";


const $content = document.getElementById("content");


function home() {
    
    renderNav();

}

home();


import { createHtmlElement, mainContent} from "./add-to-content.js";
// import { $content } from "./index"

function render() {
    
    const navItems = ['home', 'menu', 'about'];
    const navItemList = document.createElement("ul");
    const $nav = document.createElement("nav");
    
    navItems.forEach((item) => navItemList.appendChild(createHtmlElement("li", "test",["test"], item)));
    
    
    $nav.appendChild(navItemList)

    mainContent.appendChild($nav)
    console.log($nav)
    console.log(navItemList)
}

export { render as renderNav };
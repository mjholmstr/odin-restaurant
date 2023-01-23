import { createHtmlElement, mainContent } from "./add-to-content";

function render() {
    const footerEl = document.createElement("footer");

    const footerContent = createHtmlElement("p", null, null, "Developed by Matt Holmstrom");
    footerEl.appendChild(footerContent);
    mainContent.appendChild(footerEl);
}

export { render as renderFooter };
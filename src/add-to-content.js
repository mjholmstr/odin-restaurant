export const mainContent = document.getElementById("content");

function createHtmlElement (tagType, id, classArray, content) {
    const element = document.createElement(tagType);

    if (id) element.id = id;
    if (classArray) element.classList.add(...classArray);
    if (content) element.innerText = content;
    return element;
}

export { createHtmlElement }
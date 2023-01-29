import { mainContent, createHtmlElement } from "./add-to-content";

const menu = [
    {
        name: "Chicken",
        description: "Delicious Chicken",
        price: "$14"
    },

    {
        name: "Steak",
        description: "Delicious new york strip",
        price: "$24"
    },
    {
        name: "Vegetarian",
        description: "Delicious vegetarian entree",
        price: "$18"
    }

]

function render() {
    const menuMain = document.createElement("main");
    menuMain.classList.add("main");

    const menuHeader = createHtmlElement(
        "p",
        null,
        null,
        "Name of Restaurant"
    );

    const menuTitle = createHtmlElement("h1", null, null, "Menu");
    const $hr = document.createElement("hr");

    mainContent.appendChild(menuHeader);
    mainContent.appendChild(menuTitle);
    mainContent.appendChild($hr);

    menu.forEach((item) => {
        const menuItemDiv = createHtmlElement("div", null, ["menu-item"], null);
        const menuItemName = createHtmlElement("h2", null, null, item.name);
        const menuItemDescription = createHtmlElement("p", null, null, item.description);
        const menuItemPrice = createHtmlElement("h2", null, null, item.price);
        const $hr = createHtmlElement("hr", null, ["menu-hr"], null);

        menuItemDiv.appendChild(menuItemName);
        menuItemDiv.appendChild(menuItemDescription);
        menuItemDiv.appendChild(menuItemPrice);
        menuItemDiv.appendChild($hr);

        menuMain.appendChild(menuItemDiv);
    });

    mainContent.appendChild(menuMain);
}

export { render as renderMenu };
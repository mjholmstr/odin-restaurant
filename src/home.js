import { mainContent, createHtmlElement } from "./add-to-content";

function render () {
    const main = document.createElement("main");

    const restaurantName = createHtmlElement("h1", null, null, "Restaurant Name");
    const lineBreak = document.createElement("hr");
    const homeText = createHtmlElement(
        "p",
        null,
        null,
        "This is a good place to eat"
    );
    const menuButton = createHtmlElement(
        "button", 
        null,
        null,
        "See our menu"
    );

    main.appendChild(restaurantName);
    main.appendChild(lineBreak);
    main.appendChild(homeText);
    main.appendChild(menuButton);

    mainContent.appendChild(main);
}

export { render as renderHome };
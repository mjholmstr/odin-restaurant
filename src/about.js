import { mainContent, createHtmlElement } from "./add-to-content";

function render() {
    const mainAbout = document.createElement("main");
    mainAbout.classList.add("main");

    const restName = createHtmlElement("p", null, null, "Restaurant Name/ Logo");
    const aboutTitle = createHtmlElement("h1", null, null, "About Us");
    const $hr = document.createElement("hr");
    const aboutContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, iste corrupti. Quo, iste rerum dicta modi omnis quis nostrum a quisquam, obcaecati vero beatae numquam nisi, perspiciatis fuga sequi sint ex commodi nesciunt nemo velit praesentium? In eos, cum laboriosam culpa eveniet rem, nemo architecto error rerum temporibus, totam at? Mollitia inventore, modi harum saepe, nemo delectus, hic eos dolor maiores distinctio asperiores dignissimos officiis consectetur enim. Reprehenderit exercitationem laboriosam maxime minima nesciunt ex laborum quae assumenda omnis esse debitis vel, ipsam modi, veniam suscipit quo quia. Cupiditate eum.";

    const aboutParagraph = createHtmlElement("p", null, ["menu-item"], aboutContent);

    mainAbout.appendChild(restName);
    mainAbout.appendChild(aboutTitle);
    mainAbout.appendChild($hr);
    mainAbout.appendChild(aboutParagraph);

    mainContent.appendChild(mainAbout);


}

export { render as renderAbout };
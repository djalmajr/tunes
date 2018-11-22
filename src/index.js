import facade from "./facade.js";
import App from "./views/App.js";

const appRender = hyperHTML.wire();
const html = hyperHTML.bind(document.querySelector("#__wrapper__"));

facade.init(props => html`${App(appRender, props)}`);

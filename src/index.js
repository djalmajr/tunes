import store from "./store.js";
import App from "./views/app.js";

const container = document.querySelector("#__wrapper__");
const appWire = hyperHTML.wire();
const html = hyperHTML.bind(container);

// prettier-ignore
store.init(() => html`${App(appWire)}`);

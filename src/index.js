import h from "hyperhtml-element";
import { autorun } from "mobx";
import "./containers/tunes-app";

const container = document.querySelector("#__wrapper__");

autorun(() => h.bind(container)`<tunes-app />`);

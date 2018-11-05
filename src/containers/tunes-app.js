import HyperHTMLElement from "hyperhtml-element";
import "./tunes-playlist";
import "./tunes-library";
import "./tunes-app.less";

class TunesApp extends HyperHTMLElement {
  render() {
    return this.html`
      <tunes-playlist />
      <tunes-library />
    `;
  }
}

TunesApp.define("tunes-app");

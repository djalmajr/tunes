import HyperHTMLElement from "hyperhtml-element";
import withBind from "../mixins/bindAll";
import { library } from "../store";
import styles from "./tunes-library.less";
import "./tunes-album";

const { wire } = HyperHTMLElement;

class TunesLibrary extends withBind(HyperHTMLElement) {
  renderAlbum(album) {
    return wire(album, ":library-album")`
      <tunes-album album=${album} />
    `;
  }

  render() {
    return this.html`
      <h1>Music Library</h1>
      <ul class=${styles.albums}>
        ${library.albums.map(this.renderAlbum)}
      </ul>
    `;
  }
}

TunesLibrary.define("tunes-library");

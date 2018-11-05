import HyperHTMLElement from "hyperhtml-element";
import withBind from "../mixins/bindAll";
import styles from "./tunes-playlist.less";
import { playlist } from "../store";
import "./tunes-album";

const { wire } = HyperHTMLElement;

class TunesPlaylist extends withBind(HyperHTMLElement) {
  onToggle() {
    playlist.toggle();
  }

  onNext() {
    playlist.nextTrack();
  }

  onPrev() {
    playlist.prevTrack();
  }

  renderAlbum(album) {
    return wire(album, ":playlist-album")`
      <tunes-album showtracks album=${album} />
    `;
  }

  render() {
    return this.html`
      <h1>Playlist</h1>
      <nav>
        <button
          class=${`${styles.control} ${styles[playlist.status]}`}
          onclick=${this.onToggle}
        />
        <button
          class=${`${styles.control} ${styles.prev}`}
          onclick=${this.onPrev}
        />
        <button
          class=${`${styles.control} ${styles.next}`}
          onclick=${this.onNext}
        />
      </nav>
      <ul class=${styles.albums}>
        ${playlist.albums.map(this.renderAlbum)}
      </ul>
    `;
  }
}

TunesPlaylist.define("tunes-playlist");

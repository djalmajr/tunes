import { autorun } from "mobx";
import HyperHTMLElement from "hyperhtml-element";
import withBind from "../mixins/bindAll";
import styles from "./tunes-playlist.less";
import { playlist } from "../store";
import "./tunes-album";

const { wire } = HyperHTMLElement;

class TunesPlaylist extends withBind(HyperHTMLElement) {
  created() {
    autorun(() => this.render());
  }

  onToggleClick() {
    playlist.toggle();
  }

  onNextClick() {
    playlist.nextTrack();
  }

  onPrevClick() {
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
          onclick=${this.onToggleClick}
        />
        <button
          class=${`${styles.control} ${styles.prev}`}
          onclick=${this.onPrevClick}
        />
        <button
          class=${`${styles.control} ${styles.next}`}
          onclick=${this.onNextClick}
        />
      </nav>
      <ul class=${styles.albums}>
        ${playlist.albums.map(this.renderAlbum)}
      </ul>
    `;
  }
}

TunesPlaylist.define("tunes-playlist");

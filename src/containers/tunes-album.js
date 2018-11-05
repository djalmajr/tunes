import cn from "classnames";
import { autorun } from "mobx";
import HyperHTMLElement from "hyperhtml-element";
import withBind from "../mixins/bindAll";
import withProps from "../mixins/props";
import styles from "./tunes-album.less";
import { library, playlist } from "../store";

const { wire } = HyperHTMLElement;

class TunesAlbum extends withProps(withBind(HyperHTMLElement)) {
  static get properties() {
    return {
      album: { type: Object, value: {} },
      isPlaylist: { type: Boolean, attr: "showtracks" },
    };
  }

  get collection() {
    return this.isPlaylist ? playlist : library;
  }

  created() {
    autorun(() => this.render());
  }

  onClick() {
    playlist[this.isPlaylist ? "remove" : "add"](this.album);
  }

  renderTrack(track, index) {
    const current = this.active && playlist.currentTrackIndex === index;

    return wire()`
      <li
        class=${cn(styles.track, { "is-active": current })}
        onclick=${() => playlist.changeTrack(this.album, index)}
      >
        ${track.title}
      </li>
    `;
  }

  renderTracks() {
    if (!this.isPlaylist) {
      return wire()`${[]}`;
    }

    this.active = playlist.currentAlbumIndex === playlist.findAlbumIndex(this.album);
    this.classList[this.active ? "add" : "remove"]("is-active");

    return wire()`
      <ol class=${styles.tracks}>
        ${this.album.tracks.map(this.renderTrack)}
      </ol>
    `;
  }

  render() {
    const { artist, title } = this.album;
    const buttonType = this.isPlaylist ? "remove" : "add";

    return this.html`
      <li>
        <button
          class=${`${styles.queue} ${styles[buttonType]}`}
          onclick=${this.onClick}
        >
          <img src=${`assets/images/${buttonType}.png`} />
        </button>
        <span class=${styles.title}>${title}</span>
        <span class=${styles.artist}>${artist}</span>
        ${this.renderTracks()}
      </li>
    `;
  }
}

TunesAlbum.define("tunes-album");

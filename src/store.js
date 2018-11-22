import Library from "./controllers/library.js";
import Playlist from "./controllers/playlist.js";
import albums from "./albums.js";

let _update, _library, _playlist;

export default {
  init(render) {
    _update = render;
    _library = new Library(albums);
    _playlist = new Playlist();

    const methods = Object.keys(this)
      .filter(prop => typeof this[prop] === "function")
      .filter(prop => !prop.match(/^(init|is|get).*/g));

    for (const prop of methods) {
      this[prop] = (() => {
        const method = this[prop];
        return (...args) => (method(...args), _update());
      })();
    }

    _update();
  },

  // Getters

  get isPlaying() {
    return _playlist.status === "play";
  },

  get playlist() {
    return _playlist.albums;
  },

  get library() {
    return _library.albums;
  },

  isAlbumActive(album) {
    return _playlist.currentAlbumIndex === _playlist.findAlbumIndex(album);
  },

  isTrackActive(album, trackIndex) {
    const isCurrent = _playlist.currentTrackIndex === trackIndex;
    return this.isAlbumActive(album) && isCurrent;
  },

  // Actions

  addToPlaylist(album) {
    _playlist.add(album);
  },

  removeFromPlaylist(album) {
    _playlist.remove(album);
  },

  changeTrack(album, trackIndex) {
    _playlist.changeTrack(album, trackIndex);
  },

  playPause() {
    _playlist.toggle();
  },

  prevTrack() {
    _playlist.prevTrack();
  },

  nextTrack() {
    _playlist.nextTrack();
  },
};

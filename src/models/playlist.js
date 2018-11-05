import { decorate, observable } from "mobx";
import Albums from "./albums";

class Playlist extends Albums {
  get currentAlbum() {
    return this.albums.length ? this.albums[this.currentAlbumIndex] : null;
  }

  get currentTrackUrl() {
    return this.currentAlbum
      ? this.currentAlbum.trackUrlAtIndex(this.currentTrackIndex)
      : null;
  }

  get isFirstTrack() {
    return this.currentAlbum.isFirstTrack(this.currentTrackIndex);
  }

  get isLastTrack() {
    return this.currentAlbum.isLastTrack(this.currentTrackIndex);
  }

  constructor() {
    super();
    this.audio = new Audio();
    this.reset();
  }

  remove(album) {
    super.remove(album);
    this.reset();
  }

  reset() {
    this.status = "pause";
    this.currentAlbumIndex = 0;
    this.currentTrackIndex = 0;
    this.updateAudio();
  }

  updateAudio() {
    if (this.currentTrackUrl) {
      this.audio.src = this.currentTrackUrl;
      this.audio[this.status]();
    } else {
      this.audio.pause();
    }
  }

  toggle() {
    if (this.albums.length) {
      this.status = this.status === "play" ? "pause" : "play";
      this.updateAudio();
    }
  }

  changeTrack({ title }, index) {
    this.currentAlbumIndex = this.albums.findIndex(a => a.title === title);
    this.currentTrackIndex = index;
    this.updateAudio();
  }

  nextTrack() {
    if (!this.albums.length) {
      return;
    }

    if (this.isLastTrack) {
      const isLastAlbum = this.isLastAlbum(this.currentAlbumIndex);
      this.currentAlbumIndex = isLastAlbum ? 0 : this.currentAlbumIndex + 1;
      this.currentTrackIndex = 0;
    } else {
      this.currentTrackIndex += 1;
    }

    this.updateAudio();
  }

  prevTrack() {
    if (!this.albums.length) {
      return;
    }

    if (this.isFirstTrack) {
      const isFirstAlbum = this.isFirstAlbum(this.currentAlbumIndex);
      this.currentAlbumIndex = isFirstAlbum
        ? this.albums.length - 1
        : this.currentAlbumIndex - 1;
      this.currentTrackIndex = this.currentAlbum.tracks.length - 1;
    } else {
      this.currentTrackIndex -= 1;
    }

    this.updateAudio();
  }
}

export default decorate(Playlist, {
  currentAlbumIndex: observable,
  currentTrackIndex: observable,
  playlist: observable,
  status: observable,
});

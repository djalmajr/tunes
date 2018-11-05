import { decorate, observable } from "mobx";

class Album {
  constructor(album) {
    this.artist = album.artist;
    this.title = album.title;
    this.tracks = album.tracks;
  }

  isFirstTrack(index) {
    return index === 0;
  }

  isLastTrack(index) {
    return index >= this.tracks.length - 1;
  }

  trackUrlAtIndex(index) {
    return this.tracks.length >= index ? this.tracks[index].url : null;
  }
}

export default decorate(Album, {
  artist: observable,
  title: observable,
  tracks: observable,
});

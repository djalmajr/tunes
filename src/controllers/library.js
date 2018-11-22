import { decorate, observable } from "mobx";
import Album from "./album";

class Albums {
  constructor(albums = []) {
    this.albums = albums.map(album => new Album(album));
  }

  add(album) {
    if (this.findAlbumIndex(album) === -1) {
      this.albums.push(new Album(album));
    }
  }

  remove(album) {
    const index = this.findAlbumIndex(album);
    this.albums.splice(index, 1);
    return index;
  }

  findAlbumIndex(album) {
    return this.albums.findIndex(a => a.title === album.title);
  }

  isFirstAlbum(index) {
    return index === 0;
  }

  isLastAlbum(index) {
    return index === this.albums.length - 1;
  }
}

export default decorate(Albums, { albums: observable });

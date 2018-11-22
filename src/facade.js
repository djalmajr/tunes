import library from "./controllers/library.js";
import playlist from "./controllers/playlist.js";
import albums from "./albums.js";

export default {
  init(render) {
    library.init(albums);
    playlist.init();

    this.update = () => render(this);
    this.update();
  },
};

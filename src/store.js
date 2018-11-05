import Albums from "./models/albums";
import Playlist from "./models/playlist";
import albums from "./albums";

export const library = new Albums(albums);
export const playlist = new Playlist();

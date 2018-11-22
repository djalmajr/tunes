import Playlist from "./playlist.js";
import Library from "./library.js";

const playlistWire = hyperHTML.wire();
const libraryWire = hyperHTML.wire();

export default render => render`
  <div class="app">
    ${Playlist(playlistWire)}
    ${Library(libraryWire)}
  </div>
`;

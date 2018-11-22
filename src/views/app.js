import Playlist from "./playlist.js";
import Library from "./library.js";

const playlist = hyperHTML.wire();
const library = hyperHTML.wire();

export default (render, props) => render`
  <div class="app">
    ${Playlist(playlist, props)}
    ${Library(library, props)}
  </div>
`;

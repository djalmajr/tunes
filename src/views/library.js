import Albums from "./albums.js";

const albumsWire = hyperHTML.wire();

export default render => render`
  <div class="library">
    <h1>Music Library</h1>
    ${Albums(albumsWire, {
      wireID: ":library-album",
      albums: store.library,
    })}
  </div>
`;

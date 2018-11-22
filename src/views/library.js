import Album from "./tunes-album.js";

export default (render, props) => render`
  <div class="tunes-library">
    <h1>Music Library</h1>
    <ul class="tunes-library--albums">
      ${props.library.map(album =>
        Album(wire(album, ":library-album"), {
          ...props,
          data: { album },
        })
      )}
    </ul>
  </div>
`;


import Album from "./album.js";

export default (render, props) => render`
  <div class="playlist">
    <h1>Playlist</h1>
    <nav>
      <button
        class="playlist-control is-${props.status}"
        onclick=${props.onPlayPause}
      />
      <button
        class="playlist-control is-prev"
        onclick=${props.onPrevTrack}
      />
      <button
        class="playlist-control is-next"
        onclick=${props.onNextTrack}
      />
    </nav>
    <ul class="playlist-albums">
      ${props.playlist.map(album =>
        Album(wire(album, ":playlist-album"), {
          ...props,
          data: { album, showtracks: true },
        })
      )}
    </ul>
  </div>
`;


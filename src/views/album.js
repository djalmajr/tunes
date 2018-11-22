import store from "../store.js";

const { wire } = hyperHTML;

const Track = (render, { album, index, track }) => {
  const isActive = store.isTrackActive(album, index);

  return render`
    <li
      class=${`album-track${isActive ? " is-active" : ""}`}
      onclick=${() => store.changeTrack(album, index)}
    >
      ${track.title}
    </li>
  `;
};

const Tracks = (render, { album, showtracks, tracks }) => {
  if (!showtracks) {
    return render`${[]}`;
  }

  return render`
    <ol class="album-tracks">
      ${tracks.map((track, index) =>
        Track(wire(track), { album, index, track })
      )}
    </ol>
  `;
};

export default (render, props = {}) => {
  const { album, showtracks } = props;
  const image = showtracks ? "remove" : "add";
  const isActive = showtracks && store.isAlbumActive(album);
  const addOrRemove = showtracks ? "removeFromPlaylist" : "addToPlaylist";

  return render`
    <div class=${`album${isActive ? " is-active" : ""}`}>
      <li>
        <button
          class="album-queue"
          onclick=${() => store[addOrRemove](album)}
        >
          <img src="${`images/${image}.png`}" />
        </button>
        <span class="album-title">${album.title}</span>
        <span class="album-artist">${album.artist}</span>
        ${Tracks(wire(album, ":album-tracks"), {
          album,
          showtracks,
          tracks: album.tracks,
        })}
      </li>
    </div>
  `;
};

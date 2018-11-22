import store from "../store.js";

const tracksWire = hyperHTML.wire();

const Track = (render, { album, index, track }) => {
  const isActive = store.isTrackActive(track);

  return render`
    <li
      class="album-track${isActive ? " is-active" : ""}"
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
  const { album, isActive, showtracks } = props;
  const image = showtracks ? "remove" : "add";
  const addOrRemove = showtracks ? "addToPlaylist" : "removeFromPlaylist";

  return render`
    <div class="album${isActive ? " is-active" : ""}">
      <li>
        <button
          class="album-queue"
          onclick=${() => store[addOrRemove]()}
        >
          <img src="${`assets/images/${image}.png`}" />
        </button>
        <span class="album-title">${album.title}</span>
        <span class="album-artist">${album.artist}</span>
        ${Tracks(tracksWire, {
          album,
          showtracks,
          tracks: album.tracks,
        })}
      </li>
    </div>
  `;
};

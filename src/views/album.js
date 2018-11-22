import Tracks from "./tracks.js";

const tracksRender = hyperHTML.wire();

export default (render, props) => {
  const { album, showtracks } = props.data;
  const image = showtracks ? "remove" : "add";
  const addOrRemove = showtracks ? "addToPlaylist" : "removeFromPlaylist";
  const isActive = props.isPlaylistAlbumActive(album);

  return render`
    <div class="album${isActive ? ' is-active' : ''}">
      <li>
        <button class="album-queue" onclick=${props[addOrRemove]}>
          <img src=${`assets/images/${image}.png`} />
        </button>
        <span class="album-title">${album.title}</span>
        <span class="album-artist">${album.artist}</span>
        ${Tracks(tracksRender, {
          ...props,
          data: { showtracks, tracks: album.tracks },
        })}
      </li>
    </div>
  `;
};

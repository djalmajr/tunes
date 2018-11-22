const AlbumTrack = (render, props) => {
  const { index, track } = props.data;
  const isActive = props.isPlaylistTrackActive(track);

  return render`
    <li
      data-index="${index}"
      class="album-track${isActive ? ' is-active' : ''}"
      onclick=${props.changePlaylistTrack}
    >
      ${track.title}
    </li>
  `;
};

export default AlbumTrack;

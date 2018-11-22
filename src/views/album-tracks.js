import AlbumTrack from "./album-track.js";

const AlbumTracks = (render, props) => {
  const { showtracks, tracks } = props.data;

  if (!showtracks) {
    return render`${[]}`;
  }

  return render`
    <ol class="album-tracks">
      ${tracks.map((track, index) =>
        AlbumTrack(wire(track), { ...props, data: { index, track } })
      )}
    </ol>
  `;
};

export default AlbumTracks;

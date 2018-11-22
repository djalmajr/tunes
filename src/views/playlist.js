import Albums from "./albums.js";
import store from "../store.js";

const albumsWire = hyperHTML.wire();

export default render => {
  const status = store.isPlaying ? "play" : "pause";

  return render`
    <div class="playlist">
      <h1>Playlist</h1>
      <nav>
        <button
          class=${`playlist-control is-${status}`}
          onclick=${() => store.playPause()}
        />
        <button
          class="playlist-control is-prev"
          onclick=${() => store.prevTrack()}
        />
        <button
          class="playlist-control is-next"
          onclick=${() => store.nextTrack()}
        />
      </nav>
      ${Albums(albumsWire, {
        wireID: ":playlist-album",
        albums: store.playlist,
        showtracks: true,
      })}
      </ul>
    </div>
  `;
};

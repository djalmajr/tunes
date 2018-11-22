import Album from "./album.js";

const { wire } = hyperHTML;

export default (render, props = {}) => {
  const { albums, showtracks, wireID } = props;

  return render`
    <ul class="albums">
      ${albums.map(album => Album(wire(album, wireID), { album, showtracks }))}
    </ul>
  `;
};

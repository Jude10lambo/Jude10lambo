const albums = {
  about: [
    "assets/gallery/about/1.jpg",
    "assets/gallery/about/2.jpg",
    "assets/gallery/about/3.mp4"
  ],
  work: [
    "assets/gallery/work/1.jpg",
    "assets/gallery/work/2.jpg",
    "assets/gallery/work/3.jpg"
  ],
  cars: [
    "assets/gallery/cars/1.jpg",
    "assets/gallery/cars/2.jpg",
    "assets/gallery/cars/3.mp4"
  ],
  events: [
    "assets/gallery/events/1.jpg",
    "assets/gallery/events/2.jpg",
    "assets/gallery/events/3.jpg"
  ]
};

const params = new URLSearchParams(window.location.search);
const album = params.get("album");

if (album && albums[album]) {
  document.getElementById("albumTitle").textContent =
    album.toUpperCase() + " ALBUM";

  const grid = document.getElementById("albumGrid");

  albums[album].forEach(file => {
    const div = document.createElement("div");
    div.className = "media";

    if (file.endsWith(".mp4")) {
      div.innerHTML = `<video controls src="${file}"></video>`;
    } else {
      div.innerHTML = `<img src="${file}" alt="">`;
    }

    grid.appendChild(div);
  });
}

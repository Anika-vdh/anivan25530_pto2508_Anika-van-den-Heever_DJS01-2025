import { podcasts, genres }
  from "./data.js";

import { createGrid }
  from "./src/views/createGrid.js";

import { createModal }
  from "./src/components/createModal.js";

function init() {

  const grid = createGrid();

  const genreFilter =
    document.getElementById("genreFilter");

  const sortFilter =
    document.getElementById("sortFilter");

  document
    .getElementById("closeModal")
    .addEventListener(
      "click",
      createModal.close
    );

    window.addEventListener(
  "click",
  (event) => {

    const overlay =
      document.getElementById("modalOverlay");

    if (event.target === overlay) {
      createModal.close();
    }
  }
);

window.addEventListener(
  "keydown",
  (event) => {

    if (event.key === "Escape") {
      createModal.close();
    }
  }
);

  renderGenreOptions();

  renderPodcasts();

  genreFilter.addEventListener(
    "change",
    renderPodcasts
  );

  sortFilter.addEventListener(
    "change",
    renderPodcasts
  );

  /**
   * Renders genre dropdown.
   */
  function renderGenreOptions() {

    genreFilter.innerHTML = `
      <option value="all">
        All Genres
      </option>
    `;

    genres.forEach((genre) => {

      genreFilter.innerHTML += `
        <option value="${genre.id}">
          ${genre.title}
        </option>
      `;
    });
  }

  /**
   * Renders podcasts.
   */
  function renderPodcasts() {

    let filtered =
      [...podcasts];

    const selectedGenre =
      genreFilter.value;

    const selectedSort =
      sortFilter.value;

    if (selectedGenre !== "all") {

      filtered =
        filtered.filter(
          (podcast) =>
            podcast.genres.includes(
              Number(selectedGenre)
            )
        );
    }

    if (selectedSort === "recent") {

        filtered.sort(
            (a, b) =>
            new Date(b.updated) -
            new Date(a.updated)
        );
        }

        if (selectedSort === "newest") {

        filtered.sort(
            (a, b) =>
            b.seasons - a.seasons
        );
        }

        if (selectedSort === "popular") {

        filtered.sort(
            (a, b) =>
            b.seasons - a.seasons
        );
        }

    grid.render(filtered);
  }
}

init();
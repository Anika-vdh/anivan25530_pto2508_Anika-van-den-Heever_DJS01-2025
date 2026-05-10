import { GenreService }
  from "../services/GenreService.js";

import { DateUtils }
  from "../utils/DateUtils.js";

import { seasons }
  from "../../data.js";

/**
 * Modal controller.
 */
export const createModal = {

  /**
   * Opens modal.
   *
   * @param {Object} podcast
   */
  open(podcast) {

    const overlay =
      document.getElementById("modalOverlay");

    const content =
      document.getElementById("modalContent");

    const seasonData =
      seasons.find(
        (season) =>
          season.id === podcast.id
      );

    const genreNames =
      GenreService.getNames(podcast.genres);

    content.innerHTML = `

      <img
        class="modal-image"
        src="${podcast.image}"
        alt="${podcast.title}"
      >

      <h2 class="modal-title">
        ${podcast.title}
      </h2>

      <p class="modal-description">
        ${podcast.description}
      </p>

      <div class="modal-genres">

        ${genreNames
          .map(
            (genre) =>
              `<span class="genre-tag">${genre}</span>`
          )
          .join("")}

      </div>

      <p class="modal-date">
        ${DateUtils.format(podcast.updated)}
      </p>

      <div class="season-list">

        ${seasonData.seasonDetails
          .map(
            (season) => `
              
              <div class="season-card">

                <h3>${season.title}</h3>

                <p>
                  ${season.episodes} episodes
                </p>

              </div>
            `
          )
          .join("")}

      </div>
    `;

    overlay.classList.remove("hidden");
  },

  /**
   * Closes modal.
   */
  close() {

    const overlay =
      document.getElementById("modalOverlay");

    overlay.classList.add("hidden");
  },
};
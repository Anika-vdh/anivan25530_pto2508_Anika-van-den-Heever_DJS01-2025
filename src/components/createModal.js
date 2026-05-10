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

    const seasonCards =
      seasonData.seasonDetails
        .map(
          (season, index) =>
            `
            <div class="season-card">

              <div>

                <h3>
                  Season ${index + 1}
                </h3>

                <p>
                  ${season.title}
                </p>

              </div>

              <p>
                ${season.episodes.length} episodes
              </p>

            </div>
            `
        )
        .join("");

    content.innerHTML = `

      <h2 class="modal-title">
        ${podcast.title}
      </h2>

      <div class="modal-top">

        <div class="modal-image">
          Large Cover Image
        </div>

        <div class="modal-info">

          <h3>Description</h3>

          <p class="modal-description">
            ${podcast.description}
          </p>

          <h3>Genres</h3>

          <div class="modal-genres">

            ${genreNames.map(
              (genre) =>
                `
                <span class="genre-tag">
                  ${genre}
                </span>
                `
            ).join("")}

          </div>

          <p class="modal-date">
            ${DateUtils.format(podcast.updated)}
          </p>

        </div>

      </div>

      <div class="season-section">

        <h2>Seasons</h2>

        <div class="season-list">

          ${seasonCards}

        </div>

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
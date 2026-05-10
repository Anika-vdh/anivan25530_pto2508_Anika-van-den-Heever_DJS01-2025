import { GenreService } from "../services/GenreService.js";
import { DateUtils } from "../utils/DateUtils.js";

/**
 * Creates a podcast card element.
 *
 * @param {Object} podcast
 * @returns {HTMLElement}
 */
export function createPodcastCard(podcast) {

  const card = document.createElement("article");

  card.classList.add("podcast-card");

  const genreNames =
    GenreService.getNames(podcast.genres);

  card.innerHTML = `
  
    <img
      class="podcast-image"
      src="${podcast.image}"
      alt="${podcast.title}"
    >

    <div class="podcast-content">

      <h2 class="podcast-title">
        ${podcast.title}
      </h2>

      <p class="podcast-seasons">
        ${podcast.seasons} seasons
      </p>

      <div class="podcast-genres">

        ${genreNames
          .map(
            (genre) =>
              `<span class="genre-tag">${genre}</span>`
          )
          .join("")}

      </div>

      <p class="podcast-date">
        ${DateUtils.format(podcast.updated)}
      </p>

    </div>
  `;

  return card;
}
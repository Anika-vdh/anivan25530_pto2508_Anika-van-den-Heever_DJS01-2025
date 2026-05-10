import { GenreService } from "../services/GenreService.js";
import { DateUtils } from "../utils/DateUtils.js";
import { createModal }
  from "./createModal.js";

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

<div class="podcast-image-placeholder">
  Podcast Cover
</div>

<div class="podcast-content">

<h2 class="podcast-title">
  Podcast Title
</h2>

  <p class="podcast-seasons">
    ${podcast.seasons} seasons
  </p>

  <div class="podcast-genres">

    ${genreNames
      .slice(0, 2)
      .map(
        (genre) =>
          `
          <span class="genre-tag">
            ${genre}
          </span>
        `
      )
      .join("")}

  </div>

  <p class="podcast-date">
    ${DateUtils.format(podcast.updated)}
  </p>

</div>
`;
  
  card.addEventListener(
  "click",
  () => createModal.open(podcast)
);

  return card;
}
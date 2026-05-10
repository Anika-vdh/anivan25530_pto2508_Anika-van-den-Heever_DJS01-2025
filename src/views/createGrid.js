import { createPodcastCard }
  from "../components/createPodcastCard.js";

/**
 * Creates the podcast grid view.
 *
 * @returns {Object}
 */
export function createGrid() {

  const container =
    document.getElementById("podcastGrid");

  /**
   * Renders podcast cards.
   *
   * @param {Array} podcasts
   */
  function render(podcasts) {

    container.innerHTML = "";

    podcasts.forEach((podcast) => {

      const card =
        createPodcastCard(podcast);

      container.appendChild(card);

    });
  }

  return {
    render,
  };
}
import { genres } from "../../data.js";

/**
 * Service to retrieve genre names.
 */
export const GenreService = {

  /**
   * Converts genre IDs into titles.
   *
   * @param {number[]} genreIds
   * @returns {string[]}
   */
  getNames(genreIds) {

    return genreIds.map(
      (id) =>
        genres.find(
          (genre) => genre.id === id
        )?.title || "Unknown"
    );
  },
};
export const DateUtils = {

  /**
   * Formats dates.
   *
   * @param {string} dateStr
   * @returns {string}
   */
  format(dateStr) {

    const date = new Date(dateStr);

    return `Updated ${date.toLocaleDateString(
      "en-US",
      {
        year: "numeric",
        month: "long",
        day: "numeric",
      }
    )}`;
  },
};
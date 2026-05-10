import { podcasts } from "./data.js";
import { createGrid } from "./src/views/createGrid.js";
import { createModal } from "./src/components/createModal.js";

/**
 * Initializes the podcast application.
 */
function init() {

  document
    .getElementById("closeModal")
    .addEventListener("click", createModal.close);

  const grid = createGrid();

  grid.render(podcasts);
}

init();
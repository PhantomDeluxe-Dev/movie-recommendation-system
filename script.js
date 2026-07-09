/* ==========================================================================
   CineVerse — Movie Recommendation System
   Pure vanilla JavaScript. Relies on MOVIES_DB from movies_data.js
   ========================================================================== */

/* ---------------------------------------------------------------------- *
 * 1. STATE
 * ---------------------------------------------------------------------- */
const state = {
  search: "",
  language: "all",
  genre: "all",
  minRating: 0,
  sort: "default",
  watchlist: JSON.parse(localStorage.getItem("cv_watchlist") || "[]"),
};

/* ---------------------------------------------------------------------- *
 * 2. DOM REFERENCES
 * ---------------------------------------------------------------------- */
const $ = (id) => document.getElementById(id);

const searchInput = $("searchInput");
const languageFilter = $("languageFilter");
const genreFilter = $("genreFilter");
const ratingFilter = $("ratingFilter");
const sortFilter = $("sortFilter");
const clearFiltersBtn = $("clearFiltersBtn");

const resultsGrid = $("resultsGrid");
const resultsCount = $("resultsCount");
const recommendRow = $("recommendRow");
const recommendSub = $("recommendSub");
const trendingRow = $("trendingRow");
const topRatedRow = $("topRatedRow");
const latestRow = $("latestRow");
const watchlistGrid = $("watchlistGrid");
const watchlistCount = $("watchlistCount");

const modalOverlay = $("modalOverlay");
const modalContent = $("modalContent");
const modalClose = $("modalClose");
const toast = $("toast");

/* ---------------------------------------------------------------------- *
 * 3. INITIAL SETUP — populate dropdown filters dynamically from data
 * ---------------------------------------------------------------------- */
function populateFilterOptions() {
  const languages = [...new Set(MOVIES_DB.map((m) => m.language))].sort();
  const genres = [...new Set(MOVIES_DB.map((m) => m.genre))].sort();

  languages.forEach((lang) => {
    const opt = document.createElement("option");
    opt.value = lang;
    opt.textContent = lang;
    languageFilter.appendChild(opt);
  });

  genres.forEach((g) => {
    const opt = document.createElement("option");
    opt.value = g;
    opt.textContent = g;
    genreFilter.appendChild(opt);
  });
}

/* ---------------------------------------------------------------------- *
 * 4. HELPERS
 * ---------------------------------------------------------------------- */

// Returns the movie object by id
function getMovieById(id) {
  return MOVIES_DB.find((m) => m.id === id);
}

// Toggle a movie in/out of the localStorage-backed watchlist
function toggleWatchlist(id) {
  const index = state.watchlist.indexOf(id);
  if (index === -1) {
    state.watchlist.push(id);
    showToast("Added to your watchlist ❤️");
  } else {
    state.watchlist.splice(index, 1);
    showToast("Removed from watchlist");
  }
  localStorage.setItem("cv_watchlist", JSON.stringify(state.watchlist));
  renderWatchlistCount();
  renderWatchlistSection();
  // Re-render currently visible sections so the heart icon stays in sync
  renderResults();
  renderHomeSections();
}

function isInWatchlist(id) {
  return state.watchlist.includes(id);
}

function renderWatchlistCount() {
  watchlistCount.textContent = state.watchlist.length;
}

// Small toast notification helper
let toastTimer = null;
function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}

/* ---------------------------------------------------------------------- *
 * 5. CARD RENDERING
 * ---------------------------------------------------------------------- */

// Builds the HTML for a single movie card
function createMovieCard(movie) {
  const fav = isInWatchlist(movie.id);
  const card = document.createElement("div");
  card.className = "movie-card";
  card.dataset.id = movie.id;

  card.innerHTML = `
    <div class="card-poster-wrap">
      <img src="${movie.poster}" alt="${movie.title}" loading="lazy">
      <div class="card-rating-badge">⭐ ${movie.rating.toFixed(1)}</div>
      <button class="card-fav-btn ${fav ? "active" : ""}" data-fav-id="${movie.id}" title="Add to watchlist">
        ${fav ? "♥" : "♡"}
      </button>
      <div class="card-overlay-info">
        <p>${movie.description}</p>
      </div>
    </div>
    <div class="card-body">
      <div class="card-title">${movie.title}</div>
      <div class="card-meta">
        <span class="tag lang">${movie.language}</span>
        <span class="tag genre">${movie.genre}</span>
        <span class="tag year">${movie.year}</span>
      </div>
    </div>
  `;

  // Open the detail modal when the card (but not the fav button) is clicked
  card.addEventListener("click", (e) => {
    if (e.target.closest(".card-fav-btn")) return;
    openModal(movie.id);
  });

  // Heart / watchlist toggle button
  const favBtn = card.querySelector(".card-fav-btn");
  favBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleWatchlist(movie.id);
  });

  return card;
}

// Renders an array of movies into a given container element.
// If empty, shows a friendly empty state message.
function renderMoviesInto(container, movies, emptyMessage = "No movies found.") {
  container.innerHTML = "";
  if (movies.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = emptyMessage;
    container.appendChild(empty);
    return;
  }
  movies.forEach((movie) => container.appendChild(createMovieCard(movie)));
}

/* ---------------------------------------------------------------------- *
 * 6. FILTERING + SORTING (core recommendation logic)
 * ---------------------------------------------------------------------- */

// Applies all active filters (search, language, genre, rating) to the DB
function getFilteredMovies() {
  let list = MOVIES_DB.filter((movie) => {
    const matchesSearch = movie.title.toLowerCase().includes(state.search.toLowerCase());
    const matchesLanguage = state.language === "all" || movie.language === state.language;
    const matchesGenre = state.genre === "all" || movie.genre === state.genre;
    const matchesRating = movie.rating >= state.minRating;
    return matchesSearch && matchesLanguage && matchesGenre && matchesRating;
  });

  list = sortMovies(list, state.sort);
  return list;
}

// Sorts a movie array based on the selected sort option
function sortMovies(list, sortType) {
  const sorted = [...list];
  switch (sortType) {
    case "rating-desc":
      sorted.sort((a, b) => b.rating - a.rating);
      break;
    case "rating-asc":
      sorted.sort((a, b) => a.rating - b.rating);
      break;
    case "az":
      sorted.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case "newest":
      sorted.sort((a, b) => b.year - a.year);
      break;
    default:
      // "default" -> keep original database order
      break;
  }
  return sorted;
}

// Generates recommendations: movies that share the selected language AND/OR
// genre, ranked by rating. Falls back to top rated overall if no filter set.
function getRecommendations() {
  const hasLangFilter = state.language !== "all";
  const hasGenreFilter = state.genre !== "all";

  let pool;
  if (!hasLangFilter && !hasGenreFilter) {
    // No specific filter chosen yet — recommend globally top-rated movies
    pool = [...MOVIES_DB];
    recommendSub.textContent = "Top picks across all languages and genres — try a filter above to personalize!";
  } else {
    pool = MOVIES_DB.filter((m) => {
      const langMatch = hasLangFilter ? m.language === state.language : true;
      const genreMatch = hasGenreFilter ? m.genre === state.genre : true;
      return langMatch && genreMatch;
    });

    const parts = [];
    if (hasLangFilter) parts.push(state.language);
    if (hasGenreFilter) parts.push(state.genre);
    recommendSub.textContent = `Because you're exploring ${parts.join(" + ")} movies`;

    // If too few matches, broaden to just language OR just genre
    if (pool.length < 6) {
      pool = MOVIES_DB.filter((m) => {
        const langMatch = hasLangFilter ? m.language === state.language : false;
        const genreMatch = hasGenreFilter ? m.genre === state.genre : false;
        return langMatch || genreMatch;
      });
    }
  }

  return pool.sort((a, b) => b.rating - a.rating).slice(0, 14);
}

/* ---------------------------------------------------------------------- *
 * 7. SECTION RENDERERS
 * ---------------------------------------------------------------------- */

function renderResults() {
  const filtered = getFilteredMovies();
  renderMoviesInto(resultsGrid, filtered, "No movies match your filters. Try adjusting them!");
  resultsCount.textContent = `Showing ${filtered.length} of ${MOVIES_DB.length} movies`;
}

function renderRecommendations() {
  const recs = getRecommendations();
  renderMoviesInto(recommendRow, recs, "No recommendations available yet.");
}

// Trending = a fixed pseudo-random sample with high ratings (simulates "buzz")
function renderTrending() {
  const trending = [...MOVIES_DB]
    .sort((a, b) => (b.rating * 10 + b.year) - (a.rating * 10 + a.year))
    .slice(0, 16);
  renderMoviesInto(trendingRow, trending);
}

function renderTopRated() {
  const topRated = [...MOVIES_DB].sort((a, b) => b.rating - a.rating).slice(0, 16);
  renderMoviesInto(topRatedRow, topRated);
}

function renderLatest() {
  const latest = [...MOVIES_DB].sort((a, b) => b.year - a.year).slice(0, 16);
  renderMoviesInto(latestRow, latest);
}

function renderHomeSections() {
  renderRecommendations();
  renderTrending();
  renderTopRated();
  renderLatest();
}

function renderWatchlistSection() {
  const movies = state.watchlist.map(getMovieById).filter(Boolean);
  renderMoviesInto(watchlistGrid, movies, "Your watchlist is empty. Click the ♡ icon on any movie to save it here!");
}

/* ---------------------------------------------------------------------- *
 * 8. MODAL (movie details popup)
 * ---------------------------------------------------------------------- */

function openModal(id) {
  const movie = getMovieById(id);
  if (!movie) return;
  const fav = isInWatchlist(id);

  modalContent.innerHTML = `
    <img class="modal-poster" src="${movie.poster}" alt="${movie.title}">
    <div class="modal-body">
      <h2 class="modal-title">${movie.title}</h2>
      <div class="modal-tags">
        <span class="modal-rating">⭐ ${movie.rating.toFixed(1)} / 10</span>
        <span class="tag lang">${movie.language}</span>
        <span class="tag genre">${movie.genre}</span>
        <span class="tag year">${movie.year}</span>
      </div>
      <p class="modal-desc">${movie.description}</p>
      <div class="modal-actions">
        <button class="btn-watchlist ${fav ? "in-list" : ""}" id="modalFavBtn">
          ${fav ? "✓ In Watchlist" : "♡ Add to Watchlist"}
        </button>
        <button class="btn-similar" id="modalSimilarBtn">🎬 Show Similar Movies</button>
      </div>
    </div>
  `;

  modalOverlay.classList.add("show");

  $("modalFavBtn").addEventListener("click", () => {
    toggleWatchlist(movie.id);
    openModal(movie.id); // re-render modal to reflect new state
  });

  $("modalSimilarBtn").addEventListener("click", () => {
    // Sets the filters to this movie's language + genre, closes modal,
    // and scrolls to the recommendation section -> instantly updates it.
    languageFilter.value = movie.language;
    genreFilter.value = movie.genre;
    state.language = movie.language;
    state.genre = movie.genre;
    renderResults();
    renderRecommendations();
    closeModal();
    document.getElementById("recommend").scrollIntoView({ behavior: "smooth" });
  });
}

function closeModal() {
  modalOverlay.classList.remove("show");
}

/* ---------------------------------------------------------------------- *
 * 9. EVENT LISTENERS
 * ---------------------------------------------------------------------- */

searchInput.addEventListener("input", (e) => {
  state.search = e.target.value;
  renderResults();
});

languageFilter.addEventListener("change", (e) => {
  state.language = e.target.value;
  renderResults();
  renderRecommendations(); // instantly update recommendations on filter change
});

genreFilter.addEventListener("change", (e) => {
  state.genre = e.target.value;
  renderResults();
  renderRecommendations();
});

ratingFilter.addEventListener("change", (e) => {
  state.minRating = Number(e.target.value);
  renderResults();
});

sortFilter.addEventListener("change", (e) => {
  state.sort = e.target.value;
  renderResults();
});

clearFiltersBtn.addEventListener("click", () => {
  state.search = "";
  state.language = "all";
  state.genre = "all";
  state.minRating = 0;
  state.sort = "default";

  searchInput.value = "";
  languageFilter.value = "all";
  genreFilter.value = "all";
  ratingFilter.value = "0";
  sortFilter.value = "default";

  renderResults();
  renderRecommendations();
  showToast("Filters cleared");
});

modalClose.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

$("watchlistNavBtn").addEventListener("click", () => {
  document.getElementById("watchlist").scrollIntoView({ behavior: "smooth" });
});

$("exploreBtn").addEventListener("click", () => {
  document.getElementById("filters").scrollIntoView({ behavior: "smooth" });
});

$("surpriseBtn").addEventListener("click", () => {
  const random = MOVIES_DB[Math.floor(Math.random() * MOVIES_DB.length)];
  openModal(random.id);
});

// Highlight active nav link based on scroll position
const navLinks = document.querySelectorAll(".nav-link");
const sectionsToWatch = ["trending", "toprated", "latest", "recommend", "watchlist"];
window.addEventListener("scroll", () => {
  let current = "trending";
  sectionsToWatch.forEach((id) => {
    const el = document.getElementById(id);
    if (el && window.scrollY >= el.offsetTop - 150) current = id;
  });
  navLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
  });
});

/* ---------------------------------------------------------------------- *
 * 10. INIT
 * ---------------------------------------------------------------------- */
function init() {
  populateFilterOptions();
  renderResults();
  renderHomeSections();
  renderWatchlistSection();
  renderWatchlistCount();
}

init();

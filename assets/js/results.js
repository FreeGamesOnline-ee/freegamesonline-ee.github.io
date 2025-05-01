// Assicura che results.js venga eseguito solo su /results

if (window.location.pathname.includes("/results.html")) {
  const params = new URLSearchParams(window.location.search);
  const keyword = (params.get("keywords") || "").toLowerCase();
  const resultsfound = document.querySelector(".results-found");

  if (resultsfound) {
    resultsfound.innerHTML += keyword;
  }

  fetch('/games.json')
    .then(res => res.json())
    .then(games => {
      const filtered = games.filter(game =>
        game.title.toLowerCase().includes(keyword)
      );

      const resultsContainer = document.querySelector(".results");
      if (!resultsContainer) return;

      if (filtered.length === 0) {
        resultsContainer.innerHTML = "<p>No games found.</p>";
        return;
      }

      resultsContainer.innerHTML = filtered.map(game => `
        <div class="game-card" data-url="${game.page_url}">
          <img src="${game.image}" alt="${game.title}">
          <h3>${game.title}</h3>
          <div class="rating">
            ${game.rating || ''}
          </div>
        </div>
      `).join('');
    });
}


function searchGames() {
    // Get user input
    const input = document.getElementById("search").value.toLowerCase();
  
    // Get all game elements
    const games = document.querySelectorAll(".game");
  
    // Loop through games and hide/show based on search input
    games.forEach((game) => {
      const title = game.querySelector("h3").textContent.toLowerCase();
      if (title.includes(input)) {
        game.style.display = "flex";
      } else {
        game.style.display = "none";
      }
    });
  }
  function clearResults() {
    document.getElementById("search").value = "";
    searchGames();
  }
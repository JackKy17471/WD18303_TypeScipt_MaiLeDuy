let isLoggedIn = false;

let isPlaying = false;

let isCountingDown = false;

let countdownStartTime = 0;

let countdownInterval: NodeJS.Timeout | null = null;

document.getElementById("loginButton")!.addEventListener("click", () => {
  const usernameInput = document.getElementById("username") as HTMLInputElement;
  const username = usernameInput.value.trim();

  if (username !== "") {
    isLoggedIn = true;
    showGameUI();
  } else {
    alert("Please enter a valid username.");
  }
});

function showGameUI() {
  document.getElementById("login")!.style.display = "none";

  document.getElementById("app")!.style.display = "block";
}

document.getElementById("startButton")!.addEventListener("click", () => {
  if (!isPlaying) {
    startGame();
  }
});

document.getElementById("cancelButton")!.addEventListener("click", () => {
  if (isPlaying) {
    cancelGame();
  }
});

document.getElementById("resetButton")!.addEventListener("click", () => {
  resetGame();
});

function startGame() {
  isPlaying = true;

  const pokemonlist = document.getElementById("pokemonlist")!;
  pokemonlist.innerHTML = "<h3>Loading Pokémon...</h3>";
  loadPokemon()
    .then((pokemonArray) => {
      const duplicatedPokemonArray = [...pokemonArray, ...pokemonArray];

      pokemonlist.innerHTML = "";
      duplicatedPokemonArray.forEach((pokemon) => {
        const pokemonCard = document.createElement("div");
        pokemonCard.classList.add("card", "m-1");
        pokemonCard.innerHTML = `
                <span class="position-absolute top-0">#${pokemon.id}</span>
                <img src="${pokemon.sprites.front_default}" class="card-img-top" alt="${pokemon.name}" style="width: 100px;">
                <div class="card-body">
                    <h5 class="card-title">${pokemon.name}</h5>
                </div>
               
            `;
        pokemonlist.appendChild(pokemonCard);
      });
    })
    .catch((error) => {
      console.error("Error loading Pokémon:", error);
    });

  const timerElement = document.getElementById("timer")!;
  timerElement.innerHTML = "<h3>10:00</h3>";
  countdownStartTime = new Date().getTime();
  startCountdown(timerElement);
}

function cancelGame() {
  isPlaying = false;
  stopCountdown();
  // Hiển thị lại form đăng nhập
  document.getElementById("login")!.style.display = "block";
  document.getElementById("app")!.style.display = "none";
}

function resetGame() {
  isPlaying = false;
  stopCountdown();

  document.getElementById("pokemonlist")!.innerHTML = "";

  startGame();
}

async function loadPokemon(): Promise<any[]> {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");
  const data = await response.json();

  const randomPokemonIndices = getRandomIndices(100, 25);
  const randomPokemonArray = randomPokemonIndices.map((index: number) => {
    return fetch(data.results[index].url).then((response) => response.json());
  });
  return Promise.all(randomPokemonArray);
}

function getRandomIndices(n: number, count: number): number[] {
  const indices = Array.from({ length: n }, (_, i) => i);
  const shuffledIndices = shuffleArray(indices);
  return shuffledIndices.slice(0, count);
}

function shuffleArray(array: any[]): any[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function startCountdown(timerElement: HTMLElement) {
  isCountingDown = true;
  countdownInterval = setInterval(() => {
    const currentTime = new Date().getTime();
    const elapsedTime = currentTime - countdownStartTime;
    const remainingTime = 10 * 60 * 1000 - elapsedTime;
    if (remainingTime <= 0) {
      stopCountdown();
      timerElement.innerHTML = "<h3>Time's up!</h3>";
    } else {
      const minutes = Math.floor(remainingTime / (1000 * 60));
      const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
      timerElement.innerHTML = `<h3>${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}</h3>`;
    }
  }, 1000);
}

function stopCountdown() {
  isCountingDown = false;
  if (countdownInterval) {
    clearInterval(countdownInterval);
  }
}

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const hobbies = ["Sports", "Cooking"];
const activehobbies = ["Hiking"];
activehobbies.push(hobbies);
activehobbies.push(hobbies[0], hobbies[1]);
activehobbies.push(...hobbies);
console.log(activehobbies);
//1
function sumArray() {
    const array = [1, 2, 3, 4, 5];
    let sum = 0;
    for (const num of array) {
        sum += num;
    }
    return sum;
}
console.log(sumArray()); // Kết quả: 15
//2
const sum5 = (a = 0, b = 0, ...rest) => {
    let total = a + b;
    for (const num of rest) {
        total += num;
    }
    return total;
};
console.log(sum5(1, 2)); // Kết quả: 3
console.log(sum5(1, 2, 3)); // Kết quả: 6
console.log(sum5(1, 2, 3, 4)); // Kết quả: 10
//3
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergedArray = [...arr1, ...arr2];
console.log(mergedArray);
// bai2
//1
let sum1 = (x = 5, y) => {
    return x + y;
};
let speech = (output) => {
    console.log("Result: " + output);
};
speech(sum1(5, 12));
console.log(speech(sum1(8, 5)));
//2
let something = undefined;
let nothing = undefined;
function throwError(errorMsg) {
    throw new Error(errorMsg);
}
//3
let AddandHandle = (x, y, cb) => {
    const result = x + y;
    cb(result);
};
AddandHandle(10, 20, (result) => {
    console.log(result);
});
//bai 3
let isLoggedIn = false;
let isPlaying = false;
let isCountingDown = false;
let countdownStartTime = 0;
let countdownInterval = null;
document.getElementById("loginButton").addEventListener("click", () => {
    const usernameInput = document.getElementById("username");
    const username = usernameInput.value.trim();
    if (username !== "") {
        isLoggedIn = true;
        showGameUI();
    }
    else {
        alert("Please enter a valid username.");
    }
});
function showGameUI() {
    document.getElementById("login").style.display = "none";
    document.getElementById("app").style.display = "block";
}
document.getElementById("startButton").addEventListener("click", () => {
    if (!isPlaying) {
        startGame();
    }
});
document.getElementById("cancelButton").addEventListener("click", () => {
    if (isPlaying) {
        cancelGame();
    }
});
document.getElementById("resetButton").addEventListener("click", () => {
    resetGame();
});
function startGame() {
    isPlaying = true;
    const pokemonlist = document.getElementById("pokemonlist");
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
    const timerElement = document.getElementById("timer");
    timerElement.innerHTML = "<h3>10:00</h3>";
    countdownStartTime = new Date().getTime();
    startCountdown(timerElement);
}
function cancelGame() {
    isPlaying = false;
    stopCountdown();
    // Hiển thị lại form đăng nhập
    document.getElementById("login").style.display = "block";
    document.getElementById("app").style.display = "none";
}
function resetGame() {
    isPlaying = false;
    stopCountdown();
    document.getElementById("pokemonlist").innerHTML = "";
    startGame();
}
function loadPokemon() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("https://pokeapi.co/api/v2/pokemon?limit=100");
        const data = yield response.json();
        const randomPokemonIndices = getRandomIndices(100, 25);
        const randomPokemonArray = randomPokemonIndices.map((index) => {
            return fetch(data.results[index].url).then((response) => response.json());
        });
        return Promise.all(randomPokemonArray);
    });
}
function getRandomIndices(n, count) {
    const indices = Array.from({ length: n }, (_, i) => i);
    const shuffledIndices = shuffleArray(indices);
    return shuffledIndices.slice(0, count);
}
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
function startCountdown(timerElement) {
    isCountingDown = true;
    countdownInterval = setInterval(() => {
        const currentTime = new Date().getTime();
        const elapsedTime = currentTime - countdownStartTime;
        const remainingTime = 10 * 60 * 1000 - elapsedTime;
        if (remainingTime <= 0) {
            stopCountdown();
            timerElement.innerHTML = "<h3>Time's up!</h3>";
        }
        else {
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
/*_______lab cho them__________ */
//1
// Arrow function
// Tạo một arrow function đơn giản để nhân đôi một số.
// So sánh cách viết arrow function với function thông thường trong TypeScript.
const doubleArrow = (num) => num * 2;
function doubleRegular(num) {
    return num * 2;
}
//2
// Function return
// Viết một hàm trả về tổng của hai số được truyền vào.
// Tạo một hàm trả về một chuỗi được đảo ngược.
const sum2 = (a, b) => {
    return a + b;
};
const reverseString = (str) => {
    return str.split("").reverse().join("");
};
// Tạo một biến có kiểu là một hàm và gán một hàm cộng hai số vào đó
const add = (x, y) => x + y;
//4
// Function with parameters
// Viết một hàm có tham số để tính tổng của một mảng các số.
// Tạo một hàm có thể nhận vào một số không xác định các tham số và tính tổng của chúng.
// Viết một hàm có tham số để tính tổng của một mảng các số
const sumArray1 = (numbers) => {
    return numbers.reduce((total, num) => total + num, 0);
};
// Tạo một hàm có thể nhận vào một số không xác định các tham số và tính tổng của chúng
const sumNumbers = (...nums) => {
    return nums.reduce((total, num) => total + num, 0);
};
//5
// Default parameter
// Tạo một hàm có một tham số mặc định và trả về bình phương của tham số đó.
// Sử dụng giá trị mặc định cho một tham số trong hàm tính tổng của hai số.
// Tạo một hàm có một tham số mặc định và trả về bình phương của tham số đó
const square = (num = 0) => {
    return num * num;
};
// Sử dụng giá trị mặc định cho một tham số trong hàm tính tổng của hai số
const sum = (a, b = 0) => {
    return a + b;
};
//6
// Optional parameter
// Viết một hàm có một tham số tùy chọn và trả về giá trị của tham số đó nếu được cung cấp, ngược lại trả về giá trị mặc định.
const optionalParam = (num) => {
    return num !== null && num !== void 0 ? num : 0;
};
//7
// Spread operators
// Sử dụng toán tử spread để truyền một mảng các số vào một hàm tính tổng.
// Tạo một hàm nhận một số lượng biến đối số không xác định và trả về tổng của chúng
// Sử dụng toán tử spread để truyền một mảng các số vào một hàm tính tổng
const sumArray2 = (nums) => {
    return nums.reduce((total, num) => total + num, 0);
};
// Tạo một hàm nhận một số lượng biến đối số không xác định và trả về tổng của chúng
const sumNumbers2 = (...nums) => {
    return nums.reduce((total, num) => total + num, 0);
};
//8
// Rest parameter
// Viết một hàm nhận một số lượng biến đối số không xác định, sau đó tính tổng của chúng.
const sumNumbers3 = (...nums) => {
    return nums.reduce((total, num) => total + num, 0);
};
//9
// Function & void
// Tạo một hàm không trả về giá trị nào (void) nhưng in ra một thông báo ra console.
// Viết một hàm không nhận bất kỳ tham số nào và không trả về giá trị.
const showMessage = () => {
    console.log("This is a message.");
};
const doSomething = () => { };
//10
// Never & void
// So sánh sự khác nhau giữa never và void trong TypeScript.
// Tạo một hàm không bao giờ hoàn thành (never) và một hàm không trả về giá trị nào (void).
// Hàm không bao giờ hoàn thành (kiểu never)
const throwError1 = (message) => {
    throw new Error(message);
};
// Hàm không trả về giá trị nào (kiểu void)
const showMessage1 = (message) => {
    console.log(message);
};

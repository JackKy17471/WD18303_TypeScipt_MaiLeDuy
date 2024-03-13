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
//1
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["SUPERADMIN"] = 1] = "SUPERADMIN";
    Role[Role["DEVELOPMENT"] = 2] = "DEVELOPMENT";
})(Role || (Role = {}));
;
const person = {
    name: 'typeScript',
    age: 11,
    hobbies: ['Sports', 'Cokking'],
    role: Role.ADMIN,
    roletuple: [2, 'author']
};
let favouriteActivites;
favouriteActivites = [5, 'Sports', true];
if (person.role === Role.DEVELOPMENT) {
    console.log('is author');
}
person.roletuple.push('admin');
person.roletuple[1] = 'author';
person.roletuple = [0, 'admin'];
function combine(input1, input2, resultConversion) {
    let reslut;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        reslut = parseFloat(input1 + ('')) + parseFloat(input2 + (''));
    }
    else {
        reslut = input1.toString() + input2.toString();
    }
    return reslut;
}
//3
const combineNumber = combine(30, 26, 'as-number');
console.log(combineNumber);
const combineStringNumber = combine('30', '36', 'as-number');
console.log(combineStringNumber);
const combineText = combine('typescipt', 'javascipt', 'as-text');
console.log(combineText);
//4
const pokemon = 48;
function callAPI(url) {
    return __awaiter(this, void 0, void 0, function* () {
        let data = yield fetch(url);
        return yield data.json();
    });
}
const randomNumber = Math.floor(Math.random() * 48) + 1;
console.log(randomNumber);
let APP = document.getElementById("app");
let html = "";
for (let index = 0; index < 48; index++) {
    const data = callAPI(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 48) + 1}/`);
    data.then(function (response) {
        html += `
    <div class="col-1">
                <div class="card p-1 mb-3 shadow position-relative">
        <span class="position-absolute top-0">${response.id}</span>
        <img src="${response.sprites.front_default}" alt="${response.name}">
                </div>
            </div>
    `;
        APP === null || APP === void 0 ? void 0 : APP.innerHTML = html;
    });
}
class CountdownTimer {
    constructor(displayElement) {
        this.displayElement = displayElement;
        this.countdownInterval = null;
        this.countdownDuration = 10 * 60; // 10 minutes in seconds
    }
    startCountdown() {
        let currentTime = this.countdownDuration;
        this.updateDisplay(currentTime);
        this.countdownInterval = setInterval(() => {
            currentTime--;
            this.updateDisplay(currentTime);
            if (currentTime <= 0) {
                this.stopCountdown();
            }
        }, 1000);
    }
    stopCountdown() {
        if (this.countdownInterval !== null) {
            clearInterval(this.countdownInterval);
            this.countdownInterval = null;
        }
    }
    updateDisplay(time) {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        this.displayElement.textContent = `${minutes
            .toString()
            .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    }
}
// Sử dụng
const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");
const timerDisplay = document.getElementById("timerDisplay");
if (startButton && stopButton && timerDisplay) {
    const timer = new CountdownTimer(timerDisplay);
    startButton.addEventListener("click", () => {
        timer.startCountdown();
    });
    stopButton.addEventListener("click", () => {
        timer.stopCountdown();
    });
}

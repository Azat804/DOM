// Задание 1

let container = document.querySelector(".container");
const divNumber = 100;
let div = null;
let innerNumber = 0;
const getRandomInRange = (min = 1, max = 100) => {
  return Math.floor(min + Math.random() * (max - min + 1));
};
let randomNumber = getRandomInRange();
for (let i = 0; i < divNumber; i++) {
  div = document.createElement("div");
  div.className = "container__item";
  div.style.height = "30px";
  div.style.width = "30px";
  div.textContent = randomNumber;
  container.append(div);
  randomNumber = getRandomInRange();
}
let containerItems = document.querySelectorAll(".container__item");
for (let i = 0; i < containerItems.length; i++) {
  innerNumber = Number(containerItems[i].textContent);
  if (innerNumber < 31) {
    containerItems[i].style.backgroundColor = "green";
  } else if (innerNumber > 70) {
    containerItems[i].style.backgroundColor = "red";
  }
}

// Задание 2

let divInRandomColor = document.createElement("div");
let red = getRandomInRange(0, 255);
let green = getRandomInRange(0, 255);
let blue = getRandomInRange(0, 255);
const rgbToHex = (colorValue) => {
  const hex = colorValue.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
};
const hexColor = "#" + [red, green, blue].map(rgbToHex).join("").toUpperCase();
divInRandomColor.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
divInRandomColor.style.color = red + green + blue > 383 ? "black" : "white";
let colorName = ntc.name(hexColor)[1];
divInRandomColor.textContent = `rgb(${red}, ${green}, ${blue}); hex: ${hexColor}; colorName: ${colorName}`;
container.append(divInRandomColor);

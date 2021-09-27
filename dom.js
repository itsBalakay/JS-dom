const p = document.querySelector("p");
const imgs = document.querySelectorAll(".item img");
const item2 = document.querySelector(".item2");
const item2img = item2.querySelector("img");
const heading = document.querySelector("h2");
//set the textContent property on that element
heading.textContent = "Wes is cool";
// console.log(heading.textContent);
// console.log(heading.innerText);

const pizzaList = document.querySelector(".pizza");
// console.log(pizzaList.textContent);

// pizzaList.textContent = `${pizzaList.textContent} 🍕`;
pizzaList.insertAdjacentText("beforeend", "🍕");
pizzaList.insertAdjacentText("afterbegin", "🍕");

const pic = document.querySelector(".nice");
pic.classList.add("open");
pic.classList.remove("cool");
console.log(pic.classList);

function toggleRound() {
  pic.classList.toggle("round");
}

pic.addEventListener("click", toggleRound);

pic.alt = "Change"; //setter
console.log(pic.alt); //getter
console.log(pic.naturalWidth);

pic.addEventListener("load", () => {
  console.log(pic.naturalWidth);
});
// pic.setAttribute("alt", "Really cute");
// console.log(pic.getAttribute("alt"));

pic.addEventListener("click", () => {
  alert(`Welcome`);
});

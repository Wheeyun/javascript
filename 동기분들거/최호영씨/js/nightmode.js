const mode = document.querySelector("#mode");
const change = document.querySelector("body");
const BLACK = "black";
const WHITE = "white";

function changeMode() {
  if (mode.value === "π(μΌκ°λͺ¨λ)") {
    change.style.backgroundColor = BLACK;
    change.style.color = WHITE;
    console.log("λ¨??");
    mode.value = "π(μ£Όκ°λͺ¨λ)";
  } else {
    change.style.backgroundColor = WHITE;
    change.style.color = BLACK;
    mode.value = "π(μΌκ°λͺ¨λ)";
  }
}

mode.addEventListener("click", changeMode);

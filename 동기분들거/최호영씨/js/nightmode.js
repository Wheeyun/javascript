const mode = document.querySelector("#mode");
const change = document.querySelector("body");
const BLACK = "black";
const WHITE = "white";

function changeMode() {
  if (mode.value === "🌚(야간모드)") {
    change.style.backgroundColor = BLACK;
    change.style.color = WHITE;
    console.log("됨??");
    mode.value = "🌕(주간모드)";
  } else {
    change.style.backgroundColor = WHITE;
    change.style.color = BLACK;
    mode.value = "🌚(야간모드)";
  }
}

mode.addEventListener("click", changeMode);

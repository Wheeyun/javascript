const loginInput = document.querySelector("#loginForm input");
const loginForm = document.querySelector("#loginForm");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function handleBtnClick(e) {
  e.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  console.log(loginForm);
  localStorage.setItem(USERNAME_KEY, username);
  showGreeting(username);
  console.log(username);
}

function showGreeting(username) {
  greeting.innerText = `환영합니다. ${username} 님!`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (!savedUsername) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", handleBtnClick);
} else {
  showGreeting(savedUsername);
}

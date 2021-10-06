const toeic = [
  {
    word: "considering that",
    translate: "～을 고려하건대",
  },
  {
    word: "frankly speaking",
    translate: "솔직히 말하여",
  },
  {
    word: "inherit",
    translate: "상속하다/ 이어받다",
  },
  {
    word: "oppression",
    translate: "억압",
  },
  {
    word: "regional",
    translate: "지역적인",
  },
  {
    word: "reinforce",
    translate: "강화시키다",
  },
  {
    word: "explanation",
    translate: "설명",
  },
  {
    word: "in the first place",
    translate: "처음으로",
  },
  {
    word: "invent",
    translate: "발명하다/ 만들다",
  },
  {
    word: "instead of",
    translate: "～대신에",
  },
  {
    word: "socialize",
    translate: "사회화하다",
  },
];
const wordSpan = document.querySelector("#toeic span:first-child");
const translateSpan = document.querySelector("#toeic span:last-child");
const toeicCheck = document.querySelector("#toeicCheck");

function complete() {
  const randomWord = toeic[Math.floor(Math.random() * toeic.length)];
  wordSpan.innerText = randomWord.word;
  translateSpan.innerText = randomWord.translate;
  console.log("됨?");
  toeicCheck.value = "외움!";
}

toeicCheck.addEventListener("click", complete);

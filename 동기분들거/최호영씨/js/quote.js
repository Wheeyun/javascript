const quotes = [
  {
    quote: " You cannot change what you are, only what you do. ",
    author: "Philip Pullman",
  },
  {
    quote: " Lay a firm foundation with the bricks that others throw at you.",
    author: "David Brinkley",
  },
  {
    quote:
      " Change the way you look at things and the things you look at change. ",
    author: "Wayne Dyer",
  },
  {
    quote:
      " If you run you stand a chance of losing, but if you don't run you've already lost. ",
    author: "Barack Obama",
  },
  {
    quote: " If you have always done it that way, it is probably wrong. ",
    author: "Charles Kettering",
  },
  {
    quote:
      " The greatest mistake you can make in life is to be continually fearing you will make one.",
    author: "Elbert Hubbard",
  },
  {
    quote:
      " Not everything that is faced can be changed, but nothing can be changed until it is faced. ",
    author: "James Baldwin",
  },
  {
    quote: " If work were so pleasant, the rich would keep it for themselves. ",
    author: "Mark Twain",
  },
  {
    quote:
      " I cannot say whether things will get better if we change; what I can say is they must change if they are to get better. ",
    author: "Georg C. Lichtenberg",
  },
  {
    quote:
      "To create more positive results in your life, replace ‘if only' with ‘next time'.",
    author:
      "When we are no longer able to change a situation, we are challenged to change ourselves.",
  },
];

const quoteSpan = document.querySelector("#quote span:first-child");
const authorSpan = document.querySelector("#quote span:last-child");

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

//console.log(randomQuote);

quoteSpan.innerText = randomQuote.quote;
authorSpan.innerText = randomQuote.author;

// 1.round 반올림
// 2. ceil 올림
// 3. floor  버림

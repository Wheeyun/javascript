const quotes = [
    {quote: "You cannot change what you are, only what you do.", author: "Philip Pullman"},
    {quote: "Lay a firm foundation with the bricks that others throw at you.", author: "David Brinkley"},
    {quote: "Change the way you look at things and the things you look at change.", author: "Wayne Dyer"},
    {quote: "If you run you stand a chance of losing, but if you don't run you've already lost.", author: "Barack Obama"},
    {quote: "If you have always done it that way, it is probably wrong.", author: "Charles Kettering"},
    {quote: "The greatest mistake you can make in life is to be continually fearing you will make one.", author: "Elbert Hubbard"},
    {quote: "Not everything that is faced can be changed, but nothing can be changed until it is faced.", author: "James Baldwin"},
    {quote: "If work were so pleasant, the rich would keep it for themselves.", author: "Mark Twain"},
    {quote: "I cannot say whether things will get better if we change; what I can say is they must change if they are to get better.", author: "Georg C. Lichtenberg"},
    {quote: "To create more positive results in your life, replace ‘if only' with ‘next time'.", author: "Unknown"},
    {quote: "When we are no longer able to change a situation, we are challenged to change ourselves.", author: "Viktor Frankl"},
    {quote: "Use what talents you possess, the woods will be very silent if no birds sang there except those that sang best.", author: "Henry van Dyke"},
    {quote: "They always say time changes things, but you actually have to change them yourself.", author: "Andy Warhol"},
    {quote: "As soon as anyone starts telling you to be 'realistic,' cross that person off your invitation list.", author: "John Eliot"},
    {quote: "Only I can change my life. No one can do it for me.", author: "Carol Burnett"},
    {quote: "Courage doesn't always roar. Sometimes courage is the little voice at the end of the day that says I'll try again tomorrow.", author: "Mary Anne"},
    {quote: "The 3C's in life: Choice, Chance, Change. You must make the hoice, to take the Chance, if you want anything in life to Change.", author: "Unknown"},
    {quote: "One day your life will flash before your eyes. Make sure it's worth watching.", author: "Unknown"},
    {quote: "When in doubt, choose change.", author: "Lily Leung"},
    {quote: "The secret of change is to focus all of your energy, not on fighting the old, but on building the new.", author: "Socrates"}
      
]

const quoteSpan = document.querySelector('#quote span:first-child');
const authorSpan = document.querySelector('#quote span:last-child');

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

// console.log(randomQuote);

quoteSpan.innerText = randomQuote.quote;
authorSpan.innerText = randomQuote.author;
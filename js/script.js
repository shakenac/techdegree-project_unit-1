/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/***
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/

// QUOTES:
    // 1. "Whether you think you can or you think you can't, you're right." - Henry Ford
    // 2. "Humility is not thinking less of yourself, it's thinking of //yourself less." - C.S. Lewis
    // 3. "It is never too late to be what you might have been." - George Eliot
    // 4. "To live a creative life, we must lose our fear of being wrong." - Anonymous
    // 5. "Unless you try to do something beyond what you have already mastered, you will never grow." - Ralph Waldo Emerson
    // 6. "The most common way people give up their power is by thinking they don't have any." - Alice Walker
    // 7. "I attribute my success to this: I never gave or took any excuse." - Florence Nightingale
    // 8. "Everything you've ever wanted is on the other side of fear." - George Addair
    // 9. "Under who's rules are you living? Under who's wishes are you living? For who are you living." - Kyo, Dir en grey
    // 10. "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it." - Patrick McKenzie

let quotes = [
  {
    quote: "I attribute my success to this: I never gave or took any excuse.",
    source: "Florence Nightingale"
  },
  {
    quote: "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
    source: "Patrick McKenzie",
    citation: "Twitter",
    year: "2016"
  },
  {
    quote: "Whether you think you can or you think you can't, you're right.",
    source: "Henry Ford"
  },
  {
    quote: "Everything you've ever wanted is on the other side of fear.",
    source: "George Addair"
  },
  {
    quote: "Unless you try to do something beyond what you have already mastered, you will never grow.",
    source: "Ralph Waldo Emerson"
  }
];


/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/

function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length);
 // return quotes[randomNumber];
  console.log(quotes[randomNumber]);
};


/***
  Create the `printQuote` function to:
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string.
***/
function printQuote() {
   let randomQuote = getRandomQuote();
   let html = '';
   html += '<p class="quote">' + randomQuote['quote'] + '</p>';
   html += '<p class="source">' + randomQuote['source'];
   if (randomQuote ===) {
      html += '<p class="citation">' + randomQuote['citation'];
      html += '<p class="year">' + randomQuote['year'];
   }
   html += '</p>';
   console.log(html);
}



/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.

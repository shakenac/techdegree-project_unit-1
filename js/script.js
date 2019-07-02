/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/


// Array of objects called 'quotes' that stores the properties: quote, source, citation, and year
let quotes = [
  {
    quote: "I attribute my success to this: I never gave or took any excuse.",
    source: "Florence Nightingale",
    citation: "The Life of Florence Nightengale",
    year: "1913 (1861)",
    tags: "#inspirational"
    // quoteinvestigator.com/2016/07/30/excuse/
  },
  {
    quote: "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
    source: "Patrick McKenzie",
    citation: "Twitter",
    year: "2016",
    tags: "#inspirational, #programming"
  },
  {
    quote: "Whether you think you can or you think you can't, you're right.",
    source: "Henry Ford",
    citation: "The Reader’s Digest",
    year: "1947",
    tags: "#inspirational"
    // quoteinvestigator.com/2015/02/03/you-can/
  },
  {
    quote: "Everything you've ever wanted is on the other side of fear.",
    source: "George Addair",
    tags: "#inspirational"
  },
  {
    quote: "Unless you try to do something beyond what you have already mastered, you will never grow.",
    source: "Ronald E. Osborn",
    citation: "Forbes: Thoughts on the Business of Life",
    year: "1945",
    tags: "#inspirational, #business"
    // quoteinvestigator.com/2015/02/24/grow/#note-10698-1
  }
];

// Create getRandomQuote() function to create a random number
  // Store the random number in the 'randomNumber' variable
  // return that random quote using the randomNumber variable
function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length);
   return quotes[randomNumber];
};

function getRandomColor() {
  // Randomly generate number for the RGB color string
  let red = Math.floor(Math.random() * 256 );
  let green = Math.floor(Math.random() * 256 );
  let blue = Math.floor(Math.random() * 256 );
  let rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';

  // this getElementsByTagName method returns all the elements with the body tag
  // the getElementsByTagName gives you an array like object, [0] returns the first (and only) body tag
  document.getElementsByTagName('body')[0].style.background = rgbColor;
}

// Create printQuote() function to generate and print a random quote
function printQuote() {
   // stored the getRandomQuote() function into a variable 'randomQuote'
   let randomQuote = getRandomQuote();
   // Generate a random quote along with the source and store it in the string 'html'
   let html = '';
   html += '<p class="quote">' + randomQuote.quote + '</p>';
   html += '<p class="source">' + randomQuote.source;
   // Use if statements to add the source and citation to the html string if applicable
   if (randomQuote.citation) {
      html += '<span class="citation">' + randomQuote.citation + '</span>';
   }
   if (randomQuote.year) {
      html += '<span class="year">' + randomQuote.year + '</span>';
   }
   // if else statement to make the 'tags' property value it's own paragraph
   if (randomQuote.tags) {
     html += '<p class="tags">' + randomQuote.tags + '</p>';
   }  else {
      html += '</p>';
   }
   // Use the getElementById() method and innerHTML property to change the HTML content of the <p> element with the 'quote-box' id
   document.getElementById('quote-box').innerHTML = html;
   getRandomColor();
}

/*
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function.
*/
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

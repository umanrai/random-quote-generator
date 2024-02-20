const text = document.getElementById("quote");
const author = document.getElementById("author");
const tweetButton = document.getElementById("tweet");

let allQuotes = [];

const getNewQuote = async () => {    
    const response = await fetch("https://zenquotes.io/api/quotes");
    
    allQuotes = await response.json();

    showRandomQuote()
}

getNewQuote();

function showRandomQuote() {
    const indx = Math.floor(Math.random() * allQuotes.length);
    
    const quote = allQuotes[indx].q;
    const authorName = allQuotes[indx].a;

    //Ternary Operator
    author.innerHTML = "~ " + (authorName == null ? "Anonymous" : authorName)

    if (authorName == null) {
        author.innerHTML = "Anonymous";
    } else {
        author.innerHTML = "~ " + authorName;
    }

    text.innerHTML = quote;
    tweetButton.href = "https://twitter.com/intent/tweet?text=" + quote + " ~ " + authorName;
}

var elements = document.getElementById('next-quota').addEventListener('click', function() {
    showRandomQuote()
});
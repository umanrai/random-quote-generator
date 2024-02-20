const text = document.getElementById("quote");
const author = document.getElementById("author");
const tweetButton = document.getElementById("tweet");

const getNewQuote = async () => {    
    const response = await fetch("https://type.fit/api/quotes");

    const allQuotes = await response.json();

    const indx = Math.floor(Math.random() * allQuotes.length);
    const quote = allQuotes[indx].text;
    const authorName = allQuotes[indx].author;

    // Ternary Operator
    author.innerHTML = "~ " + (authorName == null ? "Anonymous" : authorName)

    // if (authorName == null) {
    //     author.innerHTML = "Anonymous";
    // } else {
    //     author.innerHTML = "~ " + authorName;
    // }

    text.innerHTML = quote;
    tweetButton.href = "https://twitter.com/intent/tweet?text=" + quote + " ~ " + authorName;
}

getNewQuote();
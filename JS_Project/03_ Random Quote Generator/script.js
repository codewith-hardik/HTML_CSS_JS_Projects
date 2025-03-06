const quotes = [
    {
        text: "The best way to predict the future is to invent it.",
        author: "Alan Kay",
    },
    {
        text: "Life is what happens when you're busy making other plans.",
        author: "John Lennon",
    },
    {
        text: "Success is not the key to happiness. Happiness is the key to success.",
        author: "Albert Schweitzer",
    },
    {
        text: "You miss 100% of the shots you don’t take.",
        author: "Wayne Gretzky",
    },
    {
        text: "It does not matter how slowly you go as long as you do not stop.",
        author: "Confucius",
    },
    {
        text: "Dream big and dare to fail.",
        author: "Norman Vaughan",
    },
    {
        text: "If you cannot do great things, do small things in a great way.",
        author: "Napoleon Hill",
    },
];

document.getElementById("new-quote").addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    document.getElementById("quote").textContent = `"${quote.text}"`;
    document.getElementById("author").textContent = `- ${quote.author}`;
});



// document.getElementById('get-quote-btn').addEventListener('click', fetchQuote);

// async function fetchQuote() {
//   try {
//     const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=happiness');
//     const data = await response.json();
    
//     // Extract quote and author from the response
//     const quoteText = data.content;
//     const authorText = data.author;
    
//     // Update the HTML with the new quote
//     document.getElementById('quote').textContent = `"${quoteText}"`;
//     document.getElementById('author').textContent = `- ${authorText}`;
//   } catch (error) {
//     console.error('Error fetching quote:', error);
//   }
// }

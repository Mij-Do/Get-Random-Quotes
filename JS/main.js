// ** call the elements
let getQuoteBtn = document.getElementById('btn');
let quotes = document.getElementById('quotes');

let saveQuotes;
if (!localStorage.length === null) {
    saveQuotes = JSON.parse(localStorage.Quotes)
} else {
    saveQuotes = [];
}
getQuoteBtn.addEventListener('click', () => {
    async function getQuotes(api) {
        let data = await fetch(api)
        .then(res => res.json())
        .then(data => data);
        localStorage.setItem('Quotes', JSON.stringify(data))
    }
    getQuotes('https://api.quotable.io/quotes/random')
    showQuotes();
});

function showQuotes () {
    saveQuotes = JSON.parse(localStorage.Quotes)
    quotes.innerHTML = `
        <article> "${saveQuotes[0].content}" </article>
        <article>(${saveQuotes[0].author})</article>
    `
}
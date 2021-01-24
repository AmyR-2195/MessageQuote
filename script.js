
let quote = ['You are perfect as you are', 'Always be true to yourself',
'You can do anything you set your mind to', 'Believe in yourself', 'Trust your instincts',
'Nobody is perfect', 'You are enough'];

function newQuote() { 
let randomNumber = Math.floor(Math.random()*(quote.length));
document.getElementById('quoteDisplay').innerHTML = quote[randomNumber];

}

console.log("Up and running!");
var cards = [
{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png"	
},
{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png"	
},
{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png"	
},
{
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png"
}
];

var cardsInPlay = [];
var cardId = [0];



var checkForMatch = function(){
console.log("entering checkForMatch");

	if (cardsInPlay.length == 2){
	if (cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
	}
console.log("exiting checkForMatch");
}



var flipCard = function(){
	
    this.setAttribute('src', cards[cardId].cardImage);
	this.getAttribute('data-id', 'cardId');
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);

	checkForMatch();

console.log("exiting flipCard");
}

	var createBoard = function(){
console.log("entering createBoard");

		for (var i = 0; i < cards.length; i++) {
			var cardElement = document.createElement('img');
			cardElement.setAttribute('src', 'images/back.png');
			cardElement.setAttribute('data-id', i);
			document.getElementById('game-board').appendChild(cardElement);
			cardElement.addEventListener('click', flipCard);
			
			console.log("in for loop, i ==" +i);
		}
	console.log("exiting createBoard");	
	}

	createBoard();
	//flipCard();
	
	
	






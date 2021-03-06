const outputArea = document.getElementById("output-area");
const newGameButton = document.getElementById("new-game-button");
const hitButton = document.getElementById("hit-button");
const stayButton = document.getElementById("stay-button");

let cards = [
    //spades
    {
        name: "aceOfSpades",
        card: "🂡",
        value: 1
    },
    {
        name: "twoOfSpades",
        card: "🂢",
        value: 2
    },
    {
        name: "threeOfSpades",
        card: "🂣",
        value: 3
    },
    {
        name: "fourOfSpades",
        card: "🂤",
        value: 4
    },
    {
        name: "fiveOfSpades",
        card: "🂥",
        value: 5
    },
    {
        name: "sixOfSpades",
        card: "🂦",
        value: 6
    },
    {
        name: "sevenOfSpades",
        card: "🂧",
        value: 7
    },
    {
        name: "eightOfSpades",
        card: "🂨",
        value: 8
    },
    {
        name: "nineOfSpades",
        card: "🂩",
        value: 9
    },

    {
        name: "tenOfSpades",
        card: "🂪",
        value: 10
    },
    {
        name: "jackOfSpades",
        card: "🂫",
        value: 10
    },
    {
        name: "queenOfSpades",
        card: "🂭",
        value: 10
    },
    {
        name: "kingOfSpades",
        card: "🂮",
        value: 10
    },
    // Hearts
    {
        name: "aceOfHearts",
        card: "🂱",
        value: 1
    },
    {
        name: "twoOfHearts",
        card: "🂲",
        value: 2
    },
    {
        name: "threeOfHearts",
        card: "🂳",
        value: 3
    },
    {
        name: "fourOfHearts",
        card: "🂴",
        value: 4
    },
    {
        name: "fiveOfHearts",
        card: "🂵",
        value: 5
    },
    {
        name: "sixOfHearts",
        card: "🂶",
        value: 6
    },
    {
        name: "sevenOfHearts",
        card: "🂷",
        value: 7
    },
    {
        name: "eightOfHearts",
        card: "🂸",
        value: 8
    },
    {
        name: "nineOfHearts",
        card: "🂹",
        value: 9
    },

    {
        name: "tenOfHearts",
        card: "🂺",
        value: 10
    },
    {
        name: "jackOfHearts",
        card: "🂻",
        value: 10
    },
    {
        name: "queenOfHearts",
        card: "🂽",
        value: 10
    },
    {
        name: "kingOfHearts",
        card: "🂾",
        value: 10
    },
    // Diamonds
    {
        name: "aceOfDiamonds",
        card: "🃁",
        value: 1
    },
    {
        name: "twoOfDiamonds",
        card: "🃂",
        value: 2
    },
    {
        name: "threeOfDiamonds",
        card: "🃃",
        value: 3
    },
    {
        name: "fourOfDiamonds",
        card: "🃄",
        value: 4
    },
    {
        name: "fiveOfDiamonds",
        card: "🃅",
        value: 5
    },
    {
        name: "sixOfDiamonds",
        card: "🃆",
        value: 6
    },
    {
        name: "sevenOfDiamonds",
        card: "🃇",
        value: 7
    },
    {
        name: "eightOfDiamonds",
        card: "🃈",
        value: 8
    },
    {
        name: "nineOfDiamonds",
        card: "🃉",
        value: 9
    },

    {
        name: "tenOfDiamonds",
        card: "🃊",
        value: 10
    },
    {
        name: "jackOfDiamonds",
        card: "🃋",
        value: 10
    },
    {
        name: "queenOfDiamonds",
        card: "🃍",
        value: 10
    },
    {
        name: "kingOfDiamonds",
        card: "🃎",
        value: 10
    },
    // Clubs
    {
        name: "aceOfClubs",
        card: "🃒",
        value: 1
    },
    {
        name: "twoOfClubs",
        card: "🃒",
        value: 2
    },
    {
        name: "threeOfClubs",
        card: "🃔",
        value: 3
    },
    {
        name: "fourOfClubs",
        card: "🃔",
        value: 4
    },
    {
        name: "fiveOfClubs",
        card: "🂤",
        value: 5
    },
    {
        name: "sixOfClubs",
        card: "🂤",
        value: 6
    },
    {
        name: "sevenOfClubs",
        card: "🂤",
        value: 7
    },
    {
        name: "eightOfClubs",
        card: "🂤",
        value: 8
    },
    {
        name: "nineOfClubs",
        card: "🂤",
        value: 9
    },
    {
        name: "tenOfClubs",
        card: "🂤",
        value: 10
    },
    {
        name: "jackOfClubs",
        card: "🂤",
        value: 10
    },
    {
        name: "queenOfClubs",
        card: "🂤",
        value: 10
    },
    {
        name: "kingOfClubs",
        card: "🂤",
        value: 10
    },


];

let deck = [];
let dealer = [];
let player = [];

shuffleDeck = () => {
    let tmpDeck = cards;

    while (tmpDeck.length > 0) {
        let getCard = Math.ceil(Math.random() * tmpDeck.length - 1);
        let cards = tmpDeck.splice(getCard, 1);
        deck.push(cards[0]);
    }
}



drawCard = hand => {
    let firstCard = deck.shift();
    hand.push(firstCard);
}

clearTable = () => {
    outputArea.innerHTML = "";
};

showHand = (hand, score) => {
    clearTable();
    let handstr = "";

    hand.map(elem => {
        handstr += elem.card;
    });

    return handstr + "" + score;
}

dealInitialCards = () => {

    drawCard(dealer);
    drawCard(player);
    drawCard(player);
}


calculateHand = cards => {
    let score = 0;
    cards.forEach(card => {
        score += card.value;
    });
    return score
}

redraw = () => {
    outputArea.innerHTML = showHand(dealer, calculateHand(dealer)) + "<br>" + showHand(player, calculateHand(player));
}

//New game function
startNewGame = () => {
    document.getElementById('new-game-button').style.visibility = 'hidden';
    deck = [];
    player = [];
    dealer = [];
    shuffleDeck();
    dealInitialCards();
    outputArea.innerHTML = showHand(dealer, calculateHand(dealer)) + "<br>" + showHand(player, calculateHand(player));
}
document.getElementById("new-game-button").addEventListener('click', function () {
    startNewGame()
}, false);

//When i Win or Lose
onWin = () => {
    document.location = 'http://127.0.0.1:5500/Blackjack/black-jack.html';
}

onLose = () => {
    document.location = 'http://127.0.0.1:5500/Blackjack/black-jack.html';
}
hasBlackJack = (hand) => {
    return calculateHand(hand) == 21;
}

//Hit function
dealAnotherCard = (hand) => {
    drawCard(hand);
    redraw();
    if (hasBlackJack(hand)) alert("You got Blackjack!");
    if (calculateHand(player) > 21) {
        alert("You are Bust!")
        onLose();
    }

}

document.getElementById("hit-button").addEventListener('click', function () {
    dealAnotherCard(player);
}, false);

//Stay function
stayFunction = () => {
    while (calculateHand(dealer) <= 17 || calculateHand(dealer) < calculateHand(player)) {
        drawCard(dealer);
    }
    redraw();
    if (calculateHand(dealer) > 21 || calculateHand(player) > calculateHand(dealer)) {

        alert("you win!");
        onWin();

    }
    else {

        alert("You lose!");
        onWin();

    }
}

document.getElementById("stay-button").addEventListener('click', function () {
    stayFunction(dealer);
}, false);
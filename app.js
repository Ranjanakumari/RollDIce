/*
GAME START 
------------the game has two players, playing in two rounds
------------in each turn a player rolls a dice as many time he wishes.each result get added to his round score
-------------but if the player rolls a 1 his round scores gets lost. after that its the next players turn

---the players can choose to hold which means that his round score gets added to his global score after that it is the next players turn

---------the first players to reach 100 points on global score wins the game
*/
var scores, roundScore, activePlayer, dice, gamePlaying;

init();
// dice = Math.floor(Math.random() * 6) + 1;

// document.querySelector('#current-' + activePlayer).textContent = dice;





document.querySelector('.btn-roll').addEventListener('click', function() {
    if (gamePlaying) {



        //need random number

        var dice = Math.floor(Math.random() * 6) + 1;

        //display the result
        var diceDOM =
            document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'image/dice-' + dice + '.png';





        //update the round score if the rolled number was not a 1

        if (dice !== 1) {
            //add

            roundScore += dice;

            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            // next player

            nextPlayer();

        }
    }





});

document.querySelector('.btn-hold').addEventListener('click', function() {

    if (gamePlaying) {
        //add current score to global score
        scores[activePlayer] += roundScore;

        //update the ui

        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];


        //check if  player wont the game
        if (scores[activePlayer] >= 100) {
            document.querySelector('#name-' + activePlayer).textContent = 'winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

            gamePlaying = false;

        } else {
            nextPlayer();
        }
    }




});

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.querySelector('#current-0').textContent = '0';
    document.querySelector('#current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');

    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;

    gamePlaying = true;


    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.getElementById('name-0').textContent = 'Player 1';

    document.getElementById('name-1').textContent = 'Player 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.add('active');
}
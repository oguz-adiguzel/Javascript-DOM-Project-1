'use strict'

console.log(document.querySelector('.message').textContent)

let randomNumber = Math.round((Math.random()) * 20)
let checkButton = document.querySelector('.check');
let numberInput = document.querySelector('.guess');
let finish = document.querySelector('.number');
let message = document.querySelector('.message')
let score = document.querySelector('.score');
let hightScoreDOM = document.querySelector('.highscore')
let againButton = document.querySelector('.again');

let totalScore = 20;
let hightScore = 0;

console.log(randomNumber);

checkButton.addEventListener('click', check);
againButton.addEventListener('click', again);


function check(e) {
    let checkNumber = Number(numberInput.value)
    if (checkNumber === randomNumber) {
        finish.innerText = randomNumber;
        message.innerText = 'Congratulations'
        hightScore = totalScore;
        hightScoreDOM.innerText = hightScore;
        totalScore = 20
    } else if (checkNumber < randomNumber) {
        message.innerText = 'Too small';
        totalScore--;
        score.innerText = totalScore;
    } else if (checkNumber > randomNumber) {
        message.innerText = 'Too big'
    }
    e.preventDefault();
}

function again(e) {
    let randomNumber = Math.round((Math.random()) * 20)
    console.log(randomNumber);
    let newTotalScore = 20
    numberInput.value = 0
    message.innerText = 'Start guessing...'
    score.innerText = newTotalScore;

    checkButton.addEventListener('click', newCheck);
    function newCheck(e) {
        let checkNumber = Number(numberInput.value)
        if (checkNumber === randomNumber) {
            finish.innerText = randomNumber;
            message.innerText = 'Congratulations'
            if (newTotalScore > hightScore) {
                hightScore = newTotalScore;
                hightScoreDOM.innerText = hightScore;
            }
            score.innerText = newTotalScore;
        } else if (checkNumber < randomNumber) {
            console.log('total score' + newTotalScore);
            message.innerText = 'Too small';
            newTotalScore--;
            score.innerText = newTotalScore;
        } else if (checkNumber > randomNumber) {
            message.innerText = 'Too big';
            newTotalScore--;
            score.innerText = newTotalScore;
        }
        e.preventDefault();
    }
    e.preventDefault();
}
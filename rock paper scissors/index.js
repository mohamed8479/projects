
const lesChoix = ['rock','paper','scissors'];
const player=document.getElementById('player');
const computer=document.getElementById('computer');
const resultat=document.getElementById('resultat');
const playerscoree=document.getElementById('playerscoree');
const computerscoree=document.getElementById('computerscoree');

let playerscore=0;
let computerscore=0;

function Play(choix) {
    const camputerChoix=lesChoix[Math.floor(Math.random()*3)];
    let result=''

    if (choix===camputerChoix) {
        result=" IT'S A TIE ! "
    } else {
        switch (choix) {
            case 'rock':
                result = (camputerChoix==='scissors') ? " YOU WIN ! " : " YOU LOSE ! ";
                break;
            case 'paper':
                result = (camputerChoix==='rock') ? " YOU WIN ! " : " YOU LOSE ! ";
                break;
            case 'scissors':
                result = (camputerChoix==='paper') ? " YOU WIN ! " : " YOU LOSE ! ";
                break;        
            }
    }
    player.textContent=`PLAYER : ${choix}`;
    computer.textContent=`COMPUTER : ${camputerChoix}`;
    resultat.textContent=` ${result}`; 

resultat.classList.remove('greentext','redtext');

    switch (result) {
        case " YOU WIN ! ":
            resultat.classList.add('greentext');
            playerscore++;
            playerscoree.textContent=playerscore;
            break;

        case " YOU LOSE ! ":
            resultat.classList.add('redtext');
            computerscore++;
            computerscoree.textContent=computerscore;
            break;
    
    }
   



}





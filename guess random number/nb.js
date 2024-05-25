
const minNum=50;
const maxNum=100;
const answer = Math.floor(Math.random()*(maxNum-minNum+1))+minNum;

let attempts = 0;
let running=true;
let guess;


while (running){
    guess=window.prompt(`donner un nombre entre ${minNum} et ${maxNum} `);
    guess=Number(guess);

    if(guess>maxNum  || guess<minNum){
        alert('nombre non validé');
    } 
    else if(isNaN(guess)){
        alert('nombre non validé');
    }
    else{
        attempts++;
        if(guess>answer){
            alert('nombre tres grand');
        }
        else if(guess<answer){
            alert('nombre tres petit');
        }
        else{
            alert(`nombre validé trouvé dans ${attempts} attempts`);
        }
        
    }
    running=false;
} 
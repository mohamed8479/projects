const display=document.getElementById('display');

function ajouter(params) {
    display.value += params;    
}

function calculer() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value='Error';
        
    }
}

function supprimer() {

    display.value="";
}




function randomPassword( lengthhh,allowedUpper,allowedLower,allowedNumber,allowedSymbole) {
    
const   upperchar='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const   lowerchar='abcdefghijklmnopqrstuvwxyz';
const   number='0123456789';
const   symbole='&#{([-|_@)]=<>+}*$!';

let allowedchar='';
let password='';

allowedchar += allowedUpper ? upperchar : '';
allowedchar += allowedLower ? lowerchar : '';
allowedchar += allowedNumber ? number : '';
allowedchar += allowedSymbole ? symbole : '';

if(lengthhh<=0){
    return("la longuer doit etre superieur à 0");
}
if (allowedchar.length === 0) {
    return('un type de caracters doit etre vraie');    
}

for (let i = 0; i < lengthhh; i++) {
    password += allowedchar[Math.floor(Math.random()*allowedchar.length)];

}

return(password);
}

const lengthh=12;
const allowedUpper=true;
const allowedLower=true;
const allowedNumber=true;
const allowedSymbole=true;


const passwordd=randomPassword(lengthh,
                              allowedUpper,
                              allowedLower,
                              allowedNumber,     
                              allowedSymbole);


console.log(`THE PASSWORD IS : ${passwordd}`);







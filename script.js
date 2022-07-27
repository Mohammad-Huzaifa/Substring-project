const sent= document.getElementById('sentence');
const char = document.getElementById('character');
const result = document.getElementById('displayResult');
const btn = document.getElementById('btn');

function showResult(){
    let getSent= sent.value;
    let pos= getSent.length;
    let getChar= char.value;

    if(getSent.includes(getChar)){
        let pos1= getSent.indexOf(getChar);
        let display = getSent.substr(pos1+1, pos);
        result.innerHTML+= display;
    } else{
        result.innerHTML+= "The letter does not exist in the sentence";
    }
}

btn.addEventListener('click', showResult);
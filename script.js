var randomWord = Math.floor(Math.random() * words.length);
var woord = words[randomWord].split('');
for (var i = 0; i < woord.length; i++) {
    woordLetter = document.createElement('p');
    woordLetter.id = i;
    woordLetter.style.display = "inline"
    woordLetter.innerText = i;
    letterSection.appendChild(woordLetter);
    userInput.placeholder = woord[0]
    document.getElementById('0').innerHTML = woord[0]
}
var counter = 0;
function check(){
    counter++;
    let userInput = document.getElementById('userInput').value;
    userInput = userInput.split('');
    for(i = 0; i < woord.length; i++){
        userInput.placeholder = woord[0] + "test"
        let outCome = document.getElementById(i);
        outCome.innerHTML = userInput[i]
        if(woord[i] == woord[i]){
            outCome.style.color = "Green"
        }else if (woord.includes(userInput[i])) {
            outCome.style.color = 'Orange'
        }else if (!outCome.includes(userInput[i])) {
            outCome.style.color = 'Grey'
        }
    }
}
var randomWord = Math.floor(Math.random() * words.length);
var woord = words[0].split('');
var copyWord;
for (var i = 0; i < woord.length; i++) {
    woordLetter = document.createElement('p');
    woordLetter.id = i;
    woordLetter.style.display = "inline"
    woordLetter.innerText = i;
    letterSection.appendChild(woordLetter);
    userInput.placeholder = woord[0]
    document.getElementById('0').innerHTML = woord[0]
}
function check(){  
    let userInput = document.getElementById('userInput').value; 
    userInput = userInput.split('');
    copyWord = words[0].split('');
    for (i = 0; i < woord.length; i++) {
        var outCome = document.getElementById(i);
        outCome.innerText = userInput[i]
        if (copyWord[i] === userInput[i]) {
            outCome.style.color = "Green"
            copyWord[i] = ''
        }
    }
    for (i = 0; i < woord.length; i++) {
        console.log(copyWord, userInput[i])
        if (copyWord.includes(userInput[i])) {
            console.log(woord.indexOf(userInput[i]))
            copyWord[woord.indexOf(userInput[i])] = ''
            outCome.style.color = "Orange"
            
        }
    }
}
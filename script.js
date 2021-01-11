var randomWord = Math.floor(Math.random() * words.length);
var woord = words[randomWord].split('');

var woordCopy = words[randomWord].split('');
for (var i = 0; i < woord.length; i++) {
    containerDiv = document.createElement('div')
    woordLetter = document.createElement('p');
    woordLetter.id = i;
    woordLetter.style.display = "inline"
    woordLetter.innerText = i+1;
    containerDiv.appendChild(woordLetter);
    userInput.placeholder = woord[0]
    document.getElementById("0").innerText = woord[0];
    document.getElementById("0").style.color = "green";
}
var counter = 0;
function check(){
    counter++;
    let userInput = document.getElementById('userInput').value;
    userInput = userInput.split('');
    for(i = 0; i < woord.length; i++){
        let outCome = document.getElementById(i);
        outCome.innerHTML = userInput[i]
        if(woordCopy[i] == woord[i]){
            outCome.style.color = "Green"
        }else if (woordCopy.includes(userInput[i])) {
            outCome.style.color = 'Orange'
        }else if (!woordCopy.includes(userInput[i])) {
            outCome.style.color = 'Grey'
        }
    }
}
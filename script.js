var randomWord = words[Math.floor(Math.random() * words.length)];
var word = [...words[0].split('')];
var storageWord = [... words[0].split('')];
var guess = 0;

function lingo(){
    // Maak boxes aan om letters in te stoppen.
    var list = document.createElement("ul");
    list.id = "guess " + guess
    document.getElementById('wordlist').appendChild(list)
    for (i=0;i<5;i++){
        var item = document.createElement("li");
        item.id = i
        document.getElementById("guess " + guess).appendChild(item)
    }
    guess++

    //Lingo logica. 
    var inputWord = document.getElementById("inputWord").value;
    inputWord = inputWord.split("")
    for(let i = 0; i <word.length; i++){
        document.getElementById(i).innerHTML = inputWord[i];
        document.getElementById(i).style.backgroundColor = "white"
        if (storageWord[i] === inputWord[i]) {
            document.getElementById(i).style.backgroundColor = "Green"
            storageWord[i] = ''
        }
    }
    for (i = 0; i < storageWord.length; i++) {
        if (storageWord.includes(inputWord[i])) {
            document.getElementById(i).style.backgroundColor = "Orange"
            storageWord[word.indexOf(inputWord[i])] = ''
        }
    }
    for (i=0;i<5;i++){
        document.getElementById(i).id = ""
    }
    storageWord = [...word]
}






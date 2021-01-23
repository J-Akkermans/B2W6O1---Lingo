var randomWord = words[Math.floor(Math.random() * words.length)];
console.log(randomWord)
var word = [...randomWord.split('')];
var storageWord = [...randomWord.split('')];
var guess = 0;
var counter = 0;
// Maak boxes aan om letters in te stoppen.
addBoxes()
function addBoxes() {
    counter++
    var list = document.createElement("ul");
    list.id = "guess " + guess
    document.getElementById('wordlist').appendChild(list)
    for (i = 0; i < 5; i++) {
        var item = document.createElement("li");
        item.id = "letter" + i
        document.getElementById("guess " + guess).appendChild(item)
    }
    document.getElementById(`letter${0}`).innerHTML = word[0]
    document.getElementById(`letter${0}`).color = "green"
    guess++
}
function lingo() {
    //Lingo logica. 
    var inputWord = document.getElementById("inputWord").value;
    inputWord = inputWord.split("")
    for (let i = 0; i < word.length; i++) {
        document.getElementById(`letter${i}`).innerHTML = inputWord[i];
        document.getElementById(`letter${i}`).style.backgroundColor = "white"
        if (storageWord[i] === inputWord[i]) {
            document.getElementById(`letter${i}`).style.backgroundColor = "Green"
            storageWord[i] = ''
        }
    }
    if (storageWord.every(element => element === '')){
        var win = true;
        setTimeout(function(){
            alert("won");
            location.reload();},3000)
    }
    for (i = 0; i < storageWord.length; i++) {
        if (storageWord.includes(inputWord[i])) {
            document.getElementById(`letter${i}`).style.backgroundColor = "Orange"
            storageWord[word.indexOf(inputWord[i])] = ''
        }
    }
    for (i = 0; i < 5; i++) {
        document.getElementById(`letter${i}`).id = ""

    }
    if(win != true && counter != 6){
        storageWord = [...word]
        addBoxes()
    }
    if(counter == 6){
        setTimeout(function(){
            alert(`${word} Was het correcte woord volgende keer beter `);
            location.reload();},3000)
    }
    }


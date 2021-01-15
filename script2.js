    for (i = 0; i < wordSplit.length; i++) {
        colors[i] = 0;
        if (wordCopy[i] === inputArray[i]) {
            colors[i] = 2;
            wordCopy[i] = ''
            goodArray[i] = true;
        }
    }
    for (i = 0; i < wordSplit.length; i++) {
        if (wordCopy.includes(inputArray[i])) {
            wordCopy[wordSplit.indexOf(inputArray[i])] = ''
            colors[i] = 1;
        }
    }
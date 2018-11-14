const reverseString = function(word) {
    let splitWord = word.split('')
    let reversedWord = []

    for (let i = word.length-1; i >= 0; i--) {
        reversedWord.push(splitWord[i])
    }

    return(reversedWord.join(''))

}

module.exports = reverseString

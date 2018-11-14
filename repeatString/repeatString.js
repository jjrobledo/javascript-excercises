const repeatString = function(word, numtimes) {
    let string = ''

    if (numtimes < 0) {
        return('ERROR')
    } else {
        for (i = 0; i < numtimes; i++) {
            string += word}
        }
    return(string)
}

module.exports = repeatString

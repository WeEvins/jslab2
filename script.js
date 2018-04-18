let friends = ['Juleca', 'Marinette', 'Alya', 'Mylene', 'Rose']

for (let f = 0; f < friends.length; f++) {
    for (let i = 99; i >= 1; i--) {
        let currentPlural = (i > 1) ? 'lines' : 'line'
        let nextPlural = (i === 2) ? 'line' : 'lines'
        
        console.log(`${i} ${currentPlural} of code in the file, ${i} ${currentPlural} of code; ${friends[f]} strikes one out, clears it all out. ${i-1} ${nextPlural} of code on the wall`)
    }
}

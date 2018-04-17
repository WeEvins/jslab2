let friends = ['Juleca', 'Marinette', 'Alya', 'Mylene', 'Rose']

for (let f = 0; f < friends.length; f++) {
    for (let i = 99; i >= 1; i--) {
        console.log(`${i} lines of code in the file, ${i} lines of code; ${friends[f]} strikes one out, clears it all out. ${i-1} lines of code on the wall`)
    }
}
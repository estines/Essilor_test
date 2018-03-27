let n = 8, m = 8

for (row = 1; row <= n; row++) {
    let temp = ''
    for (col = 1; col <= m; col++) {
        if (col % 2 === 0) {
            if( row % 2 === 0 ) {
                temp += '#'
            } else {
                temp += ' '
            }
        } else {
            if (row % 2 === 0) {
                temp += ' '
            } else {
                temp += '#'
            }
        }
    }
    console.log(temp)
}
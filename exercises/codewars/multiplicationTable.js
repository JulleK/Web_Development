function multiplicationTable(size) {
    const table = []
    // first loop for columns
    for (let i = 1; i <= size; i++) {
        // second loop for rows
        const row = []
        for (let j = 1; j <= size; j++) {
            row.push(j * i)
        }
        // add created row to table
        table.push(row)
    }
    return table
}

console.log(multiplicationTable(5))
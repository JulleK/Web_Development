const fs = require('fs')

const getDummyData = async () => {
    const res = await fetch("https://dummyjson.com/comments")
    let data = await res.json()
    data = JSON.stringify(data)
    saveToFile(data)
}

const saveToFile = (data) => {
    fs.writeFile("data.json", data, err => {
        if (err)
            console.log(err);
        else
            console.log("File written successfully\n");
    })
}

getDummyData()


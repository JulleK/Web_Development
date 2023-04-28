// wczytanie pliku z pytaniami i modułu file system
const fs = require('fs')
var data = require('./pytania.json')

// losowy index pytania
let index = Math.floor(Math.random() * data.pytania.length)
console.log(data.pytania[index])

// wylosowane pytanie jest usuwane z listy dostępnych
data.pytania.splice(index, 1)
console.log(data.pytania)

// zapisanie możliwych pytań do pliku
const jsonData = JSON.stringify(data);
fs.writeFile("pytania.json", jsonData, function (err) {
    if (err) {
        console.log(err);
    }
});

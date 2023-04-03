const data = require('./data.json')

const replacePatternWith = (regex, newPattern) => {
    let text = "";
    for (let i of data.comments) {
        text += i.body + "\n"
    }

    // const matches = text.match(oldPasttern)
    // console.log(matches)

    modifiedText = text.replace(regex, newPattern)
    console.log(modifiedText)
}
const regex = /e+r/g
replacePatternWith(regex, "BOBBY")
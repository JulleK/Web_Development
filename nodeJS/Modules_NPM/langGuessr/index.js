import { franc } from 'franc'
import langs from 'langs'
import colors from 'colors'

const input = process.argv[2]
const langCode = franc(input)
const errMsg = "Could not match a language. Please try again with a larger sample".red

try {
    if (langCode === "und") {
        console.log(errMsg)
    } else {
        const language = langs.where("3", langCode).name.cyan
        console.log(language)
    }
} catch (err) {
    console.log(errMsg)
}

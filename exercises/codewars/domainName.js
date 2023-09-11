function domainName(url) {
    // remove these from url
    const removePatterns = [
        'http://',
        'https://',
        'www.'
    ]
    for (let pattern of removePatterns) {
        url = url.replace(pattern, '')
    }

    // remove slashes github.com/removeThis
    const slashIndex = url.indexOf('/')
    if (slashIndex !== -1)
        url = url.substring(0, slashIndex)

    // remove everything after . like .com
    const dotIndex = url.indexOf('.')
    url = url.substring(0, dotIndex)


    return url
}
console.log(
    domainName("http://google.com")
)

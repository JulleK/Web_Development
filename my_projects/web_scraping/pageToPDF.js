const puppeteer = require('puppeteer');
async function savePageAsPDF(pageUrl, saveFileName = 'page') {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(pageUrl);

    await page.pdf({ path: saveFileName + '.pdf', format: 'A4' });

    await browser.close();
}

let pageUrl = `
https://en.wikipedia.org/wiki/2012_German_Grand_Prix
`

savePageAsPDF(pageUrl, 'germany2012')
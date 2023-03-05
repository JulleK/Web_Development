const fs = require('fs');
const folderName = process.argv[2] || 'Project';
const htmlContent = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>Document</title>
  </head>
  <body>
    <script src="app.js"></script>
  </body>
</html>
`;


try {
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/index.html`, htmlContent);
    fs.writeFileSync(`${folderName}/app.js`, "");
    fs.writeFileSync(`${folderName}/style.css`, "");
}
catch (e) {
    console.log("SOMETHING WENT WRONG!!!");
    console.log(e);
}
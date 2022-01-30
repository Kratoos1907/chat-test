const fs = require('fs');
const dirName = process.argv[process.argv.length - 1];
const fileName = dirName[0].toLowerCase() + dirName.substring(1);

const tsxContent =
  `
import './${fileName}.css'
import React from 'react'
export default function ${dirName}() {
  return (
    <div className="${fileName}">
        
    </div>
  )
}
`
if (!fs.existsSync(dirName)) {
  fs.mkdirSync(dirName);

  fs.appendFile(`./${dirName + '/' + fileName}.js`, tsxContent, function (err, data) { });
  fs.appendFile(`./${dirName + '/' + fileName}.css`, '', function (err, data) { });

} else {
  console.log('This folder already');
}
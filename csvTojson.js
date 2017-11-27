/** csv file
*/
const fs = require('fs')
const path = require('path')
const uuidv1 = require('uuid/v1')
const csvFilePath='C:\\Users\\0014367\\Downloads\\customer-data.csv'
const csv=require('csvtojson')
const folderName = uuidv1()
let tmp = [];
fs.mkdirSync(folderName)
csv()
.fromFile(csvFilePath)
.on('json',(jsonObj)=>{
    const content = JSON.stringify(jsonObj);
    tmp.push(content);
})
.on('done',(error)=>{
    let str = '[' + tmp.join(',') + ']';
    fs.writeFile(folderName+"/csvtojson.json", str, 'utf8', function (err) {
        if (err) {
            return console.log(err);
        }
    });
    console.log("The file was saved!");
})
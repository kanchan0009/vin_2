const fs = require('fs');
const path = require('path');

function walkSync(currentDirPath, callback) {
    fs.readdirSync(currentDirPath).forEach(function (name) {
        var filePath = path.join(currentDirPath, name);
        var stat = fs.statSync(filePath);
        if (stat.isFile()) {
            callback(filePath, stat);
        } else if (stat.isDirectory()) {
            walkSync(filePath, callback);
        }
    });
}

let count = 0;
walkSync('d:\\vin_2\\app\\program', function(filePath) {
    if (filePath.endsWith('.tsx')) {
        let content = fs.readFileSync(filePath, 'utf8');
        if (content.includes('href="#"')) {
            content = content.replace(/href="#"/g, 'href="/media/downloads"');
            fs.writeFileSync(filePath, content);
            console.log('Updated', filePath);
            count++;
        }
    }
});

console.log('Total files updated:', count);

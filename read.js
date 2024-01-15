module.exports=(path)=>{
    const fs = require('fs');
    return fs.readFileSync(path + '.html', {encoding:'utf-8'});
}
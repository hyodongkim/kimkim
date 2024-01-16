module.exports=(view,params)=>{
    let result = require('fs').readFileSync("view"+view+".html",{encoding:"utf8"});

    let eachToken =/\$\{for:(.*):(.*)\}/;
    let each = result.match(eachToken);

    for(let key in params){
        result = result.replace("${" + key + "}", params[key]);
    }
    return result;
}
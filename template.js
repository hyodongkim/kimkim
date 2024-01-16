module.exports = (path, parameter)=>{
    let body = require('./read')(path);
    let title = require('./read')(path);
    for(let key in parameter){
        body= body.replace('${' + key + '}',
        parameter[key]);

    }

    for(let key in parameter){
        title= title.replace('${' + key + '}',
        parameter[key]);

    }
    return body,title;
};
module.exports = (path, parameter)=>{
    let body = require('./read')(path);
    for(let key in parameter){
        body= body.replace('${' + key + '}',
        parameter[key]);

    }
    return body;
};
module.exports=()=>{
    let express = require('express');
    const app = express({
    xPoweredBy:false,
    strict:false,
    caseSensitive:false,
    caseSensitiveRouting:false
    });

    return app;
}
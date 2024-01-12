module.exports=()=>{
    // let express = require('express');
    // const app = express({
    // xPoweredBy:false,
    // strict:false,
    // caseSensitive:false,
    // caseSensitiveRouting:false
    // });


    const app = require('./config/server')();
    require('./showUser')(app);
    require('./showUser/Bye')(app);
    app.get('/app',(req,res,next)=>{
        app.route('/app')
        .get((req,res,next)=>{
            
        })
        .post((req,res,next)=>{

        })
    });

    app.listen(3000,"",500,()=>{
        console.log("Server Open222222!");
    });
};
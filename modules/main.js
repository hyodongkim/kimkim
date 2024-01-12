module.exports=()=>{
    // let express = require('express');
    // const app = express({
    // xPoweredBy:false,
    // strict:false,
    // caseSensitive:false,
    // caseSensitiveRouting:false
    // });

    const app = require('express')({xPoweredBy:false});

    // const app = require('./config/server')();
    require('./showUser')(app);
    require('./showUser/Bye')(app);
    app.get('/app',(req,res,next)=>{
        app.route('/app')
        .get((req,res,next)=>{
            
        })
        .post((req,res,next)=>{

        })
    });

    app.use('/api', (req,res,next)=>{
        req.api ="API 작업";
    });


    app.get('/api/user', (req,res,next)=>{
    //    res.send(req.api+"응답");

        res.send((req.api || "") + "app 응답");
    });

    
    app.get('/api/host', (req,res,next)=>{
        res.send("응답");
    });

    app.use('/',(req,res,next)=>{
        next();
    });

    
    app.get('/api',(req,res,next)=>{
        next();
    });

    app.get('/api',(req,res,next)=>{
        next();
    });

    app.listen(3000,"",500,()=>{
        console.log("Server Open222222!");
    });
};
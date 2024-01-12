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
    require('./app')('/app',app);
    // require('./app/user')('/app/user',app);



    // app.get('/app',(req,res,next)=>{
    //     app.route('/app')
    //     .get((req,res,next)=>{
            
    //     })
    //     .post((req,res,next)=>{

    //     })
    // });

    app.use('/api', (req,res,next)=>{
        req.api =true;
        next();
    });


    // app.get('/api/user', (req,res,next)=>{
    // //    res.send(req.api+"응답");

    //     res.send((req.api || "") + "app 응답");
    // });

    
    // app.get('/api/host', (req,res,next)=>{
    //     res.send("응답");
    // });

    app.use('/',(req,res,next)=>{
        req.user = "User";
        next();
    });

    
    app.get('/api/user',(req,res,next)=>{
        res.send(req.user + req.api + "응답")
    });

    app.get('/api/host',(req,res,next)=>{
        res.send(req.user + req.api + "호스트")
    });
    app.get('/api/jj',(req,res,next)=>{
        res.send(`<b>ㅋㅋㅋㅋㅋ<b>`)
    });
    // require('.'+path +'/user')(path+'/user',app);
    // require('.'+path +'/host')(path+'/host',app);

    app.listen(3000,"",500,()=>{
        console.log("Server Open222222!");
    });
};
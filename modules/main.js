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


    require('./views/showAnime')('/views/showAnime',app);

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

    app.get('/:num',(req,res,next)=>{
        req.params.num;
        res.send(req.params.num);
    });







    app.get('/:data',(req,res,next)=>{
        res.send(req.datas);
    });
    app.get('/sub/:data',(req,res,next)=>{
        res.send(req.datas);
    });
    app.get('/group/:data',(req,res,next)=>{
        res.send(req.datas);
    });


    app.param('data', (req,res,next,value)=>{
        req.datas ={
            original :value,
            double : value * 2
        };
        next();
    });






    app.param('number', (req,res,next,value)=>{
        value = value *2;
        next();
    });


    app.get('/user/:id/:number',(req,res,next)=>{
        let ids ="";
        let i = 0;
        while(i < req.params.number){
            ids = ids + req.params.id;
            i +=1;

        }
        res.send(ids);
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






    app.param('nb',(req,res,next,value)=>{
        try{
        value =parseInt(value);
        if(value ===1)req.user ={id :"ddd",pwd:"1234"};
        else if(value ===2)req.user ={id :"ddd2",pwd:"12345"};
        }
        catch(e){}
        next();
    });

    app.get('user/:nb',(req,res,next)=>{
        res.sned(req.user);
    });








    app.listen(3000,"",500,()=>{
        console.log("Server Open222222!");
    });
};
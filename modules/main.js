module.exports=()=>{
    // let express = require('express');
    // const app = express({
    // xPoweredBy:false,
    // strict:false,
    // caseSensitive:false,
    // caseSensitiveRouting:false
    // });

    const app = require('express')({xPoweredBy:false});

    const bp = require('body-parser');



    
    app.use(bp.urlencoded());                                            
    const template = require('../template.js');

    const reader = require('../read');
    app.get('/:path',(req,res,next)=>{
        res.send(template(req.params.path, {title:"index제목",body:"index 내용"}));
        // res.send(template(req.params.path, {title:"index제목",body:"index 내용"}));
    });


   ///// 얘 동작하려면 listen 빼고 위에꺼 빼고 다 주석처리 해야함!(app bp 도 살려놔야함)








//     // const app = require('./config/server')();
//     require('./showUser')(app);
//     require('./showUser/Bye')(app);
//     require('./app')('/app',app);
//     // require('./app/user')('/app/user',app);


//     require('./views/showAnime')('/views/showAnime',app);

//     // app.get('/app',(req,res,next)=>{
//     //     app.route('/app')
//     //     .get((req,res,next)=>{
            
//     //     })
//     //     .post((req,res,next)=>{

//     //     })
//     // });

//     app.use('/api', (req,res,next)=>{
//         req.api =true;
//         next();
//     });

    
//     // app.get('/api/host', (req,res,next)=>{
//     //     res.send("응답");
//     // });






//     // app.get('/:data',(req,res,next)=>{
//     //     res.send(req.datas);
//     // });
//     // app.get('/sub/:data',(req,res,next)=>{
//     //     res.send(req.datas);
//     // });
//     // app.get('/group/:data',(req,res,next)=>{
//     //     res.send(req.datas);
//     // });


//     // app.param('data', (req,res,next,value)=>{
//     //     req.datas ={
//     //         original :value,
//     //         double : value * 2
//     //     };
//     //     next();
//     // });


// ////////////////////////////////////////////////////////// 위에 주석한거 풀면 잘 작동됨!



//     app.param('number', (req,res,next,value)=>{
//         value = value *2;
//         next();
//     });


//     app.get('/user/:id/:number',(req,res,next)=>{
//         let ids ="";
//         let i = 0;
//         while(i < req.params.number){
//             ids = ids + req.params.id;
//             i +=1;

//         }
//         res.send(ids);
//     });

    





//     app.get('/api/user',(req,res,next)=>{
//         res.send(req.user + req.api + "응답")
//     });

//     app.get('/api/host',(req,res,next)=>{
//         res.send(req.user + req.api + "호스트")
//     });
//     app.get('/api/jj',(req,res,next)=>{
//         res.send(`<b>ㅋㅋㅋㅋㅋ<b>`)
//     });
//     // require('.'+path +'/user')(path+'/user',app);
//     // require('.'+path +'/host')(path+'/host',app);






//     app.param('nb',(req,res,next,value)=>{
//         try{
//         value =parseInt(value);
//         if(value ===1)req.user ={id :"ddd",pwd:"1234"};
//         else if(value ===2)req.user ={id :"ddd2",pwd:"12345"};
//         }
//         catch(e){}
//         next();
//     });

//     app.get('/user/:nb',(req,res,next)=>{
//         res.send(req.user);
//     });









//     function queryParam(id,action){
//         return (req,res,next)=>{
//             try{
//                 if(!req.query) throw new Error();
//                 if(!req.query[id]) throw new Error();
//                 req.query[id] = action(req,res,req.query[id]);
//             }
//             catch(e){};
//             next();

//         };
//     }




//     // app.get('/aaa',(req,res,next)=>{
//     // try{
//     //     if(!req.query) throw new Error();
//     //     if(!req.query.id) throw new Error();
//     //     let id = parseInt(req.query.id);
//     //     if(id ===1 ) req.query.user = {id:id, pwd:"1234"};
//     //     else if(id ===2) req.query.user = {id:id, pwd:"12345"};
//     //     else if(id ===3) req.query.user = {id:id, pwd:"123456"};
        
//     // }catch(e){}

//     // });

//     app.use('/aaa',queryParam("id",(req,res,value)=>{
//         try{
//             let id = parseInt(value);
//             if(id === 1) return {userId : id, userPwd:"1234"};
//             if(id === 2) return {userId : id, userPwd:"12345"};
//             if(id === 3) return {userId : id, userPwd:"123456"};
//         }catch(e){}
//         return value;
//     }));

//     app.get('/aaa',(req,res,next)=>{
//         res.send(req.query); 
//     });
//     app.get('/b',(req,res,next)=>{
//         res.send(req.query); 
//     });




    app.listen(3000,"",500,()=>{
        console.log("Server Open222222!");
    });
};
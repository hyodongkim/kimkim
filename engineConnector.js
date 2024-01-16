module.exports = (express,app)=>{
    const engine = require("./engine");

    app.use('/',(req,res,next)=>{
        req.parameter = {...req.query,...req.body};
        next();
    });
    app.param('path',(req,res,next,value)=>{
        req.parameter ={...req.params,...req.parameter,path:value};
        next();
    });

    app.get('/:path',(req,res,next)=>{
        res.send(engine("/"+req.parameter.path,req.parameter));
    });

    app.post('/:path',(req,res,next)=>{
        res.send(engine("/"+req.parameter.path,req.parameter));
    })
}
module.exports = (path, app)=>{

    app.use(path,(req,res,next)=>{
        req.parent = "app";
        console.log("미들웨어 /api 통과");
        next();
    });

    require('.' + path + '/user')(path + '/user', app); // end point
    require('.' + path + '/host')(path + '/host', app); // end point
};
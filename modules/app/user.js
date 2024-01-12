module.exports = (path,app)=>{
    app.get(path,(req,res,next)=>{

    res.send('user다');
    });
};
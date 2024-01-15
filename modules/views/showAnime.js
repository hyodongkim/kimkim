module.exports = (path,app)=>{
    app.use(path,(req,res,next)=>{

    res.send('showAnime!!');
    });
};
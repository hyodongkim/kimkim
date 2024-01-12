module.exports = (app)=>{
    app.get('/showUser',(req,res,next)=>{

    res.send('Hello User!');
    });
};
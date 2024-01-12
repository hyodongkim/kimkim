module.exports = (app)=>{
    app.get('/showUser/Bye',(req,res,next)=>{

    res.send('Goodbye User!');
    });
};
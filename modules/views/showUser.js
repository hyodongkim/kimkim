module.exports = (app)=>{
    app.get('/showUser',(req,res,next)=>{

    // res.send('showUser');

    res.send(
        require(`../htmlSource/default`)(
        "showUser site"
        `<div>조선</div>`
        )
    );
    });
};
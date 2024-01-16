module.exports=(express, app)=>{

    app.use('/',express.urlencoded({extended:true}));
    app.use('/',express.json());
    app.use('/',express.raw());
    app.use('/',express.text());
    const resourceFunc = express.static('resources',{
        dotfiles:"ignore",
        extensions:["css","js","jpg","webp"],
        fallthrough: true,
        immutable:false,
        maxAge:18000000,
        index:false,
        redirect:false,
        // etag:false,
        // lastModified:false,
        // setHeaders:{}
    });
    app.use('/resource',resourceFunc);
    app.use('/resources',resourceFunc);
};
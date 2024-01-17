const express = require('express');
const app = express({xPoweredBy:false});
const fs = require('fs');
const cookie = require('cookie-parser');

app.set('express', express);
app.set('fs', fs);
// app.get('fs');

app.use(cookie("Hello My Cookie Secret"));
app.use(express.json());
app.use(express.raw());
app.use(express.text());
app.use(express.urlencoded({extended:true}));
app.use('/resources', express.static('resources', {
    dotfiles:"ignore",
    extensions:[],
    fallthrough:true,
    immutable:false,
    maxAge:18000000,
    index:false,
    redirect:false,
}));

app.use((req,res,next)=>{
    res.cookieWrap = (key, value, timer)=>{
        res.cookie(key, value, {
            domain:req.domain,
            maxAge:60000 * timer,
            httpOnly:true,
            secure:false,
            signed:true
        });
    };
    next();
});

app.get('/image/:filename', (req,res,next)=>{
    res.sendFile(`${__dirname}\\${req.params.filename}`);
});
app.get('/download/:filename', (req,res,next)=>{
    res.download(`${__dirname}\\${req.params.filename}`, `${req.params.filename}`);
});

app.get('/', (req,res,next)=>{
    res.send(`
    <!DOCTYPE html>
    <html>
        <head></head>
        <body>
            <a href="/download/르세라핌.webp">
                <img src="/image/르세라핌.webp">
            </a>
        </body>
    </html>
    `);
});

// app.get('/', (req,res,next)=>{
//     // request
//     //      app => application 객체
//     //      res => response 객체
//     //      originalUrl => 전체 경로
//     //      baseUrl => 라우터 경로
//     //      body => urlencoded, raw 정보
//     //      cookies => 쿠키 내용
//     //      sigenedCookies => 서명된 쿠키
//     //      host, hostname, subdomains => 웹사이트 경로
//     //      ip, ips => 아이피
//     //      method => http 형태
//     //      params => path param
//     //      query => query param
//     //      protocol, route
//     //      secure
//     //      fresh(최신 상태 여부), stale(최신 아닌 여부)
//     //      xhr => 헤더 여부
//     //      Ajax(XMLHttpRequest)
//     //      fetch, $ajax()
//     //      get(name), is(type)

//     // response
//     //      app - application
//     //      req - request
//     //      headersSent
//     //      append(key, value) - 헤더 추가 전용
//     //      set(key, value) - 헤더 추가 및 수정
//     //      links({key:link}) - 헤더에 링크 정보를 추가
//     //      location(path) - 헤더 추가
//     //      get(key) - 헤더 획득
//     //      cookie(cookie) - 쿠키 추가
//     //      clearCookie(key, options) - 쿠키 제거
//     // res.cookieWrap("Key", "밸류", 5);
//     // res.format();
//     // res.end();
//     // res.send();
//     // res.send(`${res.headersSent}`);

//     // res.download("./package.json", "What.json",(err)=>{});
//     // res.sendFile("/package.json",(err)=>{});
//     // res.json({a:2,b:5});
//     // res.redirect("/good");

//     // res.locals.value = "볼수 없어요";
//     // res.render("볼수 없어요");
// });

app.listen(3000);
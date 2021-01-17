const express = require('express'); // 설치한 패키지 불러오기
const path = require('path'); // 경로 설정을 정확하게 하기 위하여 path 내장 모듈 사용
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

const app = express(); // 익스프레스 app에 담기
 
app.set('port', process.env.PORT || 3000); // 서버에 port라는 속성을 3000으로 설정

app.use(morgan('dev')); // 클라이언트가 요청하는 것에 대한 정보를 알 수 있음
app.use(cookieParser()); // 쿠키를 알아서 객체로{ mycookie: 'test' } 자동으로 바꿔줌
// req.cookies 

app.use(express.json());   // 이 두개를 사용하면 아래 get 미들웨어에서 req.body.name으로 쉽게 가져올 수 있음.
app.use(express.urlencoded({extended: true})); // true면 qs, false면 querystring
app.use('/', express.static(path.join(__dirname, 'AA'))); // AA라는 폴더에 있는 파일들을 /파일명으로 실행시킴/ 보안에 좋음


app.use((req, res, next) => { // app.use에 use는 미들웨어로 클라이언트에서 서버로 요청할 때마다 모든 코드에서 실행되도록 함.
    console.log('모든 요청에 실행하고싶어요.'); 
    next(); // next처리를 해줘야 다음으로 넘어감 (다음 미들웨어로 넘어간다는 뜻)
//} , (req, res) => { // 에러 처리를 확인해보기 위해서 함.
   // throw new Error('에러가 났어요');
})


app.get('/',(req, res) => { // get요청을 /로 받았을 때 응답을 아래와 같이 하기
    //req.cookies
    /* res.cookie('name', encodeURIComponent(name), { // 쿠키 만들기
        expires: new Date(),
        httpOnly: true,
        path: '/',
    })
    res.clearCookie('name', encodeURIComponent(name),{ // 쿠키 지우기
        httpOnly: true,
        path: '/',
    })
    */

    res.sendFile(path.join(__dirname,'index.html')); // 현재 디렉터리에 index.html 추가하기
    // res.send('안녕하세요');  한 라우터에서 여러개를 입력할 경우 에러가남.
    // res.json({hello:'changhyeon'});ㄷ
    
})


app.get('/admin',(req,res) => { // get, post 주소 방식은 라우터라고도 부름
    res.send('hello');
})

app.use((err, req, res, next) => {  // err는 매개변수 4개 다써줘야함.(꼭 next까지)
    console.error(err);
    res.status(200).send('에러났지롱. 근데 안알려주지롱.'); // 200으로 정상적인 코드로 보낼 수 있음
})

app.listen(app.get('port'),() => { // app 동작시 포트 설정 및 콜백함수 설정
    console.log('익스프레스 서버 실행');
});
 

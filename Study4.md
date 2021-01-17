## Node.js 4일차

#### get 요청시 res 메서드

- res.sendFile('파일명'); (주로 웹서버에서 사용됨)
- res.json({hello : 'changhyeon'}); (주로 API서버에서 사용됨)
- res.render(); (똑같이 응답을 보내는거임)



#### next()

- 다음 미들웨어로 넘어감.
- 인수가 없을 때만 다음 미들웨어로 넘어가고 인수에 에러가 있을 땐 바로 에러처리 미들웨어로 넘어감
- next('route'); 일때 같은 라우터 안에있는 다른 미들웨어가 실행되는게 아니라 바로 다음 라우터부터 찾음.

#### morgan

- 클라이언트가 요청하는 것에 대한 정보를 알 수 있음
- 개발시엔 morgan('dev'), 배포시 morgan('combined'); combined(ip뿐만아니라 자세하게알려줌)



#### cookieParser

- cookieParser를 사용하면 cookie를 웹모듈을 사용했을 때보다 더 편리하게 사용할 수 있다.



#### bodyParser

- express.json()는 json형식을 파싱해주고
- express.urlencoded({extended:true})); 는 form태그로 보낸 것을 파싱해줌



#### Static 미들웨어

- 파일 경로에 대한 부분으로 보안에 좋음
- Static을 쓸때는 morgan 다음으로 사용하는게 좋다.(효율적으로 사용해야함)


## 느낀점
점점 난이도가 높아져 이해하지 못하는 부분이 하나씩 생기고 있다. 성급하지않게 조절하여 제대로 알고가도록 해야겠다.
React와 Vue도 조금씩 보고있는데 다 갖춰져있는 Vue가 더 빠르게 배울 수 있을 것 같은데 고민해보아야겠다!
오늘 비록 많이는 못했지만 유튜브에 있는 영상들을 보며 좀 더 학습해야겠다 :)



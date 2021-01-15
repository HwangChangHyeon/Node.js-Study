## Node.js 2일차
[책 Node.js교과서 및 저자 조현영님의 강의를 들으며 작성 정리한 내용입니다]

### 1. REPL(Read Evaluate Print Loop)

입력한 값을 바로 사용할 수 있음.

Mac터미널/WindowCmd에서 사용할 수 있으나 한줄 출력 방식으로 간단한거 아니면 IDE를 사용하는게 좋음.

### 2. 모듈

특정한 기능을 하는 함수나 변수들의 집합

모듈로 만들면 여러 프로그램에서 재사용 가능함.

### 3. 노드 내장객체
#### global
- 브라우저의 window같은 역할

- 모든 파일에서 접근 가능

- global 생략하고 함수만 바로 사용가능하다.(console, require도 global의 속성임)

#### console
- 말그대로 터미널 즉, 콘솔에 띄우는 명령어

- time, timeEnd, error, log, dir, trace 등의 객체가 있다

#### set 메서드
- setTimeout, setInterval, setImmediate가 있음

- setImmediate로 함수를 바로 실행시킬 수 있음.

#### clear 매서드
- clearTimeout, clearInterval, clearImmediate가 있음

#### exports
- exports.odd = odd; 형태와 module.exports = {}; 는 같이 쓸 수 없다. module.exports = {} 가 우선시됨

#### this
- 함수안의 this는 global과 같다.

#### require 심화
- require를 console.log로 찍어내면 여러가지 정보를 볼 수 있다.

- 캐시는 하드디스크에서 읽어오는 작업을 메모리에서 읽어와 데이터 읽는 속도를 단축시키는 것을 말한다.

- 서버를 껐다 키지않아도 캐시를 이용하여 코드를 업데이트 시키는 방법도 있긴하지만 위험하다

#### 순환참조
- js 파일이 두개 있으면 서로 파일을 참조하는 방법

- 서로 계속 require 할 수 있어서 빈 객체로 바꿔버림(node가 바꿔줌)

#### process
- 현재 실행중인 노드 프로세스에 대한 정보를 담고 있음

 ##### - Process.env
- 시스템 환경 변수들이 들어있는 객체

 ##### - process.nextTick(콜백)
- 이벤트 루프가 다른 콜백 함수들보다 nextTick의 콜백 함수를 우선적으로 처리함

 ##### - process.exit(코드)
- 0이면 정상종료 시키고 0이외 다른 숫자는 에러다 

### 4. 노드 내장 모듈

#### OS
- 운영체제의 정보를 담고 있음

- 내장 모듈이라 경로 대신 이름만 적어주면 사용가능하다.

- require('os');

#### path
- 실무에서 어느정도 사용함

- require('path');

- 파일 경로 처리할 때 ₩ 같은것도 자동으로 처리해줌

### 느낀점
하다보니 자바스크립트의 문법이 많이 익숙치 않은 부분들이 있었다.
나와있는 이론적인 내용들은 어느정도 이해가 가서 넘어갈 수 있었지만
코드로 되어있는 부분이 생각보다 이해가 가지 않는 부분이 많아서
자바스크립트에 좀 더 신경써서 공부해야겠다.

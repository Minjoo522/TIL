# Authentication

- [OWASP(Open Web Application Security Project)](https://owasp.org/)
- 인증, 로그인

## Session & Cookie

1.  로그인
2.  server : 유효한지 확인
3.  유효하면 : create session(userId, sessionId, expiration) & Session database에 저장
4.  client에게 session관련 정보 저장(Cookie, HTTP Only(옵션 지정시 브랑우저에서만 확인 가능))
5.  client가 server에 다른 요청시 : cookie의 정보를 자동으로 브라우저에서 포함해줌
6.  server => check session id : 유효한지 확인!

### 장점

- 신뢰할 수 있는 데이터
- 간단하게 구현할 수 있음
- HTTP Only 옵션 사용, 사용자와 관련된 다른 정보들을 주고받지 않기 때문에 안전하다

### 단점

- Stateful : 한 서버에 세션을 보관하기 때문에 다양한 서버들이 이 서버에 접근해서 네트워크 요청을 해야 함 ➡️ 시간이 많이 소요됨

## JWT

- JSON Web Token 2010
- Header(사용하는 알고리즘, 타입), Payload(주고받고싶은 데이터), Signature(인코딩한 Header, Payload, 인코딩을 위해 사용하는 secret key와 함께 인코딩 / payload의 데이터가 변경되었는지 확인 가능) 부분으로 나누어져 있음

1. 로그인
2. 유효한 사용자인 경우 : Create JWT
3. 사용자에게 전송
4. client가 server에 다른 요청시 헤더에 JWT를 포함해서 보내면(Headers: Authorization : Bearer JWT)
5. server 전달받은 JWT가 유효한지 등 확인해서 데이터 client에 보내줌

### 장점

- No State : 서버를 확장하거나 마이크로 서비스를 만들어도 동일한 시크릿 키만 가지고 있으면 됨

### 단점

- server와 client 간에 JWT를 주고받음(영원히 만료되지 않는 JWT라면 악용 가능)

## bcrypt

- 패스워드를 안전하게 보관하는 방법
- 단방향 암호화
- password-hashing function
- Alg 정보 / Cost(복잡도) / Salt(원하는 길이만큼의 랜덤한 것들을 이용해서 암호를 더 복잡하게) / Hash(암호화된 정보)
- Salt : 해독하기 어렵도록 더 복잡하게 만들어줌
- 복잡도를 너무 지나치게 길게 사용할 경우 시간이 오래 걸림(보통 8~10~12)

## XSS Attack

- Cross-Site Scripting Attack
- injection 공격 중 하나, 악의적인 script를 주입해서 정보를 빼내가는 것
- 통상적으로 input 관련 form을 이용

### 동작원리

1. Attacker가 악의적인 script를 웹사이트에 주입
2. 사용자가 사이트 이용
3. Attacker가 심어놓은 script가 사용자의 민감한 정보(쿠키, 토큰 ...)을 읽어서 보냄

### cookie -> HttpOnly

- javascript로 읽을 수 없음
- 만료 기간 설정 가능
- 🚨 단점 : 웹 클라이언트만 사용 가능 / CSRF attack에 취약

## CSRF Attack

- Cross-Site Request Forgery
- 인증된 사용자가 원하지 않는 특정한 action을 하도록 만드는 공격
- email이나 chat으로 보내면서 원하지 않는 요청을 하게 됨
- session riding : 사용자가 로그인 한 session에 몰래 올라탐
- 직접적으로 token을 가져가진 못하지만 브라우저에 이미 있는 cookie를 이용해서 희생자가 원하지 않는 요청을 보낼 수 있음
- 사용자가 어떤 브라우저를 사용하고 있는지 모르기 때문에, 브라우저에만 의존하는 CORS만 가지고 CSRF 보호를 할 수 없다

### 동작원리

1. 다른 웹사이트에 request하는 것을 숨겨둔 웹사이트를 이메일이나 채팅을 통해 희생자에게 전송
2. 희생자가 링크를 열면 특정한 웹사이트로 request

### CSRF token

- 서버로부터 token을 받아, 추가적으로 요청하는 request에 CSRF token을 보내야 함
- 이 토큰은 어플리케이션 내의 메모리상에 보관되어 있음

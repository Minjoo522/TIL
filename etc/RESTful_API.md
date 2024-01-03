# RESTful API

- Representational(나타내는, 대표하는) State Transfer Application Programming Interface
- REST : Software Architectural Style / Web Service Huidelines

## RESTful System

- Client-server architecture
- Statelessness : 하나의 요청이 다른 요청과 연결되지 않는 상태로 디자인
- Cacheability : cache가 가능한 것은 cache할 수 있도록
- Layered System : 뒤에 서버가 얼마나 있든 상관하지 않고 서버에서 제공하는 하나의 API를 이용할 수 있도록 해야함
- Code on demand(optional) : client가 원한다면 client에서 수행해야하는 코드들을 server에서 client에 보내줄 수 있따
- **Uniform interface**
  1. Resource Identification in requests : client request에서 어떤 리소스를 원하는지 식별할 수 있고, server에서 어떻게 데이터를 관리하는지와 상관 없이 client가 이해할 수 있는 형식의 데이터를 보내 주어야 함
  2. Resource manipulation through representations : server로 부터 받은 해당 도메인을 대표할 수 있는 state/dat를 통해서 해당 리소스를 어떻게 더 처리할 수 있는지에 대한 모든 정보를 알 수 있어야 함
  3. Self-descriptive messages : server response에는 client가 해당 데이터를 어떻게 처리해야하는지 포함되어 있어야 함(data type 알려주기...)
  4. Hypermedia as the engine of application state (HSTEOAS) : client가 하고싶은 request에 대해 어떤 url을 써서 request 해야하는지 해당 도메인과 관련된 url들을 response 해주어야 함 / 서버를 어떻게 이용 해야하는지에 대한 정보 // **모든 링크들을 client에 제공 해주어야 함!** / ✅ 이렇게 하는 server는 많이 없음

## API 디자인

- GET : /posts/getPosts ❌
  - 동작에 대해서는 method로 나타내고 url에는 무엇을 할 것인지!
  - ✅ GET : /posts
- GET : /posts/createPost ❌
  - 동작에 대해서 url에 나타내지 않아야하고, method가 올바르지 않음
  - ✅ POST : /posts
- GET : /posts/1/tags ❌
  - 무엇을 해야하는지가 명확하지 않음
  - ✅ GET : /tags/?postId=1

## path, query string

- path : unique한 리소스를 나타냄
- query string : 필터링, 정렬할 때 쓰임

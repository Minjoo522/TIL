# HTTP(1989~)

- Hypertext Transfer Protocol
- request-response protocol
  - client -request-> server
  - cliend <-response- server

## HTTPS(1994)

- Hypertext Transfer Protocol Secure
- TLS(Transport Layer Security) / SSL(Secure Sockets Layer)과 같은 안전한 방식으로 데이터를 주고 받음
  - 보안 관계가 형성되지 않은 제 3자는 데이터의 내용을 볼 수 없음

## HTTP v1(1997)

- HTTP를 사용해도 되고 HTTPS를 보안을 보완해서 사용 가능
- text based
- uncompressed headers : 압축하지 않은 버전의 헤더로 사이즈가 크다
- one file at a time
- inefficient

## HTTP v2(2015)

- HTTP / HTTPS를 동시에 지원은 할 수 있지만 대부분의 브라우저에서는 HTTP v2에서는 HTTPS만 사용할 수 있음
- binary based protocol -> efficient / secure
- header compression
- multiplexing : 여러 개의 파일 동시에 주고 받을 수 있음
- stream prioritization

## HTTP v3(2019~)

- TCP -> UDP

## HTTP Status Codes

- server에서 client에게 response를 보낼 때 status code를 포함해서 보냄
- 1xx : informational
  - 100 : Continue
  - 102 : Processing
- 2xx : Successful
  - 200 : OK
  - 201 : Created
  - 204 : No Content
- 3xx : Redirection
  - 301 : Moved Permanently
  - 302 : Found(임시적 이동)
  - 303 : See Other(get 요청에서만 사용 가능)
  - 307 : Temporary Redirect(해당하는 method에 한해서만 다른 곳으로 옮겨 갔음)
  - 309 : Permanent Redirect(해당하는 method에 한해서만 다른 곳으로 옮겨 갔음)
- 4xx : Client error
  - 400 : Bad Request
  - 401 : Unauthorized
  - 403 : Forbidden(admin)
  - 404 : Not Found
  - 405 : Method Not Allowed
  - 409 : Conflict
- 5xx : Server error
  - 500 : Internal Server Error
  - 502 : Bad Gateway(어떻게 처리해야할지 모를 때)
  - 503 : Servicee Unavailable(서버가 준비 되지 않았을 때)

## Request

- URL(Uniform Resource Locator)
  - protocol/host name/path name/query

### Request Methods

- GET : get
  - body 없이 요청
  - 성공 했을 때 response에는 해당하는 데이터(body)가 있어야 함
  - Safe : 여러 번 요청을 해도 서버의 데이터를 변경하지 않기 때문에 안전하다고 간주
  - **_Idempotent_** : (멱등) 동일한 요청을 여러번 했을 때 항상 서버를 동일한 상태로 유지할 수 있음
  - Cacheable
- POST : create
  - ❌ Safe : 서버의 데이터를 변경하니까
  - ❌ Idempotent : 여러번 요청하면 여러번 생성하니까
  - Cacheable : 부분적으로만 가능
- PUT : replace(update) 리소스 전체를 업데이트
  - ❌ Safe
  - ⭕️ Idempotent : 동일한 URL에 동일한 요청을 여러 번해도 한 번만 변경하니까
- DELETE : delete
  - ⭕️ Idempotent : 한 번 삭제되면 계속 삭제된 상태
- PATCH : replace partially
  - ❌ Idempotent : 부분적으로 업데이트하기 때문에 부분적으로 추가하는 기능이라면 계속 추가되기 때문에!
- HEAD : get without body
- OPTIONS : all supported methods for URL(해당 URL에서 지원하는 모든 request 옵션에 대해 알고싶을 때)
- TRACE : echoes the reveived request

> - 서버의 데이터를 변경하지 않는 methods : GET, HEAD, OPTIONS, TRACE
> - 서버의 데이터를 변경하는 methods : POST, PUT, DELETE, PATCH

## [HTTP Headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)

### Request

- Standard
  - Authorization : 로그인 관련 정보
  - User-Agent
- Custom
  - domain-key
  - domain.key

### Response

- Content-Length
- Content-Type
- Content-language
- Cache-Control

# API rate limiting

- 모든 클라이언트가 동시 다발적으로 여러 요청을 서버로 보낼 때 서버가 과부하 되는 것을 방지하기 위한 것
- API Management Platform이나 service를 이용 가능(apigee, Tyk.io...)
- Cloude Service(AWS API Gateway, Google Cloud API Gateway)
- System을 보호하기 위해서 사용(DDos attack...)
- 시스템 안정성 보장을 위해
- 사용자들의 공평성 보장을 위해
- 사용자들마다 api 서비스의 수준을 정하는 것에 사용될 수도 있음

## response(429) : too many request

- Retry-After 정보를 헤더에 추가하도록 권고

## Global & Per User API Rate Limiting

- 어떤 사용자인지와 관련없이 글로벌적으로 구현하거나 사용자별로 나누어서 구현할 수 있음
  > 통상적으로 두 가지를 합쳐서 (Combined) 구현

## 여러 Server cluster를 이용하는 경우

- Load balancer 이용(요청들을 여러 cluster에게 공평하게 나누어주는 역할)
- 각각의 cluster는 Redis Store(Rate Limit의 상태 저장)를 통해 요청을 처리해도 되는지 확인

## Rate limiting 알고리즘

### Fixed window

- 특정한 시간동안 몇 가지 요청을 처리할 수 있는지 정해줌
- 🚨 단점 : 특정한 기간 사이에 아무런 요청이 없다가 막바지에 동시다발적으로 요청이 들어오고 다음 기간에 초반에 동시다발적으로 요청이 들어오면 ➡️ 짧은 시간 내에 여러 요청을 처리한 것과 동일한 결과

### Sliding window

- Fixed window 보완
- 요청이 들어오는 시간대 앞 뒤로 이전의 window까지 함께 계산해서 근접한 시간 안에 몇 가지의 요청이 이루어졌는지 계산

### Leaky bucket

- 동시 다발적으로 들어오는 요청들을 모아두었다가(bucket: 양동이에 모아둠) 천천히 처리
- 🚨 단점 : 특정한 시간대에 API 요청이 많은 서비스라면 적절하지 않음 ➡️ 모아두는 양동이가 꽉 차면 그 외의 요청들은 처리할 수 없기 때문에

### Token bucket

- Leaky bucket의 단점 보완
- bucket에 token이 주기적으로 채워지고 요청이 들어오면 bucket의 token을 가지고 통과를 해서 요청을 처리
- bucket에 token이 존재한다면 요청이 많아도 처리할 수 있음
- 이미 처리된 요청은 token을 다시 반환

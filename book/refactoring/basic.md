# 리팩토링(Refactoring)

- 소프트웨어의 겉보기 동작은 그대로 유지한 채 코드를 이해하고 수정하기 쉽도록 내부 구조를 변경하는 것
- 결과/행동 변경 없이 코드의 구조를 재조정
- 소프트웨어 기능을 보존하면서 설계, 구조 및 구현을 개선
- 코드/소프트웨어 아키텍처의 복잡성 감소
- 가독성 향상
- 유지 보수성을 개선
- 확장성을 높임

## Do Not

- 기능을 변경/추가 ❌
- 버그 수정 ❌
- 성능 개선 ❌
- 버전 업데이트 ❌

## Why?

- 개발 초기 단계부터 완벽한 코드/시스템 설계 어려움
- 프로그램 요구 사항은 계속 변경됨(기능 추가/변경)
- 더럽고 복잡한 코드는 이해하기 어려움
- 예상하지 못한 에러가 발생하기 쉬움
- 복잡한 코드의 유지 보수는 어려움

## 잘 설계된 코드의 장점

- 소프트웨어 설계가 좋아짐
  - 모든 코드가 언제나 고유한 일을 수행함을 보장
  - 이해해야할 코드의 양이 작고, 실수 없이 수정할 수 있음
- 소프트웨어를 이해하기 쉬워짐
  - 코드의 목적이 잘 드러나게, 의도를 더 명확하게 표현
  - 코드가 잘 읽힘, 가독성이 좋아짐
- 버그를 쉽게 찾을 수 있음
  - 코드가 하는 일을 깊이 파악할 수 있음
- 프로그래밍 속도를 높일 수 있음
  - 내부 설계가 잘 된 소프트웨어는 새로운 기능을 추가할 지점을 빠르게 찾을 수 있음
  - 작은 일부의 코드만 이해하여 빠르게 수정이 가능
  - 디버깅이 쉬움
  - 새로운 기능을 손쉽게 추가할 수 있음

## How?

1. 기존 프로그램의 기능과 동작을 유지함을 보장하기 위해 테스트 코드를 갖고 있어야 함
2. 코드의 나쁜 냄새에 따라 여러 리팩토링 기법을 점진적으로 적용
3. 테스트가 정상적으로 동작하는지 계속 확인
4. **리팩토링을 하면서 버그를 발견해도 버그는 그대로 두고 리팩토링!**
   - 리팩토링 과정 중 발생한 버그는 리팩토링 후에도 그대로 남아있어야 한다

## When?

### 프로젝트 시작 단계

- 기능 구현을 위한 코드를 작성할 때 가능한 좋은 디자인 패턴으로 코드를 깔끔하게 작성
- 테스트 코드 작성 : 테스트를 하기 위해 필연적으로 리팩토링을 하게 됨
- **_3의 법칙_** : 비슷한 일을 세 번째 하게 되면 리팩토링 한다
- 코드를 이해하기 쉽게 만들기 ➡️ 좋은 문서화
- 기능을 쉽게 추가하게 만들기 ➡️ 재사용성, 모듈성

### 프로젝트 유지보수 단계

- 버그 수정 : 버그를 검증할 수 있는 테스트 코드 작성하여 검증 후 코드를 이해하기 쉽게, 변경하기 쉽게 리팩토링하며 버그 수정
- 기능 추가, 디펜던시 마이그레이션 : 기존 기능들에 대한 테스트 코드 작성하여 검증 후 리팩토링하며 기능 추가

### 오래된 프로젝트

- 버그 수정 및 기능 추가 시에만 수정이 필요한 모듈/코드 한정적으로 테스트 추가 하여 검증 후 리팩토링하며 코드 수정 또는 기능 추가
- 때로는 리팩토링하지 않고 새로운 코드를 작성하는 것이 빠른 경우도 있음

## Point!

> "무결점 클린코드, 완벽한 설계는 존재하지 않는다"

- 처음부터 무결점 클린코드를 작성하기 위해 지나치게 코드를 작성하기 보다는 우선 기능을 구현한 후 테스트 코드를 작성하고 리팩토링을 한다
- **YAGNI** : You Ain't Gonna Need It
  - 지금 당장 필요하지 않은 기능 ❌
  - 사용하지 않는 기능 ❌
  - 지나치게 미래지향적 ❌

> 기억할 필요가 있는 것들을 최대한 코드에 담으려고 한다.

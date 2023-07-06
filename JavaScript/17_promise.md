# Promise

- JavaScript 엔진은 하나의 싱글 컨텍스트 스택(싱글 쓰레드)을 갖고 있음
  - JavaScript는 기본적으로 "동기적"으로 진행됨
    - 함수 내부에서 오래 걸리는 일을 수행하면 전체적으로 어플리케이션의 속도에 영향을 준다
- 런타입 환경(호스트 환경)에서 제공해주는 web APIs(DOM API, SetTimeout, SetInerval, fetch, event listener)를 통해 멀티 쓰레드 환경에서 비동기적(병렬적)으로 수행 가능하다
  - 예 : 함수를 call stack에 넣어두고 SetTimeout에서 세팅해둔 시간이 끝나면 브라우저는 Task Queue에 callback 함수를 넣어준다
    - JavaScript 환경에 있는 event loop가 call stack과 Task Queue를 감시하면서 call stack이 비어있으면 callback 함수를 call stack으로 가져가서 실행한다
      - JavaScript는 call stack에 들어온 함수들만 실행 가능하다

## Promise는 callback 함수를 대체해서 조금 더 비동기적으로 처리할 수 있게 도와준다

## callback 지옥이 발생하지 않도록 함수형 프로그래밍처럼 만들 수 있게 도와준다

# Promise 상태

- 대기(pending) : 막 promise가 만들어져서 이행하지도, 거부하지도 않은 초기 상태
- 이행(fulfilled) : 비동기적인 코드가 성공적으로 완료됨
- 거부(rejected) : 실행 실패

# Promise 사용 방법

- new Promise()로 새로운 인스턴스 생성
  -resolve, reject를 받는다

```javascript
// 함수로 만들 땐 Promise를 반환하게 하면 된다
function startDelay(seconds) {
  return new Promise((resolve, reject) => {
    if (seconds < 0) {
      reject(new Error('💀'));
    }
    setTimeout(resolve, seconds * 1000);
  });
}
```

# instance methods

- then : 프로미스가 이행하는 경우 이행한 값을 그대로 사용해 이행하는 새로운 프로미스를 반환
- catch : 콜백이 이행되지 않을 경우(거부) 에러 처리
- finally : 이행과 거부 여부와 상관 없이 무조건 호출

```javascript
startDelay(2)
  .then(() => console.log('이행됨'))
  .catch(console.error)
  .finally(() => console.log('끝!'));
// 이행됨
// 끝!

// 0 미만의 숫자를 전달할 경우
// Error: 💀
// 끝!
```

# static methods

- Promise.all : 주어진 Promise들을 병렬적으로 한 번에 실행
- Promise.allSettled : 실패, 성공과 관련 없이 결과를 배열로 반환
- Promise.any : 주어진 Promise 중 하나라도 이행하면 즉시 그 프로미스 값으로 이행하는 새로운 프로미스 반환
- Promise.race : 주어진 Promise 중 제일 빨리 수행된 것 반환
- Promise.reject : 거부하는 Promise 객체 반환
- Promise.resolve : 주어진 값으로 이행하는 Promise 객체 반환

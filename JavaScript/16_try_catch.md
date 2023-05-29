# try...catch...finally(에러 핸들링)

```javascript
try {
  // try 문
} catch (err) {
  // 에러 핸들링
  // try문에서 예외 발생시 실행되는 구문
} finally {
  // finally 문
  // 예외 발생 여부와 관련없이 실행되는 구문
}
```

## 에러 객체 프로퍼티

- name : 에러 이름
- message : 에러 상세 내용
- stack : 현재 호출 스택

```javascript
try {
  1 * number; // number : 정의되지 않은 변수
} catch (error) {
  console.log(error.name); // ReferenceError
  console.log(error.message); // number is not defined
  console.log(error.stack); // ReferenceError: number is not defined
} finally {
  console.log('성공, 실패와 관련 없이 실행됩니다.');
  // 성공, 실패와 관련 없이 실행됩니다.
}
```

## catch 문에서 오류 다시 던지기

- if 문으로 해결할 수 있는 에러인지 검증하고, 아니라면 다음 try-catch 문으로 에러를 다시 던짐
- 에러를 더 잘 처리할 수 있는 곳에서 처리할 수 있게 함

```javascript
function error() {
  throw new ReferenceError();
}

function error2() {
  try {
    error();
  } catch (error) {
    if (error instanceof ReferenceError) {
      throw error; // 에러 다시 던짐
    }
  }
}

try {
  error2();
} catch (error) {
  console.log('에러 발생!'); // 에러 발생!
}
```

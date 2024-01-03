# try-except

## 예외(except)

- 일반 예외(except)
  - 컴파일러 체크 예외
  - 컴파일 과정에서 검사
  - 예외 처리 코드가 없다면 컴파일 오류
- 실행 예외(runtime except)
  - 컴파일러 넌 체크 예외
  - 컴파일 과정에서 예외 처리 코드가 있는지 검사 ❌

## 실행 예외

### NullPointerException

- 객체가 없는 상태에서 객체 사용하려할 때
- 객체 참조가 없는 상태
- null 값을 갖는 참조 변수로 객체 접근 연산자인 도트(.)를 사용했을 때

### ArrayIndexOutOfBoundsException

- 배열에서 인덱스 범위 초과했을 때

### NumberFormatException

- 문자열 ➡️ 숫자 변환 시, 숫자로 변환될 수 없는 문자가 포함되어 있을 때

### ClassCastException

- 클래스 타입 변환할 수 없을 때
- instanceof 연산자로 확인 후 변환하는 것이 좋음

## try-catch-finally

### 다중 catch

- 예외별로 예외 처리 코드 다르게
- 단 하나의 catch 블록만 실행됨 : try 블록에서 예외가 하나 발생하면 즉시 실행 멈춤 ➡️ catch 블록으로 이동
- 상위 예외 클래스가 하위 예외 클래스보다 아래쪽에 위치해야 함

```java
try {
  // 에러 발생 가능한 코드
} catch(ArrayIndexOutOfBoundsException e) {
  // 예외 처리 1
} catch(NullPointerException e) {
  // 예외 처리 2
}
```

## throws 키워드

- 메소드 선언부 끝에 작성
- 메소드에서 처리하지 않은 예외를 호출한 곳으로 떠넘김
- throws 키워드가 있는 메소드는 반드시 try 블록 내에서 호출 ➕ catch 블록에서 예외 처리

```java
try {
    method();
} catch (NullPointerException e) {
    // 예외 처리 코드
}

public void method() throws NullPointerException {
    // 예외 발생
}
```

- 💩 main() 메소드에서 throws 키워드 사용 : JVM이 콘솔에 출력하는 것으로 최종 예외 처리

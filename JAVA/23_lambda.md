# 람다식

```java
(int a, int b) -> a > b ? a : b
// 끝에 ; 안 붙임
```

- 매개 변수의 타입 : 추론 가능하면 생략 가능

```java
(a, b) -> a > b ? a : b
```

- 매개 변수 하나 + 타입 ❌ ➡️ 괄호 생략 가능
- 블록 안의 문장 하나 ➡️ 괄호 생략 가능

```java
(a, b) -> a > b ? a : b
(name, i) -> System.out.println(name + "=" + i)
x -> x * x
() -> (int) (Math.random() * 6)
```

- 람다식은 익명 객체 : 참조 변수가 필요 ➡️ 함수형 인터페이스
- 하나의 메서드만 호출하는 람다식 : '클래스이름::메서드이름', '참조변수::메서드이름'

## 함수형 인터페이스

- 단 하나의 추상 메서드만 선언된 인터페이스
- @FunctionalInterface
- 함수형 인터페이스 타입의 참조변수로 람다식을 참조할 수 있음

```java
@FunctionalInterface
interface MyFunction {
  public abstract int max(int a, int b); // public abstrack 생략 가능
}
```

- 매개 변수, 반환 타입으로 사용 가능 : 변수처럼 메서드를 주고 받을 수 있음

## java.util.function 패키지

| 함수형 인터페이스  | 메서드                 | 📝                                                                                                    |
| ------------------ | ---------------------- | ----------------------------------------------------------------------------------------------------- |
| java.lang.Runnable | void run()             | 매개변수도, 반환값도 없음<br />쓰레드를 생성할 때                                                     |
| Supplier\<T>       | T get()                | 매개변수는 없고, 반환값만 있음<br />Lazy Evaluation이 가능함                                          |
| Consumer\<T>       | void accept(T t)       | 매개변수는 있고, 아무 것도 리턴하지 않음<br />andThen : 하나의 인자에 대해 Consumer를 연쇄적으로 사용 |
| Function\<T,R>     | R apply(T t)           | 하나의 매개변수, 결과 반환<br />변환을 할 필요가 있을때                                               |
| Predicate\<T>      | boolean test(T t)      | 조건식<br />매개변수는 하나, 반환 타입은 boolean / and(), or(), negate()                              |
| BiConsumer\<T,U>   | void accept(T t, U u)  | 두 개의 매개변수, 반환값 없음                                                                         |
| BiPredicate\<T,U>  | boolean test(T t, U u) | 조건식<br />매개변수 둘, 반환 타입 boolean                                                            |
| BiFunction\<T,U,R> | R apply(T t, U u)      | 두 개의 매개변수, 하나의 결과 반환                                                                    |
| UnaryOperator\<T>  | T apply(T t)           | 매개변수와 결과의 타입이 같음                                                                         |
| BinaryOperator\<T> | T apply(T t, T t)      | 매개변수와 결과의 타입이 같음                                                                         |

```java
// Consumer
Consumer<Integer> add = i -> System.out.println(i + 1);
Consumer<Integer> addAndThen = add.andThen(i -> System.out.println(i + 2));

addAndThen.accept(1); // 2, 3

// Predicate
Predicate<Integer> isZero = i -> i == 0;

if(isZero.test(0)) {
    System.out.println("0입니다!");
}
```

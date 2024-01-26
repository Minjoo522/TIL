# null 대신 Optional 클래스

<div align="center">

> null로 값이 없다는 사실을 표현하는 것은 좋은 방법이 아니다

</div>

# 값이 없는 상황 처리

```java
public String getCarInsuranceName(Person person) {
    return person.getCar().getInsurance().getName();
}
// 차를 소유 하지 않은 사람이 있다면 NullPointerException 발생
```

## null 확인 코드 추가해서 해결하기

```java
// 깊은 의심(deep doubt) 반복 패턴
public String getCarInsuranceName(Person person) {
    if (person != null) {
        Car car = person.getCar();
        if (car != null) {
            Insurance insurance = car.getInsurance();
            if (insurance != null) {
                return insurance.getName();
            }
        }
    }
    return "Unknown";
}
```

- 💩💩💩💩 depth가 깊어짐

```java
public String getCarInsuranceName(Person person) {
    if (person == null) {
        return "Unknown";
    }
    Car car = person.getCar();
    if (car == null) {
        return "Unknown";
    }
    Insurance insurance = car.getInsurance();
    if (insurance == null) {
        return "Unknown";
    }
    return insurance.getName();
}
```

- 💩💩💩💩 출구 때문에 유지 보수가 어려워짐

## null 때문에 발생하는 문제

- 에러의 근원
- 코드를 어지럽힘 : null 확인 코드 필요해서
- 아무 의미가 없음
- 자바 철학에 위배됨 : 개발자로부터 모든 포인터를 숨겼지만 null 포인터는 예외
- 형식 시스템에 구멍을 만든다
  - null은 무형식이며 정보를 포함하고 있지 않음
  - ➡️ 모든 참조 형식에 null을 할당할 수 있음
  - ➡️ 시스템의 다른 부분으로 null이 퍼졌을 때 어떤 의미로 사용되었는지 알 수 없음

<br />

---

<br />

# Optional 클래스

- 선택형값을 캡슐화하는 클래스
- 값 有 : Optional 클래스는 값을 감쌈
- 값 無 : Optional.empty 메서드로 Optional을 반환

```java
private static final Optional<?> EMPTY = new Optional<>(null);

public static<T> Optional<T> empty() {
    @SuppressWarnings("unchecked")
    Optional<T> t = (Optional<T>) EMPTY;
    return t; // 싱글턴 인스턴스 반환
}
```

```java
public class Person {
    private Optional<Car> car;

    public Optional<Car> getCar() {
        return car;
    }
}
```

- Optional로 감싸며 `값이 없을 수 있음을 명시적`으로 보여줌
  - 메서드의 시그니처만 보고도 선택형 값인지 여부를 구별할 수 있다
- **모든 null 참조를 Optional로 대치하는 것은 바람직하지 않다**
- Optional의 역할은 더 이해하기 쉬운 API를 설계하도록 돕는 것

# Optional 적용 패턴

## Optional 객체 만들기

### 빈 Optional

```java
Optional<Car> optionalCar = Optional.empty();
```

### null이 아닌 값으로 Optional 만들기

```java
Optional<Car> optionalCar = Optional.of(car);
```

- car가 null이라면 즉시 NullPointerException 발생
  - Optional 사용하지 않으면 car의 프로퍼티에 접근시 에러 발생

### null 값으로 Optional 만들기

```java
Optional<Car> optionalCar = Optional.ofNullable(car);
```

- car가 null이면 빈 Optional 객체 반환

## `map`으로 Optional의 값을 추출하고 변환하기

```java
Optional<Insurance> optionalInsurance = Optional.ofNullable(insurance);
Optional<String> name = optionalInsurance.map(Insurance::getName);
// optionalInsurance가 비어있으면 아무 일도 일어나지 않음
```

## `flatMap`으로 Optional 객체 연결

- 평준화 과정 : 두 Optional을 합치는 기능을 수행핳면서 둘 중 하나라도 null이면 빈 Optional을 생성

```java
// 컴파일 ❌❌❌❌
Optional<Person> optionalPerson = Optional.of(person);
Optional<String> name = optionalPerson.map(Person::getCar) // Optional<Optional<Car>>
        .map(Car::getInsurance)
        .map(Insurance::getName);
```

- Optional이 중첩되어 map으로는 연결 할 수 없음

```java
public String getCarInsuranceName(Optional<Person> person) {
    return person.flatMap(Person::getCar) // Optional<Optional<Car>> ➡️ Optional<Car>
            .flatMap(Car::getInsurance)
            .map(Insurance::getName)
            .orElse("Unknown"); // Optional이 비어있을 때 기본 값
}
```

## Optinal 스트림 조작

```java
public Set<String> getCarInsuranceNames(List<Person> persons) {
    return persons.stream()
            .map(Person::getCar)
            .map(optCar -> optCar.flatMap(Car::getInsurance))
            .map(optIns -> optIns.map(Insurance::getName))
            .flatMap(Optional::stream) // Stream<Optional<String>> ➡️ Stream<String>
            .collect(Collectors.toSet());
}
```

- 마지막 결과를 얻으려면 빈 Optional을 제거하고 값을 언랩해야 함

```java
public Set<String> getCarInsuranceNames(List<Person> persons) {
    Stream<Optional<String>> stream = persons.stream()
            .map(Person::getCar)
            .map(optCar -> optCar.flatMap(Car::getInsurance))
            .map(optIns -> optIns.map(Insurance::getName));

    return stream.filter(Optional::isPresent)
            .map(Optional::get) // 값을 포함하는 Optional만 언랩
            .collect(Collectors.toSet());
}
```

## 디폴트 액션과 Optional 언랩

- `get()`
  - 값을 읽는 메서드
  - 래핑된 값이 있으면 해당 값 반환
  - 없으면 NoSuchElementException 발생
  - Optional 값이 반드시 있다고 가정할 수 있는 상황이 아니면 사용하지 않는 것이 바람직
- `orElse(T other)`
  - Optional이 값을 포함하지 않을 때 기본값 제공
- `orElseGet(Supplier<? extends T> other)`
  - 게으른 버전의 orElse
  - 값이 없을 때만 Supplier 실행
  - 디폴트 메서드를 만드는 데 시간이 걸리거나 Optional이 비어 있을 때만 기본값 생성
- `orElseThrow(Supplier<? extends X> exceptionSupplier)`
  - Optional이 비어있을 때 예외를 발생
  - 발생시킬 예외 종류 선택 가능
- `ifPresent(Consumer<? super T> consumer)`
  - 값이 존재할 때 인수로 넘겨준 동작을 실행
  - 없으면 아무 일도 일어나지 않음
- `ifPresentOrElse(Consumer<? super T> action, Runnable emptyAction)`
  - Optional이 비었을 때 실행할 수 있는 Runnable을 인수로 받음

## 두 Optional 합치기

```java
public Insurance findCheapestInsurance(Person person, Car car) {
    // 코드들 ...
    return cheapestCompany;
}

public Optional<Insurance> nullSafeFindCheapestInsurance(Optional<Person> person, Optional<Car> car) {
    if (person.isPresent() && car.isPresent()) { // null 확인 코드와 다를게 없음
        return Optional.of(findCheapestInsurance(person.get(), car.get()));
    } else {
        return Optional.empty();
    }
}
```

### map과 flatMap으로 개선

```java
public Optional<Insurance> nullSafeFindCheapestInsurance(Optional<Person> person, Optional<Car> car) {
    return person.flatMap(p ->
            car.map(c -> findCheapestInsurance(p, c)));
}
```

## Optional 클래스의 메서드

| 메서드                                                               | 설명                                                                                                                                 |
| -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| empty()                                                              | 빈 Optional 인스턴스 반환                                                                                                            |
| filter(Predicate<? super T> predicate)                               | 값이 존재하며 프레디케이트와 일치하면 값을 포함하는 Optional 반환, <br />값이 없거나 프레디케이트와 일치하지 않으면 빈 Optional 반환 |
| flatMap(Function<? super T, ? extends Optional<? extends U>> mapper) | 값이 존재하면 인수로 제공된 함수를 적용한 결과 Optional을 반환, <br />값이 없으면 빈 Optional 반환                                   |
| get()                                                                | 값이 존재하면 Optional이 감싸고 있는 값 반환, <br />값이 없으면 NoSuchElementException 발생                                          |
| ifPresent(Consumer<? super T> action)                                | 값이 존재하면 지정된 Consumer 실행, <br />값이 없으면 아무 일도 일어나지 않음                                                        |
| ifPresentOrElse(Consumer<? super T> action, Runnable emptyAction)    | 값이 존재하면 지정된 Consumer 실행, <br />값이 없으면 Runnalble 실행                                                                 |
| isPresent()                                                          | 값이 존재하면 true, 없으면 false                                                                                                     |
| map(Function<? super T, ? extends U> mapper)                         | 값이 존재하면 제공된 매핑 함수 적용                                                                                                  |
| of(T value)                                                          | 값이 존재하면 값을 감싸는 Optional 반환, <br />값이 null이면 NullPointerException 발생                                               |
| ofNullable(T value)                                                  | 값이 존재하면 값을 감싸는 Optional 반환, <br />값이 null이면 빈 Optional 반환                                                        |
| or(Supplier<? extends Optional<? extends T>> supplier)               | 값이 존재하면 같은 Optional 반환, <br />값이 없으면 Supplier에서 만든 Optional 반환                                                  |
| orElse(T other)                                                      | 값이 존재하면 값을 반환, 없으면 기본값 반환                                                                                          |
| orElseGet(Supplier<? extends T> supplier)                            | 값이 존재하면 값 반환, <br />값이 없으면 Supplier에서 제공하는 값을 반환                                                             |
| orElseThrow(Supplier<? extends X> exceptionSupplier)                 | 값이 존재하면 값 반환, <br />값이 없으면 Supplier에서 생성한 예외 발생                                                               |
| stream()                                                             | 값이 존재하면 존재하는 값만 포함하는 스트림 반환, <br />없으면 빈 스트림 반환                                                        |

# Optional 실용 예제

## 잠재적으로 null이 될 수 있는 대상을 Optional로 감싸기

```java
Object value = map.get("key"); // Map key에 해당하는 값이 없으면 null 반환

// null일 수 있는 값을 Optional로 반환
Optional<Object> value = Optional.ofNullable(map.get("key"));
```

## 예외와 Optional 클래스

```java
public static Optional<Integer> stringToInt(String s) {
    try {
        return Optional.of(Integer.parseInt(s));
        // 정수로 변환 가능하면 Optional<Integer> 반환
    } catch (NumberFormatException e) {
        return Optional.empty();
    }
}
```

## 기본형 Optional을 사용하지 말아야 하는 이유

- 기본형 특화 : `OptionalInt`, `OptionalLong`, `OptionalDouble`
- **Optional의 최대 요소 수는 한 개이므로 기본형 특화 클래스로 성능을 개선할 수 없다**
- 기본형 특화 Optional은 map, flatMap, filter 등을 지원하지 않는다
- 기본형 특화 Optional로 생성한 결과는 다른 일반 Optional과 혼용할 수 없다

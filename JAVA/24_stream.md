# 스트림

```java
String[] strArr = { "a", "b", "c" };
List<String> strList = Arrays.asList(strArr);

Stream<String> strStream = strList.stream();
Stream<String> strStream2 = Arrays.stream(strArr);
```

- 데이터를 읽기만할 뿐, 데이터 소스를 변경하지 않음
- 일회용
- 작업을 내부 반복으로 처리
- 최종 연산이 수행되기 전까지 중간 연산이 수행되지 않음
- IntStream, LongStream, DoubleStream
- 병렬 처리가 쉽다(parallel()) ↔️ sequential()

## 스트림 생성

- Collection에 저장되어 있음 ➡️ List, Set 컬렉션 클래스 ➡️ stream() 메서드로 스트림 생성 가능
- stream() ➡️ 해당 컬렉션을 소스로하는 스트림 반환

```java
List<String> list = Arrays.asList("A", "B", "C");
Stream<String> strStream = list.stream();
```

## limit()

- 무한 스트림 ➡️ 유한 스트림 : 스트림의 개수를 지정해 스트림의 크기 제한

```java
IntStream intStream = new Random().ints();
LongStream longStream = new Random().longs();
DoubleStream doubleStream = new Random().doubles();

// 무한 스트림 ➡️ 유한 스트림
intStream.limit(5).forEach(System.out::println);
longStream.limit(5).forEach(System.out::println);
doubleStream.limit(5).forEach(System.out::println);

// 유한 스트림
IntStream intStream = new Random().ints(5);
```

## range(), rangeClosed()

- 지정된 범위의 연속된 정수 생성

```java
IntStream intStream1 = IntStream.range(1, 5); // 1 ~ 4
IntStream intStream2 = IntStream.rangeClosed(1, 5); // 1 ~ 5
```

- 지정된 범위의 난수 생성

```java
IntStream intStream1 = new Random().ints(1, 5); // 1 ~ 4 안에서 무한 스트림
IntStream intStream2 = new Random().ints(3, 1, 5); // 1 ~ 4 안에서 3개의 유한 스트림
```

## iterate(), generate() ➕ 람다식

- 람다식을 매개변수로 받음
- 람다식에 의해 계산되는 값들을 요소로하는 무한 스트림 생성

```
static <T> Stream<T> iterate(T seed, UnaryOprator<T> f)
static <T> Stream<T> generate(Supplier<T> s) // 매개 변수가 없는 람다식
```

```java
// iterate()
// 이전 결과를 활용해서 다음 요소를 계산
Stream<Integer> multipleStream = Stream.iterate(1, n->n*2);

// generate()
// 매개 변수가 없는 람다식만 허용
Stream<String> strStream = Stream.generate(()->"hello");
```

- 기본형 스트림 타입의 참조 변수로 다룰 수 없음

```java
IntStream multipleStream = Stream.iterate(1, n->n*2); // 에러
```

## 빈 스트림 - empty()

- 스트림 연산 수행 결과가 하나도 없을 때, null보다 빈 스트림을 반환하는 것이 나음

```java
Stream<Integer> emptyStream = Stream.empty();
long count = emptyStream.count(); // 0
```

## 스트림 연산 - 중간 연산, 최종 연산

- 중간 연산 : 연산 결과가 스트림, 연속해서 중간 연산 가능
- 최종 연산 : 연산 결과가 스트림 ❌, 단 한 번만 가능

## 중간 연산

| 중간 연산                                                          | 📝                                                                                                        |
| ------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------- |
| skip(long n)                                                       | 스트림 건너 뜀                                                                                            |
| limit(long maxSize)                                                | 스트림 잘라냄                                                                                             |
| distinct()                                                         | 중복된 요소 제거                                                                                          |
| filter(Predicate<? super T> predicate)                             | 조건에 맞지 않는 요소 걸러냄<br />다른 조건으로 여러 번 사용 가능                                         |
| sorted(Comparator<? supter T> comparator)                          | 스트림 정렬<br />Comparator 대신 int 값 반환하는 람다식 사용 가능                                         |
| map(Function<? super T,? extends R> mapper)                        | 원하는 필드만 뽑아 내거나 특정 형태로 변환                                                                |
| peek(Consumer<? super T> action)                                   | 연산과 연산 사이 올바르게 처리되었는지 확인하고 싶을 때<br />forEach()와 달리 스트림의 요소 소모하지 않음 |
| flatMap(Function<? super T, ? extends Stream<? extends R>> mapper) | 스트림 타입이 Stream<T[]>일 때 Stream<T>로 변환                                                           |

```java
// skip(), limit()
IntStream intStream = IntStream.rangeClosed(1, 10);
// 5번째 요소부터 시작해서 3개의 요소를 결과 값으로
intStream.skip(4).limit(3).forEach(System.out::println); // 5, 6, 7
```

```java
// distinct()
IntStream intStream = IntStream.of(1, 1, 2, 2, 3, 3, 4, 4);
intStream.distinct().forEach(System.out::println); // 1, 2, 3, 4
```

```java
// filter()
IntStream intStream1 = IntStream.rangeClosed(1, 10);
intStream1.filter(i -> i % 2 == 0).forEach(System.out::println); // 2, 4, 6, 8, 10
```

```java
// sorted()
Stream<Integer> intStream = Stream.of(1, 4, 2, 5, 2);
intStream.sorted().forEach(System.out::print); // 12245

Stream<String> strStream = Stream.of("bb", "aaa", "cccc", "CC", "dd");
strStream.sorted().forEach(System.out::print); // CCaaabbccccdd

Stream<String> strStream = Stream.of("bb", "aaa", "cccc", "CC", "dd");
strStream.sorted(Comparator.reverseOrder()).forEach(System.out::print); // ddccccbbaaaCC
```

```java
// map()
List<String> stringList = List.of("a", "b", "c");
List<String> upperStringList = stringList.stream().map(String::toUpperCase).toList();
System.out.println(upperStringList); // [A, B, C]
```

```java
// peek()
Stream.of("one", "two", "three", "four")
        .filter(e -> e.length() > 3)
        .peek(e -> System.out.println("Filtered value: " + e))
        .map(String::toUpperCase)
        .peek(e -> System.out.println("Mapped value: " + e))
        .toList();
/*
Filtered value: three
Mapped value: THREE
Filtered value: four
Mapped value: FOUR
*/
```

```java
// flatMap()
String[][] strArray = { {"a", "b", "c"}, {"A", "B", "C"} };
Arrays.stream(strArray)
        .flatMap(Arrays::stream)
        .forEach(System.out::println);
```

## 정렬이 쉬워지게 만드는 Comparator 메서드

- Comparator<T> 반환 : 기본형 comparing()

```
// ✅ 스트림의 요소가 Comparable을 구현한 경우
<T, U extends Comparable<? super U>> Comparator<T> comparing(
            Function<? super T, ? extends U> keyExtractor)

// ✅ 스트림의 요소가 Comparable을 구현 ❌
<T, U> Comparator<T> comparing(
            Function<? super T, ? extends U> keyExtractor,
            Comparator<? super U> keyComparator) // ✅ 정렬 기준
```

- 비교대상이 기본형인 경우
  - comparingInt, comparingLong, comparingDouble

### 정렬 조건 추가 : thenComparing

```
Comparator<T> thenComparing(Comparator<? super T> other)

<U> Comparator<T> thenComparing(
            Function<? super T, ? extends U> keyExtractor,
            Comparator<? super U> keyComparator)

<U extends Comparable<? super U>> Comparator<T> thenComparing(
            Function<? super T, ? extends U> keyExtractor)
```

## Optional<T>

- T 타입의 객체를 감싸는 래퍼 클래스
- 모든 타입의 객체를 담을 수 있음
- 널 체크를 위한 if문이 없이도 NullPointException이 발생하지 않는 간결하고 안전한 코드 작성 가능

```java
Optional<String> optStr1 = Optional.ofNullable(null);
Optional<String> optStr2 = Optional.empty(); // 빈 객체로 초기화
```

```java
Optional<String> optVal1 = Optional.of("a");
String str1 = optVal1.get(); // null이면 예외
String str2 = optVal1.orElse(""); // null이면 "" 반환
String str3 = optVal1.orElseGet(String::new); // null 대체할 람다식 지정
String str4 = optVal1.orElseThrow(NullPointerException::new); // 지정된 예외 발생

if (optVal1.isPresent()) { // null이 아니면 true
    System.out.println(optVal1.get()); // a
}

optVal1.ifPresent(System.out::println); // a, null이 아닐 때만 값 출력
```

## 최종 연산

- 최종 연산 후에 스트림은 더 이상 사용할 수 없음

| 최종 연산                                                                                                                                                                                                                 | 📝                                                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| void forEach(Consumer<? super T> action)                                                                                                                                                                                  | 스트림 요소를 출력하는 용도로 많이 사용                                                                                                                                                         |
| boolean allMatch(Predicate<? super T> predicate)<br />boolean noneMatch(Predicate<? super T> predicate)<br />boolean anyMatch(Predicate<? super T> predicate)                                                             | 모든 요소가 일치 ➡️ true<br />모든 요소가 불일치 ➡️ true<br />하나라도 일치 ➡️ true                                                                                                             |
| Optional\<T> findFirst()<br />Optional\<T> findAny()                                                                                                                                                                      | 조건에 일치하는 첫번째 요소<br />병렬 스트림일 때                                                                                                                                               |
| - Optional\<T> reduce(BinaryOperator\<T> accumulator)<br />- T reduce(T identity, BinaryOperator\<T> accumulator)<br />- \<U> U reduce(U identity, BiFunction\<U, ? super T, U> accumulator, BinaryOperator\<U> combiner) | 스트림의 요소를 줄여나가며 연산 수행 ➡️ 최종 결과 반환<br />초기값을(identity) 가짐 ➡️ 스트림 요소가 없는 경우 초기값 반환<br />combiner : 병렬 스트림에 의해 처리된 결과 합칠 때 사용하는 연산 |
| - \<R, A> R collect(Collector<? super T, A, R> collector)<br />- \<R> R collect(Supplier\<R> supplier, BiConsumer\<R, ? super T> accumulator, BiConsumer\<R, R> combiner)                                                 | 스트림의 요소를 수집 ➡️ collector : 수집 방법 정의<br />Collector 인터페이스 구현하지 않고 람다식으로 수집                                                                                      |

## Collectors

- Collector : 인터페이스, 컬렉터는 이 인터페이스를 구현해야 함
- Collectores : 클래스, static 메서드, 미리 작성된 컬렉터 제공

## 스트림 ➡️ 배열

```java
Stream<String> stream1 = Stream.of("a", "b", "c");
String[] strArr1 = stream1.toArray(String[]::new);

Stream<String> stream2 = Stream.of("a", "b", "c");
Object[] strArr2 = stream2.toArray();
```

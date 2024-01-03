# @ParameterizedTest

- 사용하는 파라미터에 대한 어노테이션 추가해주어야 함

## @ValueSource

- 다양한 타입의 파라미터 ➡️ 배열로 받음
- 지원 타입 : short, byte, int, long, float, double, char, boolean, java.lang.String, java.lang.Class

## @NullSource

- null 값 넣어줌
- primitive type에는 @NullSource 사용 불가

## @EmptySource

- 파라미터에 빈 값 넣어줌
- 지원 타입 : java.lang.String, java.util.Collection, java.util.List, java.util.Set, java.util.SortedSet, java.util.NavigableSet, java.util.Map, java.util.SortedMap, java.util.NavigableMap, primitive arrays (e.g., int[], char[][], etc.), object arrays (e.g., String[], Integer[][], etc.)

## @NullAndEmptySource

- @NullSource ➕ @EmptySource

```java
@ParameterizedTest
@NullAndEmptySource
@ValueSource(strings = { " ", "   ", "\t", "\n" })
void nullEmptyAndBlankStrings(String text) {
    assertTrue(text == null || text.trim().isEmpty());
}
```

## @EnumSource

- enum 상수를 사용할 수 있게 해줌
- value는 옵셔널 : 없으면 메소드의 파라미터 타입이 주입됨
- enum 타입이 아닌 경우 실패

| 속성  | 📝                                                                                                                                                                                                                        |
| :---: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| value | 테스트 할 enum 클래스                                                                                                                                                                                                     |
| names | 사용될 상수를 명시할 수 있음                                                                                                                                                                                              |
| mode  | 어떤 상수를 테스트 할지, 패스할지 컨트롤 할 수 있음<br />INCLUDE(default)<br />EXCLUDE<br />MATCH_ANY(조건에 하나라도 부합)<br />MATCH_ALL(조건에 모두 부합)<br />MATCH_NONE(조건에 부합하지 않음)<br />names와 같이 사용 |

## @MethodSource

- 팩토리 메소드가 리턴해주는 값을 이용해 반복 테스트
- **팩토리 메소드는 static**이어야 함(PER_CLASS test instance lifecycle mode인 경우 제외하고(@TestInstance(Lifecycle.PER_CLASS)))
- 팩토리 메소드는 org.junit.jupiter.api.extension.ParameterResolver 인터페이스의 구현체에 의해 제공된 파라미터를 선언할 수 있음
- value() : String, 팩토리 메소드명, 명시하지 않으면 테스트 메소드와 동일한 이름을 가지고 해당 클래스 내에 동일한 이름을 가진 메소드를 팩토리 메소드로 사용

### 팩토리 메소드와 호환되는 parameterized 테스트 메소드 시그너처

| @ParameterizedTest method | Factory method                      |
| ------------------------- | ----------------------------------- |
| void test(int)            | static int[] factory()              |
| void test(int)            | static IntStream factory()          |
| void test(String)         | static String[] factory()           |
| void test(String)         | static List\<String> factory()      |
| void test(String)         | static Stream\<String> factory()    |
| void test(String, String) | static string[][] factory()         |
| void test(String, int)    | static object[][] factory()         |
| void test(String, int)    | static Stream<Object[]> factory()   |
| void test(String, int)    | static Stream<Arguments> factory()  |
| void test(int[])          | static int[][] factory()            |
| void test(int[])          | static Stream<int[]> factory()      |
| void test(int[][])        | static Stream<int[][]> factory()    |
| void test(Object[][])     | static Stream<Object[][]> factory() |

## @CsvSource

- CSV (comma-separated values)형식의 콘텐츠를 읽어 반복 테스트
- delimiter : default 값은 콤마(,) / delimiter or delimiterString으로 커스텀 가능
- 문자열 : "" / 문자열 안의 항목 구분 : '' ➡️ "'lemon, lime', 0xF1",
- '' : null
- null 값의 target의 타입이 primitive 타입인 경우 ArgumentConversionException 던짐
- "" 안의 whitespace는 기본적으로 제거됨(ignoreLeadingAndTrailingWhitespace attribute로 설정 가능 / 기본값 : true)

|                           속성                            | 📝                                                                                                                                                                                                  |
| :-------------------------------------------------------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|                String[] value() default {}                | - CSV 형식의 콘텐츠<br />- 기본 값 : 빈 배열                                                                                                                                                        |
|               String textBlock() default ""               | - CSV 속성 대신 textBlock을 제공할 수 있음<br />- JVM including Java SE 15 이상에서 다양한 언어로 지원<br />- hash tag (#)가 있는 값은 코멘트로 취급되어 무시됨(단, 공백없이 제일 앞에 위치해야 함) |
|      boolean useHeadersInDisplayName() default false      | - true로 설정하면 CSV 파일의 제일 상단 값이 각 @ParameterizedTest method 호출의 디스플레이 이름이 됨<br />- @ParameterizedTest의 이름 패턴에 {arguments}가 포함되어 있어야 함                       |
|            char quoteCharacter() default '\''             | - 기본 값 : single quote (')<br />- textBlock에서 double quote를 사용할 수 있도록 하기 위에 주로 사용                                                                                               |
|               char delimiter() default '\0'               | - 구분자 설정<br />- delimiterString과 함께 사용할 수 없음<br />- 기본 값 : ','                                                                                                                     |
|            String delimiterString() default ""            | - 구분자 설정<br />- delimiter와 함께 사용할 수 없음<br />- 기본 값 : ','                                                                                                                           |
|              String emptyValue() default ""               | empty value를 대체할 수 있음                                                                                                                                                                        |
|             String[] nullValues() default {}              | - 배열 안의 값을 null로 바꿀 수 있음<br />- "N/A"나 "NIL"을 null로 바꿀 때 주로 사용                                                                                                                |
|           int maxCharsPerColumn() default 4096;           | - 글자 수 최대값<br />- 양의 정수어야 함                                                                                                                                                            |
| boolean ignoreLeadingAndTrailingWhitespace() default true | 앞 뒤 공백 무시 여부 설정 가능                                                                                                                                                                      |

```java
@ParameterizedTest
@CsvSource({
    "apple,         1",
    "banana,        2",
    "'lemon, lime', 0xF1",
    "strawberry,    700_000"
})
void test(String fruit, int rank) {
    // ...
}

@ParameterizedTest(name = "[{index}] {arguments}")
@CsvSource(useHeadersInDisplayName = true, textBlock = """
    FRUIT,         RANK
    apple,         1
    banana,        2
    'lemon, lime', 0xF1
    strawberry,    700_000
    """)
void test(String fruit, int rank) {
    // ...
}
```

## @CsvFileSource

- CSV 파일을 읽어서 반복 테스트 할 수 있도록 하는 어노테이션

|                속성                 | 📝                                                  |
| :---------------------------------: | --------------------------------------------------- |
|   String[] resources() default {}   | - CSV 파일 경로<br />- 경로 resources 폴더부터 시작 |
|     String[] files() default {}     | - CSV 파일 경로<br />- 경로 프로젝트 폴더부터 시작  |
|  String encoding() default "UTF-8"  | CSV 파일 인코딩 값                                  |
| String lineSeparator() default "\n" | 줄 바꿈 구분자                                      |
|   int numLinesToSkip() default 0    | - 스킵할 라인 수<br />- 주로 header 스킵할 때 사용  |

- 나머지는 @CsvSource와 동일

```java
@ParameterizedTest
@CsvFileSource(resources = "/two-column.csv", numLinesToSkip = 1)
void testWithCsvFileSourceFromClasspath(String country, int reference) {
    assertNotNull(country);
    assertNotEquals(0, reference);
}

@ParameterizedTest
@CsvFileSource(files = "src/test/resources/two-column.csv", numLinesToSkip = 1)
void testWithCsvFileSourceFromFile(String country, int reference) {
    assertNotNull(country);
    assertNotEquals(0, reference);
}
```

## @ArgumentSource

- 커스텀하게 주입 데이터 값을 정할 수 있는 meta-annotation
- Class<? extends ArgumentsProvider> value()
- top-level 클래스가 아니면 static 붙여야 함

```java
@ParameterizedTest
@ArgumentsSource(MyArgumentsProvider.class)
void testWithArgumentsSource(String argument) {
    assertNotNull(argument);
}
```

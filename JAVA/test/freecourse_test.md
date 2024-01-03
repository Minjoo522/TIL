# String test

```java
public class StringTest {

    @DisplayName("[Success] 1,2를 split 했을 때 1과 2로 잘 분리된다.")
    @Test
    void splitTwoItemsByComma() {
        assertThat("1,2".split(","))
                .contains("1", "2");
    }

    @DisplayName("[Success] 1만을 split 했을 때 1만을 포함하는 배열이 반환된다.")
    @Test
    void splitOneItems() {
        assertThat("1".split(","))
                .containsExactly("1");
    }

    @DisplayName("[Success] (1,2) 값이 주어졌을 때 ()를 제거하고 1,2를 반환한다.")
    @Test
    void subStringStartEndIndex() {
        assertThat("(1,2)".substring(1,4))
                .contains("1,2");
    }

    @DisplayName("[Success] abc 값이 주어졌을 때 0번째 문자를 가져온다.")
    @Test
    void getFirstIndexItem() {
        assertThat("abc".charAt(0))
                .isEqualTo('a');
    }

    // 예외 던지기 테스트하는 두 가지 방법
    @DisplayName("[Exception] 특정 위치의 문자를 가져올 때 위치 값을 벗어나면 예외를 던진다.")
    @Test
    void charAtIndexOutOfBoundsException() {
        assertThatThrownBy(() -> "abc".charAt(4))
                .isInstanceOf(IndexOutOfBoundsException.class)
                .hasMessageContaining("String index out of range: 4");
    }

    @DisplayName("[Exception] 특정 위치의 문자를 가져올 때 위치 값을 벗어나면 예외를 던진다2")
    @Test
    void charAtIndexOutOfBoundsExceptionAlternative() {
        assertThatExceptionOfType(IndexOutOfBoundsException.class)
                .isThrownBy(() -> "abc".charAt(4))
                .withMessageMatching("String index out of range: \\d+");
    }
}
```

# Set test

```java
public class SetTest {
    private Set<Integer> numbers;

    @BeforeEach
    void setUp() {
        numbers = new HashSet<>();
        numbers.add(1);
        numbers.add(1);
        numbers.add(2);
        numbers.add(3);
    }

    @DisplayName("[Success] set의 크기를 올바르게 반환한다.")
    @Test
    void returnCorrectSize() {
        assertThat(numbers.size())
                .isEqualTo(3);
    }

    @DisplayName("[Success] 1,1,2,3을 넣었을 때 1,2,3이 저장된다")
    @ParameterizedTest
    @ValueSource(ints = {1,2,3})
    void hasCorrectItems(int item) {
        assertThat(numbers.contains(item))
                .isTrue();
    }

    // 메소드 결과 값이 false인 경우도 테스트
    @DisplayName("[Success] 1,1,2,3을 넣었을 때 1,2,3이 저장된다2")
    @ParameterizedTest
    @CsvSource(value = {"1:true", "2:true", "3:true", "4:false", "5:false"}, delimiter = ':')
    void hasCorrectItems2(int item, Boolean expected) {
        assertThat(numbers.contains(item))
                .isEqualTo(expected);
    }
}
```

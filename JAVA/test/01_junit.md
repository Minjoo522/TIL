# Junit

- 자바 테스팅 프레임워크

## Annotations

| Annotation             | 📝                                                                                                                                                                                                                                     |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| @Test                  | 테스트 메소드라는 것을 알려주는 어노테이션                                                                                                                                                                                             |
| @ParameterizedTest     | - 다른 매개 변수에 대해 여러번 테스트 메소드를 실행할 수 있게 해주는 어노테이션<br />- 매개 변수들을 제공하는 적어도 하나의 소스를 제공해야 함                                                                                         |
| @RepeatedTest(int)     | - 특정한 횟수만큼 테스트를 반복할 수 있게 해주는 어노테이션<br />- 각 테스트는 @Test 메소드처럼 실행됨                                                                                                                                 |
| @TestFactory           | - 다이나믹 테스트를 위한 test factory임을 알려주는 어노테이션<br />- 다이나믹 테스트 : 런타임 동안 테스트가 생성되고 수행됨 ➡️ 프로그램이 수행되는 도중 동작 변경 가능<br />- Stream, Collection, Iterable, Iterator 를 return 해야 함 |
| @TestTemplate          | 테스트 케이스를 위한 템플릿을 작성할 때 사용하는 어노테이션                                                                                                                                                                            |
| @TestClassOrder        | - **@Nested 테스트 클래스**의 실행 순서를 설정할 수 있게 하는 어노테이션<br />- @Order 어노테이션이나 알파벳 순, 랜덤 등으로 순서 지정 가능                                                                                            |
| @TestMethodOrder       | - 테스트 **메소드**의 실행 순서를 설정할 수 있게 하는 어노테이션<br />- @Order 어노테이션이나 알파벳 순, 랜덤 등으로 순서 지정 가능                                                                                                    |
| @TestInstance          | - 테스트 인스턴스의 라이프사이클 설정할 수 있게 하는 어노테이션<br />- 라이프사이클에는 PER_METHOD, PER_CLASS가 있음                                                                                                                   |
| @DisplayName           | 테스트 클래스나 메소드에 커스텀 display 이름을 설정할 수 있게 하는 어노테이션                                                                                                                                                          |
| @DisplayNameGeneration | Display Name Generators를 사용할 수 있게 하는 어노테이션                                                                                                                                                                               |
| @BeforeEach            | 현재 클래스의 각각의 테스트 전에 수행되어야 하는 메소드에 붙이는 어노테이션                                                                                                                                                            |
| @AfterEach             | 현재 클래스의 각각의 테스트 후에 수행되어야 하는 메소드에 붙이는 어노테이션                                                                                                                                                            |
| @BeforeAll             | - 현재 클래스의 모든 테스트 전에 한 번 수행되어야 하는 메소드에 붙이는 어노테이션<br />- static으로 선언해야 함                                                                                                                        |
| @AfterAll              | - 현재 클래스의 모든 테스트 후에 한 번 수행되어야 하는 메소드에 붙이는 어노테이션<br />- static으로 선언해야 함                                                                                                                        |
| @Nested                | 중첩된 non-static(비정적) 테스트 클래스                                                                                                                                                                                                |
| @Tag                   | - 테스트 클래스, 메소드에 태그를 달 수 있게 하는 어노테이션<br />- 테스트 코드를 구분지어 태깅하고 원하는 태그만 필터링해서 테스트 할 수 있음                                                                                          |
| @Disabled              | 해당 테스트를 제외하고 싶을 때 사용하는 어노테이션                                                                                                                                                                                     |
| @Timeout               | 지정된 시간을 초과하면 fail이 되게 하는 어노테이션                                                                                                                                                                                     |
| @ExtendWith            | extension들을 선언적으로 등록할 때 사용하는 어노테이션                                                                                                                                                                                 |
| @RegisterExtension     | extension을 필드로 등록할 때 사용하는 어노테이션                                                                                                                                                                                       |
| @TempDir               | 임시 폴더 생성                                                                                                                                                                                                                         |

```java
// @TestClassOrder
@TestClassOrder(ClassOrderer.OrderAnnotation.class)
class OrderedNestedTestClassesDemo {

    @Nested
    @Order(1)
    class PrimaryTests {

        @Test
        void test1() {
        }
    }

    @Nested
    @Order(2)
    class SecondaryTests {

        @Test
        void test2() {
        }
    }
}

// @TestMethodOrder
@TestMethodOrder(OrderAnnotation.class)
class OrderedTestsDemo {

    @Test
    @Order(1)
    void nullValues() {
        // perform assertions against null values
    }

    @Test
    @Order(2)
    void emptyValues() {
        // perform assertions against empty values
    }

    @Test
    @Order(3)
    void validValues() {
        // perform assertions against valid values
    }
}
```

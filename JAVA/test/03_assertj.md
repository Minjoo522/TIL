# AssertJ

- 메소드 체이닝을 지원 ➡️ 깔끔하고 읽기 쉬운 테스트 코드를 작성 가능

```java
// assertj statically import
import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;

public class SimpleAssertionsExample {

  @Test
  void a_few_simple_assertions() {
    // 테스트를 통과해야 하는 객체를 assertThat의 파라미터로 넘겨줌
    // 메소드 체이닝을 통해 여러 assertions 호출
    assertThat("The Lord of the Rings").isNotNull()
                                       .startsWith("The")
                                       .contains("Lord")
                                       .endsWith("Rings");
  }

}
```

## as(String description, Object…​ args)

- 호출될 assertion의 설명을 세팅해 줌
- assertion을 호출하기 **전**에 세팅해야 함
- description이 null이면 NullPointerException 던짐

```java
TolkienCharacter frodo = new TolkienCharacter("Frodo", 33, Race.HOBBIT);

assertThat(frodo.getAge()).as("check %s's age", frodo.getName())
                          .isEqualTo(100);

// frodo의 나이는 33으로 실패
// 실패 메시지 아래와 같이 확인 가능함
//[check Frodo's age] expected:<100> but was:<33>
```

### Assertions.setPrintAssertionsDescription(true); : 각각의 assertion의 description을 세트로 출력할 수 있음

```java
// description consumer 등록
final StringBuilder descriptionReportBuilder = new StringBuilder(String.format("Assertions:%n"));

// descriptionReportBuilder + 각각의 description이 앞에 -- 추가되어 표시됨
Consumer<Description> descriptionConsumer = desc -> descriptionReportBuilder.append(String.format("-- %s%n", desc));

// use the description consumer for any following assertions descriptions.
Assertions.setDescriptionConsumer(descriptionConsumer);


TolkienCharacter frodo = new TolkienCharacter("Frodo", 33, Race.HOBBIT);
assertThat(frodo.getName()).as("check name")
                          .isEqualTo("Frodo");
assertThat(frodo.getAge()).as("check age")
                          .isEqualTo(33);

// get the report
String descriptionReport = descriptionReportBuilder.toString();

// 결과
// Assertions:
// -- check name
// -- check age
```

## 에러메시지 오버라이딩

- assertion 호출 전에 호출되어야 함

### withFailMessage()

```java
assertThat(frodo.getAge()).withFailMessage("should be %s", frodo)
                          .isEqualTo(sam);
```

### Lazy 에러메시지 오버라이딩

- 에러가 발생 했을 때만 에러메시지 생성하고 싶은 경우

```java
assertThat(player.isRookie()).overridingErrorMessage(() -> "Expecting Player to be a rookie but was not.")
                             .isTrue();

assertThat(player.isRookie()).withFailMessage(() -> "Expecting Player to be a rookie but was not.")
                             .isTrue();
```

## common assertion

| type                                                        |         assertion         | parameter                                                                             | 📝                                                                                                               |
| ----------------------------------------------------------- | :-----------------------: | ------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| <ASSERT extends AbstractAssert\<?,?>>ASSERT                 |       asInstanceOf        | InstanceOfAssertFactory<?,ASSERT> instanceOfAssertFactory                             | InstanceOfAssertFactory를 사용해 주어진 타입의 instance인지 확인                                                 |
| AbstractListAssert\<?,List<?>,Object,ObjectAssert\<Object>> |         asList()          |                                                                                       | List의 instance인지 확인                                                                                         |
| AbstractStringAssert<?>                                     |        asString()         |                                                                                       | toString()을 통한 String을 return                                                                                |
| SELF                                                        |        describedAs        | Description description                                                               | == as                                                                                                            |
| SELF                                                        |        doesNotHave        | Condition<? super ACTUAL> condition                                                   | - 주어진 값을 만족하지 않는지 확인<br />- isNot(condition)의 alias                                               |
| SELF                                                        |  doesNotHaveSameClassAs   | Object other                                                                          | 주어진 객체와 동일한 클래스가 아닌지 확인                                                                        |
| SELF                                                        | doesNotHaveSameHashCodeAs | Object other                                                                          | 주어진 객체와 동일한 해시코드가 아닌지 확인                                                                      |
| SELF                                                        |    doesNotHaveToString    | String otherToString                                                                  | toString()한 값이 주어진 String과 동일하지 않은지 확인                                                           |
| \<ASSERT extends AbstractAssert\<?,?>>ASSERT                |        extracting         | String propertyOrField, AssertFactory<Object,ASSERT> assertFactory                    | 주어진 필드/프로퍼티의 값을 추출 ➡️ 주어진 AssertFactory(타입)를 이용(필수 ❌) ➡️ 새로운 assertion object를 만듦 |
| \<T,ASSERT extends AbstractAssert<?,?>>ASSERT               |        extracting         | Function<? super ACTUAL,? extends T> extractor, AssertFactory<T,ASSERT> assertFactory | 주어진 함수를 통해 값을 추출                                                                                     |
| SELF                                                        |            has            | Condition<? super ACTUAL> condition                                                   | 주어진 조건에 만족하는지 확인                                                                                    |
| int                                                         |         hashCode          |                                                                                       | 항상 1을 리턴                                                                                                    |
| SELF                                                        |      hasSameClassAs       | Object other                                                                          | 주어진 객체와 같은 클래스인지 확인                                                                               |
| SELF                                                        |     hasSameHashCodeAs     | Object other                                                                          | 주어진 객체와 같은 해시코드인지 확인                                                                             |
| SELF                                                        |        hasToString        | String expectedToString                                                               | toString()한 값이 주어진 String과 동일한지 확인                                                                  |
| SELF                                                        |            is             | Condition<? super ACTUAL> condition                                                   | - 주어진 조건을 만족하는지 확인<br />- has의 alias                                                               |
| SELF                                                        |         isEqualTo         | Object expected                                                                       | 주어진 객체와 동일한지 확인                                                                                      |
| SELF                                                        |    isExactlyInstanceOf    | Class<?> type                                                                         | 주어진 타입의 완전한 인스턴스인지 확인                                                                           |
| SELF                                                        |           isIn            | Iterable<?> values                                                                    | 주어진 iterable에 존재하는지                                                                                     |
| SELF                                                        |           isIn            | Object... values                                                                      | 주어진 배열에 존재하는지                                                                                         |
| SELF                                                        |       isInstanceOf        | Class<?> type                                                                         | 주어진 타입의 인스턴스인지 확인                                                                                  |
| SELF                                                        |      isInstanceOfAny      | Class<?>... types                                                                     | 주어진 타입들 중 하나라도 실제 값의 클래스가 있는지 확인                                                         |
| \<T>SELF                                                    |  isInstanceOfSatisfying   | Class\<T> type, Consumer\<T> requirements                                             | 주어진 타입의 인스턴스이면서 주어진 Consumer 조건을 만족하는지 확인                                              |
| SELF                                                        |           isNot           | Condition<? super ACTUAL> conditio                                                    | 주어진 조건을 만족하지 않는지 확인                                                                               |
| SELF                                                        |         isNotNull         |                                                                                       | null이 아닌지 확인                                                                                               |
| SELF                                                        |          matches          | Predicate<? super ACTUAL> predicate                                                   | 주어진 predicate를 만족하는지 확인                                                                               |

```java
// asInstanceOf
Object string = "abc";
assertThat(string).asInstanceOf(InstanceOfAssertFactories.STRING).startsWith("ab");

// doesNotHaveSameClassAs
assertThat(1).doesNotHaveSameClassAs("abc");
assertThat(new ArrayList<String>()).doesNotHaveSameClassAs(new LinkedList<String>());

// doesNotHaveToString
assertThat(homer).doesNotHaveToString("Marge");

// extracting
assertThat(fellowshipOfTheRing).extracting(TolkienCharacter::getName) // 이름들만 가져옴
                               .doesNotContain("Sauron", "Elrond");

// extracting multiple values at once grouped in tuples
assertThat(fellowshipOfTheRing).extracting("name", "age", "race.name") // name, age, race.name 필드 값들을 가져옴 ➡️ 튜플 활용하여 여러 값 확인 가능
                               .contains(tuple("Boromir", 37, "Man"),
                                         tuple("Sam", 38, "Hobbit"),
                                         tuple("Legolas", 1000, "Elf"));

// isInstanceOfAny
assertThat("abc").isInstanceOfAny(String.class, Integer.class);

// isInstanceOfSatisfying
// 두번째 파라미터 = light saber color
Object yoda = new Jedi("Yoda", "Green");
Object luke = new Jedi("Luke Skywalker", "Green");

// Consumer Requirements
Consumer<Jedi> jediRequirements = jedi -> {
  assertThat(jedi.getLightSaberColor()).isEqualTo("Green");
  assertThat(jedi.getName()).doesNotContain("Dark");
};

assertThat(yoda).isInstanceOfSatisfying(Jedi.class, jediRequirements);
assertThat(luke).isInstanceOfSatisfying(Jedi.class, jediRequirements);

// matched
assertThat(player).matches(p -> p.isRookie());
```

# String/CharSequence assertions

| type |          assertion          | parameter                                            | 📝                                                                 |
| ---- | :-------------------------: | ---------------------------------------------------- | ------------------------------------------------------------------ |
| SELF |          contains           | CharSequence... values                               | 주어진 모든 값들을 포함하고 있는지                                 |
| SELF |          contains           | Iterable<? extends CharSequence> values              | 주어진 Iterable의 CharSequences를 모두 포함하고 있는지             |
| SELF |        containsAnyOf        | CharSequence... values                               | 주어진 값 중 하나라도 포함하고 있는지                              |
| SELF |    containsIgnoringCase     | CharSequence sequence                                | 주어진 값을 모두 포함하고 있는지 ➕ 대소문자 무시                  |
| SELF |  containsIgnoringNewLines   | CharSequence... values                               | 주어진 값을 모두 포함하고 있는지 ➕ 개행 무시                      |
| SELF | containsIgnoringWhitespaces | CharSequence... values                               | 주어진 값을 모두 포함하고 있는지 ➕ 공백 무시                      |
| SELF |      containsOnlyOnce       | CharSequence sequence                                | 한 번만 포함하고 있는지                                            |
| SELF |       containsPattern       | CharSequence regex                                   | 주어진 패턴을 만족하는지                                           |
| SELF |  containsPatternSatisfying  | CharSequence regex, Consumer<Matcher> matchSatisfies | 주어진 패턴을 만족한다면 매치하는 부분을 추가적인 검증             |
| SELF |      containsSequence       | CharSequence... values                               | 주어진 순서대로 포함되어 있는지 확인                               |
| SELF |     containsSubsequence     | CharSequence... values                               | 주어진 순서대로 포함되어 있는지 확인 ➕ 중간에 다른 값이 있어도 됨 |
| SELF |          endsWith           | CharSequence suffix                                  | 주어진 값으로 끝나는지                                             |
| SELF |        hasSameSizeAs        | CharSequence other                                   | 같은 크기인지                                                      |
| SELF |           hasSize           | int expected                                         | 주어진 사이즈와 같은지                                             |

```java
// containsPatternSatisfying
// .o(.o)을 만족하는 첫 번째 그룹(do)
assertThat("Frodo").containsPatternSatisfying(".o(.o)", matcher -> assertThat(matcher.group(1)).isEqualTo("do"));
```

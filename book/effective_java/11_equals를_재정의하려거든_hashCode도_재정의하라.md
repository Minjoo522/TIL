## equals를 재정의하려거든 hashCode도 재정의하라

> equals를 재정의한 클래스 모두에서 hashCode도 재정의해야 한다

- 재정의하지 않으면 hashCode 일반 규약을 어기게 되어 HashMap이나 HashSet 같은 컬렉션의 원ㅅ노로 사용할 때 문제를 일으킬 것이다

### 관련 규약

- equals 비교에 사용되는 정보가 변경되지 않았다면, 애플리케이션이 실행되는 동안 그 객체의 hashCode 메서드는 몇 번을 호출해도 일관되게 같은 값을 반환해야 한다
  - 애플리케이션을 다시 실행한다면 달라져도 상관 없다
- equals가 두 객체를 같다고 판단했다면, 두 객체의 hashCode는 똑같은 값을 반환해야 한다
- equals가 두 객체를 다르다고 판단했더라도, 두 객체의 hashCode가 서로 다른 값을 반환할 필요는 없다
  - 다른 객체에 대해서는 다른 값을 반환해야 해시테이블의 성능이 좋아진다

> 논리적으로 같은 객체는 같은 해시코드를 반환해야 한다

### 좋은 hashCode 작성 요령

1. int 변수 result를 선언한 후 값 c로 초기화한다
   - c : 해당 객체의 첫 번째 핵심 필드를 단계 2.a 방식으로 계산한 해시코드
   - 핵심 필드 : equals 비교에 사용되는 필드
2. 해당 객체의 나머지 핵심 필드 f 각각에 대해 다음 작업을 수행
   - a. 해당 필드의 해시코드 c를 계산
     - 기본 타입 필드라면, `Type.hashCode(f)`를 수행(Type은 기본 타입의 박싱 클래스)
     - 참조 타입 필드 + 이 클래스의 equals 메서드가 이 필드의 equals를 재귀적으로 호출해 비교 ➡️ 이 필드의 hashCode를 재귀적으로 호출
       - 계산이 복잡해질 것 같으면, 표준형을 만들어 그 표준형의 hashCode를 호출
       - null이면 0을 사용
     - 필드가 배열, 핵심 원소 각각을 별도 필드처럼 다룬다
       - 핵심 원소가 하나도 없다면 단순히 상수(0 추천)를 사용한다.
       - 모든 원소가 핵심 원소라면 `Arrays.hashCode`를 사용한다
   - b. 해시코드 c로 result를 갱신한다
     - `result = 31 * result + c`(31? 홀수이면서 소수(prime)이기 때문)
       - 시프트 연산과 뺄셈으로 대체해 최적화 가능
       - 31 \* i == `(i << 5) - i`
3. result를 반환한다

- 파생 필드는 해시코드 계산에서 제외해도 된다
- equals 비교에 사용되지 않은 필드는 `반드시` 제외해야 한다

```java
@Override
public int hashCode() {
    int result = Short.hashCode(areaCode);
    result = 31 * result + Short.hashCode(prefix);
    result = 31 * result + Short.hashCode(lineNum);
    return result;
}
```

- Objects `hash` 메서드
  - 속도는 더 느리다
  - 입력 인수를 담기 위한 배열이 만들어지고, 기본 타입이 있다면 박싱, 언박싱도 거쳐야 하기 때문에
  - 성능에 민감하지 않은 상황에서만 사용

```java
@Override
public int hashCode() {
    return Objects.hash(lineNum, prefix, areaCode);
}
```

- 클래스가 불변이고 해시코드를 계산하는 비용이 클 때
  - 캐싱 방식 고려
  - 인스턴스가 만들어질 때 해시코드를 계산해 둠

```java
private int hashCode; // 자동으로 0으로 초기화

@Override
public int hashCode() {
    int result = hashCode;
    if (result == 0) {
        result = Short.hashCode(areaCode);
        result = 31 * result + Short.hashCode(prefix);
        result = 31 * result + Short.hashCode(lineNum);
        hashCode = result;
    }
    return result;
}
```

- 성능을 높인다고 해시코드를 계산할 때 핵심 필드를 생략해서는 안 된다
  - 해시 품질이 나빠져 해시테이블 성능을 심각하게 떨어뜨릴 수 있다
  - 수많은 인스턴스가 단 몇 개의 해시코드로 집중되어 해시테이블의 속도가 선형으로 느려질 것이다
- hashCode가 반환하는 값의 생성 규칙을 API 사용자에게 자세히 공표하지 말자
  - 클라이언트가 이 값에 의지하지 않게 되고, 추후에 계산 방식을 바꿀 수도 있다

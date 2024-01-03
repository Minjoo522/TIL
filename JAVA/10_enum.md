# 열거 타입

- enumeration type
- 한정된 값만을 갖는 타입

## 열거 타입 선언

- 열거 타입의 이름으로 소스 파일(.java)를 생성
- 열거 타입 이름 : UpperCamelCase
- public enum 열거타입이름 { 열거상수1, 열거상수2, ... }

```java
// 📂 Week.java
public enum Week {
    MONDAY,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY,
    SUNDAY
}
```

### 열거 타입 변수

- 열거타입 변수;
- 열거타입 변수 = 열거타입.열거상수;
- 참조 타입이기 때문에 null 저장 가능

```java
Week today = Week.WEDNESDAY;
System.out.println(today); // WEDNESDAY
System.out.println(today == Week.WEDNESDAY); // true, 참조 타입이므로 번지수 동일
```

# Singleton

- 인스턴스를 오직 하나만 생성할 수 있는 클래스
- mock 객체를 만들 수 없어 테스트하기가 어려움

## public static 방식

- 모든 인스턴스 필드를 transient 선언하고 readResolve 메서드를 제공하지 않으면 역직렬화할 때 마다 새로운 인스턴스 생성됨

### public static final 필드

- 해당 클래스가 싱글턴임이 API에 명백히 드러남
- 클라이언트가 리플렉션 API인 AccessibleObject.setAccessible을 사용해 private 생성자를 호출할 수 있음
  - 생성자를 통해 두 번째 객체가 생성되려 할 때 예외 던지기

### public static 정적 팩터리 메서드

- API를 바꾸지 않고도 싱글턴이 아니게 변경 가능
- 정적 팩터리를 제네릭 싱글턴 팩터리로 만들 수 있음
- 정적 팩터리의 메서드 참조를 supplier로 사용할 수 있음

## enum 타입 싱글턴(✨)

- 원소가 하나인 열거 타입 선언
- Enum 외의 클래스를 상속해야 하는 경우 사용 ❌
  - 다른 인터페이스 구현하도록 선언은 가능

```java
public enum EnumSingleton {
    // 인스턴스 하나만 생성 가능
    INSTANCE;

    public String getValue() {
        return "enum 타입 싱글톤";
    }
}
```

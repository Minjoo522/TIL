## finalizer와 cleaner 사용을 피하라

- `finalizer`는 예측할 수 없고, 상황에 따라 위험할 수 있어 일반적으로 불필요하다
- `cleaner`는 `finalizer`보다는 덜 위험하지만, 여전히 예측할 수 없고, 느리고, 일반적으로 불필요하다
- `finalizer`와 `cleaner`는 바로 수행된다는 보장이 없다
  - 제 때 실행되어야 하는 작업은 절대 할 수 없다
- 어떤 스레드가 `finalizer`를 수행할지 알 수 없다
  - 우선 순위가 낮으면 실행되지 않을 수 있다
- `cleaner`는 자신을 수행할 스레드를 제어할 수 있지만 즉각 수행되리라는 보장은 없다
  - 백그라운드에서 수행, 가비지 컬렉터의 통제 하에 있기 때문에
- 상태를 영구적으로 수정하는 작업에서는 절대 `finalizer`나 `cleaner`에 의존해서는 안된다
- `System.gc`, `System.runFinalization` 메서드는 `finalizer`와 `cleaner`가 실행될 가능성을 높여주나, **보장해주지 않는다**
- `finalizer` 동작 중 발생한 예외는 무시되며, 처리할 작업이 남았더라도 그 순간 종료된다
- `finalizer`는 가비지 컬렉터의 효율을 떨어뜨려서 심각한 성능 문제도 동반한다
  - `clarner`도 클래스의 모든 인스턴스를 수거하는 형태로 사용하면 성능은 `finalizer`와 비슷하다
- `finalizer`를 사용한 클래스는 `finalizer` 공격에 노출되어 심각한 보안 문제를 일으킬 수도 있다
  - 정적 필드에 자신의 참조를 할당하여 가비지 컬렉터가 수집하지 못하게 막을 수 있다
  - 객체 생성을 막으려면 생성자에서 예외를 던지는 것만으로 충분하지만, `finalizer`가 있다면 그렇지 않다

## 대안

- `AutoCloseable`을 구현, 클라이언트에서 인스턴스를 다 쓰고 나면 `close` 메서드를 호출
- 각 인스턴스는 자신이 닫혔는지를 추적하는 것이 좋다
  - `close` 메서드에서 이 객체는 더 이상 유효하지 않음을 필드에 기록, 다른 메서드는 이 필드를 검사해서 객체가 닫힌 후에 불렸다면 `IllegalStateExeption`을 던짐

## 안전망으로서의 finalizer, cleaner

- 자원의 소유자가 `close` 메서드를 호출하지 않는 것에 대비
- 즉시 호출되리라는 보장은 없지만, 클라이언트가 하지 않은 자원 회수를 늦게라도 해줌
- 그럴만한 값어치가 있는지 심사숙고하자

## 네이티브 피어와 연결된 객체에서 사용

- 네이티브 피어 : 일반 자바 객체가 네이티브 메서드를 통해 기능을 위임한 네이티브 객체
- 네이티브 피어는 자바 객체가 아니니 가비지 컬렉터는 그 존재를 알지 못한다
  - 자바 피어를 회수할 때 네이티브 객체까지 회수하지 못한다
  - 성능 저하를 감당할 수 있고, 네이티브 피어가 심각한 자원을 갖고 있지 않을 때만

```java
public class Room implements AutoCloseable {
    private static final Cleaner cleaner = Cleaner.create();

    // 절대 Room을 참조하면 안된다 ➡️ 순환참조
    private static class State implements Runnable {
        int numJunkPiles; // 방 안의 쓰레기 수

        public State(int numJunkPiles) {
            this.numJunkPiles = numJunkPiles;
        }

        // 1. Room의 close 메서드를 호출할 때
        //    close 메서드에서 Cleanable의 clean을 호출 ➡️ 이 메서드 안에서 run 호출
        // 2. 가비지 컬렉터가 Room을 회수할 때까지 클라이언트가 close를 호출하지 않으면 cleaner가 State의 run 호출
        @Override
        public void run() {
            System.out.println("방 청소");
            numJunkPiles = 0;
        }
    }

    private final State state;

    // cleaner에 Room과 State를 등록할 때 얻는다
    private final Cleaner.Cleanable cleanable;

    public Room(int numJunkPiles) {
        state = new State(numJunkPiles);
        cleanable = cleaner.register(this, state);
    }

    @Override
    public void close() {
        cleanable.clean();
    }
}
```

- `Room`의 `cleaner`는 단지 안전망으로만 쓰였다
  - 클라이언트가 모든 `Room` 생성을 try-with-resource 블록으로 감쌌다면 자동 청소는 전혀 필요하지 않다

```java
public class Adult {
    public static void main(String[] args) {
        try (Room myRoom = new Room(7)) {
            System.out.println("안녕~");
        }
    }
}
```

```bash
안녕~
방 청소
```

```java
public class Teenager {
    public static void main(String[] args) {
        new Room(99);
        System.out.println("아무렴");
    }
}
```

```bash
아무렴
# 방 청소는 출력되지 않음
```

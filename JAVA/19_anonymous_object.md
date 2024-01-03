# 익명 객체

- 클래스 이름이 없는 객체
- 어떤 클래스를 상속
- 인터페이스 구현

## 익명 자식 객체

- 특정 위치에서만 사용할 때
- 생성자를 선언할 수 없다
- 외부에서는 부모 타입에 선언된 것만 사용 가능

```java
// 📂 Parent.java
public class Parent {
    void method() {
        System.out.println("부모 클래스 메소드");
    }
}
```

```java
// 📂 Anonymous.java
public class Anonymous {
    // 필드에 대입
    Parent field = new Parent() {
        @Override
        void method() {
            System.out.println("필드 : 익명 클래스 오버라이딩");
        }

        // 외부에서 사용 ❌
        void methodChild() {
            System.out.println("필드 : 익명 클래스");
        }
    }; // 실행문이므로 세미콜론 필요

    // 로컬 변수값
    void methodAnonymous1() {
        Parent localVal = new Parent() {
            @Override
            void method() {
                System.out.println("로컬 변수 : 익명 클래스 오버라이딩");
            }

            // 외부에서 사용 ❌
            void methodChild() {
                System.out.println("로컬 변수 : 익명 클래스");
            }
        };
        localVal.method();
        // localVal.methodChild(); 호출 ❌
    }

    void methodAnonymous2(Parent parent) {
        parent.method();
    }
}
```

```java
// 📂 main 함수 내부
Anonymous anonymous = new Anonymous();

// 필드
anonymous.field.method(); // 필드 : 익명 클래스 오버라이딩
// anonymous.field.methodChild(); 호출 ❌

// 로컬 변수
anonymous.methodAnonymous1(); // 로컬 변수 : 익명 클래스 오버라이딩

// 매개 변수
anonymous.methodAnonymous2(new Parent() {
    @Override
    void method() {
        System.out.println("매개 변수 : 익명 클래스 오버라이딩");
    }

    // 외부에서 사용 ❌
    void methodChild() {
        System.out.println("매개 변수 : 익명 클래스");
    }
});
// 매개 변수 : 익명 클래스 오버라이딩
```

## 익명 구현 객체

- 인터페이스에 선언된 모든 추상 메소드의 실체 메소드를 작성해야 함
- 필드와 메소드 추가 선언 가능 ➡️ 실체 메소드에서만 사용 가능, 외부에서 사용 불가

```java
// 📂 InterfaceA.java
public interface InterfaceA {
    public void method();
}
```

```java
// 📂 Anonymous.java
public class Anonymous {
    // 필드
    InterfaceA field = new InterfaceA() {
        @Override
        public void method() {
            System.out.println("필드");
        }
    };

    // 로컬 변수
    void method1() {
        InterfaceA localVal = new InterfaceA() {
            @Override
            public void method() {
                System.out.println("로컬 변수");
            }
        };

        localVal.method();
    }

    void method2(InterfaceA interfaceA) {
        interfaceA.method();
    }
}
```

```java
// 📂 main 함수 내부
Anonymous anonymous = new Anonymous();

// 필드
anonymous.field.method();

// 로컬 변수
anonymous.method1();

// 매개 변수
anonymous.method2(new InterfaceA() {
  @Override
  public void method() {
      System.out.println("매개 변수");
  }
});
```

### 익명 객체 - 메소드 로컬 변수, 매개 변수

- 익명 스레드 객체 사용 ➡️ 메소드 종료 후에도 실행 상태로 존재 가능
- 메소드 매개 변수나 로컬 변수는 메소드 실행이 끝나면 스택 메모리에서 사라짐
- ➡️ 컴파일 시, 익명 객체에서 사용하는 매개 변수나 로컬 변수 값을 익명 객체 내부에 복사하여 사용
  - 매개 변수, 로컬 변수 수정 ➡️ 익명 객체에 복사해 둔 값과 달라짐
  - 매개 변수, 로컬 변수 final 선언 요구
  - 자바 8 이후, final 키워드 없어도 final 특성을 부여

```java
// 📂 Summable.md
public interface Summable {
    public int sum();
}
```

```java
// 📂 Anonymous.java
public class Anonymous {
    private int field;

    public void method(final int a, int b) {
        final int x = 0;
        int y = 0;

        field = 1;

        // final이 있어도 없어도 final의 특성이 부여됨
        // a = 2;
        // b = 2;
        // x = 2;
        // x = 2;

        Summable sum = new Summable() {
            @Override
            public int sum() {
                int result = field + a + b + x + y;
                return result;
            }
        };

        System.out.println(sum.sum());
    }
}
```

```java
// 📂 main 함수 내부
Anonymous anonymous = new Anonymous();
anonymous.method(1, 2); // 4 ➡️ 1 + 1 + 2 + 0 + 0
```

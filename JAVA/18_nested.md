# 중첩 클래스

- 클래스 내부에 선언한 클래스
- 두 클래스의 멤버들을 쉽게 접근 가능
- 불필요한 관계 클래스 감춤 ➡️ 코드의 복잡성을 줄일 수 있음
- 멤버 클래스 : 클래스의 멤버로 선언
- 로컬 클래스 : 생성자나 메소드 내부에서 선언 / 메소드 실행할 때만 사용
- 바이트 코드 파일(.class) 별도 생성
  - 멤버 클래스 : outer클래스 $ 멤버클래스.class
  - 로컬 클래스 : outer클래스 $1 로컬클래스.class

## 멤버 클래스

### 인스턴스 멤버 클래스

- static 키워드 없이 선언된 클래스
- 정적 필드, 정적 메소드 선언 불가
- 바깥 클래스 내부 : 일반 클래스처럼 인스턴스 멤버 클래스 객체 생성 가능
- 바깥 클래스 외부 : 바깥 클래스 객체를 먼저 생성하고 인스턴스 멤버 클래스 객체를 생성해야 함
- 바깥 클래스 외부에서 인스턴스 멤버 클래스를 생성하는 일은 거의 없음

### 정적 멤버 클래스

- static 키워드로 선언된 클래스
- 모든 종류의 필드, 메소드 선언 가능
- 바깥 클래스 외부 : 바깥 클래스 객체 생성할 필요 없음

## 로컬 클래스

- 메소드 내부에 선언된 클래스
- 접근 제한자 + static 사용 불가 : 메소드 내부에서만 사용 ➡️ 접근 제한할 필요 없음
- 인스턴스 필드, 메소드만 선언 가능 / 정적 필드, 메소드 선언 ❌
- 메소드가 실행될 때 메소드 내에서 객체를 생성하고 사용
- 비동기 처리를 위해 스레드 객체를 만들 때 주로 사용

```java
// 📂 A.java
public class A {
    A() {
        System.out.println("A 객체 생성");
    }

    // 인스턴스 멤버 클래스
    class B {
        int field1;
        // static int filed2; 정적 필드 선언 ❌

        B() {
            System.out.println("B 객체 생성");
        }
        void method1() {};
        // static void method2(); 정적 메소드 선언 ❌
    }

    // 정적 멤버 클래스
    static class C {
        int field1;
        static int field2;

        C() {
            System.out.println("C 객체 생성");
        }
        void method1() {};
        static void method2() {};
    }

    void method() {
        // 로컬 클래스
        class D { // 접근 제한자 필요 ❌
            int field1;
            // static int field2;

            D() {
                System.out.println("D 객체 생성");
            }
            void method1() {};
            // static void method2() {};
        }
        // 메소드 내부에서 생성 후 사용해야 함
        D d = new D();
        d.field1 = 3;
        d.method1();
    }
}
```

```java
// 📂 main 함수 내부
A a = new A();

// 인스턴스 멤버 클래스
// A 클래스를 먼저 생성해야 함
A.B b = a.new B();
b.field1 = 2;
b.method1();

// 정적 멤버 클래스
// A 클래스 생성할 필요 ❌
A.C c = new A.C();
c.field1 = 2;
c.method1();
// C 클래스의 정적 필드, 메소드 접근
A.C.field2 = 3;
A.C.method2();

// 로컬 클래스 객체 생성을 위해 A 클래스의 메소드 호출
a.method();
```

## 접근 제한

### 바깥 클래스 ➡️ 인스턴스 멤버 클래스 사용시 제한

- 바깥 클래스 인스턴스 필드의 초기값으로 객체 생성 👌
- 바깥 클래스 인스턴스 메소드에서 객체 생성 👌
- 정적 필드, 메소드에서 ❌
- 정적 멤버 클래스 : 모두 👌

```java
public class A {
    // 인스턴스 필드
    B field1 = new B();
    C field2 = new C();
    // 정적 필드
    // static B field3 = new B(); ❌
    static C field4 = new C();

    // 인스턴스 메소드
    void method1() {
        B var1 = new B();
        C var2 = new C();
    }

    // 정적 메소드
    static void method2() {
        // B var1 = new B(); ❌
        C var2 = new C();
    }

    // 인스턴스 멤버 클래스
    class B {}

    // 정적 멤버 클래스
    static class C {}
}
```

### 멤버 클래스 ➡️ 바깥 클래스 필드, 메소드 접근 제한

- 인스턴스 멤버 클래스 : 바깥 클래스의 모든 필드, 메소드 접근 👌
- 정적 멤버 클래스 : 바깥 클래스의 정적 필드, 메소드에만 접근 가능 / 인스턴스 필드, 메서드 접근 ❌

```java
public class A {
    int field1;
    static int filed2;

    void method1() {};
    static void method2() {};

    // 인스턴스 멤버 클래스 - 모든 필드, 메소드 접근 가능
    class B {
        void method() {
            field1 = 1;
            method1();

            filed2 = 2;
            method2();
        }
    }

    // 정적 멤버 클래스 - 정적 필드, 메소드만 접근 가능
    static C {
        void method() {
            // 인스턴스 필드, 메소드 접근 불가
            // field1 = 1;
            // method1();

            // 정적 필드, 메소드에만 접근 가능
            filed2 = 2;
            method2();
        }
    }
}
```

### 로컬 클래스 ➡️ 메소드 매개 변수, 로컬 변수 접근 제한

- 로컬 스레드 객체 사용 : 메소드가 종료되어도 계속 실행 상태로 존재 가능
  - 로컬 클래스에서 사용하는 매개 변수, 로컬 변수의 값을 로컬 클래스 내부에 복사해두고 사용
  - 매개 변수, 로컬 변수 수정으로 값이 변경 ➡️ 로컬 클래스에 복사해둔 값과 달라짐
  - 매개 변수, 로컬 변수 final로 선언할 것을 요구
  - 자바 8 ~ : final 선언을 하지 않아도 final의 특성을 부여

```java
public class A {
    public void method(int arg) {  // ✅ arg : final의 특성을 가짐
        int localVar = 1; // ✅ final의 특성을 가짐

        class B {
            public void method() {
                int result = arg + localVar;
            }
        }
    }
}
```

### 바깥클래스.this.

- 중첩 클래스에서 this 키워드 : 중첩 클래스의 객체 참조
- 바깥 클래스의 객체 참조 : 바깥클래스.this.

```java
// 📂 Outer.java
public class Outer {
    String field = "바깥 클래스 필드";

    void method() {
        System.out.println("바깥 클래스 메소드");
    }

    // 중첩 클래스
    class Nested {
        String field = "중첩 클래스 필드";

        void method() {
            System.out.println("중첩 클래스 메소드");
        }

        void print() {
            System.out.println(this.field);
            this.method();

            System.out.println(Outer.this.field);
            Outer.this.method();
        }
    }
}
```

```java
// 📂 main 함수 내부
Outer outer = new Outer();
Outer.Nested nested = outer.new Nested();

nested.print();
/*
* 중첩 클래스 필드
* 중첩 클래스 메소드
* 바깥 클래스 필드
* 바깥 클래스 메소드
*/
```

# 중첩 인터페이스

- 클래스 내부에 선언하는 인터페이스
- 클래스와 긴밀한 관계를 맺는 구현 클래스를 만들기 위해 사용
- 인스턴스, 정적 멤버 인터페이스 모두 가능
- 인스턴스 멤버 인터페이스 : 바깥 클래스의 객체가 있어야 사용 가능
- 정적 멤버 인터페이스 : 바깥 클래스의 객체 없이 접근 가능 / 많이 사용

```java
// 📂 Button.java
public class Button {
    OnClickListener listener;

    void setOnClickListener(OnClickListener listener) {
        this.listener = listener;
    }

    void click() {
        listener.onClick();
    }

    // 인터페이스 선언
    // Button 클래스와 긴밀한 관계를 맺고 있음
    static interface OnClickListener {
        void onClick();
    }
}
```

```java
// 📂 CallListener.java
// Button 클래스의 중첩 인터페이스 OnClickListener의 실체 클래스
public class CallListener implements Button.OnClickListener {
    @Override
    public void onClick() {
        System.out.println("📞 전화를 겁니다");
    }
}
```

```java
// 📂 MessageListener.java
// Button 클래스의 중첩 인터페이스 OnClickListener의 실체 클래스
public class MessageListener implements Button.OnClickListener{
    @Override
    public void onClick() {
        System.out.println("💬 메시지를 보냅니다");
    }
}
```

```java
// 📂 main 함수 내부
Button button = new Button();

button.setOnClickListener(new CallListener());
button.click(); // 📞 전화를 겁니다

button.setOnClickListener(new MessageListener());
button.click(); // 💬 메시지를 보냅니다
```

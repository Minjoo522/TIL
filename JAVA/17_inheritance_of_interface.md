# 인터페이스 상속

- 다중 상속 허용
- extends 키워드

```java
// 📂 InterfaceA.java
public interface InterfaceA {
    public void method1();
}
```

```java
// 📂 InterfaceB.java
public interface InterfaceB {
    public void method2();
}
```

```java
// 📂 InterfaceChild.java
public interface InterfaceChild extends InterfaceA, InterfaceB{
    public void method3();
}
```

```java
// 📂 Implementation.java
// ✨ 실체 클래스
public class Implementation implements InterfaceChild{
    public void method1() { // InterfaceA 실체 메소드
        System.out.println("메소드1");
    }

    public void method2() { // InterfaceB 실체 메소드
        System.out.println("메소드2");
    }

    public void method3() { // InterfaceChild 실체 메소드
        System.out.println("메소드3");
    }
}
```

```java
// 📂 main 함수 내부
Implementation implementation = new Implementation();

InterfaceA interfaceA = implementation;
interfaceA.method1(); // method1만 호출 가능

InterfaceB interfaceB = implementation;
interfaceB.method2(); // method2만 호출 가능

InterfaceChild interfaceChild =implementation;
// method 셋 다 호출 가능
interfaceChild.method1();
interfaceChild.method2();
interfaceChild.method3();
```

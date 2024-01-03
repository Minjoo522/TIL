# 추상 클래스

- 실체 간에 공통되는 특성을 추출한 것
- 공통된 필드와 메소드의 이름을 통일
- 실체 클래스 작성시 시간 절약
- 설계 규격
- abstract 키워드 - new 연산자 이용하지 못하고 상속을 통해 자식 클래스만 만들 수 있음
- 부모 클래스로만 사용됨

```java
// 📂 Animal.java
public abstract class Animal { // abstract 선언
    public String name;

    public Animal(String name) {
        this.name = name;
    }

    public void eat() {
        System.out.println("먹어요");
    }

    public void sleep() {
        System.out.println("자요");
    }
}
```

```java
// 📂 Tiger.java
public class Tiger extends Animal{
    public Tiger(String name) {
        super(name);
    }

    public void hunt() {
        System.out.println("사냥해요");
    }
}
```

```java
// 📂 main 함수 내부
//Animal animal = new Animal() // ❌ 객체 생성 불가

Tiger tiger = new Tiger("티거");

tiger.eat();
tiger.sleep();
tiger.hunt();
```

## 추상 메소드

- abstract 키워드와 함께 메소드의 선언부만 있고 실행 내용인 중괄호가 없는 메소드
- 자식 클래스가 반드시 실행 내용을 채우도록 강제하고 싶은 경우 선언

```java
// 📂 Animal.java
public abstract class Animal { // abstract 선언
    public String name;

    public Animal(String name) {
        this.name = name;
    }

    public abstract void sound(); // 추상 메소드
}
```

```java
// 📂 Tiger.java
public class Tiger extends Animal{
    public Tiger(String name) {
        super(name);
    }

    @Override
    public void sound() { // 반드시 자식 클래스에서 오버라이딩 해주어야 함
        System.out.println("어흥");
    }
}
```

# 인터페이스

- 객체의 사용 방법을 정의한 타입
- 개발 코드와 객체가 서로 통신하는 접점
- 개발 코드는 객체의 내부 구조를 알 필요 없고 인터페이스의 메소드만 알면됨
- 개발 코드를 수정하지 않고 사용하는 객체를 변경 가능
- 코드 변경없이 실행 내용과 리턴값을 다양화
- interface 키워드 사용
- 상수 필드, 추상 메소드만을 구성 멤버로 가짐

## 상수 필드 선언

- 인스턴스, 정적 필드 선언 불가
- 상수는 인터페이스에 고정된 값으로 실행 시에 데이터를 바꿀 수 없음
- 인터페이스에 선언된 필드는 public static final을 생략해도 컴파일 과정에서 자동으로 붙음
- 🚨 선언과 동시에 초기값을 지정해야 함

```java
public interface Dice {
  public int MIN = 1;
  public int MAX = 6;
}
```

## 추상 메소드 선언

- 인터페이스를 통해 호출된 메소드는 최종적으로 객체에서 실행 ➡️ 추상 메소드로 선언
- public abstract 생략해도 컴파일 과정에서 자동으로 붙음

```java
public interface RemoteControl {
    public int MAX_TEMP = 26;
    public int MIN_TEMP = 16;

    public void powerOn();
    public void powerOff();
    public void setTemperature(int temperature);
}
```

## 구현 클래스

- implements 키워드, 인터페이스 이름 명시
- 인터페이스에 선언된 추상 메소드의 실체 메소드를 선언

```java
public class AirConditioner implements RemoteControl{
    private int temperature;

    // 추상 메소드의 실체 메소드 선언
    public void powerOn() {
        System.out.println("에어컨을 켭니다");
    }

    public void powerOff() {
        System.out.println("에어컨을 끕니다");
    }

    public void setTemperature(int temperature) {
        if (temperature>RemoteControl.MAX_TEMP) { // 인터페이스 상수 사용
            this.temperature = RemoteControl.MAX_TEMP;
        } else if (temperature<RemoteControl.MIN_TEMP) {
            this.temperature = RemoteControl.MIN_TEMP;
        } else {
            this.temperature = temperature;
        }
        System.out.println("현재 온도는 " + temperature + "도입니다.");
    }
}
```

## 다중 인터페이스 구현 클래스

```java
// 📂 ControlButton.java
public interface ControlButton {
    void powerOn();
    void powerOff();
}
```

```java
// 📂 Payment.java
public interface Payment {
    void pay(int price);
}
```

```java
// 📂 Kiosk.java
public class Kiosk implements ControlButton, Payment{
    public void powerOn() {
        System.out.println("키오스크를 킵니다.");
    }

    public void powerOff() {
        System.out.println("키오스크를 끕니다.");
    }

    public void pay(int price) {
        System.out.println(price + "원을 결제합니다.");
    }
}
```

## 인터페이스 사용

- 구현 객체를 인터페이스 변수에 대입해서 사용

```java
// 📂 Animal.java
// 인터페이스
public interface Animal {
    void eat();
    void sleep();
}
```

```java
// 📂 Cat.java
public class Cat implements Animal{
    public void eat() {
        System.out.println("🐈 고양이가 먹어요");
    }
    public void sleep() {
        System.out.println("🐈 고양이가 자요");
    }
}
```

```java
// 📂 Dog.java
public class Dog implements Animal{
    public void eat() {
        System.out.println("🐶 강아지가 먹어요");
    }

    public void sleep() {
        System.out.println("🐶 강아지가 자요");
    }
}
```

```java
// 📂 MyClass.java
public class MyClass {
    // 1. 필드로 선언
    Animal animal = new Cat();

    MyClass() {}

    // 2. 생성자의 매개 변수로 선언
    MyClass(Animal animal) {
        this.animal = animal;
        animal.eat();
        animal.sleep();
    }

    // 3. 로컬 변수로 선언
    void method1() {
        Animal animal = new Dog();
        animal.eat();
        animal.sleep();
    }

    // 4. 메소드의 매개 변수로 선언
    void method2(Animal animal) {
        animal.eat();
        animal.sleep();
    }
}
```

```java
// 📂 main 함수 내부
MyClass myClass1 = new MyClass();
myClass1.animal.eat(); // 1. 필드로 선언된 cat
myClass1.animal.sleep();

System.out.println("---------------------");

// 2. 생성자의 매개 변수 dog
MyClass myClass2 = new MyClass(new Dog());

System.out.println("---------------------");

// 3. 로컬 변수 dog
MyClass myClass3 = new MyClass();
myClass3.method1();

System.out.println("---------------------");

// 4. 메소드의 매개 변수 cat
MyClass myClass4 = new MyClass();
myClass4.method2(new Cat());
/*
* 🐈 고양이가 먹어요
* 🐈 고양이가 자요
* ---------------------
* 🐶 강아지가 먹어요
* 🐶 강아지가 자요
* ---------------------
* 🐶 강아지가 먹어요
* 🐶 강아지가 자요
* ---------------------
* 🐈 고양이가 먹어요
* 🐈 고양이가 자요
*/
```

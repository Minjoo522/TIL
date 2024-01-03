# 클래스

## 객체 지향 프로그래밍(OOP: Object-Oriented Programming)

- 객체 : 물리적으로 존재하거나 추상적으로 생각할 수 있는 것 중에서 자신의 속성을 가지고 있으면서 식별 가능한 것
- 객체 - 속성(필드), 동작(메소드)
- 클래스 : 설계도
- 인스턴스 : 클래스로부터 만들어진 객체

### 객체 간의 관계

1. 집합 관계 : 부품과 구성품
2. 사용 관계 : 객체 간의 상호작용
3. 상속 관계 : 부모 객체를 기반으로 자식 객체를 생성

## 클래스 선언

### 식별자 작성 규칙

- 하나 이상의 문자로 이루어져야 함
- 첫 글자에 숫자가 올 수 없음
- $, \_ 외의 특수문자는 사용할 수 없음
- 자바 키워드는 사용할 수 없음

### 클래스 이름.java로 소스 파일 생성 / 일반적으로 소스 파일당 하나의 클래스를 선언하지만 2개 이상의 클래스 선언도 가능

## 객체 생성

- new 클래스();
- new 연산자로 생성된 객체는 메모리 힙 영역에 생성후 객체의 번지를 리턴
- 참조 타입인 클래스 변수에 저장하면 변수를 통해 객체 사용 가능

```java
// 📂 Animal.java
public class Animal {
  // 파일명과 동일한 class만 public 접근 제한자 사용 가능
}

// 📂 main 함수 내부
Animal animal1;
animal1 = new Animal();

// 선언과 동시에 객체 생성
Animal animal2 = new Animal();

System.out.println(animal1 == animal2); // false
// animal1과 animal2가 참조하는 Animal 객체는 완전히 독립된 다른 객체
```

## 클래스 구성 요소 - 필드, 생성자, 메소드

- 필드 : 객체의 데이터가 저장되는 곳(생성자와 메소드 전체에서 사용, 객체가 소멸되지 않은 한 객체와 함께 존재)
- 생성자 : new 연산자로 호출되는 블록 / 생성시 초기화 담당 / 클래스 이름 / 리턴 타입이 없음
- 메소드 : 객체의 동작 / 객체 간의 데이터를 전달하는 수단

## 필드

- 객체의 고유 데이터
- 객체가 가져야 할 부품
- 객체의 현재 상태 데이터
- 타입 필드 (= 초기값);
- 초기값이 지정되지 않은 필드는 기본 초기값으로 설정됨

```java
// 📂 User.java
public class User {
    // 필드
    String name = "Amy";
    String gender = "female";
    int age = 20;
    String favoriteFruit = "🍓";
    int point;
}

// 📂 main 함수 내부
// 객체 생성
User user1 = new User();

System.out.println("name: " + user1.name); // Amy
System.out.println("gender: " + user1.gender); // female
System.out.println("age: " + user1.age); // 20
System.out.println("favorite fruit: " + user1.favoriteFruit); // 🍓
System.out.println("point: " + user1.point); // 0 - int 타입의 기본값인 0으로 설정됨

// 필드 값 변경
user1.point = 10;

System.out.println("point: " + user1.point); // 10
```

## 생성자

- 객체 생성 시 초기화 담당
- 모든 클래스에 하나 이상 존재함
- 선언을 생략하면 기본 생성자가 자동으로 추가됨
- 생성자 실행 : 힙 영역에 객체 생성, 객체의 번지가 리턴됨 - 클래스 변수에 저장됨

### 기본 생성자

- (public) 클래스() {}
  - 클래스가 public으로 선언되면 기본 생성자에도 public, 클래스에 public 없으면 생성자에도 없음
- 명시적으로 선언한 생성자가 1개라도 있으면 기본 생성자를 추가하지 않음

### 생성자 선언

- 리턴 타입이 없고, 클래스 이름과 동일
- 클래스에 명시적으로 생성자가 선언되어 있는 경우 선언된 생성자를 호출하여 객체 생성

```java
// 📂 User.java
public class User {
    // 필드
    String name;
    String gender;
    int age;

    public User(String name, String gender, int age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
    }
}

// 📂 main 함수 내부
User user1 = new User("Amy", "female", 20);

System.out.println("name: " + user1.name); // Amy
System.out.println("gender: " + user1.gender); // female
System.out.println("age: " + user1.age); // 20
```

### 생성자 오버로딩

- 매개 변수를 달리하는 생성자를 여러 개 선언하는 것

```java
// 📂 user.java
public class User {
    String name;
    String gender;
    int age;

    public User(String name, String gender, int age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
    }

    public User(String name) {
        this.name = name;
    }

    public User(String name, int age) {
        this.name = name;
        this.age = age;
    }
}

// 📂 main 함수 내부
User user1 = new User("Amy", "female", 20);

System.out.println("name: " + user1.name); // Amy
System.out.println("gender: " + user1.gender); // female
System.out.println("age: " + user1.age); // 20

User user2 = new User("user2");

System.out.println("name: " + user2.name); // user2
System.out.println("gender: " + user2.gender); // null - String의 기본 값
System.out.println("age: " + user2.age); // 0

User user3 = new User("user3", 19);

System.out.println("name: " + user3.name); // user3
System.out.println("gender: " + user3.gender); // null
System.out.println("age: " + user3.age); // 19
```

- 생성자에서 다른 생성자 호출할 때 this() 사용 : 생성자 간 중복 코드 발생하는 경우
  - 생성자의 첫 줄에만 허용

```java
// 📂 user.java
public class User {
    String name;
    String gender;
    int age;

    public User(String name) {
        this(name, "female", 22);
    }

    public User(int age) {
        this("new user", "female", age);
    }

    // 공통 실행 코드
    public User(String name, String gender, int age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
    }
}

// 📂 main 함수 내부
User user1 = new User("Amy", "female", 20);

System.out.println("name: " + user1.name); // Amy
System.out.println("gender: " + user1.gender); // female
System.out.println("age: " + user1.age); // 20

User user2 = new User("user2");

System.out.println("name: " + user2.name); // user2
System.out.println("gender: " + user2.gender); // female
System.out.println("age: " + user2.age); // 22

User user3 = new User(19);

System.out.println("name: " + user3.name); // new user
System.out.println("gender: " + user3.gender); // female
System.out.println("age: " + user3.age); // 19
```

## 메소드

- **메소드 시그너처** : 메소드 선언부

### 메소드 선언

- 선언부(리턴 타입, 메소드 이름, 매개 변수 선언)
- 실행 블록

```java
// 📂 Calculator.java
public class Calculator {
    // 리턴값이 없는 메소드
    void powerOn() {
        System.out.println("Power On✨");
    }

    int sumTwoValues(int x, int y) {
        int result = x + y;
        return result;
    }

    // 매개변수의 개수를 모를 때
    int sumEverything1(int[] values) {
        int result = 0;
        for(int value: values) {
            result += value;
        }
        return result;
    }

    int sumEverything2(int ... values) {
        int result = 0;
        for(int value : values) {
            result += value;
        }
        return result;
    }

    double divide(int x, int y) {
        double result = (double) x / (double) y;
        return result;
    }
}

// 📂 main 함수 내부
Calculator myCal = new Calculator();
myCal.powerOn();

int result1 = myCal.sumTwoValues(5,6);
System.out.println(result1);

byte x = 10; // byte 타입은 int로 자동 타입 변환되기 때문에 에러 일어나지 않음
byte y = 4;
double result2 = myCal.divide(x, y);
System.out.println(result2);

// 메소드에서 매개변수 타입을 int[] values로 했을 경우 배열을 생성해서 전달해야 함
int result3 = myCal.sumEverything1(new int[] {1, 2, 3, 4, 5});
System.out.println(result3); // 15

// 매개변수 타입을 '...'을 이용해서 정의했을 때
int result4 = myCal.sumEverything2(1, 2, 3, 4, 5);
System.out.println(result4); // 15
```

- 클래스 내부에서 메소드 호출

```java
public class Calculator {
    int sum(int ... values) {
        int result = 0;
        for(int value : values) {
            result += value;
        }
        return result;
    }

    double avg(int ... values) {
        double result;
        double sum = sum(values); // 클래스 내부에서 메소드 호출
        int count = values.length;
        result = sum / count;
        return result;
    }
}
```

### 메소드 오버로딩

- 클래스 내에 같은 이름의 메소드를 여러 개 선언하는 것
- **매개 변수**의 타입, 개수, 순서 중 하나가 달라야 함

```java
// 📂 Rectangle.java
public class Rectangle {
    double area(double width) {
        return width * width;
    }

    double area(double width, double height) {
        return width * height;
    }
}

// 📂 main 함수 내부
Rectangle rectangle = new Rectangle();

double result1 = rectangle.area(5); // 첫 번째 area 실행
double result2 = rectangle.area(5, 8); // 두 번째 area 실행

System.out.println("정사각형: " + result1);
System.out.println("직사각형: " + result2);
```

## 인스턴스 멤버, 정적 멤버

- 인스턴스 멤버 : 객체를 생성한 후 사용할 수 있는 필드와 메소드 / 객체없이는 사용할 수 없음
- 정적 멤버 : 객체를 생성하지 않고 사용할 수 있는 필드와 메소드 / static 키워드 / 객체 참조 변수로 접근 가능하지만 클래스 이름으로 접근하는 것이 좋다

```java
// 📂 Circle.java
public class Circle {
    static double pi = 3.14;

    static double circumference(int radius) {
        return 2 * pi * radius; // 내부 호출 시 this 사용하지 ❌
    }
}

// 📂 main 함수 내부
double circle = Circle.circumference(5); // 클래스 이름으로 접근
System.out.println(circle);
```

## 싱글톤

```java
// 📂 Singleton.java
public class Singleton {
    // 자신의 객체를 생성해 초기화
    // 접근 제한자(private)로 외부에서 변경하지 못하도록
    private static Singleton singleton = new Singleton();

    // 생성자
    // 접근 제한자(private)로 외부에서 접근하지 못하도록
    private Singleton() {}

    // 외부에서 호출할 수 있는 정적 메소드
    static Singleton getInstance() {
        return singleton;
    }
}

// 📂 main 함수 내부
// getInstance() 정적 메소드를 통해 만들어진 객체 얻음
Singleton obj1 = Singleton.getInstance();
Singleton obj2 = Singleton.getInstance();

System.out.println(obj1 == obj2);
```

## final 필드

- 초기값이 저장되면 프로그램 실행 도중에 수정 불가
- 필드 선언 시에 저장
- 생성자에서 저장(초기화 코드가 복잡, 외부 데이터로 초기화해야하는 경우)

```java
// 📂 Person.java
public class Person {
    final String nation = "Korea";
    final String birthData;
    String name;

    public Person(String birthData, String name) {
        this.birthData = birthData;
        this.name = name;
    }
}

// 📂 main 함수 내부
Person person1 = new Person("2023-10-21", "유미");

System.out.println(person1.nation); // Korea
System.out.println(person1.birthData); // 2023-10-21
System.out.println(person1.name); // 유미

// person1.nation = "Paris"; ➡️ ❌ 변경 불가
// person1.birthData = "2022-10-21"; ➡️ ❌ 한 번 객체가 만들어지면 변경 불가
person1.name = "루비"; // ✨ name은 final 필드가 아니어서 변경 가능
System.out.println(person1.name); // 루비
```

## 상수

- final 필드는 상수가 아니다
- static ➕ final
  - 객체마다 존재하지 않고 클래스에만 존재
  - 초기값이 저장되면 변경할 수 없음

## 접근 제한자

- public : 외부 클래스가 자유롭게 사용 가능
- protected : 같은 패키지 또는 자식 클래스에서 사용 가능
- private : 외부에서 사용할 수 없음
- default : 같은 패키지에 소속된 클래스에서만 사용 가능

### 생성자의 접근 제한

- public
- protected : 같은 패키지에 속하는 클래스 / 다른 패키지에 속한 클래스가 해당 클래스의 자식 클래스라면 호출 가능
- default
- private : 클래스 내부에서만 생성자 호출 가능

## Getter & Setter

- 클래스 선언시 필드를 private로 선언하여 외부로부터 보호하고, 필드에 대한 Setter, Getter 메소드를 사용하여 안전하게 변경/사용
- 읽기 전용 : Getter 메소드만 선언 or Setter가 private 접근 제한을 갖도록

### Getter

- 객체의 데이터를 읽을 때도 메소드를 사용
- 직접 필드값을 사용할 수 없도록 가공하여 외부로 전달

### Setter

- 객체 지향 프로그래밍에서는 메소드를 통해서 필드를 변경하는 것을 선호
- 유효한 값만 객체의 필드로 저장하기 위해서

```java
// 📂 Car.java
public class Car {
    private int speed;
    private boolean stop;

    public int getSpeed() {
        return speed;
    }

    public void setSpeed(int speed) {
        if (speed < 0) {
            this.speed = 0;
            return;
        } else {
            this.speed = speed;
        }
    }

    public boolean isStop() {
        return stop;
    }

    public void setStop(boolean stop) {
        this.stop = stop;
        this.speed = 0;
    }
}
```

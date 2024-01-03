# 상속

- extends

```java
// 📂 Animal.java
public class Animal {
    String name;
    String gender;
    void eat() {
        System.out.println("먹이를 먹어요 😋");
    }

    void sleep() {
        System.out.println("잠을 자요 😴");
    }
}
```

```java
// 📂 Rabbit.java
public class Rabbit extends Animal{
    int earSize;

    public Rabbit(String name, String gender, int earSize) {
        this.name = name;
        this.gender = gender;
        this.earSize = earSize;
    }

    void printEarSize() {
        System.out.printf("%s의 귀는 %d입니다\n", this.name, this.earSize);
    }
}
```

```java
// 📂 main 함수 내부
Rabbit rabbit = new Rabbit("토용", "female", 10);

// 상속 받은 필드
System.out.println("이름: " + rabbit.name); // 이름: 토용
System.out.println("성별: " + rabbit.gender); // 성별: female

// 자식 클래스의 필드
System.out.println("귀 사이즈: " + rabbit.earSize); // 귀 사이즈: 10

// 상속 받은 메소드
rabbit.eat(); // 먹이를 먹어요 😋
rabbit.sleep(); // 잠을 자요 😴

// 자식 클래스의 메소드
rabbit.printEarSize(); // 토용의 귀는 10입니다
```

- 내부적으로 부모 객체가 먼저 생성된 후 자식 객체가 생성됨
- 부모 생성자는 자식 생성자의 맨 첫 줄에서 호출됨
- 생성자가 명시적으로 선언되지 않은 경우 기본 생성자 생성

```java
public Rabbit() {
  super(); // 부모의 기본 생성자 호출
}
```

- 부모 클래스에 기본 생성자가 없고 매개 변수가 있는 생성자만 있다면 자식 생성자에서 부모 생성자 호출을 위해 super(매개값, ...) 명시해야 함

```java
// 📂 Animal.java
public class Animal {
    String name;
    String gender;

    public Animal(String name, String gender) {
        this.name = name;
        this.gender = gender;
    }
}
```

```java
// 📂 Rabbit.java
public class Rabbit extends Animal{
    int earSize;

    public Rabbit(String name, String gender, int earSize) {
        super(name, gender); // 부모 생성자 호출
        this.earSize = earSize;
    }
}
```

## 메소드 오버라이딩

- 자식 클래스에서 부모 클래스의 메소드를 다시 정의하는 것
- 부모의 메소드와 동일한 시그너처(리턴 타입, 메소드 이름, 매개 변수 목록)를 가져야 함
- 접근 제한을 더 강하게 재정의 할 수 **없음**
- 새로운 예외를 던질 수 없음

```java
// 📂 Animal.java
public class Animal {
    String name;
    String gender;

    public Animal(String name, String gender) {
        this.name = name;
        this.gender = gender;
    }
    void eat() {
        System.out.println("먹이를 먹어요 😋");
    }
}
```

```java
// 📂 Rabbit.java
public class Rabbit extends Animal{
    int earSize;

    public Rabbit(String name, String gender, int earSize) {
        super(name, gender);
        this.earSize = earSize;
    }

    @Override // 어노테이션 생략해도 👌, 컴파일러 확인으로 개발자 실수를 줄여줌
    void eat() {
        System.out.println("먹이🌿를 먹어요🐰");
    }
}
```

```java
// 📂 main 함수 내부
Rabbit rabbit = new Rabbit("토용", "female", 10);

rabbit.eat(); // 먹이🌿를 먹어요🐰
```

- 자식 클래스의 내부에서 재정의된 부모 클래스의 메소드를 호출해야 한다면, super 키워드 사용

```java
// 📂 Rabbit.java
@Override
void eat() {
    super.eat();
    System.out.println("먹이🌿를 먹어요🐰");
}

/*
결과
먹이를 먹어요 😋
먹이🌿를 먹어요🐰
*/
```

## final 클래스, 메소드

- 클래스, 메소드 선언 시 fianl 키워드 : 상속과 관련이 있음

### final 클래스

- 상속할 수 없는 클래스
- 자식 클래스를 만들 수 없다

### final 메소드

- 오버라이딩 할 수 없는 메소드

## protected 접근 제한자(상속과 관련)

- 같은 패키지에서는 default (접근 제한 없음)
- 다른 패키지에서는 자식 클래스만 접근 허용
  - super()로만 생성자 호출 가능
  - new 연산자 사용 불가

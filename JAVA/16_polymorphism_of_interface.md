# 인터페이스의 다형성

- 구현 객체를 교체하여 실행 결과를 다양하게

## 자동 타입 변환(promotion)

- 구현 객체 ➡️ 인터페이스 타입
- 구현 클래스 상속하여 만든 자식 클래스 ➡️ 인터페이스 타입으로 자동 타입 변환 가능
- 인터페이스에 선언된 메소드만 사용 가능

## 필드의 다형성

```java
// 📂 Food.java - 인터페이스
public interface Food {
    public void cook();
}
```

```java
// 📂 Cake.java
public class Cake implements Food{
    @Override
    public void cook() {
        System.out.println("🍰 케이크를 만들어요.");
    }
}
```

```java
// 📂 Bread.java
public class Bread implements Food{
    @Override
    public void cook() {
        System.out.println("🍞 빵을 만들어요.");
    }
}
```

```java
// 📂 Oven.java
public class Oven {
    // 인터페이스 타입 필드 선언
    // 초기 구현 객체 대입
    Food space1 = new Bread();
    Food space2 = new Bread();

    // run 메소드를 수정하지 않아도 다양한 결과를 얻을 수 있음
    void run() {
        space1.cook();
        space2.cook();
    }
}
```

```java
// 📂 main 함수 내부
Oven oven = new Oven();

oven.run();

// 인터페이스 타입으로 자동 타입 변환되기 때문에 사용 가능
oven.space1 = new Cake();
oven.space2 = new Cake();

oven.run();
```

## 매개변수의 다형성

- 매개 변수를 인터페이스 타입으로 선언
- 호출 시, 구현 객체 대입

```java
// 📂 Chef.java
public class Chef {
    public void make(Food food) { // 매개변수 인터페이스 타입으로 선언
        food.cook();
    }
}
```

```java
// 📂 main 함수 내부
Chef chef = new Chef();

Cake cake = new Cake();
Bread bread = new Bread();

chef.make(cake);
chef.make(bread);
```

## 강제 타입 변환(casting)

- 다시 구현 클래스 타입으로 변환

```java
// 📂 Cake.java
public class Cake implements Food{
    @Override
    public void cook() {
        System.out.println("🍰 케이크를 만들어요.");
    }

    // Food 인터페이스에는 없는 메소드
    public void changeFruit(String fruit) {
        System.out.println(fruit + " 케이크를 만들어요.");
    }
}
```

```java
Food food = new Cake();

food.cook();
// food.changeFruit("🍎"); // 사용 불가

Cake cake = (Cake) food; // 강제 타입 변환

cake.cook();
cake.changeFruit("🍎"); // 사용 가능
```

## instanceof 연산자 사용 가능

```java
// 📂 Chef.java
public class Chef {
    public void make(Food food) {
        if(food instanceof Cake) { // food의 타입 확인
            Cake cake = (Cake) food;
            cake.changeFruit("🍎");
            return;
        }
        food.cook();
    }
}
```

```java
// 📂 main 함수 내부
Chef chef = new Chef();

Cake cake = new Cake();
Bread bread = new Bread();

chef.make(cake); // 🍎 케이크를 만들어요.
chef.make(bread); // 🍞 빵을 만들어요.
```

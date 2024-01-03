# 다형성

- 사용 방법은 동일하지만 다양한 객체를 이용해서 다양한 실행 결과가 나오도록 하는 것
- 메소드 재정의와 타입 변환이 필요

## 클래스 자동 타입 변환(promotion)

- 상속 관계에 있는 클래스 사이에서 발생
- 자식 타입에서 부모 타입으로 자동 타입 변환

```java
Rabbit rabbit = new Rabbit();
Animal animal1 = rabbit;
Animal animal2 = new Rabbit();
```

- 바로 위의 부모가 아니어도 상위 타입이면 자동 타입 변환이 일어날 수 있음
- 부모 타입으로 자동 타입 변환 ➡️ 부모 클래스에 선언된 필드와 메소드만 접근이 가능
- 변수는 자식 객체를 참조, 변수로 접근 가능한 멤버는 부모 클래스 멤버
- 메소드가 자식 클래스에서 **재정의** ➡️ **자식 클래스의 메소드가 대신 호출**

```java
// 📂 Parent.java
public class Parent {
    public void method1() {
        System.out.println("부모 메소드1");
    }

    public void method2() {
        System.out.println("부모 메소드2");
    }
}
```

```java
// 📂 Child.java
public class Child extends Parent {
    @Override // 부모 메소드2 오버라이딩
    public void method2() {
        System.out.println("자식 메소드2");
    }

    public void method3() {
        System.out.println("자식 메소드3");
    }
}
```

```java
// 📂 main 함수 내부
Child child = new Child();

Parent parent = child; // 자동 타입 변환 일어남
parent.method1(); // 부모 메소드1 / 부모 메소드 호출
parent.method2(); // 자식 메소드2 / 오버라이딩된 메소드 호출됨
// parent.method3(); // 호출 ❌
```

## 필드의 다형성

- 필드의 타입을 부모 타입으로 선언하면 다양한 자식 객체들이 저장될 수 있음 ➡️ 필드 사용 결과가 달라질 수 있음

```java
// 📂 Battery.java
public class Battery {
    public int capacity;

    public Battery(int capacity) {
        this.capacity = capacity;
    }

    public boolean use() {
        --capacity;
        if (capacity > 0) {
            System.out.println("배터리 용량이 " + capacity +" 남았습니다.");
            return true;
        } else {
            System.out.println("배터리가 방전되었습니다.");
            return  false;
        }
    }
}
```

```java
// 📂 NewBattery.java
public class NewBattery extends Battery{ // Battery의 자식 클래스
    public NewBattery(int capacity) {
        super(capacity); // 부모 생성자로 넘겨줌
    }

    @Override
    public boolean use() {
        --capacity;
        if (capacity > 0) {
            System.out.println("🔋 새로운 배터리 용량이 " + capacity +" 남았습니다.");
            return true;
        } else {
            System.out.println("🪫 새로운 배터리가 방전되었습니다.");
            return  false;
        }
    }
}
```

```java
// 📂 SmartPhone.java
public class SmartPhone {
    Battery battery = new Battery(3); // NewBattery의 부모인 Battery로 필드 생성

    boolean run() {
        System.out.println("스마트폰을 켭니다.");
        if(battery.use()==false) {
            stop(); return false;
        }
        return true;
    }

    void stop() {
        System.out.println("스마트폰을 끕니다.");
    }
}
```

```java
// 📂 main 함수 내부
public class SmartPhoneExample {
    public static void main(String[] args) {
        SmartPhone smartPhone = new SmartPhone();

        for(int i=1; i<=5; i++) {
            boolean isRun = smartPhone.run();

            if(!isRun) {
                System.out.println("새로운 배터리로 교체합니다.");
                smartPhone.battery = new NewBattery(10); // 오버라이딩한 자식 메소드가 호출
                // ✨ NewBattery가 Battery로 자동 타입 변환됨
            }
        }
    }
}
/*
스마트폰을 켭니다.
배터리 용량이 2 남았습니다.
스마트폰을 켭니다.
배터리 용량이 1 남았습니다.
스마트폰을 켭니다.
배터리가 방전되었습니다.
스마트폰을 끕니다.
새로운 배터리로 교체합니다.
스마트폰을 켭니다.
🔋 새로운 배터리 용량이 9 남았습니다.
스마트폰을 켭니다.
🔋 새로운 배터리 용량이 8 남았습니다.
*/
```

## 매개 변수의 다형성

- 매개 변수의 타입으로 클래스 타입의 매개 변수를 선언할 수 있음

```java
// 📂 Food.java
public class Food {
    public void make() {
        System.out.println("음식을 만들어요.");
    }
}
```

```java
// 📂 Cake.java
public class Cake extends Food{
    @Override
    public void make() {
        System.out.println("🍰 케이크를 만들어요.");
    }
}
```

```java
// 📂 Bread.java
public class Bread extends Food{
    @Override
    public void make() {
        System.out.println("🍞 빵을 만들어요.");
    }
}
```

```java
// 📂 Chef.java
public class Chef {
    public void cook(Food food) { // ✅ Cake와 Bread의 부모인 Food를 매개 변수로 선언
        food.make();
    }
}
```

```java
// 📂 main 함수 내부
Chef chef = new Chef();

Cake cake = new Cake();
Bread bread = new Bread();

// ✨ 자식 클래스를 매개변수로 사용할 수 있음
// ❣️ Cake, Bread 클래스 ➡️ Food 클래스 자동 타입 변환
chef.cook(cake); // 🍰 케이크를 만들어요.
chef.cook(bread); // 🍞 빵을 만들어요.
```

## 클래스 강제 타입 변환(casting)

- 부모 타입 ➡️ 자식 타입 변환
- 자식 타입이 부모 타입으로 자동 타입 변환한 후 **다시 자식 타입으로 변환**할 때 사용 가능
- 자식타입 변수 = (자식타입) 부모타입;

```java
Parent parent = new Child();
Child child = (child) parent;
```

- 자식에 선언된 필드와 메소드를 꼭 사용해야 할 때

```java
// 📂 Parent.java
public class Parent {
    public String field1;

    public void method1() {
        System.out.println("부모 메소드1");
    }

    public void method2() {
        System.out.println("부모 메소드2");
    }
}
```

```java
// 📂 Child.java
public class Child extends Parent{
    public String field2;

    public void method3() {
        System.out.println("자식 메소드3");
    }
}
```

```java
// 📂 main 함수 내부
Parent parent = new Child(); // 자식 ➡️ 부모 자동 타입 변환
parent.field1 = "필드1";
parent.method1();
parent.method2();
// parent.field2 = "필드2"; // 자식 필드 사용 불가
// parent.method3(); // 자식 클래스의 메소드 호출 불가

Child child = (Child) parent; // 부모 ➡️ 자식 강제 타입 변환
child.field2 = "필드2";
child.method3();
```

## 객체 타입 확인 - instanceof 연산자

- 어떤 객체가 어떤 클래스의 인스턴스인지 확인
- boolean result = 객체 instanceof 타입
- ❣️ 강제 타입 변환이 필요할 경우 매개값이 어떤 객체인지 확인하고 안전하게 강제 타입 변환 해야함
- 매개값이 잘못된 경우 ClassCaseException 발생할 수 있음

```java
public class InstanceofExample {
    public static void typeChange(Parent parent) {
        if(parent instanceof Child) { // ✅ 타입 변환 가능한지 확인
            Child child = (Child) parent;
            System.out.println("Child로 변환 성공! 😎");
        } else {
            System.out.println("변환 실패 😭");
        }
    }

    public static void main(String[] args) {
        Parent parent = new Child(); // 자식 ➡️ 부모로 자동 타입 변환
        typeChange(parent);
    }
}
```

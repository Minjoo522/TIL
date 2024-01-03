# String 타입

- null을 대입하여 더 이상 String 객체를 참조하지 않도록 할 수 있음

```java
String str1;
str1 = "😍";

// 선언과 동시에 문자열 저장
String str2 = "🥳";

// 문자열 리터럴이 동일하다면 String 객체 공유
String watermelon1 = "🍉";
String watermelon2 = "🍉";
System.out.println(watermelon1 == watermelon2);

// new 생성자로 생성시
String watermelon3 = new String("🍉"); // 새로운 객체 생성됨
System.out.println(watermelon1 == watermelon3); // false - == 연산자는 변수에 저장된 객체의 번지가 동일한지 확인

// equals() 메소드 사용해야 함
System.out.println(watermelon1.equals(watermelon3)); // true
```

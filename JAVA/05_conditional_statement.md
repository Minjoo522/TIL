# 조건문 : if문, switch문

- if문은 조건식의 결과가 true, false이냐에 따라
- switch문은 변수의 값에 따라 실행문이 결정됨

## if문

```java
int num = (int) (Math.random()*6) + 1; // 1 <= 랜덤 < 7

if (num==1) {
    System.out.println("1번이 나왔습니다.");
} else if(num==2) {
    System.out.println("2번이 나왔습니다");
} else if(num==3) {
    System.out.println("3번이 나왔습니다.");
} else if (num==4) {
    System.out.println("4번이 나왔습니다.");
} else if (num==5) {
    System.out.println("5번이 나왔습니다.");
} else if (num==6) {
    System.out.println("6번이 나왔습니다.");
}
```

## switch문

```java
int num = (int) (Math.random() * 6) + 1;

switch (num) {
    case 1:
        System.out.println("1번이 나왔습니다.");
        break; // 다음 case를 실행하지 않고 switch문을 빠져나갈 수 있도록 하기위해
    case 2:
        System.out.println("2번이 나왔습니다.");
        break; // 🚨 num == 2일 때 break가 없으면 아래 다음 default를 만날 때까지 전부 실행됨
    case 3:
    case 4: // 두 가지 case를 동일하게 처리하게 할 수 있음
        System.out.println("3이나 4번이 나왔습니다.");
        break;
    default: // 동일한 값을 가진 case가 없으면 실행
        System.out.println("1, 2, 3, 4 외의 숫자가 나왔습니다.");
}
```

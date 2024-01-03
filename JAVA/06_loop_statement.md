# 반복문: for문, while문, do-while문

- for : 반복 횟수를 알고 있을 때
- while: 조건에 따라 반복할 때

## for문

- 루프 카운터 변수를 선언할 때 float 타입을 사용하면 ❌

```java
for(int i=1; i<=10; i++){
    System.out.println(i);
}
```

## while문

```java
int i = 1; // 루프 카운터 변수
while (i<=10) {
  System.out.println(i);
  i++;
}
```

## do-while문

- 실행문을 한 번은 꼭 실행하고 싶을 때

## break문

- 반복문의 실행을 중지
- 반복문이 중첩된 경우 가장 가까운 반복문만 종료
- ✨ break 이름; : 바깥쪽 반복문에 이름(라벨)을 붙이면 바깥쪽 반복문까지 종료

```java
Outer: for(char upper='A'; upper<='Z'; upper++) {
for(char lower='a'; lower<='z'; lower++) {
  System.out.println(upper + "-" + lower);
  if(lower=='g') {
      break Outer; // A-g까지만 출력되고 모든 for문 종료
  }
}
}
```

## continue문

- 반복문에서만 사용
- for문의 증감식, while문, do-while문의 조건식으로 이동

## 향상된 for문

- 배열이나 컬렉션 처리시 사용

```java
String[] fruits = { "🍉", "🥝", "🍌" };

for (String fruit : fruits) {
    System.out.print(fruit); // 🍉🥝🍌
}
```

# 배열

- 같은 타입의 데이터만 저장할 수 있음
- 선언과 동시에 저장할 수 있는 타입이 결정됨
- 한 번 생성된 배열은 길이를 늘리거나 줄일 수 없음

## 배열 선언

1. 타입[] 변수;
2. 타입 변수[];

```java
int[] intArray;
int intArray[];

double[] doubleArray;
double doubleArray[];

String[] strArray;
String strArray;
```

## 배열 생성

- 값 목록 생성
- new 연산자 이용

### 값 목록

- 타입[] 변수 = { value1, value2, value3 };
- ⬆️ 선언과 동시에 생성할 때만 사용 가능
- 선언 후 나중에 값 목록들 결정되는 경우 new 연산자 사용

```java
String[] fruits = null;
fruits = new String[] { "🍉", "🥝", "🍌" };
```

### new 연산자

- 값의 목록을 가지고 있지 않지만, 향후 값들을 저장할 배열을 미리 만들고 싶을 때
- 타입[] 변수 = new 타입[길이];
- 배열 변수가 선언된 이후에도 배열 생성 가능
- 자동적으로 기본값으로 초기화 됨

```java
int[] grades = new int[10]; // grades[0] ~ grades[9]까지 0으로 초기화
String[] fruits = new String[10]; // fruits[0] ~ fruits[9]까지 null로 초기화
boolean[] runs = new boolean[10]; // runs[0] ~ runs[9]까지 false로 초기화

fruits[0] = "🍉"; // fruits의 0번 인덱스에 🍉 저장
```

## 배열 길이

- 배열에 저장할 수 있는 전체 항목의 개수
- 배열변수.length;

```java
String[] fruits = new String[3];
System.out.println(fruits.length); // 3
```

## 다차원 배열

```java
// 2행 3열
int[][] scores = new int[2][3];

scores.length; // 2
scores[0].length; // 3
scores[1].length; // 3
```

```java
int[][] scores = new int[2][];
scores[0] = new int[2];
scores[1] = new int[3];

scores.length; // 2
scores[0].length; // 2
scores[1].length; // 3
```

```java
// 값 목록으로 생성
String[][] menus = { {"🍉", "🥝"}, {"☕️", "🥛", "🧃"} };
System.out.println(menus[0][0]); // 🍉
System.out.println(menus[1][2]); // 🧃
```

## 배열 복사

- for문
- System.arraycopy() 메소드 사용
  - System.arraycopy(원본 배열, 시작 인덱스, 도착 배열, 시작 인덱스, 복사할 개수)
- 복사되지 않은 항목은 초기값이 유지됨

```java
// for문
int[] oldIntArray = {1, 2, 3};
int[] newIntArray = new int[3];

for(int i = 0; i < oldIntArray.length; i++) {
    newIntArray[i] = oldIntArray[i];
}
```

```java
// System.arraycopy() 메소드
int[] oldIntArray = {1, 2, 3};
int[] newIntArray = new int[3];

System.arraycopy(oldIntArray, 0, newIntArray, 0, oldIntArray.length);
```

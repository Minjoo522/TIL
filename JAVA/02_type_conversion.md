# 타입 변환

## 자동 타입 변환(promotion)

- 값의 허용 범위가 작은 타입이 허용 범위가 큰 타입으로 저장될 때 자동으로 변환됨
- 정수 ➡️ 실수로 저장될 때는 무조건 자동 타입 변환
- char ➡️ int : 유니코드 값이 저장됨
- byte ➡️ char ❌ : char타입은 음수를 포함하지 않기 때문

### 정수 연산 자동 타입 변환

- byte, short ➡️ int 자동 타입 변환

```java
byte a = 10;
byte b = 20;
// byte result = a + b; 👾 컴파일 에러(Type mismatch)
int result = a + b;
```

- 타입 변환이 줄면 실행 성능이 향상되므로 특별한 이유가 없는 경우 int 타입으로 선언하는 것이 좋음
- 컴파일 단계에서의 연산은 변환하지 않음

```java
// 컴파일 단계에서 미리 연산, 타입 변환 일어나지 않음
byte result = 10 + 20;
```

- 피연산자 중 허용 범위가 큰 타입으로 변환
  - long이 피연산자로 사용되는 경우 long 타입으로 변환됨

```java
int val1 = 100;
long val2 = 1000L;

long result = val1 + val2; // long으로 자동 타입 변환
```

### 실수 연산 자동 형변환

- 피연산자 중 하나가 double이면 double 타입으로 자동 타입 변환

```java
int val1 = 10;
double val2 = 5.5;

double result = val1 + val2;

// int 타입으로 연산하기
int val3 = 10;
double val4 = 5.5;

int result2 = val1 + (int) val4; // int로 강제 변환 후 연산
```

#### 정수 연산의 결과 값이 실수가 되는 경우 실수 값 얻기

```java
int a = 1;
int y = 2;

double result1 = (double) a / b;
double result2 = a / (double) b;
double result3 = (double) a / (double) b;

// ❌
double result4 = (double) (a/b); // (a/b)가 먼저 연산 ➡️ 0, 그 다음 타입 변환 됨
```

### + 연산 문자열 자동 타입 변환

- \+ 연산자
  1. 피연산자가 모두 숫자인 경우 덧셈
  2. 피연산자 중 하나가 문자열인 경우 **나머지 피연산자도 문자열로 자동 변환** ➡️ 문자열 결합 연산

## 강제 타입 변환(casting)

- 값의 허용 범위가 큰 타입을 작은 허용 범위 타입으로 강제로 나눠서 저장
- 캐스팅 연산자 () 사용

```java
int intVal = 10;
byte byteVal = (byte) intVal;

// int ➡️ char : 문자를 출력할 수 있음
char charVal = (char) intVal;

// 실수 ➡️ 정수 : 소수점 이하는 버려짐
double doubleVal = 3.14;
int intVal2 = (int) doubleVal; // 3
```

### 문자열 기본 타입으로 강제 타입 변환

- Byte.parseByte(str)
- Short.parseShort(str)
- Integer.parseInt(str)
- Long.parseLong(str)
- Float.parseFloat(str)
- Double.parseDouble(str)
- Boolean.parseBoolean(str)
- 문자열이 숫자가 아닌 경우 숫자 타입으로 변환시 NumberFormatException 발생

### 기본 타입 ➡️ 문자열 강제 변환

- String.valueOf(기본타입값);

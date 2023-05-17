# Operators(연산자)

- [할당 연산자](#할당-연산자assignment-operators)
- [산술 연산자](#산술-연산자arithmetic-operators)
  - [단항 연산자](#단항-연산자unary-operators)
- [논리 연산자](#논리-연산자logical-operators)
- [비교 연산자](#비교-연산자comparison-operators)

## 할당 연산자(Assignment operators)

오른쪽 피연산자의 값을 왼쪽 피연산자에 할당

```javascript
let a = 1; // 할당 연산자
a += 1; // 더하기 할당
a -= 1; // 빼기 할당
a *= 1; // 곱하기 할당
a /= 1; // 나누기 할당
a %= 1; // 나머지 할당
a **= 1; // 거듭제곱 할당
```

## 산술 연산자(Arithmetic operators)

표준 산술 연산자 (+, -. \*, /) <br>
나머지(%), 거듭제곱(\*\*)

### 단항 연산자(Unary Operators)

증가(++)<br>
전위 연산자(++b) 사용 : 값을 증가 시킨 후, 남은 연산을 함<br>
후위 연산자(b++) 사용 : 필요한 연산 먼저한 후, 값을 증가

```javascript
let b = 1;
console.log(b = 1++); // 전위 연산자, 값 : 2
console.log(b = ++1); // 후위 연산자, 값 : 2
console.log(b); // 값 : 3
```

감소(--)<br>
<br>
단항 부정(-)<br>
피연자의 부호를 반대로 바꾼 값을 반환

```javascript
let c = 3;
console.log(-c); // -3
```

단항 플러스(+)<br>
숫자 타입이 아니면 숫자로 변환 시도

```javascript
let d = '3';
console.log(+d); // 숫자 3
let e = true;
console.log(+true); // 1
```

거듭제곱(\*\*)<br>
앞의 숫자를 뒤의 숫자로 거듭제곱한 결과 반환

```javascript
console.log(3 ** 3); // 27
```

## 논리 연산자(Logical operators)

OR(||), AND(&&), !(NOT)

### OR(||)

인수 중 하나라도 true이면 true 반환, 아니면 false 반환

- 왼쪽 피연산자부터 평가
- 피연산자는 불린형으로 변환, 값이 true이면 연산을 멈추고 **변환 전 원래 값** 반환
- 모두 false인 경우 마지막 값 반환

```javascript
console.log(1 || 0); // 1
console.log(undefined || null || 0); // 0(모두 false, 마지막 값 반환)
```

### AND(&&)

두 피연산자가 모두 참일 때만 true 반환

- 값이 false이면 해당 피연산자의 **변환 전 원래 값** 반환
- 모두 true인 경우 마지막 값 반환

```javascript
console.log(1 && 2 && 3); // 3
console.log(null && 5); // null
```

### NOT(!), 부정 연산자

값을 불린형으로 변환 후 그 값의 반대를 반환<br>
!! : 값을 불린형으로 변환

```javascript
console.log(!2); // false
console.log(!!2); // true
```

Number가 아닌 값을 불린형으로 변환하는 경우

```javascript
console.clear();
console.log(+false); // 0
console.log(+null); // 0
console.log(+''); // 0
console.log(+true); // 1
console.log(+'text'); // NaN
console.log(+undefined); // NaN
```

## 비교 연산자(Comparison operators)

피연산자 비교 후, 불린 값 반환
operator|description
:---:|:---:
==|값이 동일
!=|값이 다름
===|값과 타입 모두 같음
!==|값과 타입이 다름
\>|큼
\>=|크거나 같음
<|작음
<=|작거나 같음

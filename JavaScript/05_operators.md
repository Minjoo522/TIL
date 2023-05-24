# Operators(연산자)

- [할당 연산자](#할당-연산자assignment-operators)
- [산술 연산자](#산술-연산자arithmetic-operators)
  - [단항 연산자](#단항-연산자unary-operators)
- [논리 연산자](#논리-연산자logical-operators)
- [비교 연산자](#비교-연산자comparison-operators)
- [옵셔널 체이닝 ?.](#옵셔널-체이닝-연산자optional-chaining-operator)
- [Nullish 병합 연산자 ??](#nullish-병합-연산자nullish-coalescing-operator)

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
- 피연산자는 불린형으로 변환, 값이 true이면 평가를 멈추고(단락 평가) **변환 전 원래 값** 반환
- 모두 false인 경우 마지막 값 반환

```javascript
console.log(1 || 0); // 1
console.log(undefined || null || 0); // 0(모두 false, 마지막 값 반환)
```

### AND(&&)

두 피연산자가 모두 참일 때만 true 반환

- 값이 false이면 해당 피연산자의 **변환 전 원래 값** 반환
- 모두 true인 경우 마지막 값 반환
- 단락 평가 : 값이 false인 피연산자를 만나면 평가를 종료하고 해당 연산자의 원래 값을 반환한다

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

## 옵셔널 체이닝 연산자(Optional Chaining Operator) ?.

- 존재하지 않는 요소에 접근 할 때 에러 발생 대신에 undefiend 반환
- 참조가 유효할 때 해당 값 반환
- && 연산자보다 더 짧고 간단한 표현식 생성 가능
- 단락 평가(short-circuit) : ?. **앞**의 평가 대상이 undefined나 null이면 평가를 멈추고 undefined 반환

```javascript
// 참조가 유효하지 않은 경우 에러 반환

let food;
const foodPrice = food.price;
// TypeError: Cannot read properties of undefined (reading 'price')
```

```javascript
// ?. 사용시 undefined 반환
const foodPrice = food?.price;
console.log(foodPrice);
```

```javascript
// && 연산자보다 짧게 표현 가능
let food = { name: '🍱', price: 5, ingredient: { name: '🍤' } };

const foodIngredientName = food && food.ingredient && food.ingredient.name;
const foodIngredientName2 = food?.ingredient?.name;

console.log(foodIngredientName); // 🍤
console.log(foodIngredientName2); // 🍤
```

## Nullish 병합 연산자(Nullish Coalescing Operator) ??

- 왼쪽 피연산자가 null, undefined인 경우 오른쪽 피연산자 반환, 아니면 왼쪽 피연산자 반환
- 단락 평가 : 왼쪽 피연산자가 null, undefined이 아니라고 평가되면 오른쪽 평가하지 않음
- || 연산자는 왼쪽 피연산자의 값이 falsy(0,'',NaN...)한 경우 오른쪽 피연산자 반환, ?? 는 **null, undefined**인 경우만!

```javascript
// ?? 는 null, undefined인 경우에만 오른쪽 피연산자를 반환함

let count = 0;
console.log(count || '값이 없습니다'); // 값이 없습니다
console.log(count ?? '값이 없습니다'); // 0
```

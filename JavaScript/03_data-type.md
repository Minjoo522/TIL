# JavaScript 자료형

> JavaScript 자료형은 7가지 원시 데이터(Primitive data : Boolean, null, undefined, Number, BigInt, String, Symbol)와 Object(객체)가 있다.

# 원시 데이터(Primitive Data)

> Booleean, null, undefined, Number, BigInt, String, Symbol

## Boolean

- `true`, `false`

```javascript
let isMale = false;
let isGreater = 3 > 4; // false
```

## null

- 존재하지 않음
- 비어 있음
- 알 수 없음

## undefined

- 값이 할당되지 않은 상태

```javascript
let name; // 변수 선언 되었으나 값을 할당하지 않으면 undefined
```

## Number

- 일반적인 숫자
- 특수 숫자 값 : Infinity, -Infinity, NaN

## BigInt

- 아주 큰 숫자

## String

- 문자열
- '', "", ``로 묶음

```js
let greeting = 'Hello';
let name = 'Minjoo';
let phrase = `${greeting}, my name is ${name}!`;
// Hello, my name is Minjoo!
```

## Symbol

- 객체의 고유 식별자 만들 때 사용

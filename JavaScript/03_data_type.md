# JavaScript 자료형(Data type) - 원시 데이터

> JavaScript 자료형은 7가지 원시 데이터(Primitive data : Boolean, null, undefined, Number, BigInt, String, Symbol)와 Object(객체)가 있다.

## 원시 데이터

### Boolean

true, false를 나타내는 값을 지정할 때 사용하는 자료형

```javascript
let isMale = false;
let isGreater = 3 > 4; // false
```

### null

존재하지 않거나 비어 있거나 알 수 없는 값을 나타낸다.

### undefined

값이 할당되지 않은 상태를 나타낸다.

```javascript
let name; // 변수 선언 후 값을 할당하지 않으면 undefined 할당됨
```

### Number

일반적인 숫자와 Infinity, -Infinity, NaN와 같은 '특수 숫자 값'이 포함 된다.

### BigInt

아주 큰 숫자

### String

문자열은 '', "", `` 따옴표로 묶는다.

```javascript
let greeting = 'Hello';
let name = 'Minjoo';
let phrase = `${greeting}, ${Minjoo}! Thank you for coming.`;
// phrase : Hello, Minjoo! Thank you for coming.
```

### Symbol

객체의 고유한 식별자를 만들 때 사용

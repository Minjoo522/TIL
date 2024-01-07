# Operators(연산자)

<div align='center'>

| Index                                                                                                    |
| -------------------------------------------------------------------------------------------------------- |
| [할당 연산자(Assignment Operator)](#할당-연산자assignment-operator)                                      |
| [산술 연산자(Arithmetic Operator)](#산술-연산자arithmetic-operator)                                      |
| [단항 연산자(Unary Operator)](#단항-연산자unary-operator)                                                |
| [논리 연산자(Logical Operator)](#논리-연산자logical-operator)                                            |
| [비교 연산자(Comparison Operatro)](#비교-연산자comparison-operatro)                                      |
| [옵셔널 체이닝 연산자(Optional Chaning Operator) `?.`](#옵셔널-체이닝-연산자optional-chaning-operator)   |
| [Nullish 병합 연산자(Nullish Coalescing Operator) `??`](#nullish-병합-연산자nullish-coalescing-operator) |

</div>
<hr />
<br />

# 할당 연산자(Assignment Operator)

- 오른쪽 피연산자의 값을 왼쪽 피연산자에 할당

```js
let a = 1; // 할당 연산자
a += 1; // 더하기 할당
a -= 1; // 빼기 할당
a *= 1; // 곱하기 할당
a /= 1; // 나누기 할당
a %= 1; // 나머지 할당
a **= 1; // 거듭제곱 할당
```

# 산술 연산자(Arithmetic Operator)

- 표준 산술 연산자 : `+, -, *, /`
- 나머지 : `%`
- 거듭제곱 : `**`

# 단항 연산자(Unary Operator)

- 증가 : `++`
- 전위 연산자(`++a`) : 값을 먼저 증가시킨 후, 남은 연산
- 후위 연산자(`a++`) : 연산을 먼저 한 후, 값을 증가

  ```js
  let a = 1;
  console.log(++a); // 2 ➡️ 전위 연산자

  let b = 1;
  console.log(b++); // 1 ➡️ 후위 연산자
  console.log(b); // 2
  ```

- 감소 : `--`
- 단항 부정(`-`) : 피연산자의 부호를 반대로 바꾼 값을 반환

  ```js
  let a = 1;
  console.log(-a); // -1
  ```

- 단항 플러스(`+`) : 숫자 타입이 아니면 숫자로 변환 시도

  ```js
  let a = '5';
  a = +a;
  console.log(typeof a); // number

  let b = true;
  console.log(+true); // 1

  console.log(+false); // 0
  console.log(+null); // 0
  console.log(+''); // 0
  console.log(+true); // 1
  console.log(+'text'); // NaN
  console.log(+undefined); // NaN
  ```

- 거듭제곱(`**`) : 앞의 숫자를 뒤의 숫자로 거듭제곱
  ```js
  console.log(2 ** 4); // 16
  ```

# 논리 연산자(Logical Operator)

## OR(||)

> 인수 중 하나라도 true이면 true

- `왼쪽 피연산자부터 평가`
- 피연산자는 boolean으로 변환, 값이 true이면 평가를 멈추고(`단락 평가`) **변환 전 원래 값** 리턴
- 모두 false : 마지막 값 반환

```js
console.log(1 || 0); // 1
console.log(undefined || null || 0); // 0
```

## AND(&&)

> 두 피연산자가 모두 참일 때만 true

- 값이 false이면 해당 피연산자의 **변환 전 원래 값** 리턴
- `단락 평가`하여 값이 false인 피연산자를 만나면 평가 종료하고 해당 연산자의 원래 값 리턴
- 모두 true : 마지막 값 반환

```js
console.log(1 && 2 && 3); // 3
console.log(null && 5); // null
```

## NOT(!) 부정 연산자

> 값을 boolean으로 변환 후 그 값의 반대 반환<br />
> !! : 값을 boolean으로 변환

```js
console.log(!2); // false
console.log(!!2); // true
```

```js
console.log(!false); // true
console.log(!null); // true
console.log(!''); // true
console.log(!true); // false
console.log(!'text'); // false
console.log(!undefined); // true

console.log(!!false); // false
console.log(!!null); // false
console.log(!!''); // false
console.log(!!true); // true
console.log(!!'text'); // true
console.log(!!undefined); // false
```

# 비교 연산자(Comparison Operatro)

> 피연산자와 비교 후 boolean 값 반환

| Operator | 📝                  |
| :------: | ------------------- |
|    ==    | 값 동일             |
|    !=    | 값 다름             |
|   ===    | 값과 타입 모두 동일 |
|   !==    | 값과 타입 모두 다름 |
|    >     | 큼                  |
|    >=    | 크거나 같음         |
|    <     | 작음                |
|    <=    | 작거나 같음         |

# 옵셔널 체이닝 연산자(Optional Chaning Operator) `?.`

> 존재하지 않는 요소에 접근할 때 에러 발생 대신 undefined 리턴

- 참조가 유효할 때만 해당 값 반환
- && 연산자보다 더 짧고 간단한 표현식 생성 가능
- `단락 평가` : ?. **앞**의 평가 대상이 undefined이거나 null이면 평가를 멈추고 undefined 리턴

```js
// ❌ 참조가 유효하지 않은 경우 에러 발생
let user;
const userName = user.name;
// TypeError: Cannot read properties of undefined (reading 'name')
```

```js
// ?. 사용시 undefined 리턴
let user;
const userName = user?.name;
console.log(userName); // undefined
```

```js
// && 연산자보다 간단한 표현식 생성 가능
const bookshelf = {
  name: 'my bookshelf',
  theme: 'programming',
  books: { name: 'JavaScript' },
};

const bookName = bookshelf && bookshelf.books && bookshelf.books.name;
const bookName2 = bookshelf?.books?.name;

console.log(bookName);
console.log(bookName2);
```

# Nullish 병합 연산자(Nullish Coalescing Operator) `??`

- 왼쪽 피연산자가 null, undefined인 경우 오른쪽 피연산자 리턴, 아니면 왼쪽 피연산자 리턴
- `단락 평가` : 왼쪽 피연산자가 null, undefined가 아니면 오른쪽을 평가하지 않음
- || 연산자는 왼쪽 피연산자의 값이 falsy하면 오른쪽 피연산자 리턴하지만, ??는 `null, undefined인 경우에만 오른쪽 피연산자를 리턴한다`

```js
const num = 0;
console.log(num || '값이 없습니다'); // 값이 없습니다
console.log(num ?? '값이 없습니다'); // 0

const rank = null;
console.log(rank || '값이 없습니다'); // 값이 없습니다
console.log(rank ?? '값이 없습니다'); // 값이 없습니다
```

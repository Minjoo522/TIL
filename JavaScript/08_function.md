# 함수

<div align='center'>

| Index                                     |
| ----------------------------------------- |
| [함수 정의](#함수-정의)                   |
| [함수의 기본 값](#함수의-기본-값)         |
| [함수의 반환 값](#함수의-반환-값)         |
| [화살표 함수](#화살표-함수arrow-function) |
| [콜백 함수](#콜백-함수call-back-function) |

</div>
<hr />
<br />

# 함수 정의

## 함수 선언식

```js
function 함수이름(parameter1, parameter2) {
  함수 본문
}
```

```js
function greeting(name) {
  console.log(`Hello, ${name}!`);
}

greeting('Minjoo');
// Hello, Minjoo!
```

## 함수 표현식

- `익명 함수` : 함수 표현식에서 이름이 없는 함수
- 함수가 자신을 참조하는 경우 함수 표현식에서도 함수 이름을 지정할 수 있다
- 함수를 더 동적으로 사용할 수 있게 해줌
- 함수 선언문과 달리 함수 표현식은 변수에 할당되는 부분이 호이스팅되며, 함수의 정의는 실행 흐름에 따라 나중에 이뤄집니다.

```js
const greeting = function (name) {
  console.log(`Hello, ${name}!`);
};
```

# 함수의 기본 값

- 함수 호출 시 매개변수에 인수를 전달하지 않으면 undefined
- 매개변수에 인수를 전달하지 않아도 undefiend되지 않게 하려면 함수 선언 시 `기본 값`을 설정

```js
function add(a = 1, b = 1) {
  return a + b;
}

const result = add();
console.log(result); // 2
```

## 논리 연산자(||) 사용하여 기본 값 설정

```js
function printName(name) {
  name = name || 'name is undefined';
  console.log(name);
}

printName(); // name is undefined
```

## nullish 병합 연산자(nullish coalescing operator) '??' 사용하여 기본 값 설정

```js
function printName(name) {
  name = name ?? 'name is undefined';
  console.log(name);
}

printName(); // name is undefined
```

### `||` 과 `??`의 차이점

- `||`는 앞에 falsy한 값이 오는 경우 앞의 값이 리턴
- `??`는 null이나 undefined인 경우에만 마지막의 값이 리턴

# 함수의 반환 값

- 함수가 특정 값을 리턴하게 하고 싶을 때 사용
- return만 쓰면 함수 즉시 종료
- return 문이 없으면 undefined 리턴

```js
function checkAdmin(id) {
  if (id !== 'Minjoo') {
    return;
  }
  console.log(`welcome, ${id}`);
}

checkAdmin('Bin'); // 아무 것도 출력되지 않음
checkAdmin('Minjoo'); // welcome, Minjoo
```

# 화살표 함수(Arrow function)

```js
const 함수이름 = (parameter) => statement;
```

- 함수 표현식의 간단한 버전
- 인수가 하나밖에 없으면 괄호 생략 가능
- 함수 본문이 여러줄 : 중괄호 사용 & return을 사용해 반환 값을 명시해야 함

```js
const add = (a, b) => a + b;
console.log(add(1, 2)); // 3
```

# 콜백 함수(Call back function)

> 함수를 함수의 인수로 전달하고, 인수로 전달한 함수를 필요할 때 호출

```js
function printResultEmoji(result, success, fail) {
  if (result === 'success') success();
  else fail();
}

const successEmoji = () => console.log('🙆‍♀️');
const failEmoji = () => console.log('🙅‍♀️');

printResultEmoji('success', successEmoji, failEmoji); // 🙆‍♀️
```

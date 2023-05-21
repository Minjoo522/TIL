# 함수

- [함수 선언문](#함수-선언문)
- [함수 표현식](#함수-표현식)
- [함수 호출](#함수-호출)
- [함수의 기본값](#함수의-기본값)
- [화살표 함수](#화살표-함수arrow-function)
- [콜백함수](#콜백함수call-back-function)

## 함수 선언문

function 함수이름(매개변수=인자1(parameter1), parameter2, ...) { 함수 본문 }

```javascript
function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
```

## 함수 표현식

함수 표현식에서 이름이 없는 함수를 **익명 함수**라고 한다.

```javascript
const fullName = function (firstName, lastName) {
  return `${firstName} ${lastName}`;
}; // 익명 함수
```

함수가 자신을 참조하는 등의 경우 함수 표현식에서도 함수 이름을 지정할 수 있다.

## 함수 호출

함수이름(인수(argument));

```javascript
fullName(Kim, Minjoo);
```

## 함수의 기본값

함수 호출 시 매개변수에 인수를 전달하지 않으면 undefined가 됨<br>
매개변수에 인수를 전달하지 않아도 undefined 되지 않게 하려면 함수 선언 시 '기본값(default value)'을 설정하면 된다.

```javascript
function add(a = 1, b = 1) {
  return a + b;
}
const addResult = add();
console.log(addResult); // 2
```

### 논리 연산자(||) 사용하여 기본값 설정하기

```javascript
function showEmoji(emoji) {
  emoji = emoji || 'no emoji';
  console.log(emoji);
}
showEmoji(); // no emoji
```

### nullish 병합 연산자(nullish coalescing operator) '??' 사용하여 기본값 설정하기

```javascript
function showEmoji(emoji) {
  emoji = emoji ?? 'no emoji';
  console.log(emoji);
}
showEmoji(); // no emoji
```

논리 연산자(||)와의 차이점

- '||'는 첫번째 truthy 값을 반환하기 때문에 앞에 falsy한 값이 오는 경우 앞의 값이 반환된다.
- '??'는 null이나 undefined인 경우에만 마지막 값이 반환 된다.

## return value(반환 값)

- 함수가 특정 값을 반환하게 하고 싶을 때 사용한다.
- return만 쓰는 경우 함수가 즉시 종료된다.
- return문이 없으면 undefined이 반환된다.

```javascript
function checkId(id) {
  if (id !== 'Minjoo') {
    return;
  }
  console.log('환영합니다!');
}
checkId('yujin'); // 함수가 종료되고 아무 것도 반환되지 않음
```

## 화살표 함수(Arrow function)

const name = () => <br>
함수 표현식의 간단한 버전

- 인수가 하나밖에 없으면 괄호를 생략할 수 있음
- 함수 본문이 여러 줄인 경우 : 중괄호{} 사용한다. return을 사용해 반환 값을 명기 해야 함.

```javascript
const sum = (a, b) => a + b;
console.log(sum(1, 2)); // 3
```

## 콜백함수(Call back function)

함수를 함수의 인수로 전달하고, 인수로 전달한 함수를 필요할 때 호출하는 것

```javascript
function showEmoji(answer, yes, no) {
  if (answer === 'yes') yes();
  else no();
}
// 아래 애들이 콜백함수
let yesEmoji = () => console.log('🥰');
let noEmoji = () => console.log('💩');

showEmoji('yes', yesEmoji, noEmoji); // 🥰
```

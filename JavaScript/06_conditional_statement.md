# 조건문(Conditional Statement)

<div align='center'>

| Index                                                         |
| ------------------------------------------------------------- |
| [if...else](#ifelse)                                          |
| [삼항 연산자(Ternary Operator)](#삼항-연산자ternary-operator) |
| [switch](#switch)                                             |

</div>
<hr />
<br />

# if...else

```js
if (condition 1) {
  statement 1
} else if(condition 2) {
  statement 2
} else {
  statement 3
}
```

> 지정한 조건이 true이면 블록문 실행

```js
function printName(name) {
  if (name === 'Minjoo') {
    console.log(`My name is ${name}.`);
  } else if (name === 'Bin') {
    console.log(`My friend's name is ${name}.`);
  } else {
    console.log('Unidentified name');
  }
}

printName('Minjoo'); // My name is Minjoo.
printName('Bin'); // My friend's name is Bin.
printName('User'); // Unidentified name
```

# 삼항 연산자(Ternary Operator)

```js
condition ? excuteIfTrue : excuteIfFalse;
```

> 조건이 truthy이면 `:` `왼쪽`을 실행, falsy이면 `오른쪽`을 실행

```js
const grade = 50;
const isPass = grade >= 60 ? 'pass' : 'non pass';
console.log(isPass); // non pass
```

# switch

```js
switch (변수) {
  case 조건:
    break;
  ...
  (default:)
}
```

- 복수의 if 조건은 switch로 변경 가능
- default는 if문의 else와 동일(없어도 됨)
- 여러 case문을 묶을 수 있음

```js
const beverage = 'coffee';

switch (beverage) {
  case 'milk':
    console.log('🥛');
    break; // break를 걸지 않으면 아래 문단도 실행됨
  case 'coffee':
    console.log('☕️');
    break;
  case 'alcohol':
  case 'beer':
    console.log('🍺');
    break;
  default:
    console.log('존재하지 않는 음료입니다.');
}
// ☕️
```

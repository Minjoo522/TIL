# 조건문(Conditional Statement)

- [1. if ... else](#ifelse)
- [2. 삼항 연산자(Ternary operator)](#삼항-연산자ternary-operator)
- [3. switch](#switch)

## if...else

if (조건1) { statement1 } else if (조건2) { statement2 } else { statement3 };<br>

- 지정한 조건이 true인 경우 블록문을 실행

```javascript
let name = 'javascript';
if (name === 'minjoo') {
  console.log(`My name is ${name}.`);
} else if (name === 'javascript') {
  console.log(`Your name is ${name}.`);
} else {
  console.log('❓');
} // Your name is javascript.
```

## 삼항 연산자(Ternary operator)

조건 ? exprIfTrue : exprIfFalse<br>

- 조건이 truthy인 경우 exprIfTrue를 실행, falsy인 경우 exprIfFalse를 실행

```javascript
let score = 20;
let isPass = score >= 60 ? 'Pass' : 'Fail';
console.log(isPass); // Fail
```

## switch

switch (변수) { case 조건: break; ... (default:)}<br>

- 복수의 if 조건문은 switch문으로 바꿀 수 있다.<br>
- defalt는 if문의 else와 같음(없어도 됨)<br>
- 여러개의 case문을 묶을 수 있음

```javascript
let clothes = 'pants';
let emoji;
switch (clothes) {
  case 'dress':
    emoji = '👗';
    break;
  case 'jeans':
  case 'pants':
    emoji = '👖';
    break;
  default:
    console.log('그 옷은 판매하지 않습니다');
}
console.log(emoji); // 👖
```

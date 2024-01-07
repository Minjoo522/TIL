# 반복문(Loop Statement)

<div align='center'>

| Index                              |
| ---------------------------------- |
| [for](#for)                        |
| [while](#while)                    |
| [do...while](#dowhile)             |
| [break/continue](#break--continue) |

</div>
<hr />
<br />

# for

```js
for (변수 선언문; 조건문; 증감식) {
  statement
}
```

## 실행 순서

`1` 변수 선언문 실행<br />
`2` 조건문 값이 truthy이면 반복문 코드 실행<br />
`3` 증감식 실행<br />
`4` 조건문이 falsy가 될 때까지 2, 3 반복

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
  // 0, 1, 2, 3, 4가 순서대로 출력
}
```

# while

```js
while (조건문) {
  statement;
}
```

> 조건문이 truthy인 동안 계속 반복문 코드 실행

```js
let i = 0;

while (i < 5) {
  console.log(i);
  i++;
}
// 0, 1, 2, 3, 4가 순서대로 출력
```

# do...while

```js
do {
  statement;
} while (조건문);
```

> 조건문의 truthy 여부와 관계 없이 본문을 **_한 번이라도_** 실행하고 싶을 때 사용

```js
let condition = false;

do {
  console.log('😆');
} while (condition);
// 😆
// 조건문이 false이지만 do가 한 번 실행됨
```

# break / continue

- break : 반복문을 빠져 나올 때
- continue : 다음 반복으로 넘어갈 때

```js
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    console.log('2️⃣에 도착했어요.');
    break;
  }
  console.log(i);
}
// 0, 1, 2️⃣에 도착했어요. 까지 출력 후 반복문 종료
```

```js
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    console.log('2️⃣에 도착했어요.');
    continue;
  }
  console.log(i);
}
// 0, 1, 2️⃣에 도착했어요., 3, 4
```

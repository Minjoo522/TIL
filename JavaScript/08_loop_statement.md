# 반복문 (Loop Statement)

- [for](#for)
- [while](#while)
- [do...while](#dowhile)
- [break/continue](#break--continue)

## for

for(변수 선언문; 조건문; 증감문) { }<br>
❤️|실행 순서
:---:|:---
1️⃣|변수 선언문 실행
2️⃣|조건문 값이 truthy면, 반복문 본문 코드 실행
3️⃣|증감문 실행
4️⃣|조건문이 falsy가 될 때까지 2, 3 반복

```javascript
for (let i = 0; i < 10; i++) {
  console.log(i);
} // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
```

## while

while(조건문) { }<br>
조건문이 truthy이면 반복문 본문 코드 실행

```javascript
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
} // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
```

## do...while

do { } while(조건문);<br>
조건문의 truthy 여부와 관계 없이 본문을 **한 번이라도** 실행하고 싶을 때 사용

```javascript
let text = '';
do {
  console.log('👋');
} while (text); // 👋, 조건문이 false이지만 do 실행 됨
```

## break / continue

break : 반복문을 빠져 나올 때<br>
continue : 다음 반복으로 넘어갈 때

```javascript
// break
for (let j = 0; j < 10; j++) {
  if (j === 5) {
    console.log('5️⃣');
    break;
  }
  console.log(j);
} // 0, 1, 2, 3, 4, 5️⃣를 출력하고 반복문 종료
```

```javascript
//continue
for (let x = 0; x < 10; x++) {
  if (x === 5) {
    console.log('5️⃣');
    continue;
  }
  console.log(x);
} // 0, 1, 2, 3, 4, 5️⃣, 6, 7, 8, 9를 출력, 숫자 5는 출력하지 않고 다음 반복문으로 바로 넘어감
```

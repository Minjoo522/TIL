# async & await

- promise를 좀 더 편하게 사용 가능
- 비동기적인 promise를 동기적인 형태로 보이게 작성 가능

## async

- async는 function 앞에 위치하며, 항상❗️ promise를 반환

```javascript
async function hello() {
  return 'hello';
}

hello().then(console.log);
// hello
```

- 명시적으로 promise를 반환 할 수 있음

```javascript
async function hello() {
  return Promise.resolve('hello');
}

hello().then(console.log);
// hello
```

## await

- async 함수 안에서만 동작
- await 키워드를 만나면 promise가 처리될 때까지 기다리고 결과는 처리가 끝난 후 반환
- .then 보다 가독성 좋음
- 최상위 레벨 코드에 await를 사용할 수 없음(async 함수로 감싸면 사용 가능)

```javascript
function delayHello() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Hello');
    }, 2000);
  });
}

function delayBye() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Bye');
    }, 3000);
  });
}

// async, await 사용 전💩
delayHello() //
  .then((hello) =>
    delayBye() //
      .then((bye) => [hello, bye])
  )
  .then(console.log);
// 5초 후 : [ 'Hello', 'Bye' ]

// async, await 사용 후✨
async function greeting() {
  const hello = await delayHello();
  const bye = await delayBye();
  return [hello, bye];
}

greeting().then(console.log);
// 5초 후 : [ 'Hello', 'Bye' ]
```

## 에러 핸들링

```javascript
function getName() {
  return Promise.reject(new Error('이름이 없습니다'));
}

function sayHello(name) {
  return Promise.resolve(`Hello, ${name}`);
}

function getEmoji(greeting) {
  return Promise.resolve(`${greeting} 👋`);
}

// then 사용
function greeting() {
  return getName()
    .catch(() => 'Kim')
    .then(sayHello)
    .then(getEmoji);
}

greeting().then(console.log);
// Hello, Kim 👋

// async, await 사용✨
async function greeting() {
  let name;
  try {
    name = await getName();
  } catch {
    name = 'Kim';
  }
  const greeting = await sayHello(name);
  return getEmoji(greeting);
}

greeting().then(console.log);
// Hello, Kim 👋
```

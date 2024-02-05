# Iteration, Generator, Spread, 구조 분해 할당

- [Iteration, Generator, Spread, 구조 분해 할당](#iteration-generator-spread-구조-분해-할당)
  - [Iteration Protocol](#iteration-protocol)
    - [Iterable Protocol](#iterable-protocol)
    - [Iterator Protocol](#iterator-protocol)
  - [유사 배열은 이터러블 객체가 아니다](#유사-배열은-이터러블-객체가-아니다)
  - [Generator](#generator)
  - [Spread 문법(...)](#spread-문법)
  - [구조 분해 할당](#구조-분해-할당)

## Iteration Protocol

반복, 순회 규격<br>
Iterable protocol, Iterator protocol을 따라야 함

### Iterable Protocol

Iterable : 반복 가능한<br>

- for...of문과 같이 값들이 순회되는 동작을 정의하는 것
- \[Symbol.iterator]() 메서드를 가지며 iterator 객체를 반환한다
- Array, String, Map, Set

```javascript
const arr = [1, 2, 3];

for (const item of arr) {
  console.log(item);
}
// 배열은 iterable 하므로 for...of문 사용 가능하다

console.log(Symbol.iterator in arr); // true
// 배열은 Symbol.iterator를 가지고 있는 것 확인
```

### Iterator Protocol

- next() 메서드를 가지며 이 메서드는 { done: boolean, vlaue: any }(iteratorResult 객체)를 반환함

```javascript
const arr = [1, 2, 3];
const iterator = arr[Symbol.iterator]();

console.log(iterator.next());
// { value: 1, done: false }
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
// { value: undefined, done: true }
// 반복 작업 마치면 done: true를 반환함
```

## 유사 배열은 이터러블 객체가 아니다

- 유사 배열을 이터러블 객체로 만들기 : Array.from() 사용

```javascript
const arrayLike = {
  0: '🍓',
  1: '🥝',
  length: 2,
};

for (const fruit of arrayLike) {
  console.log(fruit);
} // TypeError: arrayLike is not iterable

// Array.from()을 사용하여 유사 배열을 진짜 배열로 만들어 줌
const newArray = Array.from(arrayLike);

for (const fruit of newArray) {
  console.log(fruit);
}
```

## Generator

- 여러개의 값을 필요에 따라 하나씩 반환함
- 제너레이터 함수 문법 구조(function\*)를 사용

| 메서드       | 📝                                          |
| :----------- | :------------------------------------------ |
| **next()**   | 주요 메서드<br>yield문을 만나면 실행이 멈춤 |
| **return()** | 제너레이터 종료                             |
| **throw()**  | 제너레이터에 오류 발생 시킴                 |

```javascript
function* generator() {
  try {
    for (let i = 0; i < 5; i++) {
      yield i;
    }
  } catch (err) {
    console.log(err);
  }
}

const gene = generator();
let next1 = gene.next();
console.log(next1); // { value: 0, done: false }

next1 = gene.next();
console.log(next1); // { value: 1, done: false }

// throw - catch문 실행 됨
gene.throw('Error'); // Error

// return
next1 = gene.return();
console.log(next1); // { value: undefined, done: true }
```

## Spread 문법(...)

- 이터러블 객체를 하나씩 나열해 줌
- 배열을 합치거나 배열, 객체를 복사할 때도 사용 할 수 있다

```javascript
const numbers = [1, 2, 3, 4, 5];

function sum(first, second, third, ...last) {
  // 나머지 매개변수
  console.log(last);
  return first + second + third;
}

console.log(sum(...numbers)); // 배열 나열해서 전달
// [ 4, 5 ]
// 6
```

```javascript
// 배열 합치기
const animals1 = ['🐼', '🐶'];
const animals2 = ['🐰', '🐯'];
let animals = [...animals1, ...animals2];
console.log(animals); // [ '🐼', '🐶', '🐰', '🐯' ]
// 다른 것들 추가도 가능
animals = [...animals1, '🐵', ...animals2];
console.log(animals); // [ '🐼', '🐶', '🐵', '🐰', '🐯' ]

// 배열 복사하기
const animal3 = [...animals];
console.log(animal3); // [ '🐼', '🐶', '🐵', '🐰', '🐯' ]
console.log(animals === animal3); // 레퍼런스가 달라짐 : false
```

```javascript
// 객체 복사하기
const bread = { name: '🍞', price: 20 };
const newBread = { ...bread };
console.log(newBread); // { name: '🍞', price: 20 }
console.log(bread === newBread); // false
```

## 구조 분해 할당

- 객체나 배열을 '분해'할 수 있게 함
- 배열의 요소를 하나씩 할당하는 것보다 코드가 짧아짐
- 연산자 우측 : 이터러블 객체

```javascript
// 배열
const fullName = ['Minjoo', 'Kim'];
const [firstName, lastName] = fullName;
console.log(firstName); // Minjoo
console.log(lastName); // Kim

// 기본 값 설정 가능
const numbers = [1, 2];
const [a, b, c = 2] = numbers;
console.log(a, b, c); // 1, 2, 2
```

```javascript
// 객체
const panda = { image: '🐼', yearOfBirth: 2020 };
const { image, yearOfBirth } = panda;
console.log(image); // 🐼
console.log(yearOfBirth); // 2020

// 중첩 객체에 접근하기
const user = {
  firstName: 'Minjoo',
  lastName: 'Kim',
  clothes: {
    top: '👕',
    pants: '👖',
  },
};

const {
  clothes: { top },
} = user;
console.log(top); // 👕
console.log(clothes); // ReferenceError: clothes is not defined
```

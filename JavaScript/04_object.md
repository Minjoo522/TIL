# JavaScript Object(객체)

> 원시 데이터(primitive type)와 다르게 다양한 데이터를 담을 수 있음.
>
> key: value로 구성된 property를 넣을 수 있음.

- [Object 만들기](#object-만들기)
- [단축 프로퍼티](#단축-프로퍼티)
- [object를 복사할 때 발생하는 일(copy by reference)](#object를-복사할-때-발생하는-일copy-by-reference)
- [프로퍼티 존재 여부 확인 (in 연산자)](#프로퍼티-존재-여부-확인-in-연산자)
- [객체의 모든 키 순회하기 (for...in 반복문)](#객체의-모든-키-순회하기-forin-반복문)
- [생성자 함수](#생성자-함수)

## Object 만들기

- key는 string, 숫자, 문자열, 심볼, value에는 모든 자료형 사용 가능

### 객체 리터럴(object literal)

- {} 중괄호로 선언

```javascript
let user = {
  name: 'Minjoo',
  isFemale: true,
  age: 28,
};
console.log(user.name); // Minjoo
user.color = 'pink'; // 프로퍼티 추가
delete user.age; // 프로퍼티 삭제
```

## 프로퍼티에 접근하기

### 점 표기법(dot notation)

```javascript
let user = {
  age: 20,
  emoji: '👧',
};

console.log(user.emoji); // 👧
```

### 대괄호 표기법(bracket notation)

- 여러 단어를 조합해 프로퍼티 키를 만든 경우
- 동적으로 프로퍼티에 접근하고 싶을 때(런타임 시 평가되는 프로퍼티)

```javascript
let user = {
  age: 20,
  emoji: '👧',
};

function addProperty(obj, key, value) {
  obj[key] = value;
}

addProperty(user, 'name', 'Yujin');
console.log(user);
// { age: 20, emoji: '👧', name: 'Yujin' }
```

## 단축 프로퍼티

프로퍼티의 key와 value가 변수의 이름과 동일 할 때

```javascript
function makeUser(name, age) {
  return {
    name, // name: name, 과 동일하다
    age,
  };
}

let user = makeUser('Yujin', 20);
console.log(user);
// { name: 'Yujin', age: 20 }
```

## object를 복사할 때 발생하는 일(copy by reference)

- user2의 프로퍼티 값을 변경하면 user의 프로퍼티 값도 변경됨
- 변수에 객체의 '참조 값(메모리 주소)'이 저장되기 때문이다. 즉 'key:value'가 그대로 복사되어 저장되는 것이 아니라 레퍼런스 값이 저장되는 것이다.

```javascript
let user2 = user;
user2.name = 'JavaScript';
console.log(user.name); // JavaScript
```

- 참고 : 원시 데이터 타입은 값이 그대로 복사되어 저장됨(copy by value)

## const로 선언된 객체는 수정할 수 있다

```javascript
const user = {
  name: 'Minjoo',
  age: 28,
};
user.name = 'JavaScript'; // 정상적으로 작동한다
```

## 프로퍼티 존재 여부 확인 (in 연산자)

찾고 싶은 key 값을 따옴표로 감싸 주어야 함

```javascript
console.log('name' in user); // true
```

## 객체의 모든 키 순회하기 (for...in 반복문)

```javascript
for (let key in user) {
  console.log(`${key} is ${user[key]}.`);
}
```

## 생성자 함수

- 비슷한 객체를 여러 개 생성해야 할 때
- 함수 이름의 첫 글자는 대문자로
- 'new' 연산자를 붙여 실행

```javascript
function User(name, age, emoji) {
  // this = {} (빈 객체 암시적으로 생성)

  // 새로운 프로퍼티 this에 추가
  this.name = name;
  this.age = age;
  this.emoji = emoji;
  this.text = () => console.log(`${name}의 나이는 ${age}세입니다.${emoji}`);
  // return this;  (this가 암시적으로 반환)
}

const user = new User('Yujin', 20, '👧');
console.log(user);
// User {
//   name: 'Yujin',
//   age: 20,
//   emoji: '👧',
//   text: [Function (anonymous)]
// }
user.text();
// Yujin의 나이는 20세입니다.👧
```

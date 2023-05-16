# JavaScript Object(객체)

> 원시 데이터(primitive type)와 다르게 다양한 데이터를 담을 수 있음.
>
> key: value로 구성된 property를 넣을 수 있음.

## object 특징

- {} 중괄호로 선언 = 객체 리터럴(object literal)
- key는 string, value에는 모든 자료형 사용 가능
- 프로퍼티 추가, 삭제 가능
- 점 표기법으로 프로퍼티 값 읽기 가능

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

### object를 복사할 때 발생하는 일(copy by reference)

- user2의 프로퍼티 값을 변경하면 user의 프로퍼티 값도 변경됨
- 변수에 객체의 '참조 값(메모리 주소)'이 저장되기 때문이다. 즉 'key:value'가 그대로 복사되어 저장되는 것이 아니라 레퍼런스 값이 저장되는 것이다.

```javascript
let user2 = user;
user2.name = 'JavaScript';
console.log(user.name); // JavaScript
```

- 참고 : 원시 데이터 타입은 값이 그대로 복사되어 저장됨(copy by value)

### const로 선언된 객체는 수정할 수 있다

```javascript
const user = {
  name: 'Minjoo',
  age: 28,
};
user.name = 'JavaScript'; // 정상적으로 작동한다
```

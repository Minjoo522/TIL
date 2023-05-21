# Classes

> 객체를 생성하기 위한 템플릿<br>
> 객체 지향 프로그래밍을 가능하게 해줌<br>
> 정의한 뒤에 사용할 수 있다(호이스팅될 때 초기화는 되지 않기 때문 / Temporal Dead Zone - 선언과 초기화 사이 발생하는 시간 차)

- [class 선언](#class-선언)
- [class 사용법](#class-사용법)
- [static](#static--클래스의-정적-메서드)
- [getter & setter](#getter--setter)
- [extends & super](#클래스-상속extends과-상위-클래스-호출super)

## class 선언

- class Name {<br>
  constructor(){...} -> 생성자<br>
  method(){...} }

```javascript
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  display = () => {
    console.log(`${this.name}은 ${this.age}살 입니다.`);
  };
}
```

## class 사용법

new를 사용해 객체 인스턴스를 생성함

```javascript
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  display = () => {
    console.log(`${this.name}는 ${this.age}살 입니다.`);
  };
}

// user은 User의 인스턴스
const user = new User('민주', 20);
console.log(user);
console.log(user.name);
console.log(user.age);
user.display();
```

## static : 클래스의 정적 메서드

인스턴스를 생성하지 않아도 사용 가능한 메서드를 만들 수 있음

- static 사용하면 this를 참조할 수 없음

```javascript
class Animal {
  static MAX_AGE = 20;
  constructor(name, type, emoji) {
    this.name = name;
    this.type = type;
    this.emoji = emoji;
  }
  static makePanda() {
    return new Animal('panda', 5, '🐼');
  }
  display() {
    console.log(`${this.name} is ${this.emoji}.`);
  }
}

console.log(Animal.MAX_AGE); // 20
const panda = Animal.makePanda();
console.log(panda);
// Animal { name: 'panda', type: 5, emoji: '🐼' }
```

## getter & setter

함수를 일반 프로퍼티처럼 접근할 수 있음<br>

- getter : 획득자 / 프로퍼티를 읽을 때 / 인수가 없음
- setter : 설정자 / 프로퍼티에 값을 할당할 때 / 인수 하나

```javascript
// getter
class School {
  constructor(name, position, major) {
    this.name = name;
    this.position = position;
    this.major = major;
  }
  get introduceMember() {
    return `${this.name}'s major is ${this.major}.`;
  }
}

const minjoo = new School('민주', '👩‍🎓', 'management');
console.log(minjoo.introduceMember); // 일반 프로퍼티처럼 접근
```

```javascript
// setter
class School {
  constructor(name, position, major) {
    this.name = name;
    this.position = position;
    this.major = major;
  }
  get introduceMember() {
    return `${this.name}'s major is ${this.major}.`;
  }
  set introduceMember(value) {
    console.log(`${this.name} is ${value} ${this.major} student.`);
  }
}

const minjoo = new School('민주', '👩‍🎓', 'management');
console.log(minjoo.introduceMember);
minjoo.introduceMember = 'senior'; // setter에 value 전달
// 민주 is senior management student.
```

## 클래스 상속(extends)과 상위 클래스 호출(super)

공통된 프로퍼티나 메서드가 있는 경우 부모 클래스를 만들어서 자식 클래스에 상속하면 코드 중복을 줄일 수 있음

```javascript
// 부모 클래스
class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  study() {
    console.log(`${this.name}은 공부 중입니다.`);
  }
  sleep() {
    console.log(`${this.name}은 자고 있습니다.`);
  }
}

// 자식 클래스 1
class HighSchoolStudent extends Student {}

const yujin = new HighSchoolStudent('yujin', 18);
console.log(yujin);

// 자식 클래스 2
class CollegeStudent extends Student {
  constructor(name, age, major) {
    super(name, age); // 생성자 오버라이딩
    this.major = major;
  }
  // 오버라이딩(overriding) : 부모의 메서드를 덮어 씌움
  study() {
    console.log(`내일 전공 시험입니다.`);
    super.study();
  }
  drink() {
    console.log(`${this.name}은 음주 중입니다.`);
  }
}

const minjoo = new CollegeStudent('minjoo', 23, 'management');
console.log(minjoo);
minjoo.drink();
```

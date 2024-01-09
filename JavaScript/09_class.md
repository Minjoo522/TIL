# Class

> 객체를 생성하기 위한 템플릿<br />
> 객체 지향 프로그래밍<br />
> 정의한 뒤 사용 가능(호이스팅 시 초기화 되지 않기 때문 / Temporal Dead Zone - 선언과 초기화 사이 발생하는 시간 차)

# Class 선언

```js
class 클래스이름 {
  constructor() { // 생성자 : 클래스가 생성될 때 실행됨
    ...
  }

  method() {
    ...
  }
}
```

```js
class Food {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  printPrice = () => console.log(`${this.name}은 ${this.price}원 입니다.`);
}
```

# Class 사용

- `new` 사용하여 인스턴스 생성

```js
class Food {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  printPrice = () => console.log(`${this.name}는 ${this.price}원 입니다.`);
}

// cake는 Food의 '인스턴스'
const cake = new Food('cake', 5000);
console.log(cake); // Food { printPrice: [Function: printPrice], name: 'cake', price: 5000 }
console.log(cake.name); // cake
console.log(cake.price); // 5000
cake.printPrice(); // cake는 5000원 입니다.
```

# Class의 정적 메서드 : `static`

> 인스턴스를 생성하지 않아도 사용 가능한 메서드를 만들 수 있음

- static 메서드에서는 this를 참조할 수 없다

```js
class Food {
  static MIN_PRICE = 2000;
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  static makeFood() {
    return new Food('bread', 4000);
  }

  printPrice = () => console.log(`${this.name}는 ${this.price}원 입니다.`);
}

console.log(Food.MIN_PRICE); // 2000
const bread = Food.makeFood();
console.log(bread); // Food { printPrice: [Function: printPrice], name: 'bread', price: 4000 }
```

# getter & setter

- `getter` : 획득자 / 프로퍼티를 읽을 때 / 인수 없음
- `setter` : 설정자 / 프로퍼티에 값을 할당할 때 / 인수 하나
- 일반 프로퍼티처럼 접근 가능

```js
class Student {
  constructor(name, major) {
    this.name = name;
    this.major = major;
  }

  get introduce() {
    return `${this.name}'s major is ${this.major}`;
  }

  set changeMajor(value) {
    this.major = value;
  }
}

const student = new Student('Minjoo', 'management');
console.log(student.introduce); // Minjoo's major is management
student.changeMajor = 'chemistry';
console.log(student.introduce); // Minjoo's major is chemistry
```

# 클래스 상속과 상위 클래스 호출 : `extends`, `super`

> 공통된 프로퍼티나 메서드가 있는 경우 부모 클래스를 만들어 자식 클래스에 상속 ➡️ 코드 중복을 줄일 수 있음

```js
class Customer {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  buy() {
    console.log(`${this.name}님이 물건을 구매했습니다.`);
  }
}

class GeneralCustomer extends Customer {}

const bin = new GeneralCustomer('Bin', 20);
bin.buy(); // Bin님이 물건을 구매했습니다.

class SpecialCustomer extends Customer {
  constructor(name, age, level) {
    super(name, age); // 생성자 오버라이딩
    this.level = level;
  }

  // 오버라이딩 : 부모 메서드 덮어 씌움
  buy() {
    super.buy();
    console.log(`${this.level * 10}% 할인을 받았습니다.`);
  }

  rest() {
    console.log(`${this.name}님이 라운지에서 쉬고 있습니다.`);
  }
}

const minjoo = new SpecialCustomer('Minjoo', 20, 3);
minjoo.buy();
// Minjoo님이 물건을 구매했습니다.
// 30% 할인을 받았습니다.
```

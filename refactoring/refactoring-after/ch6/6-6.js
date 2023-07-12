// 객체를 다른 곳에 전달하거나 반환하거나 인자로 넘기면 예상하지 못한 곳에서 변경 할 수 있음
// export function getDefaultOwner() {
//   // 1. 복사해서 새로운 객체를 만들기
//   // spread 연산자 : 얕은 복사
//   return { ...defaultOwner };
// }

// 2. 클래스 만들기

class Person {
  #lastName;
  #firstName;
  constructor(data) {
    this.#lastName = data.lastName;
    this.#firstName = data.firstName;
  }
  get lastName() {
    return this.#lastName;
  }
  get firstName() {
    return this.#firstName;
  }
}

let defaultOwner = new Person({ firstName: '마틴', lastName: '파울러' });

export function getDefaultOwner() {
  return defaultOwner;
}

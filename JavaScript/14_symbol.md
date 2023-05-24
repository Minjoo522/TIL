# Symbol

유일한 식별자를 만들 때 사용한다

- Symbol()
- Symbol("name")과 같이 심볼 이름을 넣어 줄 수 있음
- 심볼 이름이 같아도 다른 심볼이라고 인식됨

  ```javascript
  const sym1 = Symbol('🍎');
  const sym2 = Symbol('🍎');

  console.log(sym1 === sym2); // false
  ```

## .description 속성

- 심볼 이름을 읽어 줌
  ```javascript
  console.log(sym1.description); // 🍎
  ```

## 객체 리터럴과 심볼

- 객체 리터럴{}로 만든 object에 Symbol을 키로 사용할 때는 [] 대괄호를 사용하여 나타내 주어야 함
  ```javascript
  const id = Symbol('id');
  const user = {
    [id]: 'abc',
    id: 'def',
    [Symbol('name')]: 'Minjoo',
  };
  ```

## for...in 반복문

- 키가 심볼인 프로퍼티는 for..in 반복문에서 출력되지 않는다
  ```javascript
  for (const key in user) {
    console.log(`${key}: ${user[key]}`);
  } // id: def
  // 문자열 key인 id: 'def'만 표시됨
  ```

## 전역 심볼

- 이름이 같은 심볼이 같은 개체를 기리키길 원할 때 사용
- 전역 심볼 레지스트리에 저장되며, 이름이 같은 경우 항상 같은 심볼을 반환
- Symbol.for(key) : 해당 key 갖는 전역 심볼이 없는 경우 생성, 있으면 해당 심볼 반환
  ```javascript
  const symbolFor1 = Symbol.for('1');
  const symbolFor2 = Symbol.for('1');
  console.log(symbolFor1 === symbolFor2); // true
  console.log(Symbol.for('1')); // Symbol(1)
  ```
- Symbol.keyFor(symbol) : 전역 심볼의 이름을 반환 / 전역 심볼이 아닌 경우 undefined 반환
  ```javascript
  console.log(Symbol.keyFor(symbolFor1)); // 1
  ```

# Map & Set

- [Map \& Set](#map--set)
  - [Map](#map)
    - [인스턴스 속성](#인스턴스-속성)
    - [인스턴스 메서드](#인스턴스-메서드)
    - [Map은 순회가 가능하다](#map은-순회가-가능하다)
    - [object와 차이점](#object와-차이점)
    - [object -\> Map : Object.entries(obj)](#object---map--objectentriesobj)
    - [Map -\> object : Object.fromEntries(map)](#map---object--objectfromentriesmap)
  - [Set](#set)
    - [Set 인스턴스 속성](#set-인스턴스-속성)
    - [Set 인스턴스 메서드](#set-인스턴스-메서드)
    - [Set은 순회가 가능하다](#set은-순회가-가능하다)
    - [Array -\> Set](#array---set)
    - [Set -\> Array](#set---array)

## Map

- 키, 값 쌍으로 저장
- 삽입 순서 기억
- 키 : **유일**해야 함, 다양한 자료형 허용
- 순회가 가능하다

### 인스턴스 속성

| 속성      | 📝                    |
| :-------- | :-------------------- |
| **.size** | 키, 값 쌍의 개수 반환 |

### 인스턴스 메서드

| 메서드               | 📝                                                                                  |
| :------------------- | :---------------------------------------------------------------------------------- |
| **.clear()**         | 전부 제거                                                                           |
| **.delete(key)**     | 키에 해당하는 요소 제거<br>요소가 있고 제거되면 true 반환, 요소가 없으면 false 반환 |
| **.get(key)**        | 키에 해당하는 요소의 값 반환<br>없으면 undefined 반환                               |
| **.has(key)**        | 존재 확인, 불리언 값 반환                                                           |
| **.set(key, value)** | 요소 추가, 연속 호출 가능(체이닝)                                                   |

### Map은 순회가 가능하다

- \[Symbol.iterator]() 메서드를 가지고 있음

  - next() 호출 가능
  - entries(), keys(), values() 호출 가능

  ```javascript
  const newMap1 = new Map([
    ['panda', '🐼'],
    ['dog', '🐶'],
    ['rabbit', '🐰'],
  ]);

  const mapIterator = newMap1[Symbol.iterator]();
  console.log(mapIterator.next().value);
  // [ 'panda', '🐼' ]
  ```

- .forEach(callbackfn,[thisArg]) 사용 가능
  - 모든 키, 값 쌍에 대해 콜백함수를 한 번씩 실행
  - 콜백함수는 value, key, map을 프로퍼티로 가짐
  ```javascript
  newMap1.forEach((key, value) => console.log(key, value));
  // 🐼 panda
  // 🐶 dog
  // 🐰 rabbit
  ```
- for...of 루프 사용 가능
  ```javascript
  for (const value of newMap1) {
    console.log(value);
  }
  // [ 'panda', '🐼' ]
  // [ 'dog', '🐶' ]
  // [ 'rabbit', '🐰' ]
  ```

### object와 차이점

- 키에 다양한 자료형을 허용함 : 맵에서는 object도 키로 사용 할 수 있음
- objectsms 키를 문자형으로 변환하지만 맵은 기존 형태를 유지함
- 삽입 순서를 기억함

### object -> Map : Object.entries(obj)

```javascript
const obj1 = {
  name: 'Minjoo',
  age: 20,
};

const newMap = new Map(Object.entries(obj1));
console.log(newMap);
// Map(2) { 'name' => 'Minjoo', 'age' => 20 }
```

### Map -> object : Object.fromEntries(map)

```javascript
const newObj = Object.fromEntries(newMap);
console.log(newObj);
// { name: 'Minjoo', age: 20 }
```

<hr>

## Set

- 유일한 값 저장(중복 허용하지 않음)
- NaN, undefined도 저장 가능

### Set 인스턴스 속성

| 속성      | 📝             |
| :-------- | :------------- |
| **.size** | 값의 개수 반환 |

### Set 인스턴스 메서드

| 메서드             | 📝                  |
| :----------------- | :------------------ |
| **.add(value)**    | 값 추가             |
| **.clear()**       | 전부 삭제           |
| **.delete(value)** | 값 삭제             |
| **.has(value)**    | 값의 존재 여부 확인 |

### Set은 순회가 가능하다

- \[Symbol.iterator]() 메서드를 가지고 있음

  - next() 호출 가능
  - entries(), keys(), values() 호출 가능
    - values()의 결과 keys()와 동일 Map과의 호환성을 위해 생김

  ```javascript
  const newSet = new Set([2, 3, 4, 5]);

  const setIterator = newSet[Symbol.iterator]();
  console.log(setIterator.next());
  // { value: 2, done: false }
  ```

- .forEach(callbackfn,[thisArg]) 사용 가능
  - 모든 키, 값 쌍에 대해 콜백함수를 한 번씩 실행
  - 콜백함수는 value, valueAgain, set을 프로퍼티로 가짐
    - valueAgain은 Map과의 호환성을 위해 생김
  ```javascript
  newSet.forEach((value) => console.log(value));
  // 2, 3, 4, 5 순서대로 반환
  ```
- for...of 루프 사용 가능

  ```javascript
  for (const value of newSet) {
    console.log(value);
  } // 2, 3, 4, 5 순서대로 반환
  ```

  ### Array -> Set

  Set 생성자 사용

  ```javascript
  const array = ['🍎', '🍌', '🥝', '🍎'];
  const arrayToSet = new Set(array);
  console.log(arrayToSet);
  // Set(3) { '🍎', '🍌', '🥝' }
  // Set이 되면서 중복 제거됨
  ```

  ### Set -> Array

  spread 문법 사용

  ```javascript
  const setToArray = [...arrayToSet];
  console.log(setToArray);
  // [ '🍎', '🍌', '🥝' ]
  ```

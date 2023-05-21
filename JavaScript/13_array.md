# 배열(Array)

> 순서가 있는 데이터 모음

- [배열 선언](#배열-선언)
- [배열 메서드](#배열-메서드)
- [배열 인스턴스 메서드](#배열-인스턴스-메서드)

## 배열 선언

```javascript
let arr = new Array(n);
// 1. n개의 아이템을 저장할 수 있는 배열 생성
let arr2 = new Array(1, 2, 3);
// 2. [1, 2, 3] 배열 생성
let arr3 = [];
// 3. 배열 리터럴로 배열 생성
```

### 배열 내 요소에 접근

```javascript
let animal = ['🐼', '🐶', '🐰'];
console.log(animal[0]); // 🐼
console.log(animal[1]); // 🐶
console.log(animal[2]); // 🐰
```

### 배열 내 요소 개수 확인

```javascript
console.log(animal.length); // 3
```

## 배열 메서드

| 메서드         | 📝                                                           |
| :------------- | :----------------------------------------------------------- |
| **.isArray()** | 매개변수가 배열인지 아닌지 여부 확인                         |
| **.from()**    | 유사 배열 객체 or 반복 가능한 객체를 복사해 새로운 배열 만듦 |

```javascript
let newArr = Array.from(animal); // [ '🐼', '🐶', '🐰' ]
newArr = Array.from('animal'); // [ 'a', 'n', 'i', 'm', 'a', 'l' ]
newArr = Array.from({
  0: '🍎',
  1: '🍓',
  length: 2,
}); // [ '🍎', '🍓' ], 오브젝트로 배열 만듦
```

## 배열 인스턴스 메서드

### ⭐️ 배열 추가&제거

- **push()**: **_맨 끝_**에 요소 추가하고 배열의 길이 반환(배열 자체 변경)

```javascript
let animal = ['🐼', '🐶', '🐰'];
let pushAnimal = animal.push('🐵');
console.log(animal); // [ '🐼', '🐶', '🐰', '🐵' ]
console.log(pushAnimal); // 4
```

- **unshift()**: **_맨 앞_**에 요소 추가하고 배열의 길이 반환(배열 자체 변경)

```javascript
let unshiftAniaml = animal.unshift('🐷');
console.log(animal); // [ '🐷', '🐼', '🐶', '🐰', '🐵' ]
console.log(unshiftAniaml); // 5
```

- **pop()**: **_맨 끝_** 요소 제거하고 제거한 요소 반환(배열 자체 변경)

```javascript
let popAnimal = animal.pop();
console.log(animal); // [ '🐷', '🐼', '🐶', '🐰' ]
console.log(popAnimal); // 🐵
```

- **shift()**: **_맨 앞_** 요소 제거하고 제거한 요소 반환(배열 자체 변경)

```javascript
let shiftAnimal = animal.shift();
console.log(animal); // [ '🐼', '🐶', '🐰' ]
console.log(shiftAnimal); // 🐷
```

- **splice([start], [end], [...items])**: 배열의 중간에 있는 요소 제거하거나 추가하고 제거한 요소 배열 형태로 반환

```javascript
let spliceAnimal = animal.splice(1, 1);
console.log(animal); // [ '🐼', '🐰' ]
console.log(spliceAnimal); // [ '🐶' ]

spliceAnimal = animal.splice(1, 0, '🥰');
console.log(animal); // [ '🐼', '🥰', '🐰' ]
console.log(spliceAnimal);
// [] 아무 것도 삭제하지 않았으므로
```

<hr/>

- **slice([start], [end])**: start부터 end 직전 인덱스를 잘라서 새로운 배열 반환

```javascript
let foods = ['🍔', '🍕', '🌮'];
let sliceFoods = foods.slice(0, 1);
console.log(foods); // [ '🍔', '🍕', '🌮' ]
console.log(sliceFoods); // [ '🍔' ]
```

- **reverse()**: 배열의 순서를 뒤집음

```javascript
let newTexts = ['Hello', 'World'];
let reverse = newTexts.reverse();
console.log(reverse); // [ 'World', 'Hello' ]
```

- **join([separator])**: 배열의 요소를 하나의 문자열로 합침<br>
  ✔️ separator : 요소 사이에 넣을 문자, 없으면 ','

```javascript
let colors = ['🩷', '🧡', '💛', '💛', '💚'];
let joinColors = colors.join('-');
console.log(joinColors); // 🩷-🧡-💛-💛-💚
```

- **indexOf(searchElement, [fromIndex])**: searchElement가 배열 안에 있는지 **_앞에서부터_** 확인해서 인덱스 반환<br>
  ✔️ 같은 요소가 여러개 있어도 앞쪽 하나만 반환<br>
  ✔️ 없으면 '-1' 반환

```javascript
let colors = ['🩷', '🧡', '💛', '💛', '💚'];
let indexOfColors = colors.indexOf('💛');
console.log(indexOfColors); // 2
```

- **lastIndexOf(searchElement, [fromIndex])**: searchElement가 배열 안에 있는지 **_뒤에서부터_** 확인해서 인덱스 반환<br>
  ✔️ 같은 요소가 여러개 있어도 뒤쪽 하나만 반환<br>
  ✔️ 없으면 '-1' 반환

```javascript
let lastIndexOfColors = colors.lastIndexOf('💛');
console.log(lastIndexOfColors); // 3
```

- **includes(searchElement, [fromIndex])**: 배열에 searchElement가 포함되어 있는지 확인하고 불리언 값 반환

```javascript
let includesColors = colors.includes('🍓');
console.log(includesColors); // false
```

- **fill(value, [start], [end])**: start부터 end 직전 인덱스까지 value로 채움(배열 자체를 변경)

```javascript
let num = [1, 2, 3, 4];
let fillNum = num.fill(0, 0, 2);
console.log(num); // [ 0, 0, 3, 4 ]
console.log(fillNum); // [ 0, 0, 3, 4 ]
```

- **flat([depth])**: 중첩 배열을 하나로 핌<br>
  ✔️ [depth] : 기본값 = 1

```javascript
let number = [1, 2, [3, [4, 5], 4]];
let flatNumber = number.flat(1);
console.log(flatNumber); // [ 1, 2, 3, [ 4, 5 ], 4 ]
flatNumber = number.flat(2);
console.log(flatNumber); // [ 1, 2, 3, 4, 5, 4 ]
```

- **concat(...items)**: 새로운 배열을 만들거나 기존 배열에 요소 추가 / 여러 개의 배열을 이어줌

```javascript
let array1 = ['1️⃣', '2️⃣', '3️⃣'];
let array2 = ['4️⃣', '5️⃣', '6️⃣'];
let array3 = array1.concat(array2);
console.log(array3);
// [ '1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣' ]

let array4 = array1.concat('💛');
console.log(array4); // [ '1️⃣', '2️⃣', '3️⃣', '💛' ]
```

<hr />

- **forEach(callbackFn, [thisArg])**: 배열의 모든 요소에 콜백함수 실행<br>
  ✔️ callbackFn의 파라미터: currentValue, currentIndex, array<br>
  ✔️ thisArg: 콜백 실행시 this로 사용하는 값

```javascript
const colors = ['🩷', '🧡', '💛', '💛', '💚'];
result = colors.forEach((value) => console.log(value));
// 🩷, 🧡, 💛, 💛, 💚 순서대로 콘솔창에 표시됨
```

- **every(callbackFn, [thisArg])**: 모든 배열 요소가 콜백함수를 만족하는지 확인 후 불리언 값 반환<br>
  ✔️ callbackFn의 파라미터: currentValue, currentIndex, array<br>
  ✔️ thisArg: 콜백 실행시 this로 사용하는 값

```javascript
const rabbit = { name: '🐰', age: 4 };
const dog = { name: '🐶', age: 10 };
const panda = { name: '🐼', age: 5 };
const animals = [rabbit, dog, panda];
result = animals.every((value) => value.name === '💛');
console.log(result); // false
result = animals.every((value) => value.age > 3);
console.log(result); // true
```

- **some(callbackFn, [thisArg])**: 배열의 요소 중 하나라도 조건을 만족하는지 확인 후 불리언 값 반환<br>
  ✔️ callbackFn의 파라미터: currentValue, currentIndex, array<br>
  ✔️ thisArg: 콜백 실행시 this로 사용하는 값

```javascript
result = animals.some((value) => value.age > 4);
console.log(result); // true
```

- **filter(callbackFn, [thisArg])**: 조건에 맞는 요소를 모아서 새로운 배열을 만듦<br>
  ✔️ callbackFn의 파라미터: currentValue, currentIndex, array<br>
  ✔️ thisArg: 콜백 실행시 this로 사용하는 값

```javascript
result = animals.filter((value) => value.age > 4);
console.log(result);
// [ { name: '🐶', age: 10 }, { name: '🐼', age: 5 } ]
```

- **find(callbackFn, [thisArg])**: 조건을 만족하는 **_첫 번째 요소_**의 **_값_** 반환, 없으면 undefined<br>
  ✔️ callbackFn의 파라미터: currentValue, currentIndex, array<br>
  ✔️ thisArg: 콜백 실행시 this로 사용하는 값

```javascript
const bread = { name: '🍞', amount: 10 };
const cake = { name: '🍰', amount: 5 };
const bakery = [bread, cake];
result = bakery.find((value) => value.amount > 4);
console.log(result); // { name: '🍞', amount: 10 }
```

- **findIndex(callbackFn, [thisArg])**: 조건을 만족하는 **_첫 번째 요소_**의 **_인덱스_** 반환, 없으면 -1<br>
  ✔️ callbackFn의 파라미터: currentValue, currentIndex, array<br>
  ✔️ thisArg: 콜백 실행시 this로 사용하는 값

```javascript
result = bakery.findIndex((value) => value.name === '🍰');
console.log(result); // 1
```

- **map(callbackFn, [thisArg])**: 함수를 각각의 요소에 대해 한 번씩 호출해서 나온 결과 값으로 새로운 배열을 반환<br>
  ✔️ callbackFn의 파라미터: currentValue, currentIndex, array<br>
  ✔️ thisArg: 콜백 실행시 this로 사용하는 값

```javascript
const number = [1, 2, 3, 4, 5];
result = number.map((value) => value * 2);
console.log(result); // [ 2, 4, 6, 8, 10 ]
```

- **flatMap(callbackFn, [thisArg])**: 함수를 각각의 요소에 대해 한 번씩 호출해서 나온 결과 값으로 새로운 배열을 반환 + **_중첩된 요소 펼쳐줌_**<br>
  ✔️ callbackFn의 파라미터: currentValue, currentIndex, array<br>
  ✔️ thisArg: 콜백 실행시 this로 사용하는 값

```javascript
// map과 flatMap의 차이
result = number.map((value) => [value * 2]);
console.log(result);
// [ [ 2 ], [ 4 ], [ 6 ], [ 8 ], [ 10 ] ]
result = number.flatMap((value) => [value * 2]);
console.log(result); // [ 2, 4, 6, 8, 10 ]
```

- **reduce(callbackFn, [initialValue])**: 배열의 요소를 누적해서 값을 하나로 만듦<br>
  ✔️ callbackFn의 파라미터: accumulator, currentValue, currentIndex, array<br>
  ✔️ [initialValue]: 초기 값/ 없으면 배열의 첫 요소

```javascript
const number = [1, 2, 3, 4, 5];
result = number.reduce((sum, value) => (sum += value), 0);
console.log(result); // 15
```

- **sort([compareFunction])**: 배열을 정렬 compareFunction을 기준으로 정렬(배열 자체 변경)<br>
  ✔️ [compareFunction]이 없으면 문자열을 비교하여 정렬됨

```javascript
const nums2 = [5, 10, 1, 4, 40, 21];
result = nums2.sort();
console.log(nums2);
// [ 1, 10, 21, 4, 40, 5 ] - 문자열 비교 정렬, 배열 자체 변경
console.log(result); // [ 1, 10, 21, 4, 40, 5 ]

result = nums2.sort((a, b) => a - b);
console.log(nums2); // [ 1, 4, 5, 10, 21, 40 ], 오름차순

result = nums2.sort((a, b) => b - a);
console.log(nums2); // [ 40, 21, 10, 5, 4, 1 ], 내림차순
```

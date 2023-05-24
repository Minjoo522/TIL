# 모듈(module), import, export

- 모듈(module) : 분리된 파일 각각을 '모듈'이라고 함
- export, import 적용하면 다른 모듈에 있는 함수 등을 호출 할 수 있음

## HTML 페이지에 모듈 적용하기

- type="module" 기재
- 자동으로 defer되기 때문에 defer 작성할 필요 없음

```html
<script type="module" src="main.js"></script>
<script type="module" src="print.js"></script>
```

## export & import

- export : 모듈 내보내기
- import : 모듈 가져오기
- 반드시 경로 설정 해주어야 함 (from './print.js')

export를 사용하여 다른 모듈에서 사용하고 싶은 변수나 함수를 내보내고, import로 가져오면 다른 모듈에서도 해당 변수나 함수를 사용 할 수 있다.

```javascript
// print.js 📁
export function printFruit() {
  console.log(fruit);
}

// main.js 📁
import { printFruit } from './print.js';
printFruit();
```

<hr>

## export

### named export

```javascript
// 하나 씩 export
export const fruit = '🍎';

export function printFruit() {
  console.log(fruit);
}

export class Fruit {
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

// 이름들 모아서 export
export { fruit, printFruit, Fruit };

// 이름 바꿔서 export
export { fruit as fru };
```

### default export

- 'export default'를 기재
- 모듈 당 딱 하나의 변수나 함수에만 사용할 수 있다

```javascript
export default function printFruit() {
  console.log(fruit);
}
```

## import

```javascript
// 하나 import
import { printFruit } from './print.js';

// 여러개 import
import { printFruit, Fruit } from './print.js';

// 이름 바꿔서 import
import { printFruit as print } from './print.js';

// 모듈 객체로 만들어서 import
import * as print from './print.js';
print.printFruit(); // 사용 할 때
```

### default export -> import

- 중괄호 없이 import 가능
- 다른 이름으로 import 가능
- 다른 것들과 같이 import할 때 먼저 선언 해주어야 함

```javascript
import printFruit from './print.js';

// 📁 print.js의 printFruit()을 default export 후 다른 이름으로 import 함
import print from './print.js';
print();

// default export 먼저 선언
import printFruit, { Fruit } from './print.js';
```

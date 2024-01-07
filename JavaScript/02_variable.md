# JavaScript 변수

## let vs const

### let

- 모던한 변수 선언 키워드
- 변수의 값 변경 가능(`재할당 가능`)

```javascript
let a; // 변수 선언
a = 2; // 값 할당
a = 3; // 재할당
```

### const

- 변수의 값 변경 불가(`재할당 불가능`)

```javascript
const b; // 변수 선언
b = 2; // 값 할당
```

## 변수 네이밍 규칙

1. `문자`, `숫자`, `'$'`, `'_'`만 사용 가능
2. 첫 글자는 숫자 불가
3. 예약어 사용 불가

### camelCase

```javascript
// 🙆‍♀️ 바람직한 변수 이름
let userName = 'Minjoo';
const myBirthdate = '05.22';

// 🙅‍♀️ 잘못된 변수 이름
let 1a; // 숫자로 시작 불가
const user-name; // '-' 사용 불가
let function; // 예약어 사용 불가
```

## 대문자 상수

- 코드가 실행되기 전에 이미 값을 알고 있는 상수
- `하드 코딩`한 값의 별칭을 만들 때

# # Grid

flex는 1차원인데 반해, grid는 가로, 세로 다 설정이 가능 → 2차원적으로 가능!

## 부모 컨테이너에 display: grid 지정하면, 자식들은 각각 grid cell이 된다

## ✨ 부모 컨테이너

- grid-template-columns : 가로로 몇 개의 셀

- grid-template-rows

- ✨ **grid-template-areas → 강력하게 사용 가능!**

- grid-gap : 각각의 셀마다 갭을 얼마나 줄건지

- 🚨 없어짐 : 그냥 **‘gap’** 사용

## ✨ 자식 요소들 - 각각의 셀들이 어디서 시작해서 얼마나 차지할 것인지

### 마이너스 범위도 가능 -1, -2, 끝부터 기준

- grid-column-start

- grid-column-end

- grid-row-start

- grid-row-end

- ✨ **grid-area : 어떤 영역에 표기되길 원하는지**

- ✨ object-fit : 박스의 크기에 이미지를 어떤 형태로 보여줄 것인지 → 이미지가 눌리거나 늘어나지 않게, 비율을 유지하면서 보여주기

- **contain** : 비율을 유지하면서 정의된 너비와 높이안에서 가능한 많이 확대(scale up)

- **cover** : 비율을 유지하면서 정의된 너비와 높이를 꽉 채울 때까지 확대

- **none** : 요소의 크기와는 상관없이 기본 알고리즘에 의해 조정 / 원본의 크기에 가로 정렬

- **scale-down** : 아무것도 지정되지 않거나 혹은 `contain` 이 지정되어 있는 것처럼 변경 => 원본 크기보다 작아짐

- ✨ object-position : 오브젝트의 위치를 원하는 값으로 변경

```css
.container {
  display: grid;
  padding: 10px;
  grid-template-columns: repeat(5, 1fr);
  /* repeat(5, 100px) : 100px을 5번 반복해줘 */
  /* fr유닛 : 비율로 나눔 */
  /* 반응형으로 만드는 것이 좋다 */
  /* grid-template-rows: 100px 200px repeat(2, 100px); */
  /* grid-auto-rows: 150px; */
  /* 몇 줄이 되든 상관 없이 각 줄의 세로 길이를 150px로 해줘 */
  grid-auto-rows: minmax(150px, auto);
  /* 아이템이 있든 없든 150px, 만약 아이템이 길면 자동으로 */
  column-gap: 10px;
  row-gap: 10px;
  /* 아이템 사이의 간격 */
}

.item2 {
  /* grid-column-start: 2;
  grid-column-end: 4; */
  /* grid-column: 2 / 4; ✨ 더 간단하게 작성 가능 */
  /* grid-column: 2 / span 3; span으로 몇개 차지할지 지정 가능 */
  grid-column: 1 / -1; /* -범위도 지정 가능 */
  /* grid-row-start: 1;
  grid-row-end: 3; */
  grid-row: 1 / 3;
}
```

# grid area 사용법

```css
body {
  padding: 5rem;
  background-color: black;
}

.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 150px;
  gap: 1rem;
  grid-template-areas:
    **'a a a'
    'b c c'
    'b d g'
    'e f g';**
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image1 {
  grid-area: a;
}

.image2 {
  grid-area: b;
}

.image3 {
  grid-area: c;
}

.image4 {
  grid-area: d;
}

.image5 {
  grid-area: e;
}

.image6 {
  grid-area: f;
}

.image7 {
  grid-area: g;
}
```

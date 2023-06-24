# Flexbox

## box 속성

- display
- felx-direction
- flex-wrap
- flex-flow
- justify-content
- align-items
- align-content

## item 속성

- order
- flex-grow
- flex-shrink
- flex

## 중심축, 반대축

- 아이템이 왼쪽에서 오른쪽으로 정렬되면 : 가로가 메인축
- 아이템이 위에서 아래로 정렬되면 : 세로가 메인축

  1️⃣ flex-direction: row; // 기본값

  - flex-direction: row-reverse; // 아이템 순서 바뀌면서 오른쪽에 붙음
  - flex-direction: column; // 위에서 아래로 정렬
  - flex-direction: column-reverse; // 아이템 순서 바뀌면서 아래 붙음

  2️⃣ flex-wrap: nowrap; // 기본값, 아이템이 아무리 많아져도 한 줄에 붙어있음

  - flex-wrap: wrap; // 아이템이 한 줄에 꽉차면 자동적으로 밑으로 내려감
  - flex-wrap: wrap-reverse; // 아이템 순서 바뀌면서 랩핑
  - flex-flow: column nowrap;

  3️⃣ justify-content : 중심축!(main axis)

  - justify-content: flex-start; // 기본 값, 중심축 기준으로
  - justify-content: 아이템을 어떻게 정렬할 것인지
  - justify-content: flex-end; // 만약 가로가 중심축이면 오른쪽에 붙고, 세로가 중심축이면 아래로 붙음
    ✨ 아이템의 순서는 바뀌지 않는다.
  - justify-content: center; // 중심축을 기준으로 가운데로
  - justify-content: space-around; // 박스를 둘러싸게 스페이싱을 넣어 줌
    만약 가로가 중심축이면 제일 왼쪽과 제일 오른쪽은 상자가 하나니까 스페이스가 좁음
  - justify-content: space-evenly; // 똑같은 간격을 넣어줌
  - justify-content: space-between; // 중심축이 가로면, 왼쪽과 오른쪽은 화면에 맞게 배치하고, 중간에만 아이템을 넣어줌

  4️⃣ align-items : 반대축!

  - align-items: baseline; // 베이스라인을 기준으로 균등하게 맞춰줌
  - align-content: space-between; // 중심축이 가로인 경우 위 아래는 딱 붙어있고 남은 아이템이 가운데 위치
  - align-items: center; // 중간에 위치
  - 나머지 : justify-content와 동일하게 사용 가능

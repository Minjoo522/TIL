// 함수 안에서 정말 필요한 데이터만 받아와야 함 ➡️ 외부 다른 객체에 대한 의존성을 낮춤

export function inNewEngland(state) {
  return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(state);
}

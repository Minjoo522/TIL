// 예제 1
export function rating(driver) {
  return driver.numberOfLateDeliveries > 5 ? 2 : 1;
}

// 예제 2
function reportLines(customer) {
  const result = [];
  result.push(['name', customer.name]);
  result.push(['location', customer.location]);
  return result;
}
// 너무 긴 코드 ➡️ 의미있는 단위로 나눠서 함수로 만들기 ➡️ 의미있는 이름을 붙혀서 가독성, 재사용성, 유지보수성 높이기

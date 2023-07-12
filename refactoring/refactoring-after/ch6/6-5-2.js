export default class Book {
  #reservations;
  constructor() {
    this.#reservations = [];
  }

  // 불리언으로 다른 동작을 하게 만드는 함수, 플래그를 추가한 함수를 만드는 것은 좋진 않다! ❌
  addReservation(customer, isPriority = false) {
    this.#reservations.push(customer);
  }

  hasReservation(customer) {
    return this.#reservations.some((reservedCustomer) => reservedCustomer.id === customer.id);
  }
}

## equals는 일반 규약을 지켜 재정의하라

### 아래 상황 중 하나에 해당하면, 재정의하지 않는 것이 좋다

- 각 인스턴스가 본질적으로 고유하다
- 인스턴스의 논리적 동치성(logical eqaulity)를 검사할 일이 없다
- 상위 클래스에서 재정의한 equals가 하위 클래스에도 딱 들어맞는다
- 클래스가 `private`이거나 `package-private`이고 equals 메서드를 호출할 일이 없다

### equals를 재정의해야 할 때

- 객체 식별성(object identity)이 아니라 `논리적 동치성`을 확인해야하는데,
- 상위 클래스의 equals가 논리적 동치성을 비교하도록 재정의되지 않았을 때
- 주로 `값 클래스` : Integer와 String 처럼 값을 표현하는 클래스

### equals 재정의 일반 규약

> equals 규약을 어기면 그 객체를 사용하는 다른 객체들이 어떻게 반응할지 알 수 없다

- `반사성(reflecivity)`: null이 아닌 모든 참조 값 x에 대해, x.equals(x)는 true다
  - 객체는 자기 자신과 같아야 한다
- `대칭성(symmetry)`: null이 아닌 모든 참조 값 x, y에 대해, x.equals(y)가 true면 y.equals(x)도 true다
  - 두 객체는 서로에 대한 동치 여부에 똑같이 답해야 한다
- `추이성(transitivity)`: null이 아닌 모든 참조 값 x, y, z에 대해, x.equals(y)가 true고 y.equals(x)도 true면 x.equals(z)도 true다
- `일관성(consistency)`: null이 아닌 모든 참조 값 x, y에 대해, x.equals(y)를 반복해서 호출하면 항상 true를 반환하거나 항상 false를 반환해야 한다
- `null-아님`: null이 아닌 모든 참조 값 x에 대해, x.equals(null)은 false다

> 구체 클래스를 확장해 새로운 값을 추가하면서 equals 규약을 만족시킬 방법은 존재하지 않는다

### 양질의 equals 메서드 구현 방법

1. `==` 연산자를 사용해 자기 자신의 참조인지 확인한다
   - 단순한 성능 최적화용
2. `instanceof` 연산자로 입력이 올바른 타입인지 확인한다
3. 입력을 올바른 타입으로 형변환한다
4. 입력 객체와 자기 자신의 대응되는 '핵심' 필드들이 모두 일치하는지 하나씩 검사한다
   - 기본 타입 필드 : `==`
   - 참조 타입 필드 : `equals`
   - float, double : `Float.compare(float, float)`, `Double.compare(double, double)`
     - Float.equals, Double.equals는 오토박싱 수반할 수 있음 ➡️ 성능상 좋지 않음

- 다를 가능성이 더 크거나 비교하는 비용이 싼 필드를 먼저 비교
- equals를 재정의할 땐 `hashCode`도 반드시 재정의하자
- `Object` 외의 타입을 매개변수로 받는 equals 메서드는 선언하지 말자
  - 타입을 구체적으로 명시한 equals 메서드는 오히려 해가 된다

# 의존관계 자동 주입

> 스프링 빈일때 동작

- 생성자 주입
- 수정자 주입(setter)
- 필드 주입
- 일반 메서드 주입

## 생성자 주입

- `@Autowired` 생성자에 붙임
- 기본 조회 전략 : 타입이 같은 빈을 찾아서 주입
  - `getBean(MemberRepository.class)`와 동일
- 생성자 호출 시점에 `딱 한 번만 호출`되는 것이 보장된다.
- `불변, 필수` 의존 관계에 사용

> **생성자가 딱 하나만 있으면 `@Autowired` 생략 가능**

## 수정자 주입

- setter에 @Autowired 붙임
- `선택, 변경` 가능성이 있는 의존 관계에 사용
  - 중간에 인스턴스 변경하고 싶은 경우
  - `@Autowired(required = false)`로 설정하면 선택적으로 사용 가능

## 필드 주입

- 필드에 바로 주입하는 방법
- 외부에서 변경이 불가능해서 테스트하기 힘들다

```java
@Autowired private MemberRepository memberRepository;
```

- 애플리케이션의 실제 코드와 관계없는 테스트코드
- 스프링 설정을 목적으로 하는 @Configuration 같은 곳에서만 사용

## 일반 메서드 주입

- 수정자와 비슷
- 한번에 여러 필드를 주입 받을 수 있다
- 일반적으로 잘 사용하지 않음

```java
@Autowired
public void init(MemberRepository memberRepository, DiscountPolicy discountPolicy) {
    this.memberRepository = memberRepository;
    this.discountPolicy = discountPolicy;
}
```

## 옵션 처리

> 스프링 빈이 없어도 동작해야 할 때

- `@Autowired(required=false)` : 자동 주입할 대상이 없으면 수정자 메서드 자체가 호출 안됨
- `org.springframework.lang.@Nullable` : 자동 주입할 대상이 없으면 null이 입력된다.
- `Optional<>` : 자동 주입할 대상이 없으면 `Optional.empty`가 입력된다.

```java
// 아예 호출이 안된다
@Autowired(required = false)
public void setNoBean1(Member noBean1) {
    System.out.println("noBean1 = " + noBean1);
}

@Autowired
public void setNoBean2(@Nullable Member noBean2) {
    System.out.println("noBean2 = " + noBean2);
}

@Autowired
public void setNoBean3(Optional<Member> noBean3) {
    System.out.println("noBean3 = " + noBean3);
}
```

```bash
noBean2 = null
noBean3 = Optional.empty
```

## `생성자 주입`을 선택해야 하는 이유

- 테스트가 쉽다.
- 프레임워크에 의존하지 않고 순수한 자바 언어의 특징을 잘 살리는 방법이다.

### `불변`

- 대부분 의존관계 주입은 애플리케이션 종료시점까지 변경할 일이 없다.
- 수정자 주입을 사용하면 setter를 열어둬야 한다.
  - 실수로 변경 가능성 🈶

### `누락`

- 의존관계 주입이 누락될 가능성이 있음

### `final` 키워드

- 실수에의한 누락을 방지한다.

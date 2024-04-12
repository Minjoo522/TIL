# 빈

## 빈 이름

- 메서드 이름 사용
- `@Bean(name="memberService2")`와 같이 직접 부여 가능
- 빈 이름은 **항상 다른 이름**을 부여해야한다.

## 컨테이너에 등록된 빈 조회

- `ac.getBeanDefinitionNames()` : 스프링에 등록된 모든 빈 이름 조회
- `ac.getBean()` : 빈 이름으로 빈 객체(인스턴스) 조회

```java
@Test
@DisplayName("모든 빈 출력하기")
void findAllBean() {
    String[] beanDefinitionNames = ac.getBeanDefinitionNames();
    for (String beanDefinitionName : beanDefinitionNames) {
        Object bean = ac.getBean(beanDefinitionName);
        System.out.println("name = " + beanDefinitionName + " object = " + bean);
    }
}
```

```bash
name = org.springframework.context.annotation.internalConfigurationAnnotationProcessor object = org.springframework.context.annotation.ConfigurationClassPostProcessor@1583741e
name = org.springframework.context.annotation.internalAutowiredAnnotationProcessor object = org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor@5b367418
name = org.springframework.context.annotation.internalCommonAnnotationProcessor object = org.springframework.context.annotation.CommonAnnotationBeanPostProcessor@36060e
name = org.springframework.context.event.internalEventListenerProcessor object = org.springframework.context.event.EventListenerMethodProcessor@481ba2cf
name = org.springframework.context.event.internalEventListenerFactory object = org.springframework.context.event.DefaultEventListenerFactory@46b61c56
# ⬆️ 스프링 내부적으로 스프링 자체를 확장하기 위해 사용하는 기반 빈

name = appConfig object = hello.core.AppConfig$$SpringCGLIB$$0@2e48362c
# appConfig도 등록됨
name = memberService object = hello.core.member.MemberServiceImpl@1efe439d
name = memberRepository object = hello.core.member.MemoryMemberRepository@be68757
name = orderService object = hello.core.order.OrderServiceImpl@7d446ed1
name = discountPolicy object = hello.core.discount.RateDiscountPolicy@12d2ce03
```

### 특정 빈만 출력

- `beanDefinition.getRole()` : 빈의 역할 확인
- `ROLE_APPLICATION` : 직접 등록한 애플리케이션 빈
- `ROLE_INFRASTRUCTURE` : 스프링이 내부에서 사용하는 빈

```java
@Test
@DisplayName("애플리케이션 빈 출력하기")
void findApplicationBean() {
    String[] beanDefinitionNames = ac.getBeanDefinitionNames();
    for (String beanDefinitionName : beanDefinitionNames) {
        BeanDefinition beanDefinition = ac.getBeanDefinition(beanDefinitionName);

        if (beanDefinition.getRole() == BeanDefinition.ROLE_APPLICATION) {
            Object bean = ac.getBean(beanDefinitionName);
            System.out.println("name = " + beanDefinitionName + " object = " + bean);
        }
    }
}
```

```bash
name = appConfig object = hello.core.AppConfig$$SpringCGLIB$$0@1583741e
name = memberService object = hello.core.member.MemberServiceImpl@5b367418
name = memberRepository object = hello.core.member.MemoryMemberRepository@36060e
name = orderService object = hello.core.order.OrderServiceImpl@481ba2cf
name = discountPolicy object = hello.core.discount.RateDiscountPolicy@46b61c56
```

## 스프링 빈 조회

- `ac.getBean(빈이름, 타입)`
- `ac.getBean(타입)`
- 조회 대상 스프링 빈이 없으면 예외 발생
- 같은 타입이 둘 이상 있으면 예외 발생
  - 빈이름 지정하면 된다.

```java
@Test
@DisplayName("빈 이름으로 조회")
void findBeanByName() {
    MemberService memberService = ac.getBean("memberService", MemberService.class);
    assertThat(memberService).isInstanceOf(MemberServiceImpl.class);
}
```

```java
@Test
@DisplayName("타입으로 조회시 같은 타입이 둘 이상 있으면, 빈 이름을 지정하면 된다.")
void findBeanByName() {
    MemberRepository memberRepository = ac.getBean("memberRepository1", MemberRepository.class);
    assertThat(memberRepository).isInstanceOf(MemoryMemberRepository.class);
}
```

- 구체 타입으로도 조회할 수 있다.
  - 구현에 의존하므로 좋진 않음

```java
@Test
@DisplayName("구체 타입으로 조회")
void findBeanByName2() {
    MemberService memberService = ac.getBean("memberService", MemberServiceImpl.class);
    assertThat(memberService).isInstanceOf(MemberServiceImpl.class);
}
```

### 동일한 타입이 둘 이상일 때

- `ac.getBeansOfType()` : 해당 타입의 빈을 모두 조회할 수 있다.

```java
@Test
@DisplayName("특정 타입을 모두 조회하기")
void findAllBeanByType() {
    Map<String, MemberRepository> beansOfType = ac.getBeansOfType(MemberRepository.class);
    for (String key : beansOfType.keySet()) {
        System.out.println("key = " + key + " value = " + beansOfType.get(key));
    }
    System.out.println("beansOfType = " + beansOfType);
    assertThat(beansOfType.size()).isEqualTo(2);
}
```

### 상속 관계일 때

- 부모 타입으로 조회하면 자식 타입도 함께 조회된다.
- `Object` 타입으로 조회 ➡️ 모든 스프링 빈 조회

```java
@Test
@DisplayName("부모 타입으로 조회 시, 자식이 둘 이상 있으면 빈 이름을 지정하면 된다.")
void findBeanByParentTypeBeanName() {
    DiscountPolicy rateDiscountPolicy = ac.getBean("rateDiscountPolicy", DiscountPolicy.class);
    assertThat(rateDiscountPolicy).isInstanceOf(RateDiscountPolicy.class);
}
```

# 스프링 컨테이너

- `ApplicationContext` == 스프링 컨테이너(인터페이스)
- `@Configuration`이 붙은 클래스에서 `@Bean`이라 적힌 메서드를 모두 호출해서 반환된 객체를 스프링 컨테이너에 등록한다.
- 스프링 빈 : 스프링 컨테이너에 등록된 객체
  - `@Bean`이 붙은 메서드 명을 스프링 빈의 이름으로 사용한다.
  - `applicationContext.getBean()`메서드를 사용해 찾을 수 있다.

```java
@Configuration
public class AppConfig {

    @Bean
    public MemberService memberService() {
        return new MemberServiceImpl(memberRepository());
    }
```

```java
ApplicationContext applicationContext = new AnnotationConfigApplicationContext(AppConfig.class);
MemberService memberService = applicationContext.getBean("memberService", MemberService.class);
OrderService orderService = applicationContext.getBean("orderService", OrderService.class);
```

## 스프링 컨테이너 생성 과정

- `ApplicationContext` == 스프링 컨테이너(인터페이스)
- XML 기반, 애노테이션 기반의 자바 설정 클래스로 만들 수 있다.
- `new AnnotationConfigApplicationContext(AppConfig.class)` ➡️ `ApplicationContext` 인터페이스의 구현체

- `BeanFactory`도 있지만,
- 일반적으로 `ApplicationContext`를 스프링 컨테이너라고 한다.

### 빈 이름

- 메서드 이름 사용
- `@Bean(name="memberService2")`와 같이 직접 부여 가능
- 빈 이름은 **항상 다른 이름**을 부여해야한다.

# 스프링 컨테이너

- `ApplicationContext`
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

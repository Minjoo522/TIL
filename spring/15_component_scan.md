# 컴포넌트 스캔

- 설정 정보 없이도 자동으로 스프링 빈을 등록하는 기능을 제공한다.
- 의존 관계를 자동으로 주입하는 `@Autowired` 기능도 제공한다.
- `@ComponentScan`

```java
@Configuration
@ComponentScan(
        excludeFilters = @ComponentScan.Filter(type = FilterType.ANNOTATION, classes = Configuration.class) // 컴포넌트 스캔 뺄 부분 지정
)
public class AutoAppConfig {
}
```

- `@Component` 애노테이션이 붙은 클래스를 스캔해서 스프링 빈으로 등록함
- 스프링 빈의 기본 이름은 클래스명 사용, 맨 앞글자만 소문자를 사용한다.
  - MemberServiceImpl 클래스  ➡️ memberServiceImpl
  - 직접 지정 : `@Component("memberService2")`

## 의존관계 주입

- `@Autowired` 생성자에 붙임
- 기본 조회 전략 : 타입이 같은 빈을 찾아서 주입
  - `getBean(MemberRepository.class)`와 동일

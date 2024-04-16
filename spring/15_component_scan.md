# 컴포넌트 스캔

- 설정 정보 없이도 자동으로 스프링 빈을 등록하는 기능을 제공한다.
- 의존 관계를 자동으로 주입하는 `@Autowired` 기능도 제공한다.
- `@ComponentScan`

```java
@Configuration
@ComponentScan(
        basePackages = "hello.core.member",
        basePackageClasses = AutoAppConfig.class,
        excludeFilters = @ComponentScan.Filter(type = FilterType.ANNOTATION, classes = Configuration.class) // 컴포넌트 스캔 뺄 부분 지정
)
public class AutoAppConfig {
}
```

- `@Component` 애노테이션이 붙은 클래스를 스캔해서 스프링 빈으로 등록함
- 스프링 빈의 기본 이름은 클래스명 사용, 맨 앞글자만 소문자를 사용한다.
  - MemberServiceImpl 클래스  ➡️ memberServiceImpl
  - 직접 지정 : `@Component("memberService2")`
- `basePackages` : 이 패키지와 하위 패키지 컴포넌트 스캔 대상이 됨
  - `{"hello.core", "hello.service"}` ➡️ 여러 시작 위치 지정 가능
- `basePackageClasses` : 이 클래스의 패키지부터 찾음
- 지정하지 않으면 `@ComponentScan`이 붙은 설정 정보 클래스의 패키지가 시작 위치가 됨
  - 설정 정보 클래스의 위치를 프로젝트 최상단에 둠

## 컴포넌트 스캔 기본 대상

- `@Controller` : 스프링 MVC 컨트롤러로 인식
- `@Service` : 핵심 비즈니스 로직이 있음을 개발자로하여금 인식하게 한다.
- `@Repository` : 데이터 계층의 예외를 스프링 예외로 변환해준다.
- `@Configuration` : 스프링 설정 정보로 인식, 스프링 빈이 싱글톤을 유지하도록 추가 처리를 한다.

## 필터

```java
@ComponentScan(
        includeFilters = @Filter(type = FilterType.ANNOTATION, classes = MyIncludeComponent.class),
        excludeFilters = @Filter(type = FilterType.ANNOTATION, classes = MyExcludeComponent.class)
)
```

- `ANNOTATION` : 기본 값
- `ASSIGNABLE_TYPE` : 지정한 타입과 자식 타입을 인식해서 동작
- `ASPECTJ` : AspectJ 패턴 사용
- `REGIX` : 정규 표현식
- `CUSTOM` : `TypeFilter`라는 인터페이스를 구현해서 처리

## 중복 등록과 충돌

### 자동 빈 등록 vs 자동 빈 등록

- `ConfilictingBeanDefinitionException` 예외 발생

### 수동 빈 등록 vs 수동 빈 등록

- 수동 빈 등록이 우선권을 가진다.(수동 빈이 자동 빈을 오버라이딩)
- **최근 스프링 부트에서는 오류가 발생하도록 기본 값을 바꾸었다.**

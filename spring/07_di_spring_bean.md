# DI

- Dependency Injection : 의존성 주입

## Autowired

- 자동 연결
- MemberController가 생성될 때 spring bean에 있는 MemberService를 가져다가 주입해 줌

```java
@Controller
public class MemberController {
    private final MemberService memberService;

    @Autowired
    // memberService를 spring container와 연결해 줌
    // 단, 얘만 해줘서는 안되고 다른 부분에서도 애너테이션 필요
    public MemberController(MemberService memberService) {
        this.memberService = memberService;
    }
}
```

## Service

```java
// Service 달아주기
@Service
public class MemberService {
    private final MemberRepository memberRepository;

    @Autowired
    public MemberService(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    // ...
}
```

## Repository

```java
// Repository 달아주기
@Repository
public class MemoryMemberRepository implements MemberRepository
```

# 스프링 빈

- 스프링 컨테이너에 등록할 때 기본적으로 싱글톤으로 등록

## 스프링 빈을 등록하는 두 가지 방법

- **컴포넌트 스캔과 자동 의존관계 설정**
  - `@Component` : `@Service`, `@Repository`, `@Contoroller`에는 @Component가 포함되어 있음
  - `@SpringBootApplication`가 있는 하위 디렉토리만 ComponentScan
- **자바 코드로 직접 스프링 빈 등록하기**

  - 컴포넌트 스캔을 사용하면 사용할 객체 변경시 여러 코드 수정해야 하지만, 직접 등록하면 return되는 객체 이름만 수정하면 됨

  ```java
  package hello.hellospring;

  import hello.hellospring.repository.MemberRepository;
  import hello.hellospring.repository.MemoryMemberRepository;
  import hello.hellospring.service.MemberService;
  import org.springframework.context.annotation.Bean;
  import org.springframework.context.annotation.Configuration;

  @Configuration
  public class SpringConfig {

      @Bean
      public MemberService memberService() {
          return new MemberService(memberRepository());
      }

      @Bean
      public MemberRepository memberRepository() {
          return new MemoryMemberRepository();
      }
  }
  ```

- 필드 주입도 가능하지만 추천하지 않음
  - 애플리케이션 조립 시, 바꿀 수 있는 방법이 없기 때문에

```java
@Autowired private final MemberService memberService;
```

- setter 주입
  - 한 번 세팅되면 바꿀 이유가 없는데 setter가 public으로 오픈 됨

```java
@Autowired
public void setMemberService(MemberService memberService) {
    this.memberService = memberService;
}
```

- 생성자 주입 권장
- 정형화된 컨트롤러, 서비스, 리포지토리 등은 컴포넌트 스캔을 사용
  - **정형화되지 않거나, 상황에 따라 구현 클래스 변경해야 하면 스프링 빈으로 등록**

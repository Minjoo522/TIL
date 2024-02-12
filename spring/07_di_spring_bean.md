# DI

- Dependency Injection : 의존성 주입

## Autowired

- 자동 연결

```java
@Controller
public class MemberController {
    private final MemberService memberService;

    @Autowired
    // memberService를 spring container와 연결해 줌
    public MemberController(MemberService memberService) {
        this.memberService = memberService;
    }
}
```

## Service

```java
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

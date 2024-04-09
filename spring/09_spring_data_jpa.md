# 스프링 데이터 JPA

- 개발 생산성 증가
- 인터페이스만으로 개발을 완료할 수 있음
- CRUD 기능 제공
- 관계형 데이터베이스를 사용하면 스프링 데이터 JPA는 선택이 아닌 필수
- 페이징 기능 자동 제공

```java
// 인터페이스가 인터페이스 구현할 때 extends
public interface SpringDataJpaMemberRepository extends JpaRepository<Member, Long>, MemberRepository {
  // <Member, Long> 도메인, id 데이터 형식

    @Override
    Optional<Member> findByName(String name);
}
```

- 구현체를 만들어서 자동으로 스프링빈으로 등록해줌

```java
private final MemberRepository memberRepository;

@Autowired // 생성자 하나이면 생략 가능
public SpringConfig(MemberRepository memberRepository) {
    this.memberRepository = memberRepository;
}

@Bean
public MemberService memberService() {
    return new MemberService(memberRepository);
}
```

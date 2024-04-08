# 스프링 JdbcTemplate

- 반복 코드를 대부분 제거해준다.

```java
public class JdbcTemplateMemberRepository implements MemberRepository {
    private final JdbcTemplate jdbcTemplate;

    public JdbcTemplateMemberRepository(DataSource dataSource) {
        jdbcTemplate = new JdbcTemplate(dataSource);
    }

    @Override
    public Member save(Member member) {
        SimpleJdbcInsert jdbcInsert = new SimpleJdbcInsert(jdbcTemplate);
        jdbcInsert.withTableName("member").usingGeneratedKeyColumns("id");

        Map<String, Object> parameters = new HashMap<>();
        parameters.put("name", member.getName());

        Number key = jdbcInsert.executeAndReturnKey(new MapSqlParameterSource(parameters));
        member.setId(key.longValue());
        return member;
    }

    @Override
    public Optional<Member> findById(Long id) {
        List<Member> result = jdbcTemplate.query("select * from member where id = ?", memberRowMapper(), id);
        return result.stream().findAny();
    }

    @Override
    public Optional<Member> findByName(String name) {
        List<Member> result = jdbcTemplate.query("select * from member where name = ?", memberRowMapper(), name);
        return result.stream().findAny();
    }

    @Override
    public List<Member> findAll() {
        return jdbcTemplate.query("select * from member", memberRowMapper());
    }

    private RowMapper<Member> memberRowMapper() {
        return (rs, rowNum) -> {
            Member member = new Member();
            member.setId(rs.getLong("id"));
            member.setName(rs.getString("name"));
            return member;
        };
    }
}
```

# JPA

- sql도 JPA가 만들어서 실행해준다.
- SQL과 데이터 중심 설계 ➡️ 객체 중심 설계로 패러다임을 전환할 수 있다.
- 개발 생산성을 크게 높일 수 있다.

## `build.gradle`

```gradle
implementation 'org.springframework.boot:spring-boot-starter-data-jpa'
```

## `application.properties`

```
spring.jpa.show-sql=true # jpa가 날린 query 볼 수 있음
spring.jpa.hibernate.ddl-auto=none # create : 객체를 보고 테이블까지 만듦
```

## entity mapping

```java
@Entity
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // DB에서 자동 생성
    private Long id;
    private String name;
```

## Repository

```java
public class JpaMemberRepository implements MemberRepository {

    private final EntityManager em;

    public JpaMemberRepository(EntityManager em) {
        this.em = em;
        // jpa를 쓰려면 EntityManager를 주입 받아야한다.
    }

    @Override
    public Member save(Member member) {
        em.persist(member);
        return member;
    }

    @Override
    public Optional<Member> findById(Long id) {
        Member member = em.find(Member.class, id);
        return Optional.ofNullable(member);
    }

    @Override
    public Optional<Member> findByName(String name) {
        List<Member> result = em.createQuery("select m from Member m where m.name = :name", Member.class)
                .setParameter("name", name)
                .getResultList();

        return result.stream().findAny();
    }

    @Override
    public List<Member> findAll() {
        return em.createQuery("select m from Member m", Member.class) // 객체를 대상으로 query를 날림, m == entity 자체를 사용하겠다.
                .getResultList();
    }
}
```

## JPA 사용 시, 항상 transaction이 있어야 한다.

- 모든 데이터 변경이 transaction 안에서 실행되어야 한다.
- service 클래스 위가 아닌 사용하는 메서드 위에 선언되어도 됨

```java
@Transactional
public class MemberService {
    private final MemberRepository memberRepository;

    public MemberService(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }
```

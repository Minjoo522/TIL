# 애노테이션 직접 만들기

- `@Qualifier("mainDiscountPolicy")` ➡️ 여기서 문자 "mainDiscountPolicy"는 컴파일시 타입 체크가 안된다.
  - 애노테이션을 만들어서 해결 가능

```java
// 📁 MainDiscountPolicy
@Target({ElementType.FIELD, ElementType.METHOD, ElementType.PARAMETER, ElementType.TYPE, ElementType.ANNOTATION_TYPE})
@Retention(RetentionPolicy.RUNTIME)
@Inherited
@Documented
@Qualifier("mainDiscountPolicy")
public @interface MainDiscountPolicy {
}
```

```java
// 📁 DiscountPolicy
@Component
@MainDiscountPolicy
public class RateDiscountPolicy implements DiscountPolicy {
    private int discountPercent = 10;

    @Override
    public int discount(Member member, int price) {
        if (member.getGrade() == Grade.VIP) {
            return price * discountPercent / 100;
        } else {
            return 0;
        }
    }
}
```

```java
// 📁 OrderServiceImpl
@Autowired
public OrderServiceImpl(MemberRepository memberRepository, @MainDiscountPolicy DiscountPolicy discountPolicy) {
    this.memberRepository = memberRepository;
    this.discountPolicy = discountPolicy;
}
```

- `@Primary`로 해결되면 `@Primary` 사용하기

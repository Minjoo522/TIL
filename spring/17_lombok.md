# 롬복

## 세팅

```gradle
group = 'hello'
version = '0.0.1-SNAPSHOT'

// lombok 설정 추가 시작
configurations {
	compileOnly {
		extendsFrom annotationProcessor
	}
}
// lombok 설정 추가 끝

java {
	sourceCompatibility = '17'
}

repositories {
	mavenCentral()
}

dependencies {
	implementation 'org.springframework.boot:spring-boot-starter'

	// lombok 라이브러리 추가 시작
	compileOnly 'org.projectlombok:lombok'
	annotationProcessor 'org.projectlombok:lombok'

	testCompileOnly 'org.projectlombok:lombok'
	testAnnotationProcessor 'org.projectlombok:lombok'
	// lombok 라이브러리 추가 끝

	testImplementation 'org.springframework.boot:spring-boot-starter-test'
}
```

- settings ➡️ Annotation Processors ➡️ Enable Annotation Processing 활성화

## 특징

- `@Getter`, `@Setter` 자동으로 만들어줌
- 생성자도 지원 : `@RequiredArgsConstructor` ➡️ final이 명시된 필드를 파라미터로 갖는 생성자를 자동으로 만들어줌
- `@ToString`

```java
@Getter
@Setter
public class HelloLombok {
    private String name;
    private int age;

    public static void main(String[] args) {
        HelloLombok helloLombok = new HelloLombok();
        helloLombok.setName("asef");
        String name = helloLombok.getName();
        System.out.println("name = " + name);
    }
}
```

### before

```java
@Component
public class OrderServiceImpl implements OrderService {
    private final MemberRepository memberRepository;
    private final DiscountPolicy discountPolicy;

    @Autowired
    public OrderServiceImpl(MemberRepository memberRepository, DiscountPolicy discountPolicy) {
        this.memberRepository = memberRepository;
        this.discountPolicy = discountPolicy;
    }

    @Override
    public Order createOrder(Long memberId, String itemName, int itemPrice) {
        Member member = memberRepository.findById(memberId);
        int discountPrice = discountPolicy.discount(member, itemPrice);
        return new Order(memberId, itemName, itemPrice, discountPrice);
    }
}
```

### after

- `@RequiredArgsConstructor` : final이 명시된 필드를 파라미터로 갖는 생성자를 자동으로 만들어줌

```java
@Component
@RequiredArgsConstructor
public class OrderServiceImpl implements OrderService {
    private final MemberRepository memberRepository;
    private final DiscountPolicy discountPolicy;

    @Override
    public Order createOrder(Long memberId, String itemName, int itemPrice) {
        Member member = memberRepository.findById(memberId);
        int discountPrice = discountPolicy.discount(member, itemPrice);
        return new Order(memberId, itemName, itemPrice, discountPrice);
    }
}
```

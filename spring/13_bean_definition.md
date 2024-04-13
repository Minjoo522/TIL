# BeanDefinition

- 스프링 빈 설정 메타 정보
- 다양한 설정 형식을 지원하기 위한 추상화
  - XMl을 읽어서 BeanDefinition을 만듦
  - 자바 코드를 읽어서 BeanDefinition을 만듦
- `@Bean`, `<bean>` 당 각각 하나씩 메타 정보가 생성된다.
- BeanDefinition을 직접 생성해서 스프링 컨테이너에 등록할 수도 있지만 사용할 일은 거의 없다.

---

- `AnnotationConfigApplicationContext`는 `AnnotatedBeanDefinitionReader`를 사용해서 `AppConfig.class`를 읽고 `BeanDefinition`을 생성
- `GenenricXmlApplicationContext`는 `XmlBeanDefinitionReader`를 사용해서 `appConfig.xml` 설정 정보를 읽고 `BeanDefinition`을 생성

### 자바 코드 ver

```bash
# scope : 할당 안되어 있으면 싱글톤
# lazyInit : 실제 사용하는 시점에 스프링빈 초기화
# initMethodName : 빈을 생성하고, 의존 관계를 적용한 뒤에 호출되는 초기화 메서드 명
# destroyMethodName : 빈의 생명주기가 끝나서 제거하기 직전에 호출되는 메서드 명
# constructor argumets, properties : 이존관계 주입에서 사용 (자바 설정처럼 팩토리 역할의 빈을 사용하면 없음)

beanDefinitionName = appConfig beanDefinition = Generic bean: class [hello.core.AppConfig$$SpringCGLIB$$0]; scope=singleton; abstract=false; lazyInit=null; autowireMode=0; dependencyCheck=0; autowireCandidate=true; primary=false; factoryBeanName=null; factoryMethodName=null; initMethodNames=null; destroyMethodNames=null
beanDefinitionName = memberService beanDefinition = Root bean: class [null]; scope=; abstract=false; lazyInit=null; autowireMode=3; dependencyCheck=0; autowireCandidate=true; primary=false; factoryBeanName=appConfig; factoryMethodName=memberService; initMethodNames=null; destroyMethodNames=[(inferred)]; defined in hello.core.AppConfig
beanDefinitionName = memberRepository beanDefinition = Root bean: class [null]; scope=; abstract=false; lazyInit=null; autowireMode=3; dependencyCheck=0; autowireCandidate=true; primary=false; factoryBeanName=appConfig; factoryMethodName=memberRepository; initMethodNames=null; destroyMethodNames=[(inferred)]; defined in hello.core.AppConfig
beanDefinitionName = orderService beanDefinition = Root bean: class [null]; scope=; abstract=false; lazyInit=null; autowireMode=3; dependencyCheck=0; autowireCandidate=true; primary=false; factoryBeanName=appConfig; factoryMethodName=orderService; initMethodNames=null; destroyMethodNames=[(inferred)]; defined in hello.core.AppConfig
beanDefinitionName = discountPolicy beanDefinition = Root bean: class [null]; scope=; abstract=false; lazyInit=null; autowireMode=3; dependencyCheck=0; autowireCandidate=true; primary=false; factoryBeanName=appConfig; factoryMethodName=discountPolicy; initMethodNames=null; destroyMethodNames=[(inferred)]; defined in hello.core.AppConfig
```

### xml ver

- factoryBeanName, factoryMethodName 등이 명시되지 않음
  - beanDefinition에 명시

```bash
beanDefinitionName = memberService beanDefinition = Generic bean: class [hello.core.member.MemberServiceImpl]; scope=; abstract=false; lazyInit=false; autowireMode=0; dependencyCheck=0; autowireCandidate=true; primary=false; factoryBeanName=null; factoryMethodName=null; initMethodNames=null; destroyMethodNames=null; defined in class path resource [appConfig.xml]
beanDefinitionName = memberRepository beanDefinition = Generic bean: class [hello.core.member.MemoryMemberRepository]; scope=; abstract=false; lazyInit=false; autowireMode=0; dependencyCheck=0; autowireCandidate=true; primary=false; factoryBeanName=null; factoryMethodName=null; initMethodNames=null; destroyMethodNames=null; defined in class path resource [appConfig.xml]
beanDefinitionName = orderService beanDefinition = Generic bean: class [hello.core.order.OrderServiceImpl]; scope=; abstract=false; lazyInit=false; autowireMode=0; dependencyCheck=0; autowireCandidate=true; primary=false; factoryBeanName=null; factoryMethodName=null; initMethodNames=null; destroyMethodNames=null; defined in class path resource [appConfig.xml]
beanDefinitionName = discountPolicy beanDefinition = Generic bean: class [hello.core.discount.RateDiscountPolicy]; scope=; abstract=false; lazyInit=false; autowireMode=0; dependencyCheck=0; autowireCandidate=true; primary=false; factoryBeanName=null; factoryMethodName=null; initMethodNames=null; destroyMethodNames=null; defined in class path resource [appConfig.xml]
```

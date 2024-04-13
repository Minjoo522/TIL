# 싱글톤 컨테이너

## 웹 애플리케이션 싱글톤

- 기업용 온라인 서비스 기술 지원을 위해 탄생
- 웹 애플리케이션은 보통 여러 고객이 동시에 요청
- 동시에 요청을하면 객체를 계속 만들어야 함
  - ➡️ 메모리 낭비가 심하다
  - ➡️ 객체가 딱 한 개만 생성되고 공유하도록 설계하면 됨
  - ➡️ 싱글톤 패턴

## 싱글톤 패턴

- 클래스의 인스턴스가 딱 1개만 생성되는 것을 보장하는 디자인 패턴

```java
public class SingletonService {
    private static final SingletonService instance = new SingletonService();

    // 생성자 private로 설정해야 함!
    private SingletonService() {}

    public static SingletonService getInstance() {
        return instance;
    }
}
```

### 문제점

- 구현 코드 자체가 많이 들어간다.
- 클라이언트가 구체 클래스에 의존 ➡️ DIP 위반
  - OCP를 위반할 가능성이 높아진다.
- 테스트하기 어렵다.
- 내부 속성을 변경하거나 초기화하기 어렵다
- private 생성자 사용 ➡️ 자식 클래스 만들기 어렵다
- 유연성이 떨어진다

## 스프링 컨테이너

- 싱글톤 패턴의 문제점을 해결하면서, 객체 인스턴스를 싱글톤으로 관리한다.
- 컨테이너는 객체를 하나만 생성해서 관리한다.
- 싱글톤 레지스트리 : 싱글톤 객체를 생성하고 관리하는 기능
- 싱글톤 패턴을 위한 지저분한 코드가 들어가지 않아도 된다.
- DIP, OCP, 테스트, private 생성자로부터 자유롭게 싱글톤을 사용할 수 있다.

## 🚨 싱글톤 방식 주의점

> 싱글톤 객체는 상태를 유지(stateful)하게 설계하면 안된다.

- `무상태(stateless)`로 설계해야 한다
  - 특정 클라이언트에 의존적인 필드가 있으면 안된다.
  - 특정 클라이언트가 값을 변경할 수 있는 필드가 있으면 안된다.
  - 가급적 읽기만 가능해야 한다.
  - 필드 대신에 자바에서 공유되지 않는 지역변수, 파라미터, ThreadLocal 등을 사용해야 한다.

## `@Configuration`과 싱글톤

- 여러번 호출해도 @Configuration이 붙은 클래스 메소드는 한 번만 호출된다.

### 바이트코드 조작

- 스프링은 싱글톤을 보장하기 위해 바이트코드 조작 라이브러리 사용

```java
ApplicationContext ac = new AnnotationConfigApplicationContext(AppConfig.class);
AppConfig bean = ac.getBean(AppConfig.class);

System.out.println("bean = " + bean.getClass());
// bean = class hello.core.AppConfig$$SpringCGLIB$$0
```

- SpringCGLIB : 내가 만든 클래스가 아니라 CGLIB(바이트코드 조작 라이브러리)를 사용해서 AppConfig를 상속받은 임의의 다른 클래스를 만들고 그 클래스를 스프링 빈으로 등록한 것이다.
  - 이 때 만들어진 클래스가 싱글톤이 보장되도록 한다.
- @Bean이 붙은 메서드마다 이미 스프링 빈이 존재하면 존재하는 빈을 반환하고, 없으면 생성해서 스프링 빈으로 등록하고 반환하는 코드가 동적으로 만들어진다.
- @Bean만 사용해도 스프링 빈으로 등록되지만, 싱글톤을 보장하지 않는다.
